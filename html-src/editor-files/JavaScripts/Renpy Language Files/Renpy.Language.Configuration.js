//
monaco.languages.setLanguageConfiguration('renpy', {

    autoClosingPairs: [
		{ open: "{", close: "}" },
		{ open: "[", close: "]" },
		{ open: "(", close: ")" },
		{ open: "\"", close: "\"", notIn: ["string"] },
		{ open: "'", close: "'", notIn: ["string"] },
		{ open: "`", close: "`", notIn: ["string"] },
		{ open: "\"\"\"", close: "\"\"\"", notIn: ["string"] }
	],

    brackets: [
        ["(", ")"],
        ["[", "]"],
        ["{", "}"]
    ],

    comments: {
        lineComment: "#"
    },

    folding: {
        markers: {
          start: "^#region",
          end: "^#endregion"
        },
        offSide: true
    },

	surroundingPairs: [
		["{", "}"],
		["[", "]"],
		["(", ")"],
		["\"", "\""],
		["'", "'"],
		["`", "`"],
		["\"\"\"", "\"\"\""]
	],
});
//
monaco.languages.setLanguageConfiguration('renpy-ns', {

    autoClosingPairs: [
		{ open: "{", close: "}" },
		{ open: "[", close: "]" },
		{ open: "(", close: ")" },
		{ open: "\"", close: "\"", notIn: ["string"] },
		{ open: "'", close: "'", notIn: ["string"] },
		{ open: "`", close: "`", notIn: ["string"] },
		{ open: "\"\"\"", close: "\"\"\"", notIn: ["string"] }
	],

    brackets: [
        ["(", ")"],
        ["[", "]"],
        ["{", "}"]
    ],

    comments: {
        lineComment: "#"
    },

    folding: {
        markers: {
          start: "^#region",
          end: "^#endregion"
        },
        offSide: true
    },

	surroundingPairs: [
		["{", "}"],
		["[", "]"],
		["(", ")"],
		["\"", "\""],
		["'", "'"],
		["`", "`"],
		["\"\"\"", "\"\"\""]
	],
});
//
monaco.languages.setLanguageConfiguration('renpy-nc', {

    autoClosingPairs: [
		{ open: "{", close: "}" },
		{ open: "[", close: "]" },
		{ open: "(", close: ")" },
		{ open: "\"", close: "\"", notIn: ["string"] },
		{ open: "'", close: "'", notIn: ["string"] },
		{ open: "`", close: "`", notIn: ["string"] },
		{ open: "\"\"\"", close: "\"\"\"", notIn: ["string"] }
	],

    brackets: [
        ["(", ")"],
        ["[", "]"],
        ["{", "}"]
    ],

    comments: {
        lineComment: "#"
    },

    folding: {
        markers: {
          start: "^#region",
          end: "^#endregion"
        },
        offSide: true
    },

	surroundingPairs: [
		["{", "}"],
		["[", "]"],
		["(", ")"],
		["\"", "\""],
		["'", "'"],
		["`", "`"],
		["\"\"\"", "\"\"\""]
	],
});