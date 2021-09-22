# Markdown Word Count README

It's a powerful word count for Markdown, which supports recognize Latin, CJK, Emoji, etc.

Inspired by popular document editor, the extension provides count of words, lines, characters, characters with spaces.

Also, Support count for full-text and selection.

## Features

### Recognition Supported

- CJK
- Emoji

![Support CJK and Emoji](./screenshots/CJK.png)

### Counts Supported

The extension currently support count of Words, Lines, Characters, Characters with spaces.

By default, Words Count shown in the status bar, all counts shown in the tooltip opened by hover the item of status bar.

![Default Effect](./screenshots/tooltip.png)

You can customize the status bar content by config [markdown-word-count.statusBarTemplate](#extension-settings).

### Selection Count

This extension support to count selection text.

![Selection Count](./screenshots/selection.png)

By default, this feature is disabled, you can enable it by config [markdown-word-count.selectionCount](#extension-settings).

## Extension Settings

This extension contributes the following settings:

- `markdown-word-count.statusBarCounts`: customize the content shown in status bar.

  ```json
  // settings.json
  "markdown-word-count.statusBarCounts": {
      "words": true,
      "lines": false,
      "characters": false,
      "charactersWithSpaces": false
  }
  ```

- `markdown-word-count.selectionCount`: enable/disable selection count feature.

  ```json
  "markdown-word-count.selectionCount": false
  ```

## Feedback and Support

Welcome open issue to the GitHub repo, if there are any feedback (problems with usage, find a bug, feature request, language support and so on).

## Release Notes

### 0.0.1

Milestone: publish initial version.

Support Recognition for CJK, Emoji.

### 0.0.2

Update icon and description.

### 0.0.3

Fix runnable problem.

### 0.0.4

Add Feature: selection word count.
