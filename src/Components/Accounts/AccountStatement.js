import React,{ useEffect } from 'react';
import Card from '../UI/Card';
import { useParams} from 'react-router-dom';

function AccountStatement(props)	{
	const params = useParams();
  	const { accountId } = params;

	return (
		<Card>
			<h1>Hello {accountId}!</h1>
		</Card>
	)
}

export default AccountStatement;