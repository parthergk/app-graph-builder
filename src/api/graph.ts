import { appGraphs } from "../mocks/graph";

export const fetchGraph = async (id:string) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return appGraphs[id];
};