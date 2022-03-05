import { useState,useContext } from "react";
import {AuthContext} from '../../context/Auth/AuthContext';
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if(email && password) {
            const isLogged = await auth.signin(email, password);
            if(isLogged) {
                navigate('/')
            }else{
                alert('Login Failed')
            }
        }
    }

    return (
        <>
            <h1>Página Fechada</h1>

            <input 
            type="text" 
            value={email} 
            onChange={val => setEmail(val.target.value)}
            /> 
            <input 
            type="password" 
            value={password} 
            onChange={val => setPassword(val.target.value)}
            /> 

            <button type="submit" onClick={handleLogin} >Logar</button>
        </>
    )
}