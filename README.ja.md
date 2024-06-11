# Markdown ワードカウント

[English](./README.md) ∙ [简体中文](./README.zh-CN.md) ∙ [한국어](./README.ko.md)

これは、Markdown ファイルとプレーンテキストファイルの単語をカウントするためのシンプルでありながらパワフルな拡張機能です。ワードカウントは、下部のステータスバーに表示できます。

単語を区切るためにスペースを使用する言語をサポートするだけでなく、この拡張機能は、スペースを使用しない言語（中国語、韓国語、日本語などのCJK文字や絵文字など）もサポートしています。

## 特徴

- 多言語対応
- 単語、行、文字、スペースを含む文字のカウント
- 選択テキストのカウント

### 多言語対応

現在、次の言語を認識できます：

- 単語を区切るためにスペースを使用する言語（例：英語）
- 中国語、日本語、韓国語などのCJK文字
- 絵文字

![CJK と 絵文字をサポート](./screenshots/CJK.png)

### 複数のカウント

現在、単語、行、文字、スペースを含む文字のカウントがサポートされています。

デフォルトでは、ワードカウントはステータスバーに表示されます。ステータスバーアイテムの上にマウスを重ねると、すべてのカウントが表示されるツールチップに表示されます。

![デフォルトの効果](./screenshots/tooltip.png)

設定 [markdown-word-count.statusBarCounts](#settings) を介して、ステータスバーの内容をカスタマイズできます。

### 選択テキストのカウント

この拡張機能は選択したテキストをカウントする機能をサポートしています。

![選択カウント](./screenshots/selection.png)

設定 [markdown-word-count.selectionCount](#settings) を介して無効にすることができます。

## 設定

以下の設定があります：

- `markdown-word-count.statusBarCounts`：ステータスバーに表示される内容をカスタマイズします。
- `markdown-word-count.selectionCount`：選択カウント機能を有効/無効にします。

```json
  // デフォルト settings.json
  "markdown-word-count.statusBarCounts": {
      "words": true,
      "lines": false,
      "characters": false,
      "charactersWithSpaces": false
  },
  "markdown-word-count.selectionCount": false
  ```

## フィードバックとサポート

使用上の問題、バグの発見、機能のリクエスト、言語サポートなど、フィードバックがあれば、GitHub リポジトリに問題をオープンしてください。
