import React, { FC } from 'react';
import './Card.scss';

export const Card: FC<any> = ({ toggleModal, title }) => {
	return (
		<button className="card" onClick={toggleModal}>
			<span className="card-title">{title}</span>
		</button>
	);
};
