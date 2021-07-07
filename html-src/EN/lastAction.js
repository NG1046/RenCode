// Get Elements
var iconElem = document.getElementById("LastActionImg");
var TextElem = document.getElementById("LastActionText");

// Get Images
var Img_Cancel = "../../Icons1/Cancel.png"
var Img_FileCheck = "../../Icons1/File-Check.png"
var Img_Gear = "../../Icons1/Gear.png"
var Img_Info = "../../Icons1/Info.png"
var Img_Run = "../../Icons1/Run.png"

function lastAction_Cancel(Text){
    iconElem.src = Img_Cancel;
    TextElem.innerText = Text;
}

function lastAction_Info(Text){
    iconElem.src = Img_Info;
    TextElem.innerText = Text;
}