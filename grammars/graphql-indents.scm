; Block strings may contain significant relative whitespace.
((string_value) @preserve
  (#is? indent.reindent true)
  (#is-not? indent.matchesCurrentRow startPosition)
  (#set! indent.force true))

; The delimiters carry the indent; every block in this language is braced.
["{" "[" "("] @indent

["}" "]" ")"] @dedent
