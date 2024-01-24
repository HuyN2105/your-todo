import connectMongoDB from '../../../libs/mongodb';
import TodoList from '../../../models/todo';
import { NextResponse } from 'next/server';

export async function POST(req) {
	const { id, title, detail, completed } = await req.json();
	await connectMongoDB();
	await TodoList.create({ id, title, detail, completed });
	return NextResponse.json({ message: 'TodoList Created' }, { status: 201 });
}
