import type { ServiceNode } from "@/types/graph";
import { create } from "zustand";

export type CanvaTools = "pointer" | "hand";

interface BuilderState {
    selectedAppId: string;
    selectedNodeId: string | null;
    isMobilePanelOpen: boolean;
    activeInspectorTab: string;
    activeTool: CanvaTools;
    graphNodes: ServiceNode[];

    setSelectedAppId: (id: string) => void;
    setSelectedNodeId: (id: string | null) => void;
    setIsMobilePanelOpen: (open: boolean) => void;
    setActiveInspectorTab: (tab: string) => void;
    setActiveTool: (tool: CanvaTools) => void;
    setGraphNodes: (nodes: ServiceNode[]) => void;
}

export const useBuilderStore = create<BuilderState>((set) => ({
    selectedAppId: "payments",
    selectedNodeId: null,
    isMobilePanelOpen: false,
    activeInspectorTab: "properties",
    activeTool: "pointer",
    graphNodes: [],

    setSelectedAppId: (id: string) => set({ selectedAppId: id }),
    setSelectedNodeId: (id: string | null) => set({ selectedNodeId: id }),
    setIsMobilePanelOpen: (open: boolean) => set({ isMobilePanelOpen: open }),
    setActiveInspectorTab: (tab: string) => set({ activeInspectorTab: tab }),
    setActiveTool: (tool: CanvaTools) => set({ activeTool: tool }),
    setGraphNodes: (nodes: ServiceNode[]) => set({ graphNodes: nodes }),
}));