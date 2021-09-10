import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import reducers from '../src/reducers'

const persistConfig = {
  key: 'root',
  storage,
  timeout: 0,
  stateReconciler: autoMergeLevel2,
  blacklist: []
}

const persistedReducers = persistReducer(persistConfig, reducers)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(persistedReducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk),
));

export const persistor = persistStore(store)
