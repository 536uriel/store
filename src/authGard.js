import { Navigate, Outlet } from 'react-router-dom';
import auth from './conponents/auth';

export const AuthGard = () => {

    if(auth.isAuthenticated()) {
        console.log(true)
        return  (<Outlet />) 
    } else{
        return (<Navigate to="/login" />)
    } 
   
}

