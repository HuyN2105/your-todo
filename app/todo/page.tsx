'use client';
import React, { useEffect, useState, Key } from 'react';

import NavBar from '../navBar';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function Todo() {
	const [todoLists, setTodoLists] = useState([]);
	const ListRequestURL = '/api/userlist/';

	// function useHandleReFetch() {
	useEffect(() => {
		fetch(ListRequestURL, { cache: 'no-store' })
			.then((res) => res.json())
			.then((data) => {
				setTodoLists(data.todoList);
			});
	});
	// }
	// useHandleReFetch();

	return (
		<>
			<TodoList todoLists={todoLists} />
			<AddTodo />
		</>
	);
}

export default Todo;
