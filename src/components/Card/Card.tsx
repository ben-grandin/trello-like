import React, { FC } from 'react';
import './Card.scss';

export const Card: FC<any> = ({ toggleModal, title }) => {
	return (
		<div onClick={toggleModal}>
			<button className="card">{title}</button>
		</div>
	);
};
