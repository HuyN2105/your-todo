import mongoose, { Schema } from 'mongoose';

const todoListSchemna = new Schema(
	{
		id: String,
		title: String,
		detail: String,
		completed: Boolean,
	},
	{
		timestamps: true,
	}
);

const TodoList =
	mongoose.models.TodoList || mongoose.model('TodoList', todoListSchemna);

export default TodoList;
