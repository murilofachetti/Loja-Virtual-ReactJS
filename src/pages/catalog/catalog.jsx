import { products, categories } from './products';
import { Grid, Typography, Button } from '@mui/material';
import React, { Link } from 'react-router-dom';


const Catalog = () => {
    return <Grid container spacing={4} sx={{
        marginTop: '10px',
        boxSizing: 'border-box',
        textAlign: 'center',
        float: 'left'
        }}>
        <Grid item xs={12}>
            <Typography 
            variant="h5" 
            component="h1"
            style={{
                fontFamily: "Lato",
                fontWeight: 'bolder'
            }}>PRODUTOS EM DESTAQUE</Typography>
            <hr/>
        </Grid>
        {
            Object.keys(products).map(id => {
                return <Grid item xs={12} sm={6} md={4} lg={3} 
                    sx={{
                        float: 'left',
                        position: 'relative',
                        paddingTop: '0 !important',
                        marginBottom: '32px',
                        boxSizing: 'border-box',
                        }}>
                    <span style={{
                        display: products[id].promo_price ? 'block' : 'none',
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        color: '#fff',
                        fontWeight: 'bold',
                        background: '#2c9951',
                        boxSizing: 'border-box',
                        padding: '10px',
                        borderRadius: '0 0 0 16px'
                    }}>10%</span>
                    <img className="imgconfig" style={{width: '100%', height: '400px'}} src={products[id].images[0]}/>
                        {
                            products[id].categories.map(categoryId => {
                                return <span className='category-label'>{categories[categoryId].name}</span>
                            })
                        }
                    <Typography variant="h5" component="h2" style={{
                        float: 'left',
                        display: 'block',
                        width: '100%',
                        marginTop: '16px',
                        marginBottom: '8px'
                    }}>{products[id].name}
                    </Typography>

                    {
                        products[id].promo_price ? <Typography variant="p" component="p" style={{
                            float: 'left',
                            fontSize: '20px',
                            marginRight: '8px'
                        }} className="promo_price">{products[id].promo_price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
                        </Typography> : ""
                    }

                    <Typography variant="p" component="p" className="price" style={{
                        fontSize: products[id].promo_price ? '16px' : '20px',
                        color: products[id].promo_price ? '#a9a9a9' : '#333333',
                        textDecoration: products[id].promo_price ? 'line-through' : 'none', 
                        float: 'left',
                        // marginBottom: '16px'
                    }}>{products[id].price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
                    </Typography>
                    {/* <Typography variant="p" component="p" style={{
                        float: 'left',
                        marginBottom: '16px',
                        textAlign: 'justify'
                    }}>{products[id].description.substring(0, 100)}...
                    </Typography> */}
                    <Link to={'../product/' + id}><Button fullWidth variant="contained" style={{
                        backgroundColor: '#2c9951',
                        fontWeight: 'bold'
                    }}>Ver produto
                    </Button></Link>
                </Grid>
            })
        }
    </Grid>
}

export default Catalog;