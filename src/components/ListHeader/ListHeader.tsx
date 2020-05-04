import React, { FC, FormEvent, useCallback, useState } from 'react';
import './ListHeader.scss';


interface InputTitleProps {
	titleValue: string;
	className?: string;
}


/*
	ToDo:
	 - Change input style,
	 - Submit onClick
 */
export const ListHeader: FC<InputTitleProps> = ({ titleValue, className = '' }) => {
	const [tempTitle, setTempTitle] = useState(titleValue);
	const [title, setTitle] = useState(titleValue);
	const [showInput, setShowInput] = useState(false);

	const inputRef = useCallback(inputElement => {
		if( inputElement ) {
			inputElement.focus();
		}
	}, []);
	const onSubmitForm = () => {
		setShowInput(false);
		setTitle(tempTitle);
	};

	const toggleShowInput: (event: FormEvent) => void = (event) => {
		event.preventDefault();
		setShowInput( !showInput);
	};

	const onInputChange: ({ target: { value } }: { target: { value: string } }) => void = ({ target: { value } }) => {
		setTempTitle(value);
	};

	const onEscapeInput = (e: any) => {
		if( e.key === 'Escape' ) {
			setTempTitle(title);
			setShowInput(false);
		}
		e.stopPropagation();
	};

	return <div className={`list-header ${className}`}>
		{ !showInput && <h4 onClick={toggleShowInput} className="list-title">{title}</h4>}

		{
			showInput &&
            <form onSubmit={onSubmitForm}>
                <input onBlur={onSubmitForm} ref={inputRef} value={tempTitle} onKeyDown={onEscapeInput} onChange={onInputChange}
                       className='list-title'/>
            </form>
		}
	</div>;
};


