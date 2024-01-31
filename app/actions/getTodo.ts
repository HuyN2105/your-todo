import prisma from '@/app/libs/prismadb';

const getTodoList = async (sessionEmail: string) => {
	try {
		const user = await prisma.user.findMany({
			include: {
				todoList: true,
			},
			where: {
				email: sessionEmail,
			},
		});
		return user;
	} catch (error: any) {
		return [];
	}
};

export default getTodoList;
