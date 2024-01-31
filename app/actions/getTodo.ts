import prisma from '@/app/libs/prismadb';

const getTodoList = async (userId: string) => {
	try {
		const todo = await prisma.todoItem.findMany({
			where: {
				userId: userId,
			},
			orderBy: {
				createdAt: 'desc',
			},
		});
		return todo;
	} catch (error: any) {
		return [];
	}
};
