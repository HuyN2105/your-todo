import React from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function page(req) {
	const userId = req.nextUrl.searchParams.get('id');
	cookies().set('userId', userId);
	redirect('/todo');
	return <div></div>;
}
