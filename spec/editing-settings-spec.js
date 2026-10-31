const path = require("node:path");

describe("graphql editing settings", () => {
  let editor;

  beforeEach(async () => {
    jasmine.useRealClock();
    const pack = await lumine.packages.activatePackage(path.resolve(__dirname, ".."));
    await pack.resourceLoadPromise;
    editor = await lumine.workspace.open();
    editor.setGrammar(lumine.grammars.grammarForScopeName("source.graphql"));
    editor.update({ autoIndent: false });
    await editor.whenGrammarSettled();
  });

  afterEach(() => editor?.destroy());

  async function setText(text) {
    editor.setText(text);
    expect(await editor.whenGrammarSettled()).toBe(true);
  }

  it("selects variable and directive names with their syntax prefixes", async () => {
    await setText("query Test($value: Int) { x }");
    editor.setCursorBufferPosition(
      editor.getBuffer().positionForCharacterIndex(editor.getText().indexOf("value") + 1),
    );
    editor.selectWordsContainingCursors();
    expect(editor.getSelectedText()).toBe("$value");
    await setText("query Test { x @include(if: true) }");
    editor.setCursorBufferPosition(
      editor.getBuffer().positionForCharacterIndex(editor.getText().indexOf("include") + 1),
    );
    editor.selectWordsContainingCursors();
    expect(editor.getSelectedText()).toBe("@include");
  });

  it("pairs supported syntax without inventing unsupported quotes or containers", async () => {
    await lumine.packages.activatePackage("bracket-matcher");
    for (const [typed, expected] of [
      ["(", "()"],
      ["[", "[]"],
      ["{", "{}"],
      ['"', '""'],
      ["'", "'"],
      ["`", "`"],
      ["“", "“"],
    ]) {
      await setText("");
      editor.setCursorBufferPosition([editor.getLastBufferRow(), Infinity]);
      await editor.insertText(typed);
      await editor.whenGrammarSettled();
      expect(editor.getText())
        .withContext(typed)
        .toBe("" + expected);
    }
  });

  it("keeps explicit user pair overrides authoritative", async () => {
    await lumine.packages.activatePackage("bracket-matcher");
    lumine.config.set("bracket-matcher.autocompleteCharacters", ["''"], {
      scopeSelector: ".source.graphql",
    });
    try {
      await setText("");
      await editor.insertText("'");
      await editor.whenGrammarSettled();
      expect(editor.getText()).toBe("''");
    } finally {
      lumine.config.unset("bracket-matcher.autocompleteCharacters", {
        scopeSelector: ".source.graphql",
      });
    }
  });
});
