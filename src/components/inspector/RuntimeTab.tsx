import type { ServiceNode } from "@/types/graph";
import { Activity, } from "lucide-react";

interface RuntimeTabProps {
  node: ServiceNode;
}

export default function RuntimeTab({
  node,
}: RuntimeTabProps) {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border-dark bg-bg-active/50 dark:bg-[#050507] p-4">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-4 h-4" />
          <span className="text-sm font-medium">
            Runtime Information
          </span>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-text-muted">
              CPU Usage
            </span>

            <span>{node.data.runtime.cpu}%</span>
          </div>

          <div className="flex justify-between">
            <span className="text-text-muted">
              Memory Usage
            </span>

            <span>{node.data.runtime.memory}%</span>
          </div>

          <div className="flex justify-between">
            <span className="text-text-muted">
              Uptime
            </span>

            <span>{node.data.runtime.uptime}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-text-muted">
              Last Updated
            </span>

            <span>
              {node.data.runtime.lastUpdated}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}