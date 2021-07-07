
const sysOk = require("fs");
const sysPath = require("path")
const {remote} = require("electron");
const dialog = remote.dialog;
const win = remote.getCurrentWindow();

// Get Elems
var filePathHTML = document.getElementById("filePath");



document.getElementById("SaveAsButton").addEventListener("click", () => {
    var Content = Monaco_getCode();
    console.log("Kamusta Mula sa I-save Bilang Button!");
    console.log(Content);

    let options = {
        title: "I-save bilang",
        buttonLabel : "Save",
        
        filters :[
            {name: 'Renpy File', extensions: ['rpy']},
        ],
        properties: []
    }

    dialog.showSaveDialog(win, options).then(Promisx => {

        console.log("Cancel: "+Promisx.canceled);

        if (!Promisx.canceled) {
            console.log(Promisx.filePath.toString());
              
            // Creating and Writing to the sample.txt file
            sysOk.writeFile(Promisx.filePath.toString(), Content, function (err) {
                if (err) {throw err, console.log(err)};
                console.log('Success: ' +!Promisx.canceled );
                console.log(Promisx.filePath.toString());
                filePathHTML.innerText = Promisx.filePath.toString();
                lastAction_Info("Matagumpay na Nilikha ang File");
            });
        }}).catch(err => {
            console.log(err)
            Handler1_Error("Hindi Inaasahang Error Naganap", err);
        }
    );

}, false);


document.getElementById("SaveToFileButton").addEventListener("click", () => {

    if(!sysOk.existsSync(filePathHTML.innerText)){
        console.log("Walang Umiiral na File"); // Not Exist
        lastAction_Cancel("Walang Umiiral na File");
        Handler1_Error("Error", "Walang Umiiral na File");
    }else{
        if(filePathHTML.innerText.endsWith(".rcef")){
            var Content = MessageEncrypt(Monaco_getCode());

            sysOk.writeFile(filePathHTML.innerText, Content, function (err) {
                if (err) {throw err, console.log(err)};
                lastAction_Info("Matagumpay na I-save Upang Mag-file");
            });

        }else{
            
            var Content = Monaco_getCode();
            sysOk.writeFile(filePathHTML.innerText, Content, function (err) {
                if (err) {throw err, console.log(err)};
                lastAction_Info("Matagumpay na I-save Upang Mag-file");
            });
        }
        
    }

}, false);

document.getElementById("OpenFileButton").addEventListener("click", () => {

    let options = {
        title: "Buksan ang file",
        buttonLabel : "Open",
        
        filters :[
            {name: 'Renpy File', extensions: ['rpy']},
        ],
        properties: []
    }

    dialog.showOpenDialog(win, options).then(Promsx => {
        
        console.log("Cancel:"+Promsx.canceled);

        if (!Promsx.canceled) {
            if(sysOk.existsSync(Promsx.filePaths.toString())){

                sysOk.readFile(Promsx.filePaths.toString(), function (err, data) {
                    if (err) {throw err, console.log(err)};
                    
                    console.log(Promsx.filePaths.toString());
                    console.log(data.toString());
                    Monaco_setCode(data.toString());

                    console.log('Success: ' +!Promsx.canceled );

                    lastAction_Info("Matagumpay na Buksan ang Isang File");

                    
                    filePathHTML.innerText = Promsx.filePaths.toString();
                });

            }
            

        }

    })

}, false)