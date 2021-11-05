import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import {apiUrl} from '../../constants/index'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { IconButton } from '@material-ui/core';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './signin.css'
import logo from '../../assets/image/icon/logo.jpg'
const theme = createTheme();
function SignIn(props) {
    const [user,setUser]=useState('')
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleUser =(event:any)=>{
        setUser(event.target.value)
    }
    const handlePassword =(event:any)=>{
        setPassword(event.target.value)
    }
    const handleClickShowPassword = () => {
        setShowPassword( !showPassword );
    };
    const handleMouseDownPassword = (event:any) => {
        event.preventDefault();
    };
    const handleSubmit = async (event:any) => {
        event.preventDefault();
        try {
            setLoading(true)
			const response = await axios.post(`${apiUrl}/admin`,{
                username: user,
                password: password,
            })
			if (response.data.success) {
				// dispatch({
				// 	type: 'SET_AUTH',
				// 	payload: { isAuthenticated: true, user: response.data.user }
				// })
                localStorage.setItem(
					'adminGara',
					JSON.stringify(response.data.isActive)
				)
                const storage = localStorage.getItem('adminGara');
                const loggedInUser = storage !== null ? JSON.parse(storage) : null;
                props.loggedIn(loggedInUser);
                toast.success( `${response.data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setLoading(false);
			}
		} catch (error:any) {
            setLoading(false);
            toast.error(`${error.response.data.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            if (error.response.data) return error.response.data
			else return { success: false, message: error.message }
		}
    };

    return (
        <div className="signin">
            <ToastContainer />
            <ThemeProvider theme={theme}>
            {loading ? (
                <CircularProgress/>
            ): (
                <Container component="main" maxWidth="xs" className="signin-main">
                    <img className="signin-logo" src={logo} alt="logo"/>
                    <CssBaseline />
                        <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                        >
                            <Typography component="h1" variant="h5">
                                Quản lý cửa hàng thuê xe ô tô
                            </Typography>
                                <ValidatorForm 
                                        onSubmit={handleSubmit}
                                        onError={(errors:any) => {
                                            for (const err of errors) {
                                            console.log(err.props.errorMessages[0])
                                            }
                                            }}
                                            className="login--form__email"
                                    >
                                        <TextValidator
                                            className="login--form__input" id="id_userLoginId" defaultValue placeholder="Tài khoản"
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            onChange={handleUser}
                                            name="user"
                                            value={user}
                                            validators={['required']}
                                            errorMessages={['Hãy điền trường này!!!']}
                                            autoComplete='on' 
                                        />
                                        <div className="passwordFull">
                                            <TextValidator
                                                    className="login--form__input" id="id_password" defaultValue placeholder="Mật khẩu"
                                                    variant="outlined"
                                                    fullWidth
                                                    onChange={handlePassword}
                                                    name="password"
                                                    value={password}
                                                    validators={['required']}
                                                    errorMessages={['Hãy điền trường này!!!']}
                                                    autoComplete="on"
                                                    type={showPassword ? 'text' : 'password'}
                                            >
                                            </TextValidator>
                                            <IconButton
                                                className="showPassword"
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </div>
                                        <div className="login--form__button">
                                            <Button
                                                className="signinHome"
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                            >
                                                    Đăng nhập
                                            </Button>
                                        </div>
                                            
                                    </ValidatorForm>
                        </Box>
                    </Container>
            )}
            </ThemeProvider>
        </div>
    );
}

export default SignIn;