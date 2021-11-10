import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link, useParams  } from 'react-router-dom';
import useCustomerInfo from '../../../../hooks/useCustomerInfo'
import './booking.css'
import { ToastContainer, toast } from 'react-toastify';
import carApi from 'api/carAPI';

function Booking(props) {
    const [cars, setCars] = useState<any>([]);
    const [oneCustomer, setOneCustomer] = useState<any>({});

    let { id } = useParams();
    const {customer,loading}= useCustomerInfo(id)

    const getCar = async()=>{
        (async () => {
            try {
                // setLoading(true)
                const carList = await carApi.getAllCar();
                setCars(carList)
                // const action = getMovie(moviesList)
                // dispatch(action)
                // setLoading(false)
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
        setOneCustomer(customer)
    }, [customer])
    return (
        <div className="booking-div">
            <ToastContainer/>
            <div className="booking-back">
                <Link className="button-active button-back"  to="/" >
                    <i className ="fas fa-chevron-left"></i>
                    Trở về
                </Link>
            </div>
            <div className="booking-info">
                <div className="booking-info__div booking-info__name">
                    <div className="booking-info__label">Khách hàng : </div>
                    <div className="booking-info__value">{oneCustomer.name}</div>
                </div>
                <div className="booking-info__div booking-info__age">
                    <div className="booking-info__label">Tuổi : </div>
                    <div className="booking-info__value">{oneCustomer.age}</div>
                </div>
                <div className="booking-info__div booking-info__address">
                    <div className="booking-info__label">Địa chỉ : </div>
                    <div className="booking-info__value">{oneCustomer.address}</div>
                </div>
                <div className="booking-info__div booking-info__tel">
                    <div className="booking-info__label">Số điện thoại : </div>
                    <div className="booking-info__value">{oneCustomer.tel}</div>
                </div>
                <div className="booking-info__div booking-info__select">
                    <div className="booking-info__label">Chọn xe cho thuê : </div>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Chọn xe</option>
                        {(cars?cars:[]).map((car,index)=>(
                            <option key={index} value={car._id} disabled={(car.status===true?true:false)}>
                                {car.name} ( {car.status===true?"Bận":"Trống"} )
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Booking;