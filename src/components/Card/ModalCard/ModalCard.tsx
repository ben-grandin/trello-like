import React, { FC } from 'react';
import { Modal } from '../../Modal/Modal';


interface ModalCard {
	toggleModal: () => void
	title?: string
	description?: string
	list?: string
}


export const ModalCard: FC<ModalCard> = ({ toggleModal, title, description, list, children }) => {
	return (
		<Modal toggleModal={toggleModal}>
			<div>
				{title && <p id="title">{title}</p>}
				{list && <span id="list">Dans la liste {list}</span>}
			</div>
			{description && <div>
				<h3 id="description-header">Description</h3>
				<p id="description">{description}</p>
			</div>}
		</Modal>
	);
};