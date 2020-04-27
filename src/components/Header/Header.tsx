import React, { FunctionComponent } from 'react';
import './Header.scss';


export interface HeaderProps {

}


export const Header: FunctionComponent<HeaderProps> = () => {

	return (<div id="header">
		<h1>My awesome Trello Like project</h1>
	</div>);
};