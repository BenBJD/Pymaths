const { app, BrowserWindow } = require('electron')

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 400 })
    win.loadFile('index.html')
}

app.on('ready', createWindow)