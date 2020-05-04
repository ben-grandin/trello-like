import React, { FC } from 'react';
import './Modal.scss';


interface ModalProps {
	toggleModal: () => void
	className?: string
}


const Modal: FC<ModalProps> = ({ toggleModal, className, children }) => {
	return (<div onClick={toggleModal} className={'parent-modal'}>
			<div onClick={event => {event.stopPropagation();}} className={`modal ${className}`}>
				{children}
			</div>
		</div>
	);
};
export { Modal };