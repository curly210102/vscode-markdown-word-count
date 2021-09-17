// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import emojiRegexp from "emoji-regex/es2015/RGI_Emoji";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

let wordCountStatusBarItem: vscode.StatusBarItem;
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "markdown-word-count" is now active!'
  );

  if (!wordCountStatusBarItem) {
    wordCountStatusBarItem = vscode.window.createStatusBarItem(
      vscode.StatusBarAlignment.Left
    );
  }
  wordCountStatusBarItem.command = "markdown-word-count.helloWorld";
  context.subscriptions.push(wordCountStatusBarItem);

  context.subscriptions.push(
    vscode.window.onDidChangeTextEditorSelection(updateStatusBarItem)
  );
  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor(updateStatusBarItem)
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand(
    "markdown-word-count.helloWorld",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage(
        "Hello World from Markdown Word Count!"
      );
    }
  );

  context.subscriptions.push(disposable);
}

function updateStatusBarItem(): void {
  const editor = vscode.window.activeTextEditor;
  if (!editor || editor.document.languageId !== "markdown") {
    wordCountStatusBarItem.hide();
    return;
  }
  try {
    const docContent = editor.document.getText();
    const wordCount = wordCounter(docContent);
    const lines = docContent.split("\n").length;
    const characters = docContent.length;

    wordCountStatusBarItem.text = `$(markdown) ${wordCount} Words | ${lines} Lines | ${characters} Characters`;
    wordCountStatusBarItem.show();
  } catch (e) {
    console.log(e);
  }
}

const cjkPatternString =
  "\\p{Script=Han}|\\p{Script=Kana}|\\p{Script=Hira}|\\p{Script=Hangul}";
const wordPatternString =
  "[\\p{Alphabetic}\\p{Mark}\\p{Decimal_Number}\\p{Connector_Punctuation}\\p{Join_Control}]+";
const regex = emojiRegexp();
const emojiPatternString = regex.source;
const wordPattern = new RegExp(
  `${emojiPatternString}|${cjkPatternString}|${wordPatternString}`,
  "gu"
);
function wordCounter(text: string): number {
  const matched = text.match(wordPattern);
  if (!matched) {
    return 0;
  }
  return matched.length;
}
