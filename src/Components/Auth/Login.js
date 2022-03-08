import React from 'react';
import Card from '../UI/Card';
import LoginForm from './LoginForm';

function Login(props)	{
	return (
		<Card>
			<h1>Welcome To The Digital Account</h1>
			<LoginForm/>
		</Card>
	)
}

export default Login;