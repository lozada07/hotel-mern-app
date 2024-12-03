import { useMutation } from "@tanstack/react-query"
import { createAccommodation } from "../../../services/AccommodationService"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"

export const useCreateAccommodation = () => {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: createAccommodation,
        onSuccess: async () => {
            toast.success("successful accommodation", { position: "bottom-right" })
            navigate("/")
        },
        onError: (err: any) => {
            console.log(err);
            toast.error(err.response.data.message, { position: "top-center" })
        }
    })

}