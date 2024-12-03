import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { getAccommodation, getAllAccommodation, getUserAccommodations, getUserReservations, searchAllAccommodations } from "../../../services/AccommodationService"



export const useGetAllAccommodations = () => {
    return useQuery({
        queryKey: ["allAccommodations"],
        queryFn: getAllAccommodation,
    })
}

export const useGetAccommodation = (id: string) => {
    return useQuery({
        queryKey: ["getAccommodation"],
        queryFn: () => getAccommodation(id),
    })
}

export const useGetUserAccommodations = () => {
    return useQuery({
        queryKey: ["allUserAccommodations"],
        queryFn: getUserAccommodations,
    })
}
export const useGetUserReservations = () => {
    return useQuery({
        queryKey: ["allUserReservations"],
        queryFn: getUserReservations,
    })
}

export const useSearchAccommodations = (filters: any) => {

    return useInfiniteQuery({
        queryKey: ["searchAccommodations", filters],
        queryFn: ({ pageParam }) => searchAllAccommodations({ searchParams: filters, pageParam }),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPage,
        retry: false,
    })
}