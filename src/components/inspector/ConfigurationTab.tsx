import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { ServiceNode } from "@/types/graph";

interface ConfigurationTabProps {
  node: ServiceNode;
  capacity: number;
  setCapacity: (value: number) => void;
}

export default function ConfigurationTab({
  node,
  capacity,
  setCapacity,
}: ConfigurationTabProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm mb-2 block">
          Node Name
        </label>

        <Input defaultValue={node.data.label} />
      </div>

      <div>
        <label className="text-sm mb-2 block">
          Description
        </label>

        <Textarea
          defaultValue={node.data.description}
        />
      </div>

      <div className="space-y-3">
        <label className="text-sm block">
          Capacity
        </label>

        <Slider
          value={[capacity]}
          onValueChange={(value) =>
            setCapacity(value[0])
          }
          min={0}
          max={100}
        />

        <Input
          type="number"
          value={capacity}
          onChange={(e) =>
            setCapacity(
              Number(e.target.value)
            )
          }
        />
      </div>
    </div>
  );
}