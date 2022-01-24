export const cs: VsCodeTextMate.TextMateRules = [
    {
        "scope": [
            "meta.comment.razor comment.block.razor",
            "meta.comment.razor keyword.control.razor.comment.star",
            "meta.comment.razor keyword.control.cshtml.transition",
        ],
        "settings": {"foreground": "#608B4E"},
    },
    {
        "scope": [
            "meta.preprocessor.cs",
            "meta.preprocessor.cs string.unquoted.preprocessor.message.cs",
            "meta.preprocessor.cs punctuation.separator.hash.cs",
            "meta.preprocessor.cs keyword.preprocessor.region.cs",
            "meta.preprocessor.cs keyword.preprocessor.endregion.cs",
        ],
        "settings": {
            "foreground": "#608B4E",
            "fontStyle": "italic",
        },
    },
    {
        "scope": [
            "entity.name.tag.localname.cs",
            "punctuation.definition.tag.cs",
            "punctuation.terminator.statement.cs",
            "source.cs comment.block.documentation.cs punctuation.definition.comment.cs",
            "source.cs comment.block.documentation.cs meta.tag.cs punctuation.separator.equals.cs",
        ],
        "settings": { "foreground": "#505050" },
    },
    {
        "scope": [
            "string.bracers.round.cshtml",
            "punctuation.curlybrace.open.cs",
            "punctuation.curlybrace.close.cs",
            "punctuation.squarebracket.open.cs",
            "punctuation.squarebracket.close.cs",
            "string.quoted.double.cs meta.interpolation.cs punctuation.parenthesis.open.cs",
            "string.quoted.double.cs meta.interpolation.cs punctuation.parenthesis.close.cs",
        ],
        "settings": { "foreground": "#d4d4d4" },
    },
    {
        "scope": [
            "entity.name.variable.property.cs",
            "entity.name.variable.parameter.cs",
            "entity.name.variable.field.cs",
            "entity.name.variable.local.cs",
            "meta.interpolation.cs variable.other.object.property.cs",
            "entity.name.variable.tuple-element.cs",
            "entity.name.variable.enum-member.cs",
        ],
        "settings": { "foreground": "#9cdcfe" },
    },
    // {
    //     "scope": [
    //         "variable.other.object.property.cs",
    //     ],
    //     "settings": {
    //         "foreground": "#9cdcfe",
    //         "fontStyle": "italic",
    //     },
    // },
    {
        "scope": [
            "keyword.type.cs",
            "storage.type.cs",
            "storage.type.generic.cs",
            "storage.type.modifier.cs",
            "storage.type.variable.cs",
            // "variable.other.object.cs",
        ],
        "settings": {
            "foreground": "#4ec9b0" },
    },
    {
        "scope": [
            // "storage.modifier.cs",
            "keyword.other.this.cs",
        ],
        "settings": {
            "foreground": "#569cd6",
            "fontStyle": "italic",
        },
    },
    {
        "scope": [
            "keyword.other.new.cs",
            "keyword.other.var.cs",
            "keyword.other.as.cs",
            "keyword.other.is.cs",  // control? I don't think so.
            "keyword.other.base.cs",
            "keyword.other.where.cs",
            "keyword.other.typeof.cs",
            "keyword.other.default.cs",
            "keyword.operator.arrow.cs",
            "keyword.other.namespace.cs",
            "punctuation.separator.colon.cs",  // class extension
            "punctuation.separator.question-mark.cs", // nullable
            "punctuation.definition.typeparameters.begin.cs",
            "punctuation.definition.typeparameters.end.cs",
            "punctuation.definition.interpolation.begin.cs",
            "punctuation.definition.interpolation.end.cs",
        ],
        "settings": { "foreground": "#569cd6" },
    },
    {
        "scope": [
            "keyword.other.get.cs",
            "keyword.other.set.cs",
        ],
        "settings": { "foreground": "#dcdcaa" },
    },
    {
        "scope": [
            // "keyword.other.using.cs",
            "meta.preprocessor.cs punctuation.separator.hash.cs",
            "punctuation.accessor.cs",
            "keyword.other.await.cs",
            "keyword.operator.assignment.cs",
            "keyword.operator.comparison.cs",
            // "keyword.operator.logical.cs",
            // "keyword.operator.null-conditional.cs",
        ],
        "settings": { "foreground": "#c586c0" },
    },
    // {
    //     "scope": [
    //         "keyword.other.base.cs",
    //     ],
    //     "settings": {
    //         "fontStyle": "italic",
    //     },
    // },
]
