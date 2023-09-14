import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { setUser, toggleLoading } from '../redux/features/user/userSlice';
import { useGetSingleUsersQuery } from '../redux/features/user/userApi';

const PrivateRoute = ({ children }) => {
    const dispatch = useDispatch()
    const { pathname } = useLocation();
    const { email, isLoading } = useSelector((state: RootState) => state.userState)
    const { data: singleUser } = useGetSingleUsersQuery(email)
    console.log(singleUser);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser({
                    name: user.displayName,
                    email: user.email,
                    role: singleUser.data?.role,
                    imageUrl: singleUser.data?.imageUrl
                }))
                dispatch(toggleLoading(false))
            } else {
                dispatch(toggleLoading(false))
            }
        })
    }, [dispatch, singleUser])

    if (isLoading) {
        return <Loading />;
    }

    if (!isLoading && !email) {
        return <Navigate to="/login" state={{ path: pathname }} />;
    }

    return children;
};

export default PrivateRoute;