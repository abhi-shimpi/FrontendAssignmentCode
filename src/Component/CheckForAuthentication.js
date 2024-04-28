import React, { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { getUserDetails } from '../utils/sessionstorage/sessionstorage';

const CheckForAuthentication = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    let userDetails = getUserDetails(); 

    useEffect(() => {
        console.log(userDetails);
        if (!userDetails) {
            navigate('/login');
        }
    }, [location, userDetails]);

    return <>{children}</>;
}

export default CheckForAuthentication;
