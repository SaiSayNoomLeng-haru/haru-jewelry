import { memo } from "react";
import { Navigate, useRouteError } from "react-router"

const AuthErrorBoundary = () => {
    const error = useRouteError();

    if(error.status === 302){
        const location = error.headers.get('location');
        return <Navigate to={location} />
    }

    return null;
}

export default memo(AuthErrorBoundary)