import React, { FunctionComponent } from 'react';
import './Board.scss';
import landscape from "../../assets/landscape-river.jpg"

export interface BoardProps {

}


export const Board: FunctionComponent<BoardProps> = () => {

	return (<div id="board">
		{/*<img id="landscape" src={landscape} alt="A wonderful landscape with a river"/>*/}
	</div>);
};