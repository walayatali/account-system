import React, { useState, useEffect } from 'react';
import Login from './Components/Auth/Login';
import ListAccounts from './Components/Accounts/ListAccounts';
import AccountStatement from './Components/Accounts/AccountStatement';
import AuthContext from './Components/Store/auth-context';
import ReportContext from './Components/Store/report-context';
import AccountContext from './Components/Store/account-context';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
  useNavigate,
  Navigate
} from "react-router-dom";


function App() {

    const [userObj, setUserObj] = useState({email: '', password: ''});
    const [expenseNotify, setExpenseNotify] = useState({});
    const [accountNotify, setAccountNotify] = useState({});
    
    const authContextObj = {
        email: userObj.email,
        password: userObj.password,
        onSetUser: (email, password) => {
            setUserObj({email:email, password: password});
                localStorage.setItem("email", email);
        }
    }

    useEffect(() => {
        const localEmail = localStorage.getItem("email");

        if(localEmail){
            setUserObj({email:localEmail});
        }
        return () => {
          setUserObj({}); // This worked for me
        };
    },[]);

    const logoutHandler = () => {
        setUserObj({email: '', password: ''});
        localStorage.removeItem("email");

    }

    const expensesUpdatedObj = {
        expensesUpdated: expenseNotify,
        onExpensesUpdate: (val) => {
            setExpenseNotify(val);
        }
    }
    const accountsUpdatedObj = {
        accountsUpdated: accountNotify,
        onAccountsUpdate: (val) => {
            setAccountNotify(val);
        }
    }

    return (
        <AuthContext.Provider value={authContextObj}>
            {!(userObj.email) && <Login/>}
            {(userObj.email) && 
                <ReportContext.Provider value={expensesUpdatedObj}>
                    <AccountContext.Provider value={accountsUpdatedObj}>    
                        
                        <Routes>
                            <Route path="/" element={<ListAccounts logout={logoutHandler}/>}> 
                                <Route exact path="AccountStatement/:accountId" element={<AccountStatement  />}  />
                            </Route>
                        </Routes>
                    </AccountContext.Provider>
                </ReportContext.Provider>}
        </AuthContext.Provider>
    );
}

export default App;