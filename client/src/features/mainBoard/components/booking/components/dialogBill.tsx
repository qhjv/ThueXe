import React,{useState,useEffect} from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid} from '@mui/material';
import Box from '@mui/material/Box';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import logo from '../../../../../assets/image/icon/logo.jpg'
function DialogBill(props) {
    const handleSubmit =()=>{
        alert("In thành công")
    }
    return (
        <Dialog
            fullWidth={true}
            maxWidth="xs"
            open={props.open}
            onClose={props.close}
            className="dialog-bill"
        >
            <Box component="form" noValidate sx={{ mt: 1 }}>
                <DialogContent sx={{display: 'flex',paddingTop:"0",alignItems:"start"}}>
                    <div className="bill-div">
                        <div className="bill-title">
                            <div className="bill-title__logo">
                                <img src={logo} alt="logo"/>
                            </div>
                            <div className="bill-title__h3">
                                HÓA ĐƠN THUÊ XE
                            </div>
                            <div className="bill-title__code">
                                Mã hóa đơn : BQQWW
                            </div>
                        </div>
                        <div className="bill-store bill">
                            <div className="bill-store__name">
                                <div className="store-name__label dialog-bill__label">Tên cửa hàng :</div>
                                <div className="store-name__value dialog-bill__value">QH Gara</div>
                            </div>
                            <div className="bill-store__code">
                                <div className="store-code__label dialog-bill__label">Mã số thuế :</div>
                                <div className="store-code__value dialog-bill__value">100000125631563</div>
                            </div>
                            <div className="bill-store__address">
                                <div className="store-address__label dialog-bill__label">Địa chỉ :</div>
                                <div className="store-address__value dialog-bill__value">Nam Định</div>
                            </div>
                            <div className="bill-store__tel">
                                <div className="store-tel__label dialog-bill__label">Số điện thoại :</div>
                                <div className="store-tel__value dialog-bill__value">100000</div>
                            </div>
                        </div>
                        <div className="bill-customer bill">
                            <div className="bill-customer__name">
                                <div className="customer-name__label dialog-bill__label">Tên khách hàng :</div>
                                <div className="customer-name__value dialog-bill__value">Vũ QUnag Huy</div>
                            </div>
                            <div className="bill-customer__tel">
                                <div className="customer-tel__label dialog-bill__label">Số điện thoại :</div>
                                <div className="customer-tel__value dialog-bill__value">100000</div>
                            </div>
                            <div className="bill-customer__address">
                                <div className="customer-address__label dialog-bill__label">Địa chỉ :</div>
                                <div className="customer-address__value dialog-bill__value">cấu giáy hà nội</div>
                            </div>
                            <div className="bill-customer__status">
                                <div className="customer-status__label dialog-bill__label">Hình thức thanh toán :</div>
                                <div className="customer-status__value dialog-bill__value">Trực tiếp</div>
                            </div>
                        </div>
                        <div className="bill-car bill">
                            <table className="table table-hover table-bordered ">
                                <thead>
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Tên xe</th>
                                        <th scope="col">Đơn vị tính</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Ngày thuê</th>
                                        <th scope="col">Ngày trả</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>hihi</td>
                                        <td>chiếc</td>
                                        <td>1</td>
                                        <td>100000</td>
                                        <td>1000000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bill-price bill">
                            <div className="bill-price1">
                                <div className="bill-price__label dialog-bill__label">Thành tiền<small>(Giá tiền x ngày thuê + VAT(10%))</small>:</div>
                                <div className="bill-price__value dialog-bill__value">100000</div>
                            </div>
                            <div className="bill-price2">
                                <div className="bill-price1__label dialog-bill__label">Tiền cọc<small>(khách hàng được hoàn lại sau khi trả xe)</small>:</div>
                                <div className="bill-price1__value dialog-bill__value">100000</div>
                            </div>
                            <div className="bill-price3">
                                <div className="bill-price2__label dialog-bill__label">Tổng số tiền :</div>
                                <div className="bill-price2__value dialog-bill__value">100000</div>
                            </div>
                        </div>
                        <div className="bill-signature bill">
                            <div className="bill-signature__store">
                                <div className="bill-signature__label dialog-bill__label">Người mua hàng</div>
                                <div className="bill-signature__value">(Ký và ghi rõ họ tên)</div>
                            </div>
                            <div className="bill-signature__user">
                                <div className="bill-signature__label dialog-bill__label">Người bán hàng</div>
                                <div className="bill-signature__value">(Ký và ghi rõ họ tên)</div>
                            </div>
                            <div className="bill-signature__customer">
                                <div className="bill-signature__label dialog-bill__label">Giám đốc cửa hàng</div>
                                <div className="bill-signature__value">Vũ Quang Huy</div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                        <Button onClick={props.close} color="inherit" >Bỏ qua</Button>
                        <Button onClick={handleSubmit} color="primary">In hóa đơn</Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
}

export default DialogBill;