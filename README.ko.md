# 마크다운 워드 카운트

[English](./README.md) ∙ [简体中文](./README.zh-CN.md) ∙ [日本語](./README.ja.md)

이것은 마크다운 및 일반 텍스트 파일에서 단어를 세는 간단하면서도 강력한 확장 프로그램입니다. 단어 수를 하단 상태 표시줄에 표시할 수 있습니다.

단어를 구분하는 데 공백을 사용하는 언어를 지원하는 것뿐만 아니라, 중국어, 한국어, 일본어(CJK 문자) 및 이모지와 같은 공백을 사용하지 않는 언어도 지원합니다.

## 특징

- 다국어 지원
- 단어, 라인, 문자 및 공백을 포함한 문자 수 세기
- 선택된 텍스트 카운트

### 다국어 지원

현재 다음을 인식합니다:

- 단어를 구분하는 데 공백을 사용하는 언어 (예: 영어)
- 중국어, 일본어, 한국어 등 CJK 문자
- 이모지

![CJK 및 이모지 지원](./screenshots/CJK.png)

### 다중 카운트

현재 단어, 라인, 문자 및 공백을 포함한 문자의 카운트를 지원합니다.

기본적으로 단어 수는 상태 표시줄에 표시됩니다. 모든 카운트는 상태 표시줄 항목 위로 마우스를 가져가면 나타나는 도구 설명에 표시됩니다.

## Release Notes

0.0.1  

- 🆕 Support Recognition for CJK, Emoji.

0.0.2

- 💬 Update icon and description.

0.0.3

- 🔧 Fix runnable problem.

0.0.4

- 🆕 Feature: selection word count.

0.0.5

- 🏗️ Refactor: Use `@homegrown/word-counter` as recognition engine.

0.0.6

- 🔧 Fix: Update `@homegrown/word-counter`

0.0.7

- 🆕 Feature: support VSCode for Web
  
![기본 효과](./screenshots/tooltip.png)

[markdown-word-count.statusBarCounts](#settings)를 통해 상태 표시줄 콘텐츠를 사용자 정의할 수 있습니다.

### 선택된 텍스트 카운트

이 확장 프로그램은 선택된 텍스트를 계산하는 기능을 지원합니다.

![선택 카운트](./screenshots/selection.png)

[markdown-word-count.selectionCount](#settings)를 통해 비활성화할 수 있습니다.

## 설정

다음 설정이 있습니다:

- `markdown-word-count.statusBarCounts`: 상태 표시줄에 표시되는 콘텐츠를 사용자 정의합니다.
- `markdown-word-count.selectionCount`: 선택 카운트 기능을 활성화/비활성화합니다.

```json
  // 기본 settings.json
  "markdown-word-count.statusBarCounts": {
      "words": true,
      "lines": false,
      "characters": false,
      "charactersWithSpaces": false
  },
  "markdown-word-count.selectionCount": false
  ```

## 피드백 및 지원

사용 중 문제, 버그 발견, 기능 요청, 언어 지원 등 피드백이 있으면 GitHub 리포지토리에 이슈를 오픈해 주세요.
