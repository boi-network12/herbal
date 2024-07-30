import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const PrivateRoute = ({ element: Component, roles, ...rest }) => {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    if (roles && roles.length && !roles.includes(currentUser.role)) {
        return <Navigate to="/" />;
    }

    return Component; // Render the component if authenticated
};

export default PrivateRoute;
