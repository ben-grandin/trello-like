import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Board } from './components/Board/Board';
import './App.scss';
import { ModalCard } from './components/Card/ModalCard/ModalCard';


function App() {
	const [isModalVisible, setModalVisible] = useState(false);
	const toggleModal: () => void = () => {
		setModalVisible( !isModalVisible);
	};

	return (
		<div id="app">
			<Header/>
			<Board toggleModal={toggleModal}/>
			{isModalVisible && <ModalCard toggleModal={toggleModal}/>}

		</div>
	);
}

export default App;
