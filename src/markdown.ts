export default function (content: string) {
  const lines = content.split(/\r?\n/);
  const [, frontMatterEndLine] = removeFrontMatter(lines);

  return {
    content: lines.join("\n"),
    frontMatterEndLine,
  };
}

// Inspired by: https://github.com/parksb/markdown-it-front-matter, the plugin used in VSCode https://github.com/microsoft/vscode/blob/c0bbf0447e00efc6ca275d3e6a258d8fa90c0e5e/extensions/markdown-language-features/src/markdownEngine.ts#L143
function removeFrontMatter(lines: string[]) {
  const startRegex = /^(-{3,})\s*/;
  const startMatch = lines[0].match(startRegex);
  if (!startMatch) {
    return [-1, -1];
  }
  const markerLength = startMatch[1].length;

  const endRegex = new RegExp(
    `^(\-{${markerLength},}|\\.{${markerLength},})\\s*$`
  );
  for (let i = 1, len = lines.length; i < len; i++) {
    const line = lines[i];
    if (endRegex.test(line)) {
      lines.splice(0, i + 1);
      return [0, i];
    }
  }

  return [-1, -1];
}
