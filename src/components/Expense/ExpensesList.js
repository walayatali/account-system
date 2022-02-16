import React from 'react';
import  './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props)	{

	let conditionalContent = <h2>No Items found !!!</h2>;

    if (props.subExpenses.length > 0) {
        conditionalContent = props.subExpenses.map(exp => 
          <ExpenseItem
                key = {exp.id} 
                ItemDate = {exp.ItemDate}
                Title = {exp.Title}
                Price = {exp.Price}
            />  
        )
    }

	return (
        <ul className="expenses-list">
            {conditionalContent}
        </ul>
	)
}

export default ExpensesList;