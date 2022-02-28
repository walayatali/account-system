import React, { useRef, useReducer } from 'react';
import Card from '../UI/Card';
import classes from './FilterReport.module.css';

const filterReducer = (state, action) => {
	
	if (action.type == 'DATE_VALIDATE') {
		let currThisDate = new Date();
		let currDate =  currThisDate.toISOString().split('T')[0];
		if (action.filterDate.trim() === "")
		{
			return {
				filterDate: action.filterDate, filterPrice: state.filterPrice, filterValid: false
			}	
		}
		else if (action.filterDate.trim() === currDate)
		{
			return {
				filterDate: action.filterDate, filterPrice: state.filterPrice,filterValid: false
			}	
		}
		else{
			return {
				filterDate: action.filterDate, filterPrice: state.filterPrice, filterValid: true
			}	
		}
	}
	else if (action.type == 'PRICE_VALIDATE') {
		if (action.filterPrice.trim() === "")
		{
			return {
				filterDate: state.filterDate, filterPrice: action.filterPrice,filterValid: false
			}	
		}
		else if (action.filterPrice.trim() < 0)
		{
			return {
				filterDate: state.filterDate, filterPrice: action.filterPrice, filterValid: false
			}	
		}
		else{
			return {
				filterDate: state.filterDate, filterPrice: action.filterPrice, filterValid: true
			}	
		}
	}
	
		return state;

}

function FilterReport(props)	{
	const priceRef = useRef();
	const dateRef = useRef();
	
	const filterDateChangeHandler = () => {
		dispatch({type: "DATE_VALIDATE", filterDate: dateRef.current.value})
	}

	const filterPriceChangeHandler = () => {
		dispatch({type: "PRICE_VALIDATE", filterPrice: priceRef.current.value})
	}

	const submitHandler = (e) => {
		e.preventDefault();
		props.onFilterExpenses(dateRef.current.value, priceRef.current.value);
	}

	const InitialFilter = {filterDate : Date.now(), filterPrice: "", filterValid: false};
	const [filterState, dispatch] =  useReducer(filterReducer, InitialFilter);
	
	return (
		<Card>
			<div className={classes['new-filter']}>
				<form onSubmit = {submitHandler}>
					<div className={classes['new-filter__controls']}>
						<div className={classes['new-filter__control']}>
							<label>Filter By Date</label>
							<input ref={dateRef} onChange={filterDateChangeHandler} type="date" />
						</div>
					</div>
					<div className={classes['new-filter__controls']}>
						<div className={classes['new-filter__control']}>
							<label>Filter By Price</label>
							<input ref={priceRef} onChange={filterPriceChangeHandler} type="text" />
						</div>
					</div>
					<div className={classes['new-filter__actions']}>
						<button disabled={!filterState.filterValid} type="submit">
							Filter
						</button>
					</div>	
				</form>
			</div>
		</Card>
	)
}

export default FilterReport;