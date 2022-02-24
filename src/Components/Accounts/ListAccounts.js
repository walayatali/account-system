import React, {useState, useEffect, useCallback} from 'react';
import Card from '../UI/Card';
import AccountStatement from './AccountStatement';
import AddExpense from './AddExpense';
import NavBar from '../Header/NavBar';
import Modal from '../UI/Modal';
import useGetData from '../../Hooks/useGetData';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";


function ListAccounts(props)	{
	let location = useLocation();
	const currLocation = location.pathname;

	const id = currLocation.substring(currLocation.lastIndexOf('/') + 1);
	console.log(id);

	const [accounts, setAccounts] = useState([]);

	const[showModal, setShowModal] = useState(false);
	const closeModalHandler = () => {
        setShowModal(false);      
    }
    const openModalHandler = () => {
        setShowModal(true);      
    }
    const allKeys = ['id','name'];
    const {alldata} = useGetData('https://expensetracker-706b7-default-rtdb.firebaseio.com/accounts.json', allKeys, accounts);
    

	return (

		<Card>
			{ showModal && <Modal onClose={closeModalHandler}><AddExpense accounts={alldata} id={id} onCancel={closeModalHandler}/></Modal>}
			<NavBar onClick={props.logout} key="sdasdsdsa" link="/" account={{id:"121223243", name:"Logout"}}/>
			<NavBar onClick={openModalHandler} key="exp_1212" link={currLocation} account={{id:"exp_123", name:"Add Expense"}}/>
			<NavBar key="sdasd" link="/" account={{id:"1212", name:"all accounts"}}/>
			{
				(alldata.length > 0 ) &&
					alldata.map(account => (
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