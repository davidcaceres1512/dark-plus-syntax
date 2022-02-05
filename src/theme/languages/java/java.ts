import { TextMateRuleData, SemanticColor } from "@lib"

export const java: TextMateRuleData[] = [
    {
        scopes: [
            "storage.modifier.import.java",
            "variable.language.wildcard.java",
            "storage.modifier.package.java",
        ],
        foreground: SemanticColor.Foreground,
    },
    {
        scopes: [
            "variable.language.wildcard.java",
            "punctuation.bracket.angle.java",
            "variable.language.java",
        ],
        foreground: SemanticColor.Keywords,
    },
    {
        scopes: [
            "storage.type.annotation.java",
            "punctuation.definition.annotation.java",
        ],
        foreground: SemanticColor.Functions,
    },
    {
        scopes: [
            // "storage.modifier.import.java punctuation.separator.java",
            "meta.import.java storage.modifier.import.java",
            "storage.type.annotation.java",
            "storage.type.generic.java",
            "storage.type.java",
            "storage.type.object.array.java",
            "storage.type.primitive.array.java",
            "storage.type.primitive.java",
            "storage.type.token.java",
        ],
        foreground: SemanticColor.Types,
    },
    {
        scopes: [
            "punctuation.separator.period.java",
            "punctuation.separator.java",
            "meta.import.java storage.modifier.import.java punctuation.separator.java",
        ],
        foreground: SemanticColor.FlowControl,
    },
    {
        scopes: [
            "variable.language.java",
        ],
        fontStyle: "italic",
    },
]
