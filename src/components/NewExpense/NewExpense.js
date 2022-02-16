import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props)	{

	const [isEditing, setIsEditing] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
	    const expenseData = {
	      ...enteredExpenseData,
	      id: Math.random().toString()
	    };
	    props.onAddExpense(expenseData);
	    stopIsEditingHandler();
	  };

	  const startIsEditingHandler = () => {
	  	setIsEditing(true);
	  }

	  const stopIsEditingHandler = () => {
	  	setIsEditing(false);
	  }



	return (
		<div className="new-expense">
			{!isEditing && (<button onClick={startIsEditingHandler}>Add New Expense</button>)}
			{isEditing && (
					<ExpenseForm onCancel={stopIsEditingHandler}
					onSaveExpenseData={saveExpenseDataHandler}/>
				)
			}
		</div>
	);
}

export default NewExpense;