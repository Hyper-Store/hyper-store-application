import { app } from 'electron';
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
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.toggleDevTools()
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});
