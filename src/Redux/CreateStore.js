import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';


export default (rootReducer, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  const logger = createLogger();
  middleware.push(logger)
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(rootReducer, compose(...enhancers));
  sagaMiddleware.run(rootSaga);
  return store;
};
