const path = require("path");
const { app, BrowserWindow } = require("electron");

// Window properties
const win = {
    "title": "Interactive Map",
    "width": 1020,
    "height": 950,
    "renderer": "./renderer/renderer.html"
};

const isDev = process.env.NODE_ENV !== 'production';
const isOnMac = process.platform === 'darwin';

function createWindow() {
    const mainWindow = new BrowserWindow({
        title: win.title,
        width: win.width,
        height: win.height
    });

    // Only open DevTools if run in development environment
    if (isDev) {
    //    mainWindow.webContents.openDevTools();
    }

    mainWindow.maximize();
    mainWindow.loadFile(path.join(__dirname, win.renderer));
}

app.whenReady().then(() => {
    // Only initialize main window if there are no (background) processes
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

app.on('window-all-closed', () => {
    if (!isOnMac) {
      app.quit()
    }
});