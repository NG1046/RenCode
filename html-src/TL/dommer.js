var sysOgay = require("fs");
var electron = require("electron");
var sysShell = electron.shell;

// Get Elems
var filePathHTML = document.getElementById("filePath");



function processStartURL(Link){sysShell.openExternal(Link);}




document.getElementById("Misc1ENCDEC_Enc").addEventListener("click", () => {

    Swal.fire({
        title: 'Pagkumpirma ng Pag-encrypt',
        text: "Sigurado ka bang nais mong i-encrypt ang kasalukuyang teksto mula sa editor patungo sa isang file?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Oo gawin mo',
        cancelButtonText: 'Hindi, Kanselahin',
        reverseButtons: false
    }).then((result) => {
        if (result.isConfirmed) {

            let options = {
                title: "I-save ang Na-encrypt na File Bilang",
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

                        lastAction_Info("Matagumpay na Nilikha ang Na-encrypt na File");
                    });
                }
            }).catch(err => {
                console.log(err);
                Handler1_Error("Hindi Inaasahang Error Naganap", err);
            })
        }
    })

}, false)



document.getElementById("Misc1ENCDEC_Dec").addEventListener("click", () => {

    let options = {
        title: "Buksan ang Naka-encrypt na File",
        buttonLabel : "Open",
        
        filters :[
            {name: 'RenCode Encrypted File', extensions: ['rcef']},
        ],
        properties: []
    }

    if(Monaco_getCode() != ""){
        Swal.fire({

            title: 'I-clear ang Editor?',
            text: "Ang editor ay walang laman, nais mo bang i-clear ang editor?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oo gawin mo',
            cancelButtonText: 'Hindi, Kanselahin',
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
            
                                lastAction_Info("Matagumpay na Buksan ang Isang File");
            
                                
                                filePathHTML.innerText = Promsx.filePaths.toString();
                            });
            
                        }

                    }

                }).catch(err => {
                    console.log(err);
                    Handler1_Error("Hindi Inaasahang Error Naganap", err);
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
    
                        lastAction_Info("Matagumpay na Buksan ang Isang File");
    
                        
                        filePathHTML.innerText = Promsx.filePaths.toString();
                    });
    
                }

            }

        }).catch(err => {
            console.log(err);
            Handler1_Error("Hindi Inaasahang Error Naganap", err);
        })

    }

}, false)