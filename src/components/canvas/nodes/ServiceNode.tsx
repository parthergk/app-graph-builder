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
      className={`relative min-w-[180px] rounded-xl border p-4 transition-all duration-200 bg-bg-panel/90 dark:bg-neutral-900/30 backdrop-blur-xs ${
        selected
          ? "border-primary ring-2 ring-primary/25 shadow-md shadow-primary/5"
          : "border-border-dark hover:border-text-muted/30 hover:shadow-md hover:translate-y-[-1px] shadow-sm"
      }`}
    >
      <Handle type="target" position={Position.Left} />

      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-bg-active border border-border-dark text-foreground">
          {data.label.toLowerCase().includes("database") ? (
            <Database className="h-6 w-6 text-text-muted dark:text-foreground" />
          ) : (
            <Server className="h-6 w-6 text-text-muted dark:text-foreground" />
          )}
        </div>

        <div className="flex flex-col">
          <span className="font-medium text-foreground">
            {data.label}
          </span>

          <div className="mt-1 flex items-center gap-2">
            <div
              className={`h-2 w-2 rounded-full ${statusColor[data.status]
                }`}
            />

            <span className="text-xs text-text-muted capitalize">
              {data.status}
            </span>
          </div>
        </div>
      </div>

      <Handle type="source" position={Position.Right} />
    </div>
  );
}
