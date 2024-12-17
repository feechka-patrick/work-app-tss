import { useQuery } from "@tanstack/react-query"
import { fetchGetCity } from "./api"
import { City } from "./types"


export const useGetCity = () => {
    return useQuery<City[]>({
        queryKey: ['city'],
        queryFn: fetchGetCity
    })
}
