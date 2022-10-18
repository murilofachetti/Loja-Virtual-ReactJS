import { useEffect } from "react";
import { userIsLoggedIn } from '../../services/auth/auth';
import { useNavigate } from "react-router-dom";

const Checkout = ({ history }) => {

    useEffect(() => {
        userIsLoggedIn();
    })

    return <h1>Finalizar compra</h1>
}

export default Checkout;