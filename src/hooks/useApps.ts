import { useQuery } from "@tanstack/react-query";
import { fetchApps } from "../api/app";

export const useApps = ()=>{
    return useQuery({
        queryKey:["apps"],
        queryFn: fetchApps
    })
}