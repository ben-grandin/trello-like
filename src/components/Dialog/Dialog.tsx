import React, { FC, useRef, useState } from 'react';


interface ModalProps {
	title: string
	buttonClassName: string
}


export const Dialog: FC<ModalProps> = ({ title, buttonClassName, children }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const modalRef = useRef<HTMLDialogElement>(null);

	const close = () => {
		// @ts-ignore
		modalRef.current.close();
		setIsModalVisible(false);
	};

	const open = () => {
		setIsModalVisible(true);
		// @ts-ignore
		modalRef.current.show();
	};

	console.log(isModalVisible);

	return <>
		<button className={buttonClassName} onClick={open}>{title}</button>
		{
			<dialog ref={modalRef}>
				<button className="button-close" onClick={close}>X</button>
				{children}
			</dialog>
		}
	</>;
};