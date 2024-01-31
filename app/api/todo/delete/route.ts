import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { itemId } = body;
		const deleteItem = await prisma.todoItem.delete({
			where: {
				id: itemId,
			},
		});

		return NextResponse.json(deleteItem);
	} catch (error) {
		console.log(error, 'DELETE_ITEM_ERROR');
		return new NextResponse('Internal Error', { status: 500 });
	}
}
