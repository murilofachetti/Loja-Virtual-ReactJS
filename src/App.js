import './App.css';
import iconlogo from './assets/img/logotopo.png';
import { lazy, Suspense, useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
 } from 'react-router-dom';

import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
} from "@mui/material";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';


const Cart = lazy(() => import("./pages/cart/cart"));
const Catalog = lazy(() => import("./pages/catalog/catalog"));
const Checkout = lazy(() => import("./pages/checkout/checkout"));
const Login = lazy(() => import("./pages/login/login"));
const Product = lazy(() => import("./pages/product/product"));
const Register = lazy(() => import("./pages/register/register"));
const NotFound = lazy(() => import("./pages/not-found/not-found"));

function App() {
   useEffect(() => {
    }, []);

  return (
  <Router>
    <AppBar position={'static'} style={{
      backgroundColor: '#2c9951'
    }}>
      <Toolbar 
        style={{
          justifyContent: 'space-between',
        }}>
        <div>
        <Typography 
        variant="h6" 
        compenent="h2">
        <Link to="/catalog">
        <img src={iconlogo} alt="Logo" style={{
          width: '30px',
          marginTop: '9px',
          marginLeft: '15px',
          float: 'left'
        }}/>
          <span style={{
            paddingLeft: '10px',
            paddingTop: '13px',
            float: 'left',
            fontSize: 25,
            fontFamily: 'LakkiReddy'
          }}>Tereré Mania</span>
        </Link>
        </Typography>
        </div>
        <div>
        <IconButton  
        edge="end"
        style={{
          color: '#513a38',
        }}>
        <AccountCircleIcon style={{
            paddingRight: '5px',
            color: '#513a38',
            paddingBottom: '9px'
        }}/><span className="navesquerdo"> Minha Conta</span>
        </IconButton> 
        <IconButton  
        edge="end"
        style={{
          marginLeft: 16,
          color: '#513a38',
        }}>
        <FavoriteIcon style={{
            color: '#513a38',
            paddingRight: '5px',
            paddingBottom: '9px'
        }}/><span className="navesquerdo"> Favoritos</span>
        </IconButton> 
        <IconButton  
        edge="end"
        style={{
          marginLeft: 16,
        }}>
        <Link to="/cart">
        <ShoppingCartIcon style={{
            color: '#513a38'
        }}/>
        </Link>
        </IconButton>
        <IconButton
        edge="end"
        style={{
          marginLeft: 16,
        }}>
        <Link to="/login">
        <LogoutIcon style={{
            color: '#513a38'
        }}/>
        </Link>
        </IconButton>
        </div>
      </Toolbar>
    </AppBar>
    <Suspense fallback={"Carregando..."}>
      <Routes>
        <Route exact path="/" element={<Catalog/>}/>
        <Route exact path="/catalog" element={<Catalog/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="checkout" element={<Checkout/>}/>
        <Route path="product/:id" element={<Product/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Suspense>
  </Router>);
}

export default App;
