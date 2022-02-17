import React from 'react';
import ReportEntry from './ReportEntry';
import classes from './Report.module.css';

const dummyReportsEntries = [
	[
		{month:"Mar", year: "2022", day:"01", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"01", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"01", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"01", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"01", description: "thakjsjkadna", price: "210"},
	],
	[
		{month:"Mar", year: "2022", day:"01", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"02", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"03", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"04", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"05", description: "thakjsjkadna", price: "210"},
	],
	[
		{month:"Mar", year: "2022", day:"01", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"01", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"01", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"01", description: "thakjsjkadna", price: "210"},
		{month:"Mar", year: "2022", day:"01", description: "thakjsjkadna", price: "210"},
	]
]

function Report(props)	{
	const accId = props.accountId;
	let midArr = []
	dummyReportsEntries.map(function(items,i){
		if(accId == i)
		{
			items.map(function(item,j){
				midArr.push(item);
				console.log(midArr);
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