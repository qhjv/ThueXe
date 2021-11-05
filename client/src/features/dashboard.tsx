import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../components/menu/menu'
import './dashBoard.css'
import MainBoard from './mainBoard/mainBoard'
function Dashboard(props){
    const handleLogout = () => {
        localStorage.removeItem('adminGara');
        props.setUserState();
    }
    return (
        <div className="dashboard">
            <Menu/>
            <MainBoard/>
            <button className="logout" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;