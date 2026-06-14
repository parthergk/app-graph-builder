import type { AppItem } from "../types/app";

export const apps: AppItem[] = [
  {
    id: "payments",
    name: "Payments",
    type: "layers",
    status: "healthy",
  },
  {
    id: "analytics",
    name: "Analytics",
    type: "chart",
    status: "healthy",
  },
  {
    id: "ecommerce",
    name: "Ecommerce",
    type: "cart",
    status: "healthy",
  },
  {
    id: "inventory",
    name: "Inventory",
    type: "box",
    status: "healthy",
  },
  {
    id: "notification",
    name: "Notification",
    type: "bell",
    status: "healthy",
  },
];