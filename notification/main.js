const { app, BrowserWindow, screen, ipcMain } = require('electron/main')
const path = require('path');

let mainWin = null
let notificationWin = null

const createWindow = () => {
  mainWin = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  mainWin.loadFile('index.html')

  mainWin.webContents.on('did-finish-load', () => {
  })

  mainWin.webContents.openDevTools();
}

const createNotificationWindow = () => {
  notificationWin = new BrowserWindow({
      width: 350,
      height: 400,
      x: screen.getPrimaryDisplay().workArea.width - 350,
      y: screen.getPrimaryDisplay().workArea.height - 400,
      parent: mainWin, // 选择父元素，使自定义窗口与父窗口附着在一个窗口
     // frame: false, // 隐藏窗口边框
     // transparent: true, // 设置为透明窗口（可能需要配合CSS）
      show: false, // 初始时不显示窗口
      alwaysOnTop: true, // 始终置顶
      resizable: false, // 禁止调整窗口大小
      webPreferences: {
          nodeIntegration: true, // 允许渲染器进程使用Node.js
          contextIsolation: false,
          autofill: true,
      },
  })

  notificationWin.loadFile('notification.html')
  //notificationWin.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow()
  createNotificationWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.handle('add-notification', (event, data) => {
  console.log("handle add notification")
  notificationWin.show()
  notificationWin.webContents.send('add-notification-item', data);
});

ipcMain.handle('hide-notification', (event, data) => {
  notificationWin.hide()
  notificationWin.webContents.send('hide-notification-item', data);
});

