/**
 * 窗口基类，封装通用的窗口操作
 */

const { BrowserWindow,ipcMain } = require("electron");

/**
 * 基本窗口样式
 * @type {{width: number, height: number, resizable: boolean, frame: boolean, parent: object, modal: boolean}}
 */
const windowStyle = {
  width: 800, // 宽
  height: 600, // 高
  frame: false, // 是否带边框
  parent: null, // 父窗口
  webPreferences: {
    nodeIntegration: true,
  },
};
/* 创建新窗口 */
// 定义calendar窗体
// 创建calendar窗口方法
let calendarWin;

function EucWindow({ options, url }, win) {
  const Options = Object.assign(
    {},
    windowStyle,
    {
      parent: win, // win是主窗口
    },
    options
  );
  calendarWin = new BrowserWindow(Options);
  console.log(calendarWin);
  calendarWin.loadURL(url);
  calendarWin.on("closed", () => {
    calendarWin = null;
  });
}
module.exports = EucWindow;
