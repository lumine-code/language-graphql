# language-graphql

GraphQL language support.

## Features

- **Grammars**: provides Tree-sitter grammars, built from [tree-sitter-graphql](https://github.com/bkegley/tree-sitter-graphql).
- **Syntax highlighting**: operations, fragments, directives, variables and the non-null and spread operators.
- **Folding**: folds selection sets and type definitions.
- **Symbol navigation**: types, interfaces, enums, inputs and fragments.

## Installation

To install `language-graphql` search for _language-graphql_ in the Install pane of the Lumine settings or run `lumine --install lumine-code/language-graphql`.

## Services

- **hyperlink.injection** (`^1.0.0`): consumed to highlight URLs in these files as clickable links.
- **todo.injection** (`^1.0.0`): consumed to highlight `TODO`-style markers inside comments.

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub. Any feedback is welcome!
