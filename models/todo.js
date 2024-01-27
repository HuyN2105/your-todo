import mongoose, { Schema } from 'mongoose';

const todoListSchema = new Schema(
	{
		userId: String,
		title: String,
		detail: String,
		completed: Boolean,
	},
	{
		timestamps: true,
	}
);

const TodoList =
	mongoose.models.TodoList || mongoose.model('TodoList', todoListSchema);

export default TodoList;
