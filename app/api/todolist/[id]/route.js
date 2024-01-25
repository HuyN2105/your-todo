import connectMongoDB from '@/libs/mongodb';
import TodoList from '@/models/todo';
import { NextResponse } from 'next/server';

export async function PUT(req, { params }) {
	const { id } = params;
	const {
		newTitle: title,
		newDetail: detail,
		newState: completed,
	} = await req.json();
	await connectMongoDB();
	await TodoList.findByIdAndUpdate(id, { title, detail, completed });
	return NextResponse.json({ message: 'TodoItem Updated' }, { status: 200 });
}

export async function GET(req, { params }) {
	const { id } = params;
	await connectMongoDB();
	const todoList = await TodoList.findOne({ _id: id });
	return NextResponse.json({ todoList }, { status: 200 });
}
