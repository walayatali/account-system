import React, { useState, useEffect, useCallback, useContext } from 'react';
import ReportEntry from './ReportEntry';
import classes from './Report.module.css';
import useGetData from '../../Hooks/useGetData';
import ReportContext from '../Store/report-context';


function Report(props)	{
	
	const ctxRep = useContext(ReportContext);
	const { expensesUpdated } = ctxRep;
  const loadedExpenses = [];
	const [expenses, setExpenses] = useState([]);
  const allKeys = ['Price', 'description', 'ItemDate'];
  useGetData(`https://expensetracker-706b7-default-rtdb.firebaseio.com/expense/${props.accountId}.json`, setExpenses, allKeys);

  useEffect(()=>{

  	if(typeof expensesUpdated.day !== 'undefined')
  	{
  		console.log(expensesUpdated.day);
  		setExpenses(expenses => [...expenses,expensesUpdated])
  	}
  },[expensesUpdated])
	

	// console.log(expenses);
	const accId = props.accountId;
	let midArr = [];
	if(expenses.length > 0){
		expenses.map(function(items,i){
			// if(accId == i){
				midArr.push(items);
			// }
			// if(accId-1 == i)
			// {
			// 	items.map(function(item,j){
			// 		midArr.push(item);
			// 	})

			// }
		})
	}
	return (
		<ul className={classes['expenses-list']}>
		{
			 midArr.length > 0 &&midArr.map(single => (
					<ReportEntry key={Math.random()} reportData={single}/> 
				))
		}

		</ul>
	)
}

export default Report;