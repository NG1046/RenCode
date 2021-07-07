
/* Init Defaults */
var editor = monaco.editor.create(document.getElementById("EditorContainer"), {
    value: "",
    language: "renpy",

    automaticLayout: true,
    fixedOverflowWidgets: true,
    //roundedSelection: false,
    scrollBeyondLastLine: true,
    readOnly: false,
    theme: "renpy-vs"
    
});

/* Settings */
function Monaco_ReInit(Language, Theme){
    monaco.editor.setModelLanguage(editor.getModel(), Language)
    editor.updateOptions({
        theme: Theme
    });
}

/* Functions */
function Monaco_getCode(){
    return editor.getValue();
}

function Monaco_setCode(code){
    editor.setValue(code);
}

/*
function Monaco_alertCode(){
    alert(editor.getValue()); 
}
*/

function UpdateFont(fontfami) {
    if(fontfami === "Ubuntu Mono")
    {
        editor.updateOptions({fontFamily: "Ubuntu Mono"})
    }
    else if(fontfami === "Consolas")
    {
        editor.updateOptions({fontFamily: "Consolas"})
    }
    else
    {
        editor.updateOptions({fontFamily: fontfami})
    }
}