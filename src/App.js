import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Store';
import { Provider } from 'react-redux';
import Routes from './routes';
import './App.css';
import 'semantic-ui-css/semantic.min.css'



class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Routes />
			</Provider>
		);
	}
}

export default App;
