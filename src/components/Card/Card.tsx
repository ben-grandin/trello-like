import React, { FunctionComponent } from 'react';
import "./Card.scss"

interface CardProps {
	title: string
}


export const Card: FunctionComponent<CardProps> = ({ title }) => {
	return (
		<div className="card">
			<span className="card-title">{title}</span>
		</div>
	);
};