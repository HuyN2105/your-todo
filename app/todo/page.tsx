'use client';
import React, { useEffect, useState, Key } from 'react';

import NavBar from '../navBar';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

// interface List {
// 	_id: String;
// 	title: String;
// 	detail: String;
// 	completed: Boolean;
// 	createdAt: String;
// 	updatedAt: String;
// 	__v: Number;
// }

function Todo() {
	const [todoLists, setTodoLists] = useState([]);
	const [reFetch, setReFetch] = useState(['']);

	function handleReFetch() {
		useEffect(() => {
			fetch('/api/todolist', { cache: 'no-store' })
				.then((res) => res.json())
				.then((data) => {
					setTodoLists(data.todoList);
				});
		});
	}

	handleReFetch();

	return (
		<>
			<NavBar currentPage='Todo' />
			<TodoList todoLists={todoLists} />
			<AddTodo todoLists={todoLists} handleReFetch={handleReFetch} />
		</>
	);
}

export default Todo;
