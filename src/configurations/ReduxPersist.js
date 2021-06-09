import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import allReducers from '../reducers/ProductReducers'

const config = {
	key: 'root',
	storage: storage
}

const persistedReducer = persistReducer(config, allReducers)
const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)

export {
	store, persistor
}