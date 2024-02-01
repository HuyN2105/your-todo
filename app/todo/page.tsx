'use client';
import React, { useEffect, useState, Key } from 'react';

import NavBar from '../navBar';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function Todo() {
	const [reFetch, setReFetch] = useState(false);

	function handleRefetch() {
		setReFetch(!reFetch);
	}

	return (
		<>
			<TodoList handleRefetch={handleRefetch} reFetch={reFetch} />
			<AddTodo handleRefetch={handleRefetch} />
		</>
	);
}

export default Todo;
