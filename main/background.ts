import { app, dialog } from 'electron';
import 'dotenv/config';
import serve from 'electron-serve';
import { createWindow } from './helpers';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    fullscreenable: false,
    darkTheme: true,
    show: true,
    autoHideMenuBar: true,
    frame: false,
    width: 900,
    height: 500,
    minWidth: 900,
    minHeight: 500,
    center: true,
    resizable: false,
    movable: true,
    backgroundColor: '#101010',
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
    mainWindow.webContents.toggleDevTools()
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.toggleDevTools()
  }
})();

app.on('ready', () => {
  if (!app.isEmojiPanelSupported()) {
    dialog.showErrorBox('Houve um erro', 'Pareçe que seu computador não possui suporte para emojis, pode haver alguns problemas de fontes em seu computador, para mais informações acesse: https://discord.gg/hRzyVVWW3U')
  }
})

app.on('window-all-closed', () => {
  app.quit();
});