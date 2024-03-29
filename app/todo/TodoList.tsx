'use client';
import React, { Key, useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';

import { FaTrash } from 'react-icons/fa';

interface List {
	id: string;
	completed: boolean;
	title: string;
	detail: string;
	createdAt: string;
	userEmail: string;
}

interface props {
	reFetch: boolean;
	handleRefetch: Function;
}

function TodoList({ handleRefetch, reFetch }: props) {
	const session = useSession();

	const sessionEmail = session?.data?.user?.email;

	const [todoLists, setTodoLists] = useState<List[]>([]);

	useEffect(() => {
		if (sessionEmail)
			axios
				.post('/api/getlist', { userEmail: sessionEmail })
				.then((response) => {
					setTodoLists(response.data.todoList);
				});
	}, [sessionEmail, reFetch]);

	const handleStateChange = (item: List) => {
		axios
			.put('/api/todo', { itemId: item.id, newState: !item.completed })
			.then(() => {
				handleRefetch();
				toast.success('Success!');
			})
			.catch(() => toast.error('Something went wrong!'));
	};

	const handleDeleteItem = (item: List) => {
		axios
			.post('/api/todo/delete', { itemId: item.id })
			.then(() => {
				handleRefetch();
				toast.success('Success!');
			})
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
								<label></label>
							</th>
							<th>Todo</th>
							<th>Detail</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{todoLists &&
							todoLists.map((item) => (
								<tr key={item.id as Key}>
									<th>
										<label>
											<input
												type='checkbox'
												className='checkbox'
												checked={item.completed as boolean}
												onChange={() => handleStateChange(item)}
											/>
										</label>
									</th>
									<td>
										<div className='flex items-center gap-3'>
											<div
												className={
													item.completed
														? 'font-bold line-through'
														: 'font-bold'
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
											<button onClick={() => handleDeleteItem(item)}>
												<FaTrash className='text-error' />
											</button>
										</div>
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
