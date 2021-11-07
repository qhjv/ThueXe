import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import './customer.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import customerApi from 'api/customerAPI';

function Customer(props) {
    interface Customer {
        _id: string;
        name: string;
        age: string;
        address: string;
        tel: string;
        status: Boolean;
    }
    const [customers, setCustomers] = useState<any>([]);

    const getCustomer = async()=>{
        (async () => {
            try {
                // setLoading(true)
                const customerList = await customerApi.getAllCustomer();
                setCustomers(customerList)
                // const action = getMovie(moviesList)
                // dispatch(action)
                // setLoading(false)
                console.log(customerList)
            } catch (error:any) {
                toast.error(`${error.response.data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        })();
    }
    useEffect(() => {
        getCustomer()
    }, [])
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
                            <th scope="col">STT</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Tuổi</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {(customers?customers:[]).map((customer,index)=>(
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{customer.name}</td>
                                <td>{customer.age}</td>
                                <td>{customer.address}</td>
                                <td>{customer.status==true?"Đang thuê":"Trống"}</td>
                                <td><a href="">Sửa/Xóa</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Customer;