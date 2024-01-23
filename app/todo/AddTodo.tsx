'use client';
import React from 'react';

function AddTodo() {
	return (
		<>
			<form className='fixed flex top-full -translate-y-14 w-full'>
				<input
					type='text'
					placeholder='Add Todo'
					className='input input-bordered input-primary w-9/12 mr-px'
				/>
				<button className='btn btn-outline btn-info float-end'>Add</button>
			</form>
		</>
	);
}

export default AddTodo;
