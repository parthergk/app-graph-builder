import React, { useEffect } from "react";
import {
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Edge,
} from "@xyflow/react";
import type { ServiceNode } from "@/types/graph";
import "@xyflow/react/dist/style.css";
import { useBuilderStore } from "../../store/useBuilderStore";
import { ServiceNode as ServiceNodeComponent } from "./nodes/ServiceNode";
import { useGraph } from "../../hooks/useGraph";
import { NodeGraphSkeleton } from "./nodes/NodeGraphSkeleton";
import { NodeGraphError } from "./nodes/NodeGraphError";

const nodeTypes = {
  serviceNode: ServiceNodeComponent,
};


export function NodeGraph({zoomPercent}) {
  const setGraphNode = useBuilderStore((state)=> state.setGraphNodes);
  const setSelectedNodeId = useBuilderStore((state) => state.setSelectedNodeId);
  const activeTool = useBuilderStore((state) => state.activeTool);
  const selectedAppId = useBuilderStore((state) => state.selectedAppId);
  const { data, isLoading, error } = useGraph(selectedAppId);


  const [nodes, setNodes, onNodesChange] = useNodesState<ServiceNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  useEffect(() => {
    if (data) {
      setNodes(data.nodes || []);
      setEdges(data.connections || []);
      setGraphNode(data.nodes)

    } else {
      setNodes([]);
      setEdges([]);
    }
  }, [data, setNodes, setEdges]);

  const handleNodeClick = (_: React.MouseEvent, node: ServiceNode) => {
    setSelectedNodeId(node.id);
  };

  if (isLoading) {
    return <NodeGraphSkeleton />;
  }

  if (error) {
    return (
      <NodeGraphError message={error instanceof Error ? error.message : String(error)} />
    );
  }

  return (
    <div className="h-full w-full" style={{ transform: `scale(${zoomPercent / 100})` }}>
      <ReactFlow
      
        className={
          activeTool === "hand"
            ? "hand-mode"
            : "pointer-mode"
        }
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        nodesDraggable={
          activeTool === "pointer"
        }
        elementsSelectable={
          activeTool === "pointer"
        }
        panOnDrag={
          activeTool === "hand"
        }
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={handleNodeClick}
        fitView
      />
    </div>
  );
}
