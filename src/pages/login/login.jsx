import '../../assets/css/auth.css';
import cover from '../../assets/img/pet-login.jpg';
import logo from '../../assets/img/logo.png';

import { Link } from 'react-router-dom';

import {
    Grid,
    Stack,
    TextField,
    Button,
    InputAdornment,
    OutlinedInput,
    IconButton,
    FormControl,
    InputLabel
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react';


const Login = () => {
    const [visibilityToggle, setVisibilityToggle] = useState(true);

    const toggleVisibility = () => {
        setVisibilityToggle(!visibilityToggle);
    }
    
    return <Grid container spacing={2} style={{
        height: '100vh'
    }}>
        <Grid className="leftSide" item sx={{
                padding: '10px',
                boxSizing: 'border-box'
            }} xs={0} md={7} lg={8}>
                <Stack spacing={2} style={{
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img src={cover} style={{
                    width: '100%'
                }} alt="Logo"/>
                </Stack>
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
            <Stack spacing={2} style={{
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: 16,
                paddingRight: 16,
                boxSizing: 'border-box'
            }}>
                <Stack style={{
                    marginTop: '20px',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}><img src={logo} style={{
                    width: '100px'
                }} alt="Logo"/>
                 </Stack>
                <h1>Entre com seu Usuário</h1>
                <Grid container>
                    <Grid item xs={12} sx={{
                        marginBottom: '16px'
                    }}>
                        <TextField fullWidth label="E-mail" type="email" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sx={{
                        marginBottom: '16px'
                    }}>
                        <FormControl sx={{ width: '100%' }}>
                        <InputLabel>Senha</InputLabel>
                        <OutlinedInput  
                        fullWidth
                        color="primary" 
                        label="Senha" 
                        type={visibilityToggle ? 'password' : 'text'}
                        endAdornment={<InputAdornment position="end">
                        
                        <IconButton
                            aria-label="Clique para exibir"
                            onClick={toggleVisibility}>
                            {
                                visibilityToggle ? <Visibility/> : <VisibilityOff/>
                            }   
                        </IconButton>
                        </InputAdornment>} 
                        variant="outlined" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sx={{
                        marginBottom: '16px'
                    }}>
                        <Button fullWidth variant="contained" endIcon={<LoginIcon />} style={{
                            marginTop: 5
                        }}>Entrar</Button>
                    </Grid>
                    <Link style={{
                        textAlign: 'center',
                        display: 'block',
                        width: '100%'
                    }} to="/register">Criar conta
                    </Link>
                    </Grid>
            </Stack>
        </Grid>
    </Grid>    
}

export default Login;