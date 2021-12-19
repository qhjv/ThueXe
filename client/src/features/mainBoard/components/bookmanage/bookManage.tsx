import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import './bookManage.css'
import { ToastContainer, toast } from 'react-toastify';
import billApi from 'api/billAPI';
import { formatPrice } from 'utils/formatPrice';

function BookManage(props) {
    const [bills, setBills] = useState<any>([]);

    const getBill = async()=>{
        (async () => {
            try {
                // setLoading(true)
                const billList = await billApi.getAllBill();
                setBills(billList)
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
        getBill()
    }, [])
    const handleDelete = async (value) =>{
        const data = {
            id:value._id,
            data:value
        }
        try {
            await billApi.deleteBill(data);
            getBill()
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
        <div className="billBoard">
            <ToastContainer />
            <div className="billBoard-title">
                <h3>Danh sách hóa đơn</h3>
            </div>
            <div className="bill-list">
                <table className="table table-hover table-bordered ">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Mã hóa đơn</th>
                            <th scope="col">Khách hàng</th>
                            <th scope="col">Xe thuê</th>
                            <th scope="col">Ngày thuê</th>
                            <th scope="col">Ngày trả</th>
                            <th scope="col">Tiền cọc(VND)</th>
                            <th scope="col">Tổng tiền(VND)</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {(bills?bills:[]).map((bill,index)=>(
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{bill.billCode}</td>
                                <td>{bill.customerName}</td>
                                <td>{bill.carName}</td>
                                <td>{bill.startDay}</td>
                                <td>{bill.endDay}</td>
                                <td>{formatPrice(bill.deposit)}</td>
                                <td>{formatPrice(bill.totalMoney)}</td>
                                <td className="td-button">
                                    <div
                                        className="button-active button-delete"
                                        onClick={()=>handleDelete(bill)} 
                                    >Xóa</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BookManage;