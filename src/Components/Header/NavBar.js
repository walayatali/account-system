import React,{ useMemo} from 'react';
import classes from './NavBar.module.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation
} from "react-router-dom";
function NavBar(props)	{
	let location = useLocation();
	const currLocation = useMemo(()=> {
		console.log(location.pathname)
	    return location.pathname;
	  }, [location.pathname])
	return (
		<>
	{ props.account.name !== 'all accounts' && !(currLocation.includes('AccountStatement')) && 	 
		<div key={props.account.id} className={classes.account} >
			<NavLink key={props.account.id} to={props.link}>{props.account.name}</NavLink>
		</div>
	}
	{ (currLocation.includes('AccountStatement')) && props.account.name === 'all accounts' && 	 
		<div key="all_accounts_div"  >
			<NavLink key="all_accounts_link" to={props.link}>{props.account.name}</NavLink>
		</div>
	}
	</>
	)
}

export default NavBar;