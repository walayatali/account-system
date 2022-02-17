import React,{ useMemo } from 'react';
import Card from '../UI/Card';
import { useParams} from 'react-router-dom';
import Report from './Report';

function AccountStatement(props)	{
	const params = useParams();
  	const { accountId } = params;

	return (
			<Report accountId={accountId} />
	)
}

export default AccountStatement;