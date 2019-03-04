import { app, BrowserWindow, ipcMain } from "electron";
import { login, logout } from "./utils/login";
import db from "./utils/db";
import * as request from "superagent";
const url = require('url');
const qs = require('querystring');

if (process.env.NODE_ENV !== "development") {
  global.__static = require("path")
    .join(__dirname, "/static")
    .replace(/\\/g, "\\\\");
}

let mainWindow;
const winURL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`;

function createWindow() {
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000
  });

  mainWindow.loadURL(winURL);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", async () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on("getConfig", async (event) => {
  const res = await getConfig();
  event.sender.send("configRes", res);
});

ipcMain.on("login", async (event, mac, ip, qstr) => {
  const res = await login(mac, ip, qstr);
  event.sender.send("loginRes", res);
});

ipcMain.on("logout", async event => {
  let res;
  const logoutStr = db
    .read()
    .get("logoutStr")
    .value();
  if (logoutStr !== undefined && logoutStr.length > 0) {
    res = await logout(logoutStr);
  }
  event.sender.send("logoutRes", res);
});

async function getConfig() {
  const res = await request.get("http://www.msftconnecttest.com/redirect");
  const urlRes  = res.request.url;
  const query = url.parse(urlRes).query;
  const qsObj = qs.parse(query);
  const userip = qsObj["userip"];
  const usermac = qsObj["usermac"];
  return {
    userip,
    usermac
  };
}
