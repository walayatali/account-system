import React, {useState, useEffect, useCallback} from 'react';
import Card from '../UI/Card';
import AccountStatement from './AccountStatement';
import AddExpense from './AddExpense';
import NavBar from '../Header/NavBar';
import Modal from '../UI/Modal';
import useGetData from '../../Hooks/useGetData';
import classes from './ListAccounts.module.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
  useNavigate
} from "react-router-dom";


function ListAccounts(props)	{
	const navigate = useNavigate();
	let location = useLocation();
	const currLocation = location.pathname;

	const id = currLocation.substring(currLocation.lastIndexOf('/') + 1);

	const [accounts, setAccounts] = useState([]);

	const[showModal, setShowModal] = useState(false);
	const closeModalHandler = () => {
        setShowModal(false);      
    }
    const openModalHandler = () => {
        setShowModal(true);      
    }

    const navigateHandler = (e,logout=false) => {
        navigate(e);
        if(logout)
        {
        	props.logout()
        }      
    }
    const allKeys = ['id','name'];
    const {alldata, fetchDataHandler: getAccounts} = useGetData(allKeys);
    
    useEffect(() =>{
    	getAccounts('https://expensetracker-706b7-default-rtdb.firebaseio.com/accounts.json');
    	// return ()=>{
    	// 	setAccounts([]);
    	// }
    },[getAccounts])

	return (

		<>
			{ showModal && 
				<Modal onClose={closeModalHandler}>
					<AddExpense accounts={alldata} id={id} onCancel={closeModalHandler}/>
				</Modal> 
			}
			<Card>
				<div className={classes.nav_buttons}>
					<NavBar onClick={() => navigateHandler("/",true)} key="logout" link="/" account={{id:"logout", name:"Logout"}}/>
					<NavBar onClick={openModalHandler} key="add-expense" link={currLocation} account={{id:"add-expense", name:"Add Expense"}}/>
					<NavBar onClick={() => navigateHandler("/")} key="all_accounts" link="/" account={{id:"all_accounts", name:"all accounts"}}/>
				</div>
			</Card>

			{
				(alldata.length > 0 ) &&
					alldata.map(account => (
						<NavBar onClick={() => navigateHandler("/AccountStatement/" + account.id)} key={account.id} link={"/AccountStatement/" + account.id} account={account}/>
					))
			}
			<Routes>
				<Route  exact path="/AccountStatement/:accountId" element={<AccountStatement  />}  />
			</Routes>
		</>
	)
}

export default ListAccounts;