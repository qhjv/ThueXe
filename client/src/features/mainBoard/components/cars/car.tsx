import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import './car.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import carApi from 'api/carAPI';
import DialogCar from './components/dialogCar'
import { formatPrice } from 'utils/formatPrice';

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
    const [editCar, setEditCar] = useState([]);
    const [open, setOpen] = useState(true);
    const [openDialog, setOpenDialog] = useState(false);
    const [formMode, setFormMode] = useState(true);

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
    const handleClose = () => {
        setOpenDialog(false);
    }
    const handleAdd = () => {
        setOpenDialog(true);
        setFormMode(true);
    }
    const handleEdit = (car)=>{
        setEditCar(car)
        setFormMode(false)
        setOpenDialog(true)
    }
    const addCar = async (data) => {
        console.log(data)
        try {
            if(formMode){
                await carApi.createCar(data);
                getCar()
                setOpenDialog(false);
                toast.success("Thêm thành công", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            }else{
                await carApi.updateCar(data);
                getCar()
                setOpenDialog(false);
                toast.success("Sửa thành công", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error:any) {
            console.log("failed:",error)
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
    }
    const handleDelete = async (id:any) =>{
        try {
            await carApi.deleteCar(id);
            getCar()
            toast.success("Xóa thành công", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        } catch (error:any) {
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
        <div className="carBoard">
            <ToastContainer />
            <div className="carBoard-title">
                <h3>Danh sách xe</h3>
                <Button 
                    onClick={handleAdd} 
                    className="carBoard-title__add" 
                    variant="contained" 
                    startIcon={<AddCircleIcon/>}
                >
                    Thêm
                </Button>
            </div>
            <div className="car-list">
                <table className="table table-hover table-bordered ">
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
                                <td className={car.status==true?"busy":"no-busy"}>
                                    {car.status==true?"Bận":"Trống"}
                                </td>
                                <td>{formatPrice(car.price)}</td>
                                <td className="td-button">
                                    <div
                                        className="button-active button-edit"
                                        onClick={()=>handleEdit(car)}
                                    >Sửa</div>
                                    /
                                    <div
                                        className="button-active button-delete"
                                        onClick={()=>handleDelete(car._id)} 
                                    >Xóa</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <DialogCar
                open={openDialog}
                close={handleClose}
                formmode={formMode}
                newCar={addCar}
                editCar={editCar}
            />
        </div>
    );
}

export default Car;