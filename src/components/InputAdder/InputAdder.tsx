import React, { FC, useState } from 'react';
import './InputAdder.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle,faTimes } from '@fortawesome/free-solid-svg-icons';
import { ListHeader } from '../ListHeader/ListHeader';

export const InputAdder: FC<any> = ({ children }) => {
	const [displayAddText, setDisplayAddText] = useState(true);
	// const [displayAddInput, setDisplayAddInput] = useState();

	return (
		<div className={'input-adder'}>


			<div className={'add-text'} onClick={() => {
				console.log('click');
				setDisplayAddText(false);
			}}>

				<div>
					{displayAddText &&
                    <div className={'icon'}>
                        <FontAwesomeIcon icon={faPlusCircle} color={'#000000'}/>
                    </div>
					}
					<ListHeader className={`text ${!displayAddText ? 'card' : ''}`}
								onBlur={() => console.log('blur')}
								titleValue={'Ajouter une carte'}
								placeHolder={'Saisisser le nom de la carte'}/>
				</div>


				{
					!displayAddText &&
                    <div className={'add-input'}>
                        {/*<form>*/}
                            <button className={'button bg-green'}>{children}</button>
                            <div className={'icon'}>
                                <FontAwesomeIcon icon={faTimes} color={'#000000'}/>
                            </div>
                        {/*</form>*/}
                    </div>
				}
			</div>


		</div>
	);
};
