import React, {useState} from 'react';
import Card from '../UI/Card';
import AccountStatement from './AccountStatement';
import AddExpense from './AddExpense';
import NavBar from '../Header/NavBar';
import Modal from '../UI/Modal';
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

	const[showModal, setShowModal] = useState(false);
	const closeModalHandler = () => {
        setShowModal(false);      
    }
    const openModalHandler = () => {
        setShowModal(true);      
    }

	return (
		<Card>
			{showModal && <Modal onClose={closeModalHandler}><AddExpense onCancel={closeModalHandler}/></Modal>}
			<NavBar onClick={props.logout} key="sdasdsdsa" link="/" account={{id:"121223243", name:"Logout"}}/>
			<NavBar onClick={openModalHandler} key="exp_1212" link="/" account={{id:"exp_123", name:"Add Expense"}}/>
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