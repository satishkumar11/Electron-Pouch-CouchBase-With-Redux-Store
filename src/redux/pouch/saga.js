
import {
    takeLatest,
    all,
    put,
} from 'redux-saga/effects';

import { ADD_TO_POUCH } from './bookTypes'
import { setPouchDBResponse } from './bookActions'
const electron = window.require('electron');
const { ipcRenderer } = electron;

function* fetchSkuTableData() {
    const result = yield (ipcRenderer.invoke('user-data', 'Satish'));
    yield put(setPouchDBResponse(result));
}

export function* actionWatcher() {
    yield takeLatest(ADD_TO_POUCH, fetchSkuTableData);
}

/* not required */
export function* rootSaga() {
    yield all([actionWatcher()]);
}