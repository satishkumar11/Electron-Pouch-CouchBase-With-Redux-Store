
import {
    takeLatest,
    all,
    put,
} from 'redux-saga/effects';

import { ADD_TO_POUCH } from './actionTypes'
import { setPouchDBResponse } from './actions'
const electron = window.require('electron');
const { ipcRenderer } = electron;

function* fetchSkuTableData() {
    console.log("Request Sent");
    const result = yield (ipcRenderer.invoke('user-data', 'Sid'));
    yield put(setPouchDBResponse(result));
}

export function* actionWatcher() {
    yield takeLatest(ADD_TO_POUCH, fetchSkuTableData);
}

/* not required */
export function* rootSaga() {
    yield all([actionWatcher()]);
}