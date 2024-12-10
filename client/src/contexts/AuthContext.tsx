import { createContext, useContext } from "react";
import { useVerifyToken } from "../libs/react-query/query/AuthQuery";

type PropsContext = {
    isAuthenticated: boolean,
    user: {
        _id: string; email: string;
        firstName: string, lastName: string
    } | undefined,
    isLoading: boolean
}
const AuthContext = createContext<PropsContext>({
    isAuthenticated: false,
    user: undefined,
    isLoading: false
});


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {


    const { data, isError, isLoading } = useVerifyToken();

    const values = {
        isAuthenticated: isError ? false : true,
        user: data?.data,
        isLoading: isLoading
    };

    return <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
};

export const useAuth = () => useContext(AuthContext);
