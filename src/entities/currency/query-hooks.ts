import { useQuery } from "@tanstack/react-query"
import { fetchGetCurrency } from "./api"
import { Currency } from "./types"


export const useGetCurrency = () => {
    return useQuery<Currency[]>({
        queryKey: ['currency'],
        queryFn: fetchGetCurrency
    })
}
