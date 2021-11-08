import React,{useState,useEffect} from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid} from '@mui/material';
import Box from '@mui/material/Box';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

function DialogCar(props) {
    const [carInput,setCarInput] = useState({
        name:"",
        description:"",
        failure:"",
        licensePlate:"",
        type:"",
        company:"",
        price:"",
        status:false
    })
    useEffect(() => {
        if(props.formmode){
            setCarInput({
                name:"",
                description:"",
                failure:"",
                licensePlate:"",
                type:"",
                company:"",
                price:"",
                status:false
            })
        }else{
            setCarInput({
                ...props.editCar,
                status:false
            })
        }
    }, [props.close])
    const handleCarName =(event:any)=>{
        setCarInput({
            ...carInput,
            name:event.target.value,
        })
    }
    const handleCarDescription =(event:any)=>{
        setCarInput({
            ...carInput,
            description:event.target.value,
        })
    }
    const handleCarFailure =(event:any)=>{
        setCarInput({
            ...carInput,
            failure:event.target.value,
        })
    }
    const handleCarLicensePlate =(event:any)=>{
        setCarInput({
            ...carInput,
            licensePlate:event.target.value,
        })
    }
    const handleCarType =(event:any)=>{
        setCarInput({
            ...carInput,
            type:event.target.value,
        })
    }
    const handleCarCompany =(event:any)=>{
        setCarInput({
            ...carInput,
            company:event.target.value,
        })
    }
    const handleCarPrice =(event:any)=>{
        setCarInput({
            ...carInput,
            price:event.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.newCar(carInput);
    };
    return (
        <Dialog
            fullWidth={true}
            maxWidth="xs"
            open={props.open}
            onClose={props.close}
            className="hihi"
        >
            <DialogTitle>{props.formmode ? 'Thêm' : 'Sửa'} Xe</DialogTitle>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <ValidatorForm 
                        onError={(errors:any) => {
                            for (const err of errors) {
                                console.log(err.props.errorMessages[0])
                            }
                        }}
                    >
                        <DialogContent sx={{display: 'flex',paddingTop:"0",alignItems:"start"}}>
                            <Grid container xs={6} className="dialog-child">
                                    <TextValidator
                                        defaultValue placeholder="Tên xe"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        onChange={handleCarName}
                                        name="name"
                                        value={carInput.name}
                                        validators={['required']}
                                        errorMessages={['Hãy điền trường này!!!']}
                                        autoComplete='on' 
                                    />
                                    <TextValidator
                                        defaultValue placeholder="Mô tả"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        onChange={handleCarDescription}
                                        name="description"
                                        value={carInput.description}
                                        validators={['required']}
                                        errorMessages={['Hãy điền trường này!!!']}
                                        autoComplete='on' 
                                    />
                                    <TextValidator
                                        defaultValue placeholder="Tình trạng"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        onChange={handleCarFailure}
                                        name="failure"
                                        value={carInput.failure}
                                        validators={['required']}
                                        errorMessages={['Hãy điền trường này!!!']}
                                        autoComplete='on' 
                                    />
                                    <TextValidator
                                        defaultValue placeholder="Biển số"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        onChange={handleCarLicensePlate}
                                        name="licensePlate"
                                        value={carInput.licensePlate}
                                        validators={['required']}
                                        errorMessages={['Hãy điền trường này!!!']}
                                        autoComplete='on' 
                                    />
                                </Grid>
                                <Grid container xs={6} className="dialog-child">
                                    <TextValidator
                                        defaultValue placeholder="Loại xe"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        onChange={handleCarType}
                                        name="type"
                                        value={carInput.type}
                                        validators={['required']}
                                        errorMessages={['Hãy điền trường này!!!']}
                                        autoComplete='on' 
                                    />
                                    <TextValidator
                                        defaultValue placeholder="Hãng xe"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        onChange={handleCarCompany}
                                        name="company"
                                        value={carInput.company}
                                        validators={['required']}
                                        errorMessages={['Hãy điền trường này!!!']}
                                        autoComplete='on' 
                                    />
                                    <TextValidator
                                        defaultValue placeholder="Giá thuê"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        onChange={handleCarPrice}
                                        name="price"
                                        value={carInput.price}
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

export default DialogCar;