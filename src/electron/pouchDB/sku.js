const ipcMain = require('electron').ipcMain;
const PouchDB = require('pouchdb')
PouchDB.plugin(require('pouchdb-find'));
const localSkuDB = new PouchDB('src/data');
const { v4: uuidv4 } = require('uuid');

async function addToPouchDB(arg) {
    let doc = {
        _id: uuidv4(),
        data: {
            name: arg,
            gender: "Male",
        }
    }

    let result = await localSkuDB.put(doc);
    return result;
}

// Electron IPC example
ipcMain.handle('user-data', async function (event, arg) {
    console.log("Request Received");
    const result = await addToPouchDB(arg);
    return result;
    //do child process or other data manipulation and name it manData
    // event.sender.send('manipulatedData', 'COOL info!');
});