import axiosClient from "./axiosClient";



const carApi = {
    getAllCar(){
        const url = '/car';
        return axiosClient.get(url)
    },
    getOneCar(id){
        const url = `car/${id}`;
        return axiosClient.get(url)
    },
    createCar(data){
        const url = '/car';
        return axiosClient.post(url , data)
    },
    updateCar(data){
        const url = '/car/update';
        return axiosClient.post(url , data)
    },
    deleteCar(id){
        const url = `/car/delete/${id}`;
        return axiosClient.delete(url)
    }
    // getmovieNowShowId(id){
    //     const url = '/QuanLyPhim/LayDanhSachPhim?maNhom=GP11';
    //     return axiosClient.get(url)
    // },
    
}

export default carApi