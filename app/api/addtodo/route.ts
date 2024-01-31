import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { userEmail, title, detail } = body;
		if (!userEmail || !title || !detail) {
			return new NextResponse('Missing Info', { status: 400 });
		}

		const todoItem = await prisma.todoItem.create({
			data: {
				title,
				detail,
				userEmail,
			},
		});

		return NextResponse.json(todoItem);
	} catch (error: any) {
		console.log(error, 'ADD_ITEM_ERROR');
		return new NextResponse('Internal Error', { status: 500 });
	}
}
