import React, { FormEvent, FunctionComponent, useState } from 'react';


interface InputTitleProps {
	titleValue: string;

}


export const InputTitle: FunctionComponent<InputTitleProps> = ({ titleValue }) => {
	const [title, setTitle] = useState(titleValue);
	const [showInput, setShowInput] = useState(false);

	const toggleShowInput: (event: FormEvent) => void = (event) => {
		console.log(event, event.type);
		event.preventDefault();
		setShowInput( !showInput);
	};

	// @ts-ignore
	const onInputChange: ({ target: { value } }: { target: { value: string } }) => void = ({ target: { value } }) => {
		setTitle(value);
	};
	return <div className="list">
		{ !showInput && <h4 onClick={toggleShowInput} className="list-title">{title}</h4>}

		{
			showInput &&
			<form onSubmit={toggleShowInput}>
				<input value={title} onChange={onInputChange} className='list-title'/>
			</form>
		}
	</div>;
};

export default InputTitle;

