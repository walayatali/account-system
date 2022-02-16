import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate ExpDate = {props.ItemDate}/>
				<div className="expense-item__description">
					<h2>{props.Title}</h2>
					<p className="expense-item__price">$ {props.Price}</p>
				</div>
			</Card>
		</li>
	)
}
export default ExpenseItem