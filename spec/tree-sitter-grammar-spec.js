const fs = require("fs");
const path = require("path");

const highlightsPath = path.join(__dirname, "..", "grammars", "graphql-highlights.scm");

// Asserts the scopes the grammar actually produces, using the fixture beside
// this file. `runGrammarTests` reads `<- scope` and `^ scope` assertions out of
// the fixture's own comments, so the fixture is the readable spec.
//
// A fixture whose assertions never run still reports green, so break one
// expected scope and confirm this fails before trusting it.

describe("GraphQL Tree-sitter grammar", () => {
  beforeEach(async () => {
    await lumine.packages.activatePackage("language-graphql");
  });

  it("tokenizes the fixture", async () => {
    await runGrammarTests(path.join(__dirname, "fixtures", "sample.graphql"), /#/);
  });

  it("roots object-field and input-value name captures on leaf nodes", () => {
    const query = fs.readFileSync(highlightsPath, "utf8");

    expect(query).not.toMatch(
      /\((?:object_value|input_fields_definition|arguments_definition)\s*\n/,
    );
    expect(query).toContain("(#is? test.childOfType object_field)");
    expect(query).toContain("(#is? test.childOfType input_value_definition)");
  });
});
