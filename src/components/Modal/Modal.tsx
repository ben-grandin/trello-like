import React, { FC } from 'react';
import './Modal.scss';


interface ModalProps {
	toggleModal: () => void
}

const Modal: FC<ModalProps> = ({ toggleModal, children }) => {

	return (<>
			<div id={'parent-modal'} onClick={toggleModal} className="parent-modal"/>
			<div className="modal">
				{children}
			</div>
		</>
	);
};
export { Modal };