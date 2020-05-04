import React, { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Board } from './components/Board/Board';
import './App.scss';
import { ModalCard } from './components/Card/ModalCard/ModalCard';


function App() {
	const [isModalVisible, setModalVisible] = useState(false);
	const toggleModal: () => void = () => {
		setModalVisible( !isModalVisible);
	};

	//Todo: Should I pass this useEffect in Modal.tsx
	// and remove the listener on return ?
	useEffect(() => {
		document.body.addEventListener('keydown', (event) => {
				if( event.key === 'Escape' ) { // escape
					event.preventDefault();

					// Todo: Is there a better way ? Didn't succeed with ref.
					if( document.querySelector('#parent-modal') ) {
						setModalVisible(false);
					}
				}
			}
		);
	}, []);

	return (
		<div id="app">
			<Header/>
			<Board toggleModal={toggleModal}/>
			{isModalVisible && <ModalCard toggleModal={toggleModal}/>}

		</div>
	);
}

export default App;
