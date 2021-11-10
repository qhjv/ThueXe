import React from 'react';
import PropTypes from 'prop-types';
import './mainBoard.css'
import { Route , Routes , BrowserRouter as Redirect  } from 'react-router-dom';
import Customer from './components/customer/customer'
import Car from './components/cars/car'
import BookManage from './components/bookmanage/bookManage'
import Booking from './components/booking/booking'

function MainBoard(props) {
    return (
        <div className="mainBoard">
            <div className="mainBoard-div">
                <Routes>
                    <Route path="/" element={<Customer/>}/>
                    <Route path="/car" element={<Car/>}/>
                    <Route path="/booked" element={<BookManage/>}/>
                    <Route path="/booking/:id" element={<Booking/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default MainBoard;