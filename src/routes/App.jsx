import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import RecoveryPassword from '../containers/RecoveryPassword';
import '../styles/global.css';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import AppContext from "../context/AppContext";
import useInitialState from '../hooks/useInitialState';
const App = () =>{
    const initialState = useInitialState();
    return(
        <AppContext.Provider value={initialState}>
            <BrowserRouter basename="/CursoPracticoReactPlatzi">
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/recovery-password" element={<RecoveryPassword />} />
                        <Route path="/password-recovery" component={<PasswordRecovery/>}/>
                        <Route path="/send-email" component={<SendEmail/>}/>
                        <Route path="/new-password" component={<NewPassword/>}/>
                        <Route path="/account" component={<MyAccount/>}/>
                        <Route path="/signup" component={<CreateAccount/>}/>
                        <Route path="/checkout" component={<Checkout/>}/>
                        <Route path="/orders" component={<Orders/>}/>
                        <Route path="*"  element={<NotFound/>} /> 
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;