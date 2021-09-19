// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import WordCounter from "./WordCounter";
import wordCounter from "./WordCounter";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

let wordCountStatusBarItem: vscode.StatusBarItem;
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "markdown-word-count" is now active!'
  );

  const updater = new WordCountUIUpdater();
  context.subscriptions.push(updater);
  updater.update();
}

class WordCountUIUpdater {
  private counts = [
    "words" as const,
    "lines" as const,
    "characters" as const,
    "charactersWithSpaces" as const,
  ];
  private wordCounter = new WordCounter();
  private statusBarShownCounts: typeof this.counts[number][] = [];
  private statusBarItem;
  private disposable: vscode.Disposable[] = [];

  constructor() {
    this.setConfiguration();
    this.statusBarItem = vscode.window.createStatusBarItem(
      vscode.StatusBarAlignment.Left
    );

    vscode.window.onDidChangeTextEditorSelection(
      this.update,
      this,
      this.disposable
    );
    vscode.window.onDidChangeActiveTextEditor(
      this.update,
      this,
      this.disposable
    );
    vscode.workspace.onDidChangeConfiguration(
      this.onConfigurationChange,
      this,
      this.disposable
    );
  }
  onConfigurationChange(e: vscode.ConfigurationChangeEvent) {
    if (e.affectsConfiguration("markdown-word-count.statusBarCounts")) {
      this.setConfiguration();
      this.update();
    }
  }
  setConfiguration() {
    const configuration = vscode.workspace.getConfiguration(
      "markdown-word-count"
    );
    const shownItemsConfig =
      configuration.get<{ [_: string]: boolean }>("statusBarCounts");
    this.statusBarShownCounts = shownItemsConfig
      ? this.counts.filter((count) => shownItemsConfig[count])
      : ["words"];
  }
  update() {
    const editor = vscode.window.activeTextEditor;
    if (!editor || editor.document.languageId !== "markdown") {
      this.statusBarItem.hide();
      return;
    }
    try {
      const docContent = editor.document.getText();
      const markdownContent = docContent.replace(/(^\s\s*)|(\s\s*$)|/, "");

      const countText = {
        words: `${this.wordCounter.countWords(markdownContent)} Words`,
        lines: `${this.wordCounter.countLines(markdownContent)} Lines`,
        characters: `${this.wordCounter.countCharacters(
          markdownContent
        )} Characters`,
        charactersWithSpaces: `${this.wordCounter.countCharacters(
          markdownContent,
          true
        )} Characters with spaces`,
      };

      this.statusBarItem.text = `$(markdown) ${this.statusBarShownCounts.map(
        (id) => countText[id] ?? ""
      ).join(" | ")}`;
      this.statusBarItem.tooltip = Object.values(countText).join("\n");
      this.statusBarItem.show();
    } catch (e) {
      console.log(e);
    }
  }
  dispose() {
    this.statusBarItem.dispose();
    vscode.Disposable.from(...this.disposable).dispose();
  }
}
