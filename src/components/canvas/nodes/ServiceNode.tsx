import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";
import { Database, Server } from "lucide-react";

type ServiceNodeData = {
  label: string;
  status: "healthy" | "degraded" | "down";
};


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
      className={`relative min-w-[180px] rounded-xl border bg-card p-4 shadow-sm transition-all ${
        selected
          ? "border-primary ring-2 ring-primary/20"
          : "border-border"
      }`}
    >
      <Handle type="target" position={Position.Left} />

      <div className="flex items-center gap-3">
        <div className="bg-neutral-900 flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
          {data.label.toLowerCase().includes("database") ? (
            <Database className="h-6 w-6" />
          ) : (
            <Server className="h-6 w-6" />
          )}
        </div>

        <div className="flex flex-col">
          <span className="font-medium">
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
