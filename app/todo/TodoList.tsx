import React from 'react';

function TodoList() {
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
						{/* row 1 */}
						<tr>
							<th>
								<label>
									<input type='checkbox' className='checkbox' />
								</label>
							</th>
							<td>
								<div className='flex items-center gap-3'>
									<div className='font-bold'>Hart Hagerty</div>
								</div>
							</td>
							<td>
								<span className='badge badge-ghost badge-sm'>
									Desktop Support Technician
								</span>
							</td>
						</tr>
						{/* row 2 */}
						<tr>
							<th>
								<label>
									<input type='checkbox' className='checkbox' />
								</label>
							</th>
							<td>
								<div className='flex items-center gap-3'>
									<div className='font-bold'>Hart Hagerty</div>
								</div>
							</td>
							<td>
								<span className='badge badge-ghost badge-sm'>
									Desktop Support Technician
								</span>
							</td>
						</tr>
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
