import emojiRegexp from "emoji-regex/es2015/RGI_Emoji";
import type { IWordCountResult } from "./extension";

export default class WordCounter {
  static cjkPatternString =
    "\\p{Script=Han}|\\p{Script=Kana}|\\p{Script=Hira}|\\p{Script=Hangul}";
  static wordPatternString = "\\d+\\.\\d+|\\w+";
  static emojiPatternString = emojiRegexp().source;
  wordPattern = new RegExp(
    `${WordCounter.emojiPatternString}|${WordCounter.cjkPatternString}|${WordCounter.wordPatternString}`,
    "gu"
  );
  characterPattern = new RegExp(
    `${WordCounter.emojiPatternString}|${WordCounter.cjkPatternString}|[^\\s\\n\\r\\t\\v\\f\\b]`,
    "gu"
  );
  characterPatternWithSpace = new RegExp(
    `${WordCounter.emojiPatternString}|${WordCounter.cjkPatternString}|[^\\n\\r\\t\\v\\f\\b]`,
    "gu"
  );

  countWords(text: string) {
    return text.match(this.wordPattern)?.length ?? 0;
  }
  countLines(text: string) {
    return text.split("\n").length;
  }
  countCharacters(text: string, withSpace: boolean = false) {
    return (
      text.match(
        withSpace ? this.characterPatternWithSpace : this.characterPattern
      )?.length ?? 0
    );
  }
  count(text: string): IWordCountResult {
    return {
      words: this.countWords(text),
      lines: this.countWords(text),
      characters: this.countCharacters(text),
      charactersWithSpaces: this.countCharacters(text, true)
    };
  }
}


