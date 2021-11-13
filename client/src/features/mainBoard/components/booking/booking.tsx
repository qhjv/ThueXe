import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link, useParams  } from 'react-router-dom';
import useCustomerInfo from '../../../../hooks/useCustomerInfo'
import './booking.css'
import { ToastContainer, toast } from 'react-toastify';
import carApi from 'api/carAPI';
import FilterCarByDate from './components/filterCarByDate'
import DialogBill from './components/dialogBill'
import { formatPrice } from 'utils/formatPrice';
import billApi from 'api/billAPI';
import { format, compareAsc } from 'date-fns'
import { useNavigate } from "react-router-dom";

function Booking(props) {
    let history = useNavigate();
    const [cars, setCars] = useState<any>([]);
    const [filterDay, setFilterDay] = useState<any>([]);
    const [day, setDay] = useState<any>();
    const [oneCustomer, setOneCustomer] = useState<any>({});
    const [oneCar, setOneCar] = useState<any>({});
    const [bill, setBill] = useState<any>({
        billCode:"",
        carCode:"",
        customerCode:"",
        startDay:"",
        endDay:"",
        price:"",
        deposit:"",
        totalMoney:"",
    });
    
    const [idCar,setIdCar] = useState<any>();
    const [openDialog, setOpenDialog] = useState(false);

    let { id } = useParams();
    const {customer,loading}= useCustomerInfo(id);

    const handleAdd = () => {
        setOpenDialog(true);
    }
    const handleClose = () => {
        setOpenDialog(false);
    }
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
    const handleChooseCar =(e) =>{
        setIdCar(e.target.value)
    }
    
    useEffect(() => {
        if(idCar){
            (async () => {
                try {
                    // setLoading(true)
                    const car= await carApi.getOneCar(idCar);
                    setOneCar(car)
                } catch (error:any) {
                    setOneCar({
                        name: "",
                        description: "",
                        failure: "",
                        licensePlate: "",
                        type: "",
                        company: "",
                        price: "",
                    })
                    console.log(error)
                }
            })();
        }else{
            setOneCar({
                name: "",
                description: "",
                failure: "",
                licensePlate: "",
                type: "",
                company: "",
                price: "",
            })
        }
    }, [idCar])
    useEffect(() => {
        var totalMoney = (oneCar.price?oneCar.price:0) * 4;
        console.log(totalMoney)
    },[idCar])
    useEffect(() => {
        getCar()
        setOneCustomer(customer)
    }, [customer])
    const handleFilterDate = (value) => {
        setFilterDay(value)
    }
    useEffect(() => {
        setDay(Math.floor(( Date.parse(filterDay[1]) - Date.parse(filterDay[0]) ) / 86400000));
    }, [filterDay])
    
    const handleAddBill = async () => {
        try {
            await billApi.createBill({
                billCode: Math.random().toString(36).substr(2, 5),
                carCode:oneCar._id,
                customerCode:oneCustomer._id,
                carName:oneCar.name,
                customerName:oneCustomer.name,
                startDay:format(new Date(filterDay[0]), 'dd/MM/yyyy')==="01/01/1970"?"":format(new Date(filterDay[0]), 'dd/MM/yyyy'),
                endDay:format(new Date(filterDay[1]), 'dd/MM/yyyy')==="01/01/1970"?"":format(new Date(filterDay[1]), 'dd/MM/yyyy'),
                price:(oneCar.price?oneCar.price:0) * (day?day:0),
                deposit:(oneCar.price?oneCar.price:0) * (day?day:0) * 0.3,
                totalMoney:(oneCar.price?oneCar.price:0) * (day?day:0) + (oneCar.price?oneCar.price:0) * (day?day:0) * 0.3,
            });
            toast.success("Thêm thành công", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                history("/booked"); 
            }, 2000);
        } catch (error:any) {
            console.log("failed:",error)
            toast.error(`${error.response.data.message}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }
    }
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
                <div className="booking-info__div booking-info__date">
                    <div className="booking-info__label">Chọn ngày thuê : </div>
                    <div className="booking-info__value">
                        <FilterCarByDate dateValue={handleFilterDate} />
                    </div>
                </div>
                <div className="booking-info__div booking-info__select">
                    <div className="booking-info__label">Chọn xe cho thuê : </div>
                    <select 
                        className="form-select" 
                        aria-label="Default select example" 
                        onChange={handleChooseCar}
                    >
                        <option selected>Chọn xe</option>
                        {(cars?cars:[]).map((car,index)=>(
                            <option key={index} value={car._id} disabled={(car.status===true?true:false)}>
                                {car.name} ( {car.status===true?"Bận":"Trống"} )
                            </option>
                        ))}
                    </select>
                </div>
                <div className="booking-info__div car-info">
                    <table className="table table-hover table-bordered ">
                        <thead>
                            <tr>
                                <th scope="col">Tên xe</th>
                                <th scope="col">Mô tả</th>
                                <th scope="col">Tình trạng</th>
                                <th scope="col">Biển số</th>
                                <th scope="col">Loại xe</th>
                                <th scope="col">Hãng xe</th>
                                <th scope="col">Đơn giá(VND/ngày)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {oneCar?(
                                <tr>
                                    <td>{oneCar.name}</td>
                                    <td>{oneCar.description}</td>
                                    <td>{oneCar.failure}</td>
                                    <td>{oneCar.licensePlate}</td>
                                    <td>{oneCar.type}</td>
                                    <td>{oneCar.company}</td>
                                    <td>{formatPrice(oneCar.price)}</td>
                                </tr>
                            ):(
                                <tr></tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="booking-info__div booking-info__price">
                    <div className="box-price">
                        <div className="price price-1">
                            <div className="price-label">
                                <p>Giá thuê :</p>
                                <small>(giá x số ngày thuê + VAT(10%))</small>
                            </div>
                            <div className="price-value">{formatPrice((oneCar.price?oneCar.price:0) * (day?day:0))}</div>
                        </div>   
                        <div className="price price-1">
                            <div className="price-label">
                                <p>Tiền cọc (30%) :</p>
                                <small>(khách hàng được hoàn lại sau khi trả xe)</small>
                            </div>
                            <div className="price-value">{formatPrice((oneCar.price?oneCar.price:0) * (day?day:0) * 0.3)}</div>
                        </div> 
                        
                        <div className="price price-1">
                            <div className="price-label">Tổng số tiền :</div>
                            <div className="price-value">{formatPrice((oneCar.price?oneCar.price:0) * (day?day:0) + (oneCar.price?oneCar.price:0) * (day?day:0) * 0.3)}</div>
                        </div> 
                    </div>           
                </div>
                <div className="booking-info__div booking-info__submit">
                    <div className="button button-watch " onClick={handleAdd}>Xem hóa đơn</div>
                    <div className="button button-submit" onClick={handleAddBill}>Hoàn thành</div>
                </div>
            </div>
            <DialogBill
                open={openDialog}
                close={handleClose}
            />
        </div>
    );
}

export default Booking;