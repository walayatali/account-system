import React, { useState } from 'react';
import classes from './AddExpense.module.css';


function AddExpense(props)	{

async function addExpenseHandler(expense) {
	const response = await fetch('https://expensetracker-706b7-default-rtdb.firebaseio.com/expense.json', {
	  method: 'POST',
	  body: JSON.stringify(expense),
	  headers: {
	    'Content-Type': 'application/json'
	  }
	});
	const data = await response.json();
	console.log(data);
}


const [userInput, setUserInput] = useState({
	description: '',
	price: '',
	date: '',
});

const descriptionChangeHandler = (e) => {

	setUserInput((prevState)  => {
		return {...prevState, description: e.target.value}
	});

}

const priceChangeHandler = (e) => {

	setUserInput((prevState)  => {
		return {...prevState, price: e.target.value}
	});
	
}

const dateChangeHandler = (e) => {

	setUserInput((prevState)  => {
		return {...prevState, date: e.target.value}
	});
	
}

const submitHandler = (e) => {
	e.preventDefault();

	const expenseData = {
		"description": userInput.description,
		"Price": userInput.price,
		"ItemDate": new Date(userInput.date),
	};
	addExpenseHandler(expenseData)
	setUserInput({
		description: '',
		price: '',
		date: ''
	});
}
	return (
		<div className={classes['new-expense']}>
			<form onSubmit = {submitHandler}>
				<div className={classes['new-expense__controls']}>
					<div className={classes['new-expense__control']}>
						<label>Description</label>
						<input onChange={descriptionChangeHandler} type="text" value={userInput.description}/>
					</div>
					<div className={classes['new-expense__control']}>
						<label>price</label>
						<input onChange={priceChangeHandler} type="number" min="0.01" step="0.01" value={userInput.price}/>
					</div>
					<div className={classes['new-expense__control']}>
						<label>Date</label>
						<input onChange={dateChangeHandler} type="date" min="2018-01-01" step="2022-12-31" value={userInput.date}/>
					</div>
				</div>
				<div className={classes['new-expense__actions']}>
					<button onClick={props.onCancel} type="button">
						Cancel
					</button>
					<button type="submit">
						Add Expense
					</button>
				</div>	
			</form>
		</div>
	)
}

export default AddExpense;