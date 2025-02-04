import { Navigate, useLocation} from 'react-router';
import { useUserContext } from '../hooks/ContextHooks';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { user } = useUserContext(); // Get user from
    // context
    const location = useLocation();
    console.log('location', location);

    if (!user) {
        return <Navigate to="/" replace state ={{from: location}} />; // Redirect to login if not logged in
    }

    return <>{children}</>; // Render the child components if logged in
};

export default ProtectedRoute;
