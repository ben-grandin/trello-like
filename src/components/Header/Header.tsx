import React, { FC } from 'react';
import './Header.scss';


interface HeaderProps {

}


const Header: FC<HeaderProps> = () => {

	return (<div id="header">
		<h1>My awesome Trello Like project</h1>
	</div>);
};

export { Header };