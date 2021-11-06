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
            <div className="customer-list">
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry the Bird</td>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Customer;