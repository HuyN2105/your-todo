'use client';
import React, { Key } from 'react';

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

// const getTodoList = async () => {
// 	try {
// 		const res = await fetch('http://localhost:3000/api/todolist/', {
// 			cache: 'no-store',
// 		});

// 		if (!res.ok) {
// 			throw new Error('Failed to fetch todoList');
// 		}
// 		const data = await res.json();
// 		return data.todoList;
// 	} catch (error) {
// 		console.log('Error Loading TodoList: ', error);
// 	}
// };

function TodoList({ todoLists }: props) {
	const handleStateChange = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
	};

	return (
		<>
			<div className='overflow-x-auto py-4'>
				<table className='table'>
					{/* head */}
					<thead>
						<tr>
							<th>
								<label>
									<input type='checkbox' className='checkbox' />
								</label>
							</th>
							<th>Todo</th>
							<th>Detail</th>
						</tr>
					</thead>
					<tbody>
						{todoLists.map((item) => (
							<tr key={item._id as Key}>
								<th>
									<label>
										<input
											type='checkbox'
											className='checkbox'
											checked={item.completed as boolean}
										/>
									</label>
								</th>
								<td>
									<div className='flex items-center gap-3'>
										<div className='font-bold'>{item.title}</div>
									</div>
								</td>
								<td>
									<span className='badge badge-ghost badge-sm'>
										{item.detail}
									</span>
								</td>
							</tr>
						))}
					</tbody>
					{/* foot */}
					<tfoot>
						<tr>
							<th></th>
							<th>Todo</th>
							<th>Detail</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</>
	);
}

export default TodoList;
