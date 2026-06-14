import { apps } from "../mocks/apps";

export const fetchApps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return apps;
};