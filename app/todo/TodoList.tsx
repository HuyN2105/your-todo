'use client';
import React, { Key } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { pusherServer } from '@/app/libs/pusher';
import axios from 'axios';
import toast from 'react-hot-toast';

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

function TodoList() {
	const handleStateChange = (item: List) => {
		axios
			.put('/api/todo', { itemId: item._id, newState: !item.completed })
			.then(() => toast.success('Done!'))
			.catch(() => toast.error('Something went wrong!'));
	};

	const handleDeleteItem = (item: List) => {
		axios
			.post('/api/todo/delete', { itemId: item._id })
			.then(() => toast.success('Delete item successfully!'))
			.catch(() => toast.error('Something went wrong!'));
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
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{/* {todoLists.map((item) => (
							<tr key={item._id as Key}>
								<th>
									<label>
										<input
											type='checkbox'
											className='checkbox'
											checked={item.completed as boolean}
											onChange={(e) => handleStateChange(item)}
										/>
									</label>
								</th>
								<td>
									<div className='flex items-center gap-3'>
										<div
											className={
												item.completed ? 'font-bold line-through' : 'font-bold'
											}
										>
											{item.title}
										</div>
									</div>
								</td>
								<td>
									<span className='badge-sm'>{item.detail}</span>
								</td>
								<td>
									<div className='flex-none gap-2 navbar-end'>
										<div className='dropdown dropdown-end'>
											<button>
												<FontAwesomeIcon
													icon={faTrash}
													className='text-error'
												/>
											</button>
											<ul
												tabIndex={0}
												className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
											>
												<li>
													<button
														className='text-warning'
														onClick={() => handleDeleteItem(item)}
													>
														Delete
													</button>
												</li>
											</ul>
										</div>
									</div>
								</td>
							</tr>
						))} */}
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
