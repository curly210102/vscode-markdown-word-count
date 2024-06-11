# Markdown Word Count

[简体中文](./README.zh-CN.md) ∙ [日本語](./README.ja.md) ∙ [한국어](./README.ko.md)

This is a simple extension for counting words in Markdown and plain text files. It can display the word count in the bottom status bar.

In addition to supporting languages that use spaces to separate words, it also supports languages that do not use spaces, such as CJK characters (Chinese, Korean, Japanese) and Emoji.

## Features

- Multi-language Support
- Count words, lines, characters, and characters with spaces
- Selection text count

### Multi-language Support

Currently supports recognition of:

- Languages that use spaces to separate words (e.g., English)
- CJK characters, such as Chinese, Japanese, Korean
- Emoji

![Support CJK and Emoji](./screenshots/CJK.png)

### Multiple Counts

Currently supports counting of words, lines, characters, and characters with spaces.

By default, word count is shown in the status bar. All counts are shown in the tooltip that appears when you hover over the status bar item.

![Default Effect](./screenshots/tooltip.png)

You can customize the status bar content via config [markdown-word-count.statusBarCounts](#settings).

### Selection text count

This extension supports counting selected text.

![Selection Count](./screenshots/selection.png)

You can disable it via config [markdown-word-count.selectionCount](#settings).

## Settings

the following settings:

- `markdown-word-count.statusBarCounts`: customize the content shown in status bar.
- `markdown-word-count.selectionCount`: enable/disable selection count feature.

```json
  // default settings.json
  "markdown-word-count.statusBarCounts": {
      "words": true,
      "lines": false,
      "characters": false,
      "charactersWithSpaces": false
  },
  "markdown-word-count.selectionCount": false
  ```

## Feedback and Support

Welcome open issue to the GitHub repo, if there are any feedback (problems with usage, find a bug, feature request, language support and so on).
