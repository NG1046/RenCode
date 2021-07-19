const {app, BrowserWindow} = require("electron");

app.on("ready", createWindows);

function createWindows(){

    const win = new BrowserWindow({

        title:"RenCode",

        /* Minimum */
        minWidth: 800, 
        minHeight: 600, 

        /* Configs */
        width: 800, 
        height: 600, 
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        },
        resizable: true, 
        icon: "./buildResx/icon.png",

    });

    //win.loadFile(__dirname+"/html-src/TL/index.html"); // Filipino
    win.loadFile(__dirname+"/html-src/EN/index.html"); // English

    win.removeMenu(); // Uncomment When Publish
}
