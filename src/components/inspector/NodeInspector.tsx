import React, { useState } from 'react';
import RuntimeTab from './RuntimeTab';
import ConfigurationTab from './ConfigurationTab';
import { useBuilderStore } from '@/store/useBuilderStore';


export const NodeInspector = () => {
  const nodes = useBuilderStore((state)=> state.graphNodes);
  const selectedNodeId = useBuilderStore((state)=> state.selectedNodeId);
  const setGraphNodes = useBuilderStore((state)=> state.setGraphNodes);

  const selectedNode = nodes.find((node)=> node.id === selectedNodeId);

  const [activeTab, setActiveTab] = useState<'config' | 'runtime'>('runtime');

  // Status badge classes
  const statusColors = {
    healthy: { text: 'text-emerald-400', border: 'border-emerald-500/20', bg: 'bg-emerald-500/5', dot: 'bg-emerald-500' },
    degraded: { text: 'text-amber-400', border: 'border-amber-500/20', bg: 'bg-amber-500/5', dot: 'bg-amber-500' },
    down: { text: 'text-rose-400', border: 'border-rose-500/20', bg: 'bg-rose-500/5', dot: 'bg-rose-500' },
  };

  if (!selectedNode) {
    return (
      <aside className="mt-4 py-8 text-center text-text-muted text-xs border-t border-border-dark font-sans">
        Select a node to inspect properties.
      </aside>
    );
  }

  const currentStatus = statusColors[selectedNode.data.status] || statusColors.healthy;

  const handleCapacityChange = (value: number) => {
    const updatedNodes = nodes.map((n) => {
      if (n.id === selectedNode.id) {
        return {
          ...n,
          data: {
            ...n.data,
            capacity: value,
          },
        };
      }
      return n;
    });
    setGraphNodes(updatedNodes);
  };

  return (
    <aside className=" mt-4 py-3 bg-bg-panel border-t border-border-dark flex flex-col select-none">
      {/* Panel Header */}
      <div className=" flex flex-col gap-1 ">
        <div className="flex items-center justify-between">
          <h2 className="text-white text-base font-semibold font-sans">
            {selectedNode.data.label}
          </h2>
          {/* Status Badge */}
          <div
            className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-medium capitalize ${currentStatus.bg} ${currentStatus.border} ${currentStatus.text}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${currentStatus.dot}`} />
            <span>{selectedNode.data.status}</span>
          </div>
        </div>
        <span className="text-text-muted text-xs font-mono">
          Node ID: {selectedNodeId}
        </span>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border-dark text-xs mt-3">
        <button
          onClick={() => setActiveTab('config')}
          className={`flex-1 py-3 text-center font-medium cursor-pointer transition-all ${
            activeTab === 'config'
              ? 'text-white border-b-2 border-white'
              : 'text-text-muted hover:text-white'
          }`}
        >
          Config
        </button>
        <button
          onClick={() => setActiveTab('runtime')}
          className={`flex-1 py-3 text-center font-medium cursor-pointer transition-all ${
            activeTab === 'runtime'
              ? 'text-white border-b-2 border-white'
              : 'text-text-muted hover:text-white'
          }`}
        >
          Runtime
        </button>
      </div>

      <div className="py-4 flex flex-col gap-4 flex-1 overflow-y-auto">
        {activeTab === 'runtime' ? (
          <RuntimeTab node={selectedNode} />
        ) : (
          <ConfigurationTab
            node={selectedNode}
            capacity={selectedNode.data.capacity}
            setCapacity={handleCapacityChange}
          />
        )}
      </div>
    </aside>
  );
};

export default NodeInspector;
