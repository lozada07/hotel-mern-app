import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const RootLayout = () => {
    const { isAuthenticated } = useAuth()

    if (!isAuthenticated) {

        return <Outlet />

    }
    return <Navigate to="/" />

}

export default RootLayout