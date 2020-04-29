import React, { FC } from 'react';
import './Board.scss';
import { List } from '../List/List';


export interface BoardProps {
	toggleModal: () => void
}


const Board: FC<BoardProps> = ({ toggleModal }) => {

	return (<div id="board">
		{['List 1', 'List 2', 'List 3', 'List 4'].map(i => <List key={i} title={i} toggleModal={toggleModal}/>)}
	</div>);
};

export { Board };