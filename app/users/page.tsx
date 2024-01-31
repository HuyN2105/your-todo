'use client';
import React from 'react';
import { signOut } from 'next-auth/react';
import NavBar from '../navBar';

function Users() {
	return (
		<>
			<button onClick={() => signOut()}>Logout</button>
		</>
	);
}

export default Users;
