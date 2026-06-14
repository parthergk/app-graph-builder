import { useQuery } from "@tanstack/react-query";
import { fetchGraph } from "../api/graph";

export const useGraph = (id: string) => {
    return useQuery({
        queryKey: ["graphs", id],
        queryFn: () => fetchGraph(id)
    })
}   