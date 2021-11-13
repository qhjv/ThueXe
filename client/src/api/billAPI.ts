import axiosClient from "./axiosClient";



const billApi = {
    getAllBill(){
        const url = '/bill';
        return axiosClient.get(url)
    },
    // getOneBill(id){
    //     const url = `bill/${id}`;
    //     return axiosClient.get(url)
    // },
    createBill(data){
        const url = '/bill';
        return axiosClient.post(url , data)
    },
    // updateBill(data){
    //     const url = '/bill/update';
    //     return axiosClient.post(url , data)
    // },
    deleteBill(data){
        const url = `/bill/delete/${data.id}`;
        return axiosClient.delete(url,{
            data:data.data,
        })
    }
    // getmovieNowShowId(id){
    //     const url = '/QuanLyPhim/LayDanhSachPhim?maNhom=GP11';
    //     return axiosClient.get(url)
    // },
    
}

export default billApi