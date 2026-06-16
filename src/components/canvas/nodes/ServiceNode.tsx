import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";
import { Database, Server } from "lucide-react";
import type { ServiceNodeData } from "@/types/graph";


export function ServiceNode({
  data,
  selected,
}: NodeProps<Node<ServiceNodeData>>) {
  const statusColor = {
    healthy: "bg-green-500",
    degraded: "bg-yellow-500",
    down: "bg-red-500",
  };

  return (
    <div
      className={`relative min-w-[180px] rounded-xl border bg-white/80 dark:bg-neutral-900/30 text-foreground p-4 shadow-sm transition-all ${
        selected
        ? "border-border"
          : "border-primary ring-2 ring-primary/20"
      }`}
    >
      <Handle type="target" position={Position.Left} />

      <div className="flex items-center gap-3">
        <div className="bg-bg-active flex h-12 w-12 items-center justify-center rounded-lg">
          {data.label.toLowerCase().includes("database") ? (
            <Database className="h-6 w-6 text-foreground" />
          ) : (
            <Server className="h-6 w-6 text-foreground" />
          )}
        </div>

        <div className="flex flex-col">
          <span className="font-medium text-foreground">
            {data.label}
          </span>

          <div className="mt-1 flex items-center gap-2">
            <div
              className={`h-2 w-2 rounded-full ${
                statusColor[data.status]
              }`}
            />

            <span className="text-xs text-muted-foreground capitalize">
              {data.status}
            </span>
          </div>
        </div>
      </div>

      <Handle type="source" position={Position.Right} />
    </div>
  );
}
