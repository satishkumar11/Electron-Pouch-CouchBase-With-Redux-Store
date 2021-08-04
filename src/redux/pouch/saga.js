
import {
    takeLatest,
    all,
} from 'redux-saga/effects';

import { ADD_TO_POUCH } from './bookTypes'

const electron = window.require('electron');
const { ipcRenderer } = electron;

function* fetchSkuTableData() {
    console.log("fetchSkuTableData");
    const result = yield (ipcRenderer.invoke('user-data', 'Satish'));
    console.log("<result app> : " + JSON.stringify(result));
}

export function* actionWatcher() {
    yield takeLatest(ADD_TO_POUCH, fetchSkuTableData);
}

export function* rootSaga() {
    yield all([actionWatcher()]);
}