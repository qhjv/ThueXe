import React,{useState,useEffect} from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid} from '@mui/material';
import Box from '@mui/material/Box';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

function DialogCustomer(props) {
    const [customerInput,setCustomerInput] = useState({
        name:"",
        age:"",
        tel:"",
        address:"",
        status:false
    })
    useEffect(() => {
        if(props.formmode){
            setCustomerInput({
                name:"",
                age:"",
                tel:"",
                address:"",
                status:false
            })
        }else{
            setCustomerInput({
                ...props.editCustomer,
                status:false
            })
        }
    }, [props.close])
    const handleCustomerName =(event:any)=>{
        setCustomerInput({
            ...customerInput,
            name:event.target.value,
        })
    }
    const handleCustomerAge =(event:any)=>{
        setCustomerInput({
            ...customerInput,
            age:event.target.value,
        })
    }
    const handleCustomerTel =(event:any)=>{
        setCustomerInput({
            ...customerInput,
            tel:event.target.value,
        })
    }
    const handleCustomerAddress =(event:any)=>{
        setCustomerInput({
            ...customerInput,
            address:event.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.newCustomer(customerInput);
    };
    return (
        <Dialog
            fullWidth={true}
            maxWidth="xs"
            open={props.open}
            onClose={props.close}
        >
            <DialogTitle>{props.formmode ? 'Thêm' : 'Sửa'} Khách Hàng</DialogTitle>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <ValidatorForm 
                        onError={(errors:any) => {
                            for (const err of errors) {
                                console.log(err.props.errorMessages[0])
                            }
                        }}
                    >
                        <DialogContent sx={{display: 'flex',paddingTop:"0"}}>
                            <Grid container className="dialog-child">
                                    <TextValidator
                                        defaultValue placeholder="Tên"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        onChange={handleCustomerName}
                                        name="name"
                                        value={customerInput.name}
                                        validators={['required']}
                                        errorMessages={['Hãy điền trường này!!!']}
                                        autoComplete='on' 
                                    />
                                    <TextValidator
                                        defaultValue placeholder="Số diện thoại"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        onChange={handleCustomerTel}
                                        name="tel"
                                        value={customerInput.tel}
                                        validators={['required']}
                                        errorMessages={['Hãy điền trường này!!!']}
                                        autoComplete='on' 
                                    />
                                    <TextValidator
                                        defaultValue placeholder="Địa chỉ"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        onChange={handleCustomerAddress}
                                        name="address"
                                        value={customerInput.address}
                                        validators={['required']}
                                        errorMessages={['Hãy điền trường này!!!']}
                                        autoComplete='on' 
                                    />
                                    <TextValidator
                                        defaultValue placeholder="Tuổi"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        onChange={handleCustomerAge}
                                        name="age"
                                        value={customerInput.age}
                                        validators={['required']}
                                        errorMessages={['Hãy điền trường này!!!']}
                                        autoComplete='on' 
                                    />
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={props.close} color="inherit" >Bỏ qua</Button>
                            <Button onClick={handleSubmit} type="submit" color="primary">{props.formmode ? 'Thêm' : 'Sửa'}</Button>
                        </DialogActions>
                    </ValidatorForm>
                </Box>
        </Dialog>
    );
}

export default DialogCustomer;