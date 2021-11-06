import React from 'react';
import PropTypes from 'prop-types';
import './customer.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';

function Customer(props) {
    return (
        <div className="customer">
            <div className="customer-title">
                <h3>Danh sách khách hàng</h3>
                <Button className="customer-title__add" variant="contained" startIcon={<AddCircleIcon/>}>
                    Thêm
                </Button>
            </div>
        </div>
    );
}

export default Customer;