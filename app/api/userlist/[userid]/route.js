import connectMongoDB from '@/libs/mongodb';
import TodoList from '@/models/todo';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
	const { userid } = params;
	await connectMongoDB();
	const todoList = await TodoList.find({ userId: userid });
	return NextResponse.json({ todoList }, { status: 200 });
}
