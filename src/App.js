import React, { useState, useEffect } from 'react';
import Login from './Components/Auth/Login';
import ListAccounts from './Components/Accounts/ListAccounts';
import AuthContext from './Components/Store/auth-context';


function App() {
    const [userObj, setUserObj] = useState({email: '', password: ''});
    
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
    },[]);

    const logoutHandler = () => {
        setUserObj({email: '', password: ''});
        localStorage.removeItem("email");

    }



    return (
        <AuthContext.Provider value={authContextObj}>
            {!(userObj.email) && <Login/>}
            {(userObj.email) && <ListAccounts logout={logoutHandler}/>}
        </AuthContext.Provider>
    );
}

export default App;
