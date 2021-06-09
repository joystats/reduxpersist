import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './configurations/ReduxPersist'

ReactDOM.render(
	<Provider store={store}>
		<PersistGate load={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
