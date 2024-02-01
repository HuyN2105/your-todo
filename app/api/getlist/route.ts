import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { userEmail } = body;

		if (!userEmail) {
			return new NextResponse(userEmail, { status: 400 });
		}

		const User = await prisma.user.findUnique({
			where: {
				email: userEmail,
			},
			include: {
				todoList: true,
			},
		});
		return NextResponse.json(User);
	} catch (error) {
		console.log(error, 'GET_LIST_ERROR');
		return new NextResponse('Internal Error', { status: 500 });
	}
}
