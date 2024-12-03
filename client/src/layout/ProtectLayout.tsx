import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const RootLayout = () => {
    const { isAuthenticated } = useAuth()

    if (!isAuthenticated) {

        return <Navigate to="/sign-up" />

    }
    return <Outlet />

}

export default RootLayout