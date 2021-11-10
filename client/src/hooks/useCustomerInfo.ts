import {useState,useEffect} from 'react'
import customerApi from 'api/customerAPI';

export default function useCustomerInfo(id){
    const [customer,setCustomer] = useState({})
    const [loading,setLoading] = useState(false)
    
    useEffect(()=>{
        (async () => {
            try {
                setLoading(true)
                const result =await customerApi.getOneCustomer(id)
                setCustomer(result)
                setLoading(false)
            } catch (error) {
                console.log("failed:",error)
            }
        })();
    },[id])

    return {customer,loading}
}