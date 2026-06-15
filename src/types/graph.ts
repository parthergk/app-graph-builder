import type { Node as XYNode, Edge } from "@xyflow/react";

export interface ServiceNodeData extends Record<string, unknown> {
  label: string;
  status: "healthy" | "degraded" | "down";
  capacity: number;
  description: string;
  runtime: {
    cpu: number;
    memory: number;
    uptime: string;
    lastUpdated: string;
  };
}

export type ServiceNode = XYNode<ServiceNodeData, "serviceNode">;

export interface AppGraph {
  nodes: ServiceNode[];
  connections: Edge[];
}

export type AppGraphs = Record<string, AppGraph>;