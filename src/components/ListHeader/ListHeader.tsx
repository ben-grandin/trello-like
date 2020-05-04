import React, { FC, FormEvent, useState } from 'react';
import './ListHeader.scss';


interface InputTitleProps {
	titleValue: string;
	className?: string;
}


/*
	ToDo:
	 - Change input style,
	 - Submit onEscape
 */
export const ListHeader: FC<InputTitleProps> = ({ titleValue, className = '' }) => {
	const [title, setTitle] = useState(titleValue);
	const [showInput, setShowInput] = useState(false);

	const toggleShowInput: (event: FormEvent) => void = (event) => {
		event.preventDefault();
		setShowInput( !showInput);
	};

	const onInputChange: ({ target: { value } }: { target: { value: string } }) => void = ({ target: { value } }) => {
		setTitle(value);
	};
	return <div className={`list-header ${className}`}>
		{ !showInput && <h4 onClick={toggleShowInput} className="list-title">{title}</h4>}

		{
			showInput &&
            <form onSubmit={toggleShowInput}>
                <input value={title} onChange={onInputChange} className='list-title'/>
            </form>
		}
	</div>;
};


