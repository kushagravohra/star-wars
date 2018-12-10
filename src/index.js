import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {createStore, compose, applyMiddleware} from  'redux';
import createSagaMiddleware from 'redux-saga';
import * as serviceWorker from './serviceWorker';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
let middlewares = applyMiddleware(sagaMiddleware);
const store = createStore(rootReducer, compose(middlewares));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
        <App />
    </Provider>, 
	document.getElementById('root')
);

serviceWorker.unregister();
