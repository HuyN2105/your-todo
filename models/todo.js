import mongoose, { Schema } from 'mongoose';

const todoListSchemna = new Schema(
	{
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
