import React, { FormEvent, FunctionComponent, useState } from 'react';
import "./ListHeader.scss"

interface InputTitleProps {
	titleValue: string;

}


export const ListHeader: FunctionComponent<InputTitleProps> = ({ titleValue }) => {
	const [title, setTitle] = useState(titleValue);
	const [showInput, setShowInput] = useState(false);

	const toggleShowInput: (event: FormEvent) => void = (event) => {
		event.preventDefault();
		setShowInput( !showInput);
	};

	const onInputChange: ({ target: { value } }: { target: { value: string } }) => void = ({ target: { value } }) => {
		setTitle(value);
	};
	return <div className="list-header">
		{ !showInput && <h4 onClick={toggleShowInput} className="list-title">{title}</h4>}

		{
			showInput &&
			<form onSubmit={toggleShowInput}>
				<input value={title} onChange={onInputChange} className='list-title'/>
			</form>
		}
	</div>;
};


