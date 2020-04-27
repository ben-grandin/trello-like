import React from 'react';
import { Header } from './components/Header/Header';
import { Board } from './components/Board/Board';
import './App.scss';


function App() {
	return (
		<div id="app">
			<Header/>
			<Board/>
		</div>
	);
}

export default App;
