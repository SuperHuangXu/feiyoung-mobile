import {app, BrowserWindow, ipcMain} from 'electron';
import {login, logout} from './utils/login';
import db from './utils/db';

if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').
      join(__dirname, '/static').
      replace(/\\/g, '\\\\');
}

let mainWindow;
const winURL = process.env.NODE_ENV === 'development'
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`;

function createWindow() {
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
  });

  mainWindow.loadURL(winURL);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('login', async (event, mac, ip, qstr) => {
  const res = await login(mac, ip, qstr);
  event.sender.send('loginRes', res);
});

ipcMain.on('logout', async (event) => {
  let res;
  const logoutStr = db.read().get('logoutStr').value();
  if (logoutStr !== undefined && logoutStr.length > 0) {
    res = await logout(logoutStr);
  }
  event.sender.send('logoutRes', res);
});

