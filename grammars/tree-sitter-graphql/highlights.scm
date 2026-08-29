; Types
;------

(scalar_type_definition
  (name) @support.type.graphql)

(object_type_definition
  (name) @support.type.graphql)

(interface_type_definition
  (name) @support.type.graphql)

(union_type_definition
  (name) @support.type.graphql)

(enum_type_definition
  (name) @support.type.graphql)

(input_object_type_definition
  (name) @support.type.graphql)

(directive_definition
  (name) @support.type.graphql)

(directive_definition
  "@" @support.type.graphql)

(scalar_type_extension
  (name) @support.type.graphql)

(object_type_extension
  (name) @support.type.graphql)

(interface_type_extension
  (name) @support.type.graphql)

(union_type_extension
  (name) @support.type.graphql)

(enum_type_extension
  (name) @support.type.graphql)

(input_object_type_extension
  (name) @support.type.graphql)

(named_type
  (name) @support.type.graphql)

(directive) @support.type.graphql

; Properties
;-----------

(field
  (name) @variable.other.member.graphql)

(field
  (alias
    (name) @variable.other.member.graphql))

(field_definition
  (name) @variable.other.member.graphql)

((name) @variable.other.member.graphql
  (#is? test.childOfType object_field))

(enum_value
  (name) @variable.other.member.graphql)

; Variable Definitions and Arguments
;-----------------------------------

(operation_definition
  (name) @variable.other.graphql)

(fragment_name
  (name) @variable.other.graphql)

((name) @variable.parameter.graphql
  (#is? test.childOfType input_value_definition))

(argument
  (name) @variable.parameter.graphql)

(variable_definition
  (variable) @variable.parameter.graphql)

(argument
  (value
    (variable) @variable.other.graphql))

; Constants
;----------

(string_value) @string.quoted.double.graphql

(int_value) @constant.numeric.graphql

(float_value) @constant.numeric.float.graphql

(boolean_value) @constant.language.boolean.graphql

; Literals
;---------

(description) @comment.line.graphql

(comment) @comment.line.graphql

(directive_location
  (executable_directive_location) @support.type.builtin.graphql)

(directive_location
  (type_system_directive_location) @support.type.builtin.graphql)

; Keywords
;----------

[
  "query"
  "mutation"
  "subscription"
  "fragment"
  "scalar"
  "type"
  "interface"
  "union"
  "enum"
  "input"
  "extend"
  "directive"
  "schema"
  "on"
  "repeatable"
  "implements"
] @keyword.control.graphql

; Punctuation
;------------

"(" @punctuation.definition.arguments.begin.bracket.round.graphql
")" @punctuation.definition.arguments.end.bracket.round.graphql
"[" @punctuation.definition.list.begin.bracket.square.graphql
"]" @punctuation.definition.list.end.bracket.square.graphql
"{" @punctuation.definition.block.begin.bracket.curly.graphql
"}" @punctuation.definition.block.end.bracket.curly.graphql

"=" @keyword.operator.graphql

"|" @punctuation.separator.union.graphql
"&" @punctuation.separator.intersection.graphql
":" @punctuation.separator.key-value.graphql

"..." @keyword.operator.spread.graphql
"!" @keyword.operator.non-null.graphql
