import React from 'react';
import PropTypes from 'prop-types';
import './mainBoard.css'
import { Route , Routes } from 'react-router-dom';
import Customer from './components/customer/customer'
import Car from './components/cars/car'

function MainBoard(props) {
    return (
        <div className="mainBoard">
            <div className="mainBoard-div">
                <Routes>
                    <Route path="/" element={<Customer/>}/>
                    <Route path="/car" element={<Car/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default MainBoard;