import React from "react";
import { productsCart } from "./products-cart";
import { calculateTotal, calculatePromo } from "../../utils/calculate";
import { Grid, List, ListItem, ListItemAvatar, Stack, Typography, IconButton, TextField, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import "./cart.css";

import { Link } from "react-router-dom";

const Cart = () => {
        const totals = Object.keys(productsCart).map(id => {
            let qtd = productsCart[id].quantity
            return [productsCart[id].price * qtd, productsCart[id].promo_price * qtd]
        });

    const total = calculateTotal(totals);
    const totalPromo = calculatePromo(totals);

    return <Grid container spacing={2} sx={{
        padding: '40px',
        boxSizing: 'border-box'
    }}>
        <Grid item xs={12} md={12} lg={8} sx={{
            padding: '20px !important',
        }}>
            <div style={{
                padding: '20px !important',
                boxSizing: 'border-box',
                backgroundColor: '#fff',
                borderRadius: '15px',
                boxShadow: '4px 4px 12px -6px rgba(0, 0, 0, 0.6)'
            }}>
        <List sx={{ width: '100%' }}>
           
            {
                Object.keys(productsCart).map(id => {
                return <ListItem sx={{
                    alignItems: 'center',
                    paddingLeft: '5px',
                    boxSizing: 'border-box' 
                    }}
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    }
                    alignItems="flex-start">          
                    <ListItemAvatar                      className="stackImage"
                        sx={{
                            flexGrow: 1  
                        }}>
                        <div style={{
                            backgroundImage: `url("${productsCart[id].images[0]}")`
                        }}></div>
                    </ListItemAvatar>
                    <Stack direction="row"
                        sx={{
                            flexGrow: 2  
                        }}>
                        <Stack direction="column" sx={{
                            justifyContent: 'center',
                            paddingLeft: '5px',
                            boxSizing: 'border-box',
                            flexGrow: 2
                        }}>
                            <Typography
                                sx={{ display: 'inline',
                                      fontWeight: '600',
                                      fontSize: '1.2em',
                                      }}
                                component="h6"
                                variant="h6"
                        >
                                {productsCart[id].name}
                            </Typography>
                            <Typography
                                sx={{ display: 'inline', 
                                      fontSize: '0.9em',
                                      color: '#666666' }}
                                component="p"
                                variant="p"
                        >
                                {
                                    productsCart[id].description.substr(0, 100)
                                }...
                            </Typography>
                        </Stack>
                        <Stack direction="row" sx={{
                            alignItems: 'center',
                            flexGrow: 1,
                            paddingLeft: '15px',
                            paddingRight: '15px',
                            boxSizing: 'border-box'
                        }}>
                            {
                                productsCart[id].promo_price ? <Typography
                                sx={{ display: 'inline', color: 'red', fontWeight: '700', fontSize: '16px',
                                paddingLeft: '15px',
                                paddingRight: '15px',
                                boxSizing: 'border-box'
                                }}
                                component="p"
                                variant="p"
                        >
                                {productsCart[id].promo_price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
                                </Typography> : <span style={{
                                        minWidth: '74px'
                                }}></span>
                            }
                            <Typography
                                sx={{ display: 'inline',
                                paddingLeft: '15px',
                                paddingRight: '15px',
                                boxSizing: 'border-box', 
                                textDecoration: productsCart[id].promo_price ? 'line-through' : 'none', fontSize: productsCart[id].promo_price ? '12px' : '14px' }}
                                component="p"
                                variant="p"
                            >      
                                {productsCart[id].price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}                   
                            </Typography>
                        </Stack>
                        <Stack className="stackQuantity" direction="row" style={{
                            alignItems: 'center',
                            flexGrow: 1
                        }}>
                            <TextField
                            size="small" 
                            type="number"/>
                        </Stack>
                    </Stack>
                </ListItem>
            })
        }
        </List>
        </div>
        </Grid>
        <Grid item xs={12} md={12} lg={4} sx={{
                padding: '20px !important'
        }}>
            <div className="boxt" style={{
                boxSizing: 'border-box',
                backgroundColor: '#fff',
                borderRadius: '15px',
                boxShadow: '4px 4px 12px -6px rgba(0, 0, 0, 0.6)'
            }}>
                <ul style={{
                    margin: 0,
                    listStyle: 'none',
                    paddingLeft: 0            
                }} className="listTotal">
                    <li>
                        <span>Total: </span> 
                        <span>{total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span> 
                    </li>
                    <li>
                        <span>Desconto: </span>
                        <span>{totalPromo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>
                    </li>
                    <li>
                        <span>Subtotal: </span>
                        <span>{ ( total - totalPromo).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) }</span>
                    </li>
                </ul>
            <Link to="/checkout">
            <Button variant="contained" fullWidth style={{
                backgroundColor: '#2c9951',
                fontWeight: 'bold'
                }}>PAGAR</Button>
            </Link>
            </div>
            
            
        </Grid>
    </Grid>
};

export default Cart;