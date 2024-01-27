'use client';
import React, { useState } from 'react';

function AddTodo() {
	const [newItemTitle, setNewItemTitle] = useState('');
	const [newItemDetail, setNewItemDetail] = useState('');

	function HandleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault();
		try {
			fetch('/api/todolist/', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					title: newItemTitle,
					detail: newItemDetail,
					completed: false,
				}),
			});
			setNewItemTitle('');
			setNewItemDetail('');
		} catch (error) {}
	}

	return (
		<>
			<form className='fixed flex justify-center top-full -translate-y-16 -translate-x-1 w-screen bg-base-100 h-20 pt-2'>
				<div className='w-9/12 join mr-1'>
					<input
						type='text'
						placeholder={newItemTitle.length == 0 ? 'Todo Tile' : newItemTitle}
						className='input input-bordered input-primary join-item w-1/2'
						onChange={(e) => setNewItemTitle(e.target.value)}
					/>
					<input
						type='text'
						placeholder={newItemDetail.length == 0 ? 'Detail' : newItemDetail}
						className='input input-bordered input-primary join-item w-1/2'
						onChange={(e) => setNewItemDetail(e.target.value)}
					/>
				</div>
				<button
					className='btn btn-outline btn-info float-end'
					onClick={(e) => HandleSubmit(e)}
				>
					Add
				</button>
			</form>
		</>
	);
}

export default AddTodo;
