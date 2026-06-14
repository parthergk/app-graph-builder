import type { Node, Edge } from "@xyflow/react";

export interface AppGraph {
  nodes: Node[];
  connections: Edge[];
}

export type AppGraphs = Record<string, AppGraph>;