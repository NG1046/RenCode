
/*

Renpy Language Files (V1.0) - Snippets Only / No Completion

*/

// Register a new language
monaco.languages.register({ id: 'renpy-nc' });

// Register a tokens provider for the language
monaco.languages.setMonarchTokensProvider('renpy-nc', {
	keywords: [
		/*

		'and',
		'as',
		'assert',
		'break',
		'class',
		'continue',
		'def',
		'del',
		'elif',
		'else',
		'except',
		'exec',
		'finally',
		'for',
		'from',
		'global',
		'if',
		'import',
		'in',
		'is',
		'lambda',
		'None',
		'not',
		'or',
		'pass',
		'print',
		'raise',
		'return',
		'self',
		'try',
		'while',
		'with',
		'yield',

		'int',
		'float',
		'long',
		'complex',
		'hex',

		'abs',
		'all',
		'any',
		'apply',
		'basestring',
		'bin',
		'bool',
		'buffer',
		'bytearray',
		'callable',
		'chr',
		'classmethod',
		'cmp',
		'coerce',
		'compile',
		'complex',
		'delattr',
		'dict',
		'dir',
		'divmod',
		'enumerate',
		'eval',
		'execfile',
		'file',
		'filter',
		'format',
		'frozenset',
		'getattr',
		'globals',
		'hasattr',
		'hash',
		'help',
		'id',
		'input',
		'intern',
		'isinstance',
		'issubclass',
		'iter',
		'len',
		'locals',
		'list',
		'map',
		'max',
		'memoryview',
		'min',
		'next',
		'object',
		'oct',
		'open',
		'ord',
		'pow',
		'print',
		'property',
		'reversed',
		'range',
		'raw_input',
		'reduce',
		'reload',
		'repr',
		'reversed',
		'round',
		'set',
		'setattr',
		'slice',
		'sorted',
		'staticmethod',
		'str',
		'sum',
		'super',
		'tuple',
		'type',
		'unichr',
		'unicode',
		'vars',
		'xrange',
		'zip',

		*/

		

		'__dict__',
		'__methods__',
		'__members__',
		'__class__',
		'__bases__',
		'__name__',
		'__mro__',
		'__subclasses__',
		'__init__',
		'__import__'
	],

	Python_Boolean: [
		'True',
		'False',
		'None'
	],

	Renpy_Function: [

		'music',
		'sound',

	],

	/* Renpy Language Main (Syntax) Highlighters */
	Renpy_keywords: [
		'scene', 
		'show', // T
		'hide', // T
		'at', // T
		'define', // T
		'image', // T
		'label', // T
		'add', // T
		'always', 
		'and', 
		'animation', 
		'as', 
		'assert', 
		'at', 
		'attribute', 
		'auto', 
		'bar', 
		'behind', 
		'block', 
		'break', 
		'button', 
		'call', 
		'camera', 
		'choice', 
		'circles', 
		'class', 
		'clear', 
		'clockwise', 
		'contains', 
		'continue', 
		'counterclockwise', 
		'def', 
		'default', 
		'del', 
		'drag', 
		'draggroup', 
		'elif', 
		'else', 
		'event', 
		'except', 
		'exec', 
		'expression', 
		'finally', 
		'fixed', 
		'for', 
		'frame', 
		'from', 
		'function', 
		'global', 
		'grid', 
		'group', 
		'has', 
		'hbox', 
		
		'hotbar', 
		'hotspot', 
		'if',  /////////////////////////////////////////////////////////
		'imagebutton', 
		'imagemap', 
		'import', 
		'in', 
		'index', 
		'init', 
		'input', 
		'is', 
		'jump', 
		'key', 
		'knot', 
		'lambda', 
		'layeredimage', 
		'menu', 
		'monologue', 
		'mousearea', 
		
		'new', 
		'nointeract', 
		'not', 
		'null', 
		'nvl', 
		'offset', 
		'old', 
		'on', 
		'onlayer', 
		'or', 
		'parallel', 
		'pass', 
		'pause', 
		'play', 
		'print', 
		'python', 
		'queue', 
		'raise', 
		'repeat', 
		'return', 
		'rpy', 
		
		'screen', 
		
		'showif', 
		'side', 
		 
		'stop', 
		'strings', 
		'style', 
		'sustain', 
		'tag', 
		'take', 
		'testcase', 
		'text', 
		'textbutton', 
		'time', 
		'timer', 
		'transclude', 
		'transform', 
		'translate', 
		'try', 
		'use', 
		'vbar', 
		'vbox', 
		'viewport', 
		'voice', 
		'vpgrid', 
		'while', 
		'window', 
		'with', 
		'yield', 
		'zorder'


		/* Keywords 2 */
		,'color'
	],
	Renpy_enumerations: [
		'fade',
		'dissolve',
		'pixellate',
		'move',
		'moveinright',
		'moveinleft',
		'moveintop',
		'moveinbottom',
		'moveoutright',
		'moveoutleft',
		'moveouttop',
		'moveoutbottom',
		'ease',
		'easeinright',
		'easeinleft',
		'easeintop',
		'easeinbottom',
		'easeoutright',
		'easeoutleft',
		'easeouttop',
		'easeoutbottom',
		'zoomin',
		'zoomout',
		'zoominout',
		'vpunch',
		'hpunch',
		'blinds',
		'squares',
		'wipeleft',
		'wiperight',
		'wipeup',
		'wipedown',
		'slideleft',
		'slideright',
		'slideup',
		'slidedown',
		'slideawayleft',
		'slideawayright',
		'slideawayup',
		'slideawaydown',
		'irisin',
		'irisout'
	],

	brackets: [
		{ open: '{', close: '}', token: 'delimiter.curly' },
		{ open: '[', close: ']', token: 'delimiter.bracket' },
		{ open: '(', close: ')', token: 'delimiter.parenthesis' }
	],

	

	tokenizer: {
		root: [
			{ include: '@whitespace' },
			{ include: '@numbers' },
			{ include: '@strings' },

			[/[,:;]/, 'delimiter'],
			[/[{}\[\]()]/, '@brackets'],

			[/@[a-zA-Z]\w*/, 'tag'],

			[/[a-zA-Z]\w*/, {
				cases: {
					'@keywords': 'keyword',
					'@Python_Boolean': 'python.boolean',
					'@Renpy_keywords': 'keyword',
					'@Renpy_enumerations': 'renpy.enumerations',
					'@Renpy_Function': 'renpy.functions',
					'@default': 'identifier'
				}
			}],
			[/\$/, 'renpy.persistent']
		],

		// Deal with white space, including single and multi-line comments
		whitespace: [
			[/\s+/, 'white'],
			[/(^#.*$)/, 'comment'],
			[/('''.*''')|(""".*""")/, 'string'],
			[/'''.*$/, 'string', '@endDocString'],
			[/""".*$/, 'string', '@endDblDocString']
		],
		endDocString: [
			[/\\'/, 'string'],
			[/.*'''/, 'string', '@popall'],
			[/.*$/, 'string']
		],
		endDblDocString: [
			[/\\"/, 'string'],
			[/.*"""/, 'string', '@popall'],
			[/.*$/, 'string']
		],

		// Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
		numbers: [
			[/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
			[/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
		],

		// Recognize strings, including those broken across lines with \ (but not without)
		strings: [
			[/'$/, 'string.escape', '@popall'],
			[/'/, 'string.escape', '@stringBody'],
			[/"$/, 'string.escape', '@popall'],
			[/"/, 'string.escape', '@dblStringBody']
		],
		stringBody: [
			[/[^\\']+$/, 'string', '@popall'],
			[/[^\\']+/, 'string'],
			[/\\./, 'string'],
			[/'/, 'string.escape', '@popall'],
			[/\\$/, 'string']
		],
		dblStringBody: [
			[/[^\\"]+$/, 'string', '@popall'],
			[/[^\\"]+/, 'string'],
			[/\\./, 'string'],
			[/"/, 'string.escape', '@popall'],
			[/\\$/, 'string']
		]
		
	}
});

/* Define a new theme that contains only rules that match this language  */ /* Not Used */ /* 

monaco.editor.defineTheme('renpy-vs', {
	base: 'vs',
	inherit: false,
	rules: [
		{ token: 'Renpy_transitions', foreground: '008800' },
		{ token: 'custom-error', foreground: 'ff0000', fontStyle: 'bold' },
		{ token: 'custom-notice', foreground: 'FFA500' },
		{ token: 'custom-date', foreground: '008800' },
	]
});

*/

// Register a completion item provider for the new language
monaco.languages.registerCompletionItemProvider('renpy-nc', {
	provideCompletionItems: () => {
		var suggestions = [
			/* Snippets */
			{
				label: 'label',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'label ${1:label_name}:\n\t${2:}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: 'Create a new label. \nMore info: https://www.renpy.org/doc/html/label.html',
			},
			{
				label: 'jump',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'jump ${1:label_name}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: 'Jump to a label. \nMore info: https://www.renpy.org/doc/html/label.html#jump-statement'
			},
			{
				label: 'call',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'call ${1:label_name}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: 'Call a label. \nMore Info: https://www.renpy.org/doc/html/label.html#jump-statement'
			},
			{
				label: 'pause',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'with Pause($1)\n$2',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: 'Wait a few seconds before showing the next screen. \nMore Info: https://www.renpy.org/doc/html/transitions.html#Pause'
			},
			{
				label: 'p1 (One Line Python)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: '$ ${1:#python statements}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: 'Execute a single line of Python. \nMore Info: https://www.renpy.org/doc/html/python.html#one-line-python-statement'
			},
			{
				label: 'py (Python in Block)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'python:\n\t${1:}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: 'The python statement takes a block of python code. \nMore Info: https://www.renpy.org/doc/html/python.html'
			},
			{
				label: 'init (Init Block)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'init ${1:priority number}:\n\t${2:}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: 'Run code at initialization time. \nMore Info: https://www.renpy.org/doc/html/python.html#init-python-statement'
			},
			{
				label: 'inipy (Init with Python Block)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'init ${1:priority number} python:\n\t${2:}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: ''
			},
			{
				label: 'char (Create a Character)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'define ${1:character_name} = Character("${2:displayable name}")',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: ''
			},
			{
				label: 'charnvl (Create a Character (NVL))',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'define ${1:character_name} = Character(None, kind=nvl)\n${2:}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: ''
			},
			{
				label: 'multipersist (Create MultiPersistent)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: '${1:persistent_name} = MultiPersistent(\"${2:persistent_filename}\")',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Init Block)'
			},
			{
				label: 'var (Variable(Create/Modify))',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: '$ ${1:variable_name} = ${2:# variable value}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python one-line)'
			},
			{
				label: '$ (Variable(Create/Modify))',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: '$ ${1:variable_name} = ${2:# variable value}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python one-line)'
			},
			{
				label: 'rpause (Renpy Pause)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: '$ renpy.pause($1)\n$2',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python one-line)'
			},
			{
				label: 'cutscene (Movie Cutscene)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: '$ renpy.movie_cutscene(\'${1:file_name.extension}\')',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python one-line)'
			},
			{
				label: 'persist (Save Persistent)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: '$ persistent.${1:attribute_name} = ${2:# variable value}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python one-line)'
			},
			{
				label: 'multisave (Save MultiPersistent)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: '$ ${1:persistent_name}.save()',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python one-line)'
			}


			/* Transitions */
			,
			{
				label: '(with) Fade',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'with fade',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Transition) with fade'
			},
			{
				label: '(with) Dissolve',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'with dissolve',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Transition) with dissolve'
			},
			{
				label: '(with) Pixellate',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'with pixellate',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Transition) with pixellate'
			},
			{
				label: '(with) Move',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'with move',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Transition) with move'
			},
			{
				label: '(with) Move in Right',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'with moveinright',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Transition) with moveinright'
			},
			{
				label: '(with) Move in Left',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'with moveinleft',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Transition) with moveinleft'
			},
			{
				label: '(with) Move in Top',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'with moveintop',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Transition) with moveintop'
			},
			{
				label: '(with) Move in Bottom',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'with moveinbottom',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Transition) with moveinbottom'
			}

			/* Built-in Python/Ren'Py */
			,
			{
				label: 'if (Built-in Python/Ren\'Py)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'if ${1:condition}:\n\t${2:#block of code to run}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Conditional Statement)'
			},
			{
				label: 'Else If (Built-in Python/Ren\'Py)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'elif ${1:condition}:\n\t${2:#block of code to run}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Conditional Statement)'
			},
			{
				label: 'Else (Built-in Python/Ren\'Py)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'else:\n\t${1:#block of code to run}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Conditional Statement)'
			},
			{
				label: 'While (Built-in Python/Ren\'Py)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'while ${1:condition}:\n\t${2:#block of code to run}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Loop)'
			}

			/* Choice Menus */
			,
			{
				label: 'menu (Choice Menu)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'menu ${1:optional_name}:\n\t"${2:Say Statement}"\n\t"${3:Choice 1}":\n\t\t#block of code to run\n\t"${4:Choice 2}":\n\t\t#block of code to run\n\t${5:}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: ''
			},
			{
				label: 'choice (Menu Choice)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: '"${1:Choice N}":\n\t${2:#block of code to run}\n\t$3',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: ''
			}

			/* Ren'Py Docs */
			,
			{
				label: 'dochelp (Ren\'Py Docs)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: '## Visit the site for documentation or help of Ren\'Py engine. ##\n## Documentation:\n\t"${1:http://www.renpy.org/doc/html/}"\n## Wiki-Old Documentation:\n\t"${2:http://www.renpy.org/wiki/renpy/Wiki_Home_Page}"\n## Forum:\n\t"${3:http://lemmasoft.renai.us/forums/viewforum.php?f=42}"\n## Package Documentation:\n\t"${4:https://github.com/renpy/language-renpy#getting-started}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: 'Show docs/useful urls\nMore info: http://www.renpy.org/doc/html/'
			}

			/* 
			   Python Block
			   Assert (hidden) 
			*/
			,
			{
				label: ',ase (Assert Equal)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'self.assertEqual(${1:expected}, ${2:actual}${3:, \'${4:message}\'})$0',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block, Hidden)'
			},
			{
				label: ',asne (Assert Not Equal)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'self.assertNotEqual(${1:expected}, ${2:actual}${3:, \'${4:message}\'})$0',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block, Hidden)'
			},
			{
				label: ',asr (Assert Raises)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'self.assertRaises(${1:exception}, ${2:callable})$0',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block, Hidden)'
			},
			{
				label: ',ast (Assert True)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'self.assertTrue(${1:actual}${2:, \'${3:message}\'})$0',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block, Hidden)'
			},
			{
				label: ',asf (Assert False)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'self.assertIs(${1:expected}, ${2:actual}${3:, \'${4:message}\'})$0',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block, Hidden)'
			},
			{
				label: ',asint (Assert Is Not)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'self.assertIsNot(${1:expected}, ${2:actual}${3:, \'${4:message}\'})$0',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block, Hidden)'
			},
			{
				label: ',asino (Assert Is None)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'self.assertIsNone(${1:actual}${2:, \'${3:message}\'})$0',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block, Hidden)'
			},
			{
				label: ',asinno (Assert Is Not None)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'self.assertIsNotNone(${1:actual}${2:, \'${3:message}\'})$0',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block, Hidden)'
			},
			{
				label: ',asin (Assert In)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'self.assertIn(${1:needle}, ${2:haystack}${3:, \'${4:message}\'})$0',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block, Hidden)'
			},
			{
				label: ',asni (Assert Not In)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'self.assertNotIn(${1:needle}, ${2:haystack}${3:, \'${4:message}\'})$0',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block, Hidden)'
			},
			{
				label: ',as (Assert)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'self.assert_(${1:boolean expression}${2:, \'${3:message}\'})$0',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block, Hidden)'
			},
			{
				label: 'fail (a test)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'self.fail(\'${1:message}\')$0',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block, Hidden)'
			}

			/* Class */
			,
			{
				label: 'class (New Class)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'class ${1:ClassName}(${2:object}):\n\t"""${3:docstring for $1}"""\n\tdef __init__(self, ${4:arg}):\n\t\t${5:super($1, self).__init__()}\n\t\tself.arg = arg\n\t\t$0',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block)'
			},
			{
				label: 'defs (New Method)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'def ${1:mname}(self, ${2:arg}):\n\t${3:pass}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block)'
			},
			{
				label: 'def (New Function)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'def ${1:fname}(${2:arg}):\n\t${3:pass}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block)'
			},
			{
				label: 'property (New Property)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'def ${1:foo}():\n    doc = "${2:The $1 property.}"\n    def fget(self):\n        ${3:return self._$1}\n    def fset(self, value):\n        ${4:self._$1 = value}\n    def fdel(self):\n        ${5:del self._$1}\n    return locals()\n$1 = property(**$1())$0',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block)'
			}

			/* Others */
			,
			{
				label: 'for (Loop)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'for ${1:value} in ${2:variable}:\n\t${3:pass}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block)'
			},
			{
				label: 'try (Try/Except)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'try:\n\t${1:pass}\nexcept ${2:Exception} as ${3:e}:\n\t${4:raise $3}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block)'
			},
			{
				label: 'lc (List Comprehension)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: '[${1:value} for ${2:value} in ${3:variable}]',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block)'
			},
			{
				label: 'lcie (List Comprehension If Else)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: '[${1:value} if ${2:condition} else ${3:condition} for ${4:value} in ${5:variable}]',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block)'
			},
			{
				label: 'dc (Dictionary Comprehension)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: '{${1:key}: ${2:value} for ${3:key}, ${4:value} in ${5:variable}}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block)'
			},
			{
				label: 'pdb (PDB set trace)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'import pdb; pdb.set_trace()\n',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block)'
			},
			{
				label: 'ipdb (iPDB set trace)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: 'import ipdb; ipdb.set_trace()\n',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block)'
			},
			{
				label: '__ (__magic__)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: '__${1:init}__',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Python Block)'
			}

			/* Text Tags */ /* 
			,
			{
				label: 'a (Anchor Tag)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: '{a=${1:url}}$2{/a}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Text Style)'
			},
			{
				label: 'al (Alpha Tag)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: '{alpha=${1:alpha value}}$2{/alpha}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Text Style)'
			},
			{
				label: 'b (Bold Tag)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: '{b}$1{/b}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Text Style)'
			},
			{
				label: 'c (Color Tag)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: '{color=${1:color code}}$2{/color}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Text Style)'
			},
			{
				label: 'cp (Characters per second Tag)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: '{cps=${1:characters per second}}$2{/cps}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Text Style)'
			},
			{
				label: 'f (Font Tag)',
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: '{font=${1:font file}}$2{/font}',
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				detail: '(Text Style)'
			} 
			*/
		];

		return { suggestions: suggestions };
	}
});