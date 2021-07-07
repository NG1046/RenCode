var sysOgay = require("fs");
var electron = require("electron");
var sysShell = electron.shell;

// Get Elems
var filePathHTML = document.getElementById("filePath");



function processStartURL(Link){sysShell.openExternal(Link);}




document.getElementById("Misc1ENCDEC_Enc").addEventListener("click", () => {

    Swal.fire({
        title: 'Encryption Confirmation',
        text: "Are you sure you want to encrypt the current text from the editor into a file?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, Do it',
        cancelButtonText: 'No, Cancel',
        reverseButtons: false
    }).then((result) => {
        if (result.isConfirmed) {

            let options = {
                title: "Save Encrypted File As",
                buttonLabel : "Save",
                
                filters :[
                    {name: 'RenCode Encrypted File', extensions: ['rcef']},
                ],
                properties: []
            }

            dialog.showSaveDialog(win, options).then(Promisx => {

                console.log("Cancel: "+Promisx.canceled);

                var Content = MessageEncrypt(Monaco_getCode());

                if (!Promisx.canceled) {
                    console.log(Promisx.filePath.toString());
                      
                    // Creating and Writing to the sample.txt file
                    sysOgay.writeFile(Promisx.filePath.toString(), Content, function (err) {
                        if (err) {throw err, console.log(err)};

                        console.log('Success: ' +!Promisx.canceled );

                        console.log(Promisx.filePath.toString());

                        filePathHTML.innerText = Promisx.filePath.toString();

                        lastAction_Info("Successfully Created Encrypted File");
                    });
                }
            }).catch(err => {
                console.log(err);
                Handler1_Error("Unexpected Error Has Occurred", err);
            })
        }
    })

}, false)



document.getElementById("Misc1ENCDEC_Dec").addEventListener("click", () => {

    let options = {
        title: "Open Encrypted File",
        buttonLabel : "Open",
        
        filters :[
            {name: 'RenCode Encrypted File', extensions: ['rcef']},
        ],
        properties: []
    }

    if(Monaco_getCode() != ""){
        Swal.fire({

            title: 'Clear Editor?',
            text: "The editor is not empty, do you want to clear the editor?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Do it',
            cancelButtonText: 'No, Cancel',
            reverseButtons: false

        }).then((result) => {
            if (result.isConfirmed) {
                

                dialog.showOpenDialog(win, options).then(Promsx => {

                    if (!Promsx.canceled) {

                        Monaco_setCode("");

                        console.log(Promsx.filePaths.toString());

                        if(sysOgay.existsSync(Promsx.filePaths.toString())){
                            sysOk.readFile(Promsx.filePaths.toString(), function (err, data) {
                                if (err) {throw err, console.log(err)};
                                
                                console.log(Promsx.filePaths.toString());
                                console.log(data.toString());
                                Monaco_setCode(MessageDecrypt(data.toString()));
            
                                console.log('Success: ' +!Promsx.canceled );
            
                                lastAction_Info("Successfully Opened Encrypted File");
            
                                
                                filePathHTML.innerText = Promsx.filePaths.toString();
                            });
            
                        }

                    }

                }).catch(err => {
                    console.log(err);
                    Handler1_Error("Unexpected Error Has Occurred", err);
                })
            }
        })
    }else{

        dialog.showOpenDialog(win, options).then(Promsx => {

            if (!Promsx.canceled) {
                console.log(Promsx.filePaths.toString());

                if(sysOgay.existsSync(Promsx.filePaths.toString())){
                    sysOk.readFile(Promsx.filePaths.toString(), function (err, data) {
                        if (err) {throw err, console.log(err)};
                        
                        console.log(Promsx.filePaths.toString());
                        console.log(data.toString());
                        Monaco_setCode(MessageDecrypt(data.toString()));
    
                        console.log('Success: ' +!Promsx.canceled );
    
                        lastAction_Info("Successfully Opened Encrypted File");
    
                        
                        filePathHTML.innerText = Promsx.filePaths.toString();
                    });
    
                }

            }

        }).catch(err => {
            console.log(err);
            Handler1_Error("Unexpected Error Has Occurred", err);
        })

    }

}, false)