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

const getTodoList = async () => {
	try {
		const res = await fetch('http://localhost:3000/api/todolist/', {
			cache: 'no-store',
		});

		if (!res.ok) {
			throw new Error('Failed to fetch todoList');
		}
		const data = await res.json();
		return data.todoList;
	} catch (error) {
		console.log('Error Loading TodoList: ', error);
	}
};

export default async function TodoList() {
	const todoLists: List[] = await getTodoList();
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
							<tr>
								<th>
									<label>
										<input type='checkbox' className='checkbox' />
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
