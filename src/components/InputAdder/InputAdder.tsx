import React, { FC } from 'react';
import './InputAdder.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export const InputAdder: FC<any> = ({ children }) => {
	return (
		<div className={'input-adder'}>
			<div className={'add-text'}>
				<div className={'icon'}>
					<FontAwesomeIcon icon={faPlusCircle} color={'#000000'}/>
				</div>
				<div className={'text'}>{children}</div>
			</div>
		</div>
	);
};
