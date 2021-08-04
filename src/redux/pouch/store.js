import { createStore, applyMiddleware } from "redux";
import bookReducer from "./bookReducer";
import createSagaMiddleware from 'redux-saga';
import { actionWatcher, rootSaga } from './saga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(bookReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(actionWatcher)

export default store;