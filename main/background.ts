import { app, dialog, autoUpdater, Response } from 'electron';
import 'dotenv/config';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import squirrelStartup from 'electron-squirrel-startup'

if (squirrelStartup) {
  app.quit();
}

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
    frame: true,
    width: 900,
    height: 500,
    minWidth: 900,
    minHeight: 500,
    center: true,
    resizable: false,
    movable: true,
    backgroundColor: '#101010',
    webPreferences: {
      devTools: false,
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    // mainWindow.webContents.toggleDevTools()
  }
})();

app.on('ready', () => {
  if (!app.isEmojiPanelSupported()) {
    dialog.showErrorBox('Houve um erro', 'Pareçe que seu computador não possui suporte para emojis, pode haver alguns problemas de fontes em seu computador, para mais informações acesse: https://discord.gg/hRzyVVWW3U')
  }
})


app.on('ready', () => {
  autoUpdater.setFeedURL({ url: `https://github.com/Hyper-Store/hyper-store-applications-update/releases/download/update`, });
  autoUpdater.checkForUpdates();

  autoUpdater.on('update-available', async () => {
    await dialog.showMessageBox({
      type: 'info',
      buttons: ['OK'],
      defaultId: 0,
      title: 'Atualização Necessária',
      message: 'Uma nova versão do aplicativo está disponível. A atualização é obrigatória para continuar utilizando o aplicativo.',
      detail: 'O aplicativo será reiniciado após a atualização.',
    })

    app.quit();
  });

  autoUpdater.on('error', (error) => {
    dialog.showErrorBox('Erro na atualização', 'Houve um erro ao tentar atualizar o aplicativo, tente reinstalar ou caso não consiga entre em contato com o suporte na Hyper Store!')
  });

  autoUpdater.on('update-downloaded', () => {
    dialog.showMessageBox({
      type: 'info',
      buttons: ['OK'],
      defaultId: 0,
      title: 'Atualização em andamento',
      message: 'O aplicativo já está sendo atualizado, fique tranquilo assim que pronto ele vai estar disponível para abrir novamente!',
    })
  });
})

app.on('window-all-closed', () => {
  app.quit();
});
