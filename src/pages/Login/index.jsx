import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, Button, FormControl, IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import imgSideBackground from 'images/img-login.jpg';
import imgPanner from 'images/imgPanner.png';
import imgGoogleLogo from 'images/google-logo.png';
import { useState } from 'react';
import './index.scss';

export const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

  return (
    <Box className='container'>
        <Box className='box-img'>
            <img src={imgPanner} alt="" />
        </Box>
        <Box className='box-form'>
            <Box className='cover-form'>
                <Box className='title-group'>
                    <Box className='main-title'>
                        <span>Wellcome to Panorama, Sign In to Continue.</span>
                    </Box>
                    <Box className='sub-title'>
                        <span>Don't have an account? <a href="# ">Create a account</a></span>
                        <span>It takes less than a minute.</span>
                    </Box>
                </Box>
                <Box className='form'>
                    <Box className='cover-input'>
                        <span>Email</span>
                        <TextField id="outlined-basic" variant="outlined" />
                    </Box>
                    <Box className='cover-input'>
                        <span>Password</span>
                        <FormControl variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>

                    </Box>
                    <Box className='forgot-password'>
                        <a href="# ">Forgot Password?</a>
                    </Box>
                    <Box className='btn-group'>
                        <Button className='btn-signIn' variant="contained">Sign In</Button>
                        <Button className='btn-google' variant="contained"><img src={imgGoogleLogo} alt="" />Sign In with Google</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}
