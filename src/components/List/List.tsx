import React, { FunctionComponent } from 'react';
import { ListHeader } from '../ListHeader/ListHeader';
import { Card } from '../Card/Card';
import './List.scss';


interface ListProps {
	title: string;

}


export const List: FunctionComponent<ListProps> = ({ title }) => {

	return (
		<div className="list">
			<ListHeader titleValue={title}/>
			{
				[{ title: 'Card 1' }, { title: 'Card 2' }]
					.map(({ title }) => <Card title={title}/>)
			}
		</div>);

};
