import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import configureStore from './configStore'

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const store = configureStore()
window.store = store;

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
)
registerServiceWorker();
