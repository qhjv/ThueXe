import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import './car.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import carApi from 'api/carAPI';

function Car(props) {
    interface Car {
        _id: string;
        name: string;
        description: string;
        failure: string;
        licensePlate: string;
        type: string;
        company: string;
        status: Boolean;
        price: string;
    }
    const [cars, setCars] = useState<any>([]);

    const getCar = async()=>{
        (async () => {
            try {
                // setLoading(true)
                const carList = await carApi.getAllCar();
                setCars(carList)
                // const action = getMovie(moviesList)
                // dispatch(action)
                // setLoading(false)
                console.log(carList)
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
        getCar()
    }, [])
    const handleAdd = () => {

    }
    return (
        <div className="carBoard">
            <ToastContainer />
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
                        {(cars?cars:[]).map((car,index)=>(
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{car.name}</td>
                                <td>{car.description}</td>
                                <td>{car.failure}</td>
                                <td>{car.licensePlate}</td>
                                <td>{car.type}</td>
                                <td>{car.company}</td>
                                <td>{car.status==true?"Bận":"Trống"}</td>
                                <td>{car.price}</td>
                                <td><a href="">Sửa/Xóa</a></td>
                                <td><a href="">Cho thuê</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Car;