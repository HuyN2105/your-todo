import connectMongoDB from '@/libs/mongodb';
import UserList from '@/models/user';
import { NextResponse } from 'next/server';

export async function POST(req) {
	const { email, password } = await req.json();
	await connectMongoDB();
	await UserList.create({ email, password });
	return NextResponse.json({ message: 'User Added' }, { status: 201 });
}

export async function GET(req) {
	await connectMongoDB();
	try {
		const email = req.nextUrl.searchParams.get('email');
		const user = await UserList.findOne({ email: email });
		try {
			const pass = req.nextUrl.searchParams.get('pass');
			if (pass != null) return NextResponse.json({ userId: user._id });
			else throw new Error('r');
		} catch (error) {
			return NextResponse.json({ pass: user.password });
		}
	} catch (e) {
		const userList = await UserList.find();
		return NextResponse.json({ userList });
	}
}

export async function DELETE(req) {
	const id = req.nextUrl.searchParams.get('id');
	await connectMongoDB();
	await UserList.findByIdAndDelete(id);
	return NextResponse.json({ message: 'User deleted' }, { status: 200 });
}
