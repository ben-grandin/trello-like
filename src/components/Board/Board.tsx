import React, { FunctionComponent } from 'react';
import './Board.scss';
import List from '../List/List';


export interface BoardProps {

}


export const Board: FunctionComponent<BoardProps> = () => {

	return (<div id="board">
		{["List 1","List 2","List 3","List 4"].map(i => <List key={i} title={i}/>)}
	</div>);
};