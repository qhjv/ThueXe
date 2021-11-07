import axiosClient from "./axiosClient";



const customerApi = {
    getAllCustomer(){
        const url = '/customer';
        return axiosClient.get(url)
    },
    createCustomer(data){
        const url = '/customer';
        return axiosClient.post(url , data)
    },
    updateCustomer(data){
        const url = '/customer/update';
        return axiosClient.post(url , data)
    },
    deleteCustomer(id){
        const url = `/customer/${id}`;
        return axiosClient.delete(url)
    }
    // getmovieNowShowId(id){
    //     const url = '/QuanLyPhim/LayDanhSachPhim?maNhom=GP11';
    //     return axiosClient.get(url)
    // },
    
}

export default customerApi