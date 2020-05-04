import React, { FC, useCallback } from 'react';
import './Modal.scss';


interface ModalProps {
	toggleModal: () => void
	className?: string
}


const Modal: FC<ModalProps> = ({ toggleModal, className, children }) => {
	const modalRef = useCallback(inputElement => {
		if( inputElement ) {
			inputElement.focus();
		}
	}, []);

	// ToDo: What the difference ?
	//useRef<HTMLDivElement>(null);
	// useEffect(() => {
	// 	if( modalRef.current )
	// 		modalRef.current.focus();
	// });

	const closeOnEscape = (e: any) => {
		if( e.key === 'Escape' ) {
			toggleModal();
		}
	};


	return (<div className={'parent-modal'}
				 tabIndex={0}
				 ref={modalRef}
				 onFocus={() => console.log('focus')}
				 onClick={toggleModal}
				 onKeyDown={closeOnEscape}


		>
			<div  className={`modal ${className}`} onClick={event => {event.stopPropagation();}}>
				{children}
			</div>
		</div>
	);
};
export { Modal };