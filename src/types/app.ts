export interface AppItem {
  id: string;
  name: string;
 type: "layers" | "chart" | "cart" | "box" | "bell";
  status: 'healthy' | 'warning' | 'error' | 'inactive';
}