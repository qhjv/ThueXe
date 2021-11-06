import React from 'react';
import PropTypes from 'prop-types';
import './car.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';

function Car(props) {
    const handleAdd = () => {

    }
    return (
        <div className="carBoard">
            <div className="carBoard-title">
                <h3>Danh sách xe</h3>
                <Button className="carBoard-title__add" variant="contained" startIcon={<AddCircleIcon/>}>
                    Thêm
                </Button>
            </div>
        </div>
    );
}

export default Car;