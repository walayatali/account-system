import React from 'react';
import Card from '../UI/Card';
import AccountStatement from './AccountStatement';
import NavBar from '../Header/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

const DummyAccounts = [
	{id: "1", name:"Salman"},
	{id: "2", name:"Ali"},
	{id: "3", name:"Nobahar"}
];



function ListAccounts(props)	{
	return (
		<Card>
						
						<NavBar onClick={props.logout} key="sdasdsdsa" link="/" account={{id:"121223243", name:"Logout"}}/>
						
						<NavBar key="sdasd" link="/" account={{id:"1212", name:"all accounts"}}/>
				{   
					DummyAccounts.map(account => (
						<NavBar key={account.id} link={"/AccountStatement/" + account.id} account={account}/>
					))
				}
				<Routes>
							<Route exact path="/AccountStatement/:accountId" element={<AccountStatement  />}  />
				</Routes>
		</Card>
	)
}

export default ListAccounts;