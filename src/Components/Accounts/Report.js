import React, { useState, useEffect, useCallback } from 'react';
import ReportEntry from './ReportEntry';
import classes from './Report.module.css';

const dummyReportsEntries = [
	[
		{month:"Mar", year: "2022", day:"01", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"02", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"03", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"04", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"05", description: "thakjsjkadna", price: "210"},
	],
	[
		{month:"Mar", year: "2022", day:"06", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"07", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"08", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"09", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"10", description: "thakjsjkadna", price: "210"},
	],
	[
		{month:"Mar", year: "2022", day:"11", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"12", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"13", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"14", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"15", description: "thakjsjkadna", price: "210"},
	]
];


function Report(props)	{
	const [expenses, setExpenses] = useState([]);
  const loadedExpenses = [];

	const fetchExpensesHandler = useCallback(async () => {
    
    try {
      const response = await fetch('https://expensetracker-706b7-default-rtdb.firebaseio.com/expense.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();


      const innerLoadedExpenses = [];
      for (const key in data) {
      	var d = new Date(data[key].ItemDate);
        innerLoadedExpenses.push({
          id: key,
          description: data[key].description,
          price: data[key].Price,
          month: d.getMonth()+1,
          day: d.getUTCDate(),
          year: d.getFullYear(),
        });
      }
      loadedExpenses.push(innerLoadedExpenses);
      setExpenses(loadedExpenses);
      // console.log(loadedExpenses);
      // console.log(dummyReportsEntries);

      
    } catch (error) {
      
    }
  }, []);

	useEffect(() => {
	    fetchExpensesHandler();
	}, [fetchExpensesHandler]);

      console.log(loadedExpenses);


	const accId = props.accountId;
	let midArr = [];
	expenses.map(function(items,i){
		if(accId-1 == i)
		{
			items.map(function(item,j){
				midArr.push(item);
			})

		}
	})
	return (
		<ul className={classes['expenses-list']}>
		{
			midArr.map(single => (
				<ReportEntry key={Math.random()} reportData={single}/> 
				))
		}

		</ul>
	)
}

export default Report;