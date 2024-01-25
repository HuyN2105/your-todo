import connectMongoDB from '@/libs/mongodb';
import TodoList from '@/models/todo';
import { NextResponse } from 'next/server';

export async function POST(req) {
	const { title, detail, completed } = await req.json();
	await connectMongoDB();
	await TodoList.create({ title, detail, completed });
	return NextResponse.json({ message: 'TodoItem Added' }, { status: 201 });
}

export async function GET() {
	await connectMongoDB();
	const todoList = await TodoList.find();
	return NextResponse.json({ todoList });
}

export async function DELETE(req) {
	const id = req.nextUrl.searchParams.get('id');
	await connectMongoDB();
	await TodoList.findByIdAndDelete(id);
	return NextResponse.json({ message: 'TodoItem deleted' }, { status: 200 });
}
