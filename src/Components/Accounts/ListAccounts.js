import React from 'react';
import Card from '../UI/Card';
import classes from './ListAccounts.module.css';
import AccountStatement from './AccountStatement';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";

const DummyAccounts = [
	{id: "1", name:"Salman"},
	{id: "2", name:"Ali"},
	{id: "3", name:"Nobahar"}
];


function ListAccounts(props)	{

	return (
		<Card>
			<button onClick={props.logout}>Logout</button>
			<Router>
				{
					DummyAccounts.map(account => (
						<div key={account.id} className={classes.account} >
						
							<NavLink to={"/AccountStatement/" + account.name}>{account.name}</NavLink>
						
						</div>
					))
				}
				<Routes>

							<Route exact path="/AccountStatement/:accountId" element={<AccountStatement />}  />


				</Routes>
			</Router>
		</Card>
	)
}

export default ListAccounts;