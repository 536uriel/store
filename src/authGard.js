import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from './conponents/auth';

export const AuthGard = () => {
    const location = useLocation();
   
    return auth.isAuthenticated() ? <Outlet /> : <Navigate to="/login" exact state={{from:location}} />
}

