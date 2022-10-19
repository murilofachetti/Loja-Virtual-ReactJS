import { products, categories } from './products';
import { Grid, Typography, Button } from '@mui/material';
import React, { Link } from 'react-router-dom';


const Catalog = () => {
    return <Grid container spacing={4} sx={{
        marginTop: '10px',
        paddingLeft: '32px',
        paddingRight: '32px',
        boxSizing: 'border-box'
    }}>
        {
            Object.keys(products).map(id => {
                return <Grid item xs={12} sm={6} md={4} lg={3} 
                    sx={{
                        position: 'relative',
                        paddingTop: '0 !important',
                        marginBottom: '32px'
                        }}>
                    <span style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        color: '#fff',
                        fontWeight: 'bold',
                        background: '#1976d2',
                        boxSizing: 'border-box',
                        padding: '10px',
                        borderRadius: '0 0 0 16px'
                    }}>10%</span>
                    <img style={{width: '100%'}} src={products[id].image}/>
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
                    }}>{products[id].name}</Typography>
                    <Typography variant="p" component="p" style={{
                        float: 'left',
                        marginBottom: '16px',
                        textAlign: 'justify'
                    }}>{products[id].description.substring(0, 100)}...
                    </Typography>
                    <Link to={'../product/' + id}><Button fullWidth variant="contained">Ver produto
                    </Button></Link>
                </Grid>
            })
        }
    </Grid>
}

export default Catalog;