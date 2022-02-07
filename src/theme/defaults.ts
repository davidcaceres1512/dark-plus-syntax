import { TextMateRuleData, SemanticColor } from "@lib"

export const defaults: TextMateRuleData[] = [
    {
        scopes: [
            "comment",
            "comment.line.double-slash.js",
            "comment.block.html",
            "comment.block.handlebars",
        ],
        foreground: SemanticColor.Comments,
    },
    {
        "name": "Special Comments",
        scopes: [
            "comment.block.js",
            "comment.line.shebang.js",
            "comment.line.number-sign.shebang.shell",
            "comment.block.documentation.js",
            "comment.block.go",
            "comment.block.documentation.ts",
            "comment.line.number-sign.ini",
            "comment.line.number-sign.yaml",
        ],
        foreground: SemanticColor.DocComments,
    },
    {
        "name": "Curly Braces, Semicolons, etc.",
        scopes: [
            "meta.tag.sgml.html",
            "meta.tag.sgml.doctype.html",
            "meta.tag.sgml.html punctuation.definition.tag.html",
            "meta.structure.dictionary.json",
            "punctuation.terminator",
            "invalid.illegal.bad-comments-or-CDATA.html",
        ],
        foreground: SemanticColor.Tags,
    },
    {
        scopes: [
            "punctuation.terminator",
        ],
        foreground: SemanticColor.Noise,
    },
    {
        scopes: [
            "meta.embedded.block.sql",
        ],
        foreground: SemanticColor.Foreground,
    },
    {
        scopes: [
            "constant.numeric",
            "keyword.other.unit",
            "meta.preprocessor.numeric",
        ],
        foreground: SemanticColor.Numbers,
    },
    {
        scopes: [
            "invalid",
        ],
        foreground: SemanticColor.Errors,
    },
    {
        scopes: [
            "meta.selector",
            "constant.character",
            "constant.other.symbol",
            "constant.character.escape",
        ],
        foreground: SemanticColor.Chars,
    },
    {
        scopes:     ["meta.diff.header"],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: [
            "string",
            "string.tag",
            "string.value",
            "meta.preprocessor.string",
        ],
        foreground: SemanticColor.Strings,
    },
    {
        scopes: [
            "storage",
            "storage.type",
            "storage.modifier",
            "constant.other.placeholder",
            "keyword",
            "keyword.control",
            "meta.preprocessor",
            "keyword.control.new",
            "constant.language",
            "keyword.operator.new",
            "keyword.operator.expression",
            "keyword.operator.cast",
            "keyword.operator.sizeof",
        ],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: [
            "entity.name.function",
            "support.function",
        ],
        foreground: SemanticColor.Functions,
    },
    {
        "name": "Type declaration and references",
        scopes: [
            "meta.return-type",
            "support.class",
            "support.type",
            "entity.name.type",
            "entity.name.class",
        ],
        foreground: SemanticColor.Types,
    },
    {
        "name": "Types declaration and references, TS grammar specific",
        scopes: [
            "meta.type.cast.expr",
            "meta.type.new.expr",
            "support.constant.math",
            "support.constant.dom",
            "support.constant.json",
            "entity.other.inherited-class",
        ],
        foreground: SemanticColor.Types,
    },
    {
        scopes: [
            "keyword.control",
            "keyword.operator",
        ],
        foreground: SemanticColor.FlowControl,
    },
    {
        scopes: [
            "variable",
            "support.variable",
            "meta.definition.variable.name",
        ],
        foreground: SemanticColor.Variables,
    },

    {
        scopes: [
            "code-runner.output code-runner.running string",
            "code-runner.running code-runner.done string",
        ],
        foreground: SemanticColor.Strings,
        fontStyle:  "italic",
    },
    {
        scopes: [
            "token.info-token",
        ],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: [
            "token.warn-token",
        ],
        foreground: SemanticColor.Chars,
    },
    {
        scopes: [
            "token.error-token",
        ],
        foreground: SemanticColor.Errors,
    },
    {
        scopes: [
            "token.debug-token",
        ],
        foreground: SemanticColor.FlowControl,
    },
]

