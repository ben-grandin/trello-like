import React, { FunctionComponent } from 'react';
import './List.scss';
import InputTitle from '../InputTitle/InputTitle';


interface ListProps {
	title: string;

}


export const List: FunctionComponent<ListProps> = ({ title }) => {


	return <div className="list">
		<div className="list-header">
			<InputTitle titleValue={title}/>
		</div>
	</div>;
};

export default List;