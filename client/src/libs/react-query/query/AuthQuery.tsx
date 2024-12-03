import { useQuery } from "@tanstack/react-query"
import { verifyToken } from "../../../services/authServices"



export const useVerifyToken = () => {
    return useQuery({
        queryKey: ["verifyToken"],
        queryFn: verifyToken,
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false
    })
}