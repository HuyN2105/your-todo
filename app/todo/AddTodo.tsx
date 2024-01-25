'use client';
import React, { useState } from 'react';

interface Props {
	todoLists: String[];
}

function AddTodo({ todoLists }: Props) {
	const [newItemTitle, setNewItemTitle] = useState('');
	const [newItemDetail, setNewItemDetail] = useState('');

	function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault();
	}

	return (
		<>
			<form className='fixed flex justify-center top-full -translate-y-14 -translate-x-4 w-full'>
				<input
					type='text'
					placeholder={newItemTitle.length == 0 ? 'Todo Tile' : newItemTitle}
					className='input input-bordered input-primary w-9/12 mr-1'
					onChange={(e) => setNewItemTitle(e.target.value)}
				/>
				<input
					type='text'
					placeholder={newItemDetail.length == 0 ? 'Detail' : newItemDetail}
					className='input input-bordered input-primary w-9/12 mr-1'
					onChange={(e) => setNewItemDetail(e.target.value)}
				/>
				<button
					className='btn btn-outline btn-info float-end'
					onClick={(e) => handleSubmit(e)}
				>
					Add
				</button>
			</form>
		</>
	);
}

export default AddTodo;
