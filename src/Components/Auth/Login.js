import React from 'react';
import Card from '../UI/Card';
import LoginForm from './LoginForm';

function Login(props)	{
	return (
		<Card>
			<h1>Hello User</h1>
			<h2>Welcome To The Digital Account</h2>
			<LoginForm/>
		</Card>
	)
}

export default Login;