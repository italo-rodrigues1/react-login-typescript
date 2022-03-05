import { AuthContext } from "./AuthContext"
import {useEffect, useState} from 'react';
import { User } from '../../types/User';
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({children} : { children:JSX.Element}) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(()=>{
        const validateToken = async() => { 
            const storageData = localStorage.getItem('token');
            if(storageData){
                const data = await api.validateToken(storageData);
                if(data.user){
                    setUser(data.user);
                }
            }
        }
        validateToken();
    },[api]);

    const signin = async (email :string ,password :string) => {
        const data = await api.signin(email, password);
        if(data.user && data.token) {
            setUser(data.user);
            localStorage.setItem('token', data.token);
            return true;
        }
        return false;
    }

    const signout = async() => {
        await api.logout();
        localStorage.clear();
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{user,signin,signout}}>
            {children}
        </AuthContext.Provider>
    )
}