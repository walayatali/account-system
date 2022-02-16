import React, { useState } from 'react';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
    
    let AllExpenses = props.AllExpenses;


    const [ expenseFilterYear, setExpenseFilterYear ] = useState('2022');

    const expensesFilterHandler = (filterVal) => {
        setExpenseFilterYear(filterVal);
    }

    const subExpenses =  AllExpenses.filter(function (el) {
        return el.ItemDate.getFullYear().toString() === expenseFilterYear;
    });

	return (
        <div>
    		<Card className="expenses">
            <ExpensesFilter onChangeExpensesFilter = {expensesFilterHandler} selected={expenseFilterYear}/>
            <ExpenseChart expenses = {subExpenses} />
             <ExpensesList subExpenses = {subExpenses}/>   
            </Card>
        </div>
	)
}
export default Expenses;