'use client';
import React, { useEffect, useState, Key } from 'react';

import NavBar from '../navBar';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { useSession } from 'next-auth/react';

function Todo() {
	const session = useSession();
	console.log(session);

	return (
		<>
			<TodoList />
			<AddTodo />
		</>
	);
}

export default Todo;
