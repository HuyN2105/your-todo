import React from 'react';

interface List {
	_id: String;
	title: String;
	detail: String;
	completed: Boolean;
	createdAt: String;
	updatedAt: String;
	__v: Number;
}

interface props {
	todoLists: List[];
}

function Test({ todoLists }: props) {
	return (
		<>
			{todoLists.map((item) => {
				<p>{item.detail}</p>;
			})}
		</>
	);
}

export default Test;
