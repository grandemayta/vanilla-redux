import '@babel/polyfill';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas';
import reducers from '../reducers';
import Router from './routes';
import { Home, Contacts } from '../features';
import '../../styles/common.scss';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);

const routes = {
  '/': () => {
    const home = new Home('#root', store);
    home.load();
    store.subscribe(() => home.load());
  },
  '/contacts': () => {
    const contacts = new Contacts('#root', store);
    contacts.load();
    store.subscribe(() => contacts.load());
  }
};

new Router().bootstrap(routes);
