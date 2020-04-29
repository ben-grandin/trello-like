import React, { FC } from 'react';
import './DialogCard.scss';
import { Dialog } from '../../Dialog/Dialog';


interface CardProps {
	title: string
	description?: string
	list?: string
}


export const DialogCard: FC<CardProps> = ({ title, description, list }) => {
	return (
		<Dialog buttonClassName="card" title={title}>
			<div>
				<p>{title}</p>
				<span>Dans la liste {list}</span>
			</div>
			{description && <div>
				<h3>Description</h3>
				<p>{description}</p>
			</div>}
		</Dialog>
	);
};