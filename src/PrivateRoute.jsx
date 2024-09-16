
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';  // Correct import for js-cookie

const PrivateRoute = ({ children }) => {

   
    const location = useLocation();
    const userData = localStorage.getItem('userData');
    console.log('PrivateRoute: User data:', userData);
    if (userData) {
        console.log('PrivateRoute: User is authenticated, rendering children');
        return children;
    } else {
        console.log('PrivateRoute: User is not authenticated, redirecting to login');
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default PrivateRoute;





 //first way
    // const authToken = Cookies.get("jwtToken");  // Get JWT token from cookies
    // console.log('Auth Token from cookie:', authToken);
    // // If token exists, render the children (protected routes), otherwise redirect to login
    // return authToken ? <Outlet /> : <Navigate to="/login" />;
    
    //second way
    // const userData = localStorage.getItem('userData');
    // console.log('PrivateRoute: User data:', userData);
    // if (userData) {
    //     console.log('PrivateRoute: User is authenticated, rendering Outlet');
    //     return <Outlet />;
    // } else {
    //     console.log('PrivateRoute: User is not authenticated, redirecting to login');
    //     return <Navigate to="/login" />;
    // }





//     const [isAuthenticated, setIsAuthenticated] = useState(null);

//     useEffect(() => {
//         const checkAuth = async () => {
//             try {
//                 // Check if the user is authenticated by calling a protected route
//                 await api.get('/auth/me', { withCredentials: true });
//                 setIsAuthenticated(true);
//             } catch (error) {
//                 setIsAuthenticated(false);
//             }
//         };

//         checkAuth();
//     }, []);

//     // Show loading state while checking
//     if (isAuthenticated === null) {
//         return <div>Loading...</div>;
//     }

//     // If authenticated, show the children (protected content)
//     if (isAuthenticated) {
//         return children;
//     }

//     // If not authenticated, redirect to login page
//     return <Navigate to="/login" />;