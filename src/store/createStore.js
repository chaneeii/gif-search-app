import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import RootReducer from './rootReducer';
import RootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga); //rootsaga를 middleware로 실행

export default store;
