'use client';
import React from 'react';

function AddTodo() {
	return (
		<>
			<form>
				<input
					type='text'
					placeholder='Add Todo'
					className='input input-bordered input-primary w-full max-w-xs'
				/>
				<button className='btn btn-outline btn-info'>Info</button>
			</form>
		</>
	);
}

export default AddTodo;
