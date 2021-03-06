import React,{useState,useEffect,useRef} from 'react';
import PropTypes from 'prop-types';
import './customer.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import customerApi from 'api/customerAPI';
import DialogCustomer from './components/dialogCustomer'
import { Link, NavLink } from 'react-router-dom';

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
    const [editCustomer, setEditCustomer] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [formMode, setFormMode] = useState(true);
    const [search, setSearch] = useState('');
    const typingTimeOutRef =  useRef<any|null>()

    const getCustomer = async()=>{
        (async () => {
            try {
                // setLoading(true)
                const customerList = await customerApi.getAllCustomer();
                setCustomers(customerList)
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
        getCustomer()
    }, [])
    const handleClose = () => {
        setOpenDialog(false);
    }
    const handleAdd = () => {
        setOpenDialog(true);
        setFormMode(true);
    }
    const handleEdit = (customer)=>{
        setEditCustomer(customer)
        setFormMode(false)
        setOpenDialog(true)
    }
    const handleDelete = async (id:any) =>{
        try {
            await customerApi.deleteCustomer(id);
            getCustomer()
            toast.success("X??a th??nh c??ng", {
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
    const addCustomer = async (data) => {
        try {
            if(formMode){
                await customerApi.createCustomer(data);
                getCustomer()
                setOpenDialog(false);
                toast.success("Th??m th??nh c??ng", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            }else{
                await customerApi.updateCustomer(data);
                getCustomer()
                setOpenDialog(false);
                toast.success("S???a th??nh c??ng", {
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
    const handleChangeSearch = (event) => {
        if(typingTimeOutRef.current){
            clearTimeout(typingTimeOutRef.current)
        }
        typingTimeOutRef.current=setTimeout(()=>{
              const nameSearch = event.target.value
              setSearch(nameSearch)
        },500)
    }
    return (
        <div className="customer">
            <ToastContainer/>
            <div className="customer-title">
                <h3>Danh s??ch kh??ch h??ng</h3>
                <Button 
                    className="customer-title__add" 
                    variant="contained" 
                    startIcon={<AddCircleIcon/>}
                    onClick={handleAdd}
                >
                    Th??m
                </Button>
            </div>
            <div className="customer-list">
                <table className="table table-hover table-bordered ">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">T??n</th>
                            <th scope="col">Tu???i</th>
                            <th scope="col">S??T</th>
                            <th scope="col">?????a ch???</th>
                            <th scope="col">Tr???ng th??i</th>
                            <th scope="col" colSpan={2}>
                                <div className="customer-search">
                                    <i className="fas fa-search" />
                                    <input
                                    type="text" 
                                    className="form-control" 
                                    placeholder="T??m ki???m" 
                                    onChange={handleChangeSearch}/>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {(customers?customers:[]).filter(customer=>{
                            if(search!==""){
                                return customer.name.toLowerCase().includes(search.toLowerCase()) 
                            }else{
                                return customer
                            }
                        }).map((customer,index)=>(
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{customer.name}</td>
                                <td>{customer.age}</td>
                                <td>{customer.tel}</td>
                                <td>{customer.address}</td>
                                <td className={customer.status===true?"busy":"no-busy"}>
                                    {customer.status===true?"??ang thu??":"Ch??a thu??"}
                                </td>
                                <td className="td-button">
                                    <div
                                        className="button-active button-edit"
                                        onClick={()=>handleEdit(customer)}
                                    >S???a</div>
                                    /
                                    <div
                                        className="button-active button-delete"
                                        onClick={()=>handleDelete(customer._id)} 
                                    >X??a</div>
                                </td>
                                <td><Link className="button-active" to={`/booking/${customer._id}`}>Cho thu??</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <DialogCustomer
                open={openDialog}
                close={handleClose}
                formmode={formMode}
                newCustomer={addCustomer}
                editCustomer={editCustomer}
            />
        </div>
    );
}

export default Customer;