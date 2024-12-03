import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAccount, forgotPassword, loginAccount, signOutAccount, resetPassword } from "../../../services/authServices";
import { LoginType, PropsResetPassword, UserType } from "../../../types";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { createAccommodation } from "../../../services/AccommodationService";

export const useCreateAccount = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: UserType) => createAccount(data),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["verifyToken"] })
            toast.success("User successfully registered", { position: "top-center" })
            navigate("/")
        },
        onError: (err: any) => {
            toast.error(err.response.data.message, { position: "top-center" })
        }
    })

}
export const useLogin = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: (data: LoginType) => loginAccount(data),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["verifyToken"] })
            toast.success("Login successfully", { position: "top-center" })
            navigate("/")
        },
        onError: (err: any) => {
            console.log(err);

            toast.error(err.response.data.message, { position: "top-center" })
        }
    })

}


export const useSignOut = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: signOutAccount,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["verifyToken"] })
            navigate("/")
        },
        onError: (err: any) => {
            console.log(err);
            toast.error(err.response.data.message, { position: "top-center" })
        }
    })

}


export const useForgotPassword = () => {


    return useMutation({
        mutationFn: (data: { email: string }) => forgotPassword(data),
        onSuccess: async () => {
            toast.success("Email sent successfully", { position: "top-center" })
        },
        onError: (err: any) => {
            console.log(err);
            toast.error(err.response.data.message, { position: "top-center" })
        }
    })

}

export const useResetPassword = () => {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: resetPassword,
        onSuccess: async () => {
            toast.success("Successful password change", { position: "top-center" })
            navigate("/sign-up")
        },
        onError: (err: any) => {
            console.log(err);
            toast.error(err.response.data.message, { position: "top-center" })
        }
    })

}


