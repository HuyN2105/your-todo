'use client';
import React, { useEffect, useState, Key } from 'react';
import { redirect } from 'next/navigation';

import NavBar from '../navBar';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function Todo() {
	if (typeof window !== 'undefined' && localStorage.getItem('userId') == null)
		redirect('/login');

	const [todoLists, setTodoLists] = useState([]);
	const ListRequestURL = '/api/userlist/' + sessionStorage.getItem('userId');

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
			<NavBar currentPage='Todo' />
			<TodoList todoLists={todoLists} />
			<AddTodo />
		</>
	);
}

export default Todo;
