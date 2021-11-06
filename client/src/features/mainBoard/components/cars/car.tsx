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
            <div className="customer-list">
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên xe</th>
                            <th scope="col">Mô tả</th>
                            <th scope="col">Tình trạng</th>
                            <th scope="col">Biển số</th>
                            <th scope="col">Loại xe</th>
                            <th scope="col">Hãng xe</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Đơn giá(VND)</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Lambogini</td>
                            <td>oách lắm</td>
                            <td>Mới cứng</td>
                            <td>123456</td>
                            <td>2 chỗ</td>
                            <td>lambo</td>
                            <td>trống</td>
                            <td>1000000</td>
                            <td><a href="">Sửa/Xóa</a></td>
                            <td><a href="">Cho thuê</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Car;