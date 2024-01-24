'use client';
import React from 'react';

function AddTodo() {
	return (
		<>
			<form className='fixed flex justify-center top-full -translate-y-14 -translate-x-4 w-full'>
				<input
					type='text'
					placeholder='Add Todo'
					className='input input-bordered input-primary w-9/12 mr-1'
				/>
				<button className='btn btn-outline btn-info float-end'>Add</button>
			</form>
		</>
	);
}

export default AddTodo;
