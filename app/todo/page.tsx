import React from 'react';
import NavBar from '../navBar';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function Todo() {
	return (
		<>
			<NavBar currentPage='Todo' />
			<TodoList />
			<AddTodo />
		</>
	);
}

export default Todo;
