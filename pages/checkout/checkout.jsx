import { useEffect } from "react";
import { userIsLoggedIn } from '../../services/auth/auth';
import { calculateTotal, calculatePromo } from "../../utils/calculate"
import { Grid, TextField, Typography } from '@mui/material'
import { productsCart } from "../cart/products-cart";
import "./checkout.css"

const Checkout = ({ history }) => {
    const variantType = "filled";
    const totals = [
        [299, 199],
        [299, 190],
        [299, null],
    ];

    const total = calculateTotal(totals);
    const totalPromo = calculatePromo(totals);

    useEffect(() => {
        userIsLoggedIn();
    })

    return <Grid container spacing={2} className="checkout">
        <Grid item xs={12}>
            <Typography variant="h4" component="h1">Realizar Pagamento</Typography>
        </Grid>
        <Grid item sx={{}} xs={12} md={6} lg={8}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <span>Informações Pessoais</span>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Nome"
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Sobrenome"
                                type="text"
                            /></Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="CPF"
                                type="tel"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Telefone"
                                type="tel"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="E-mail"
                                type="email"
                            /></Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Endereço"
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12} sm={3} md={2}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Número"
                                type="tel"
                            />
                        </Grid>
                        <Grid item xs={12} sm={3} md={2}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Complemento"
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="CEP"
                                type="tel"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Bairro"
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Cidade"
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Estado"
                                type="text"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <span>Detalhes do pagamento</span>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField 
                                fullWidth
                                variant={variantType}
                                label="Nome impresso no cartão"
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                fullWidth
                                variant={variantType}
                                label="Número do cartão"
                                type="tel"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField 
                                fullWidth
                                variant={variantType}
                                label="Código de seg."
                                size="small"
                                type="password"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Data de vencimento"
                                size="small"
                                type="date"
                                value="date"
                            />
                        </Grid>
                        {/* <Grid item xs={12}>SELECT DE PARCELAS</Grid> */}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item sx={{}} xs={12} md={6} lg={4}>
            <Typography>Detalhes da compra</Typography>

            <ul>
                {
                    Object.keys(productsCart).map(id => {
                        return <li>
                            <span>
                                {productsCart[id].name}
                            </span>
                            -
                            <span>
                                {productsCart[id].promo_price ? productsCart[id].promo_price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) : productsCart[id].price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
                            </span>
                        </li>
                    })
                }
            </ul>
            <ul>
                <li>
                    <span></span>
                    -   
                    <span></span>
                </li>
            </ul>
        </Grid>
    </Grid>
}

export default Checkout;