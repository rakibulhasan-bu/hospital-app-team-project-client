import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/loading/Loading';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const PrivateRoute = ({ children }) => {
    const { pathname } = useLocation();

    const { email, isLoading } = useSelector((state: RootState) => state.userState)

    if (isLoading) {
        return <Loading />;
    }

    if (!isLoading && !email) {
        return <Navigate to="/login" state={{ path: pathname }} />;
    }

    return children;
};

export default PrivateRoute;