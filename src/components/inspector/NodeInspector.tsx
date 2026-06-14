import React, { useState } from 'react';
import {
  Activity,
  Cpu,
  Info,
  Clock,
  Globe,
  TrendingUp,
  FileCode,
} from 'lucide-react';

interface NodeInspectorProps {
  selectedNodeId?: string;
  selectedNodeName?: string;
  status?: 'healthy' | 'degraded' | 'down';
}

export const NodeInspector: React.FC<NodeInspectorProps> = ({
  selectedNodeId = 'service-b',
  selectedNodeName = 'Service B',
  status = 'degraded',
}) => {
  const [activeTab, setActiveTab] = useState<'config' | 'runtime'>('runtime');

  // Status badge classes
  const statusColors = {
    healthy: { text: 'text-emerald-400', border: 'border-emerald-500/20', bg: 'bg-emerald-500/5', dot: 'bg-emerald-500' },
    degraded: { text: 'text-amber-400', border: 'border-amber-500/20', bg: 'bg-amber-500/5', dot: 'bg-amber-500' },
    down: { text: 'text-rose-400', border: 'border-rose-500/20', bg: 'bg-rose-500/5', dot: 'bg-rose-500' },
  };

  const currentStatus = statusColors[status] || statusColors.healthy;

  return (
    <aside className="w-80 h-[calc(100vh-64px)] bg-bg-panel border-l border-border-dark flex flex-col select-none overflow-y-auto">
      {/* Panel Header */}
      <div className="p-5 flex flex-col gap-1 border-b border-border-dark">
        <div className="flex items-center justify-between">
          <h2 className="text-white text-base font-semibold font-sans">
            {selectedNodeName}
          </h2>
          {/* Status Badge */}
          <div
            className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-medium capitalize ${currentStatus.bg} ${currentStatus.border} ${currentStatus.text}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${currentStatus.dot}`} />
            <span>{status}</span>
          </div>
        </div>
        <span className="text-text-muted text-xs font-mono">
          Node ID: {selectedNodeId}
        </span>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border-dark text-xs px-2">
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

      {/* Content */}
      <div className="p-4 flex flex-col gap-4 flex-1">
        {activeTab === 'runtime' ? (
          <>
            {/* Overview Card */}
            <div className="bg-[#050507] border border-border-dark rounded-xl p-4 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-white font-medium text-[13px] border-b border-border-dark pb-2">
                <Activity className="w-4 h-4 text-text-muted" />
                <span>Overview</span>
              </div>

              <div className="flex flex-col gap-3 text-xs">
                {/* Status Row */}
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Status</span>
                  <div className="flex items-center gap-1.5 text-white">
                    <span className={`w-1.5 h-1.5 rounded-full ${currentStatus.dot}`} />
                    <span className="capitalize">{status}</span>
                  </div>
                </div>

                {/* Uptime Row */}
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Uptime</span>
                  <span className="text-white flex items-center gap-1 font-medium">
                    <Clock className="w-3 h-3 text-text-muted" />
                    2d 14h 32m
                  </span>
                </div>

                {/* Last Updated Row */}
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Last Updated</span>
                  <span className="text-white font-medium">Jun 13, 2026 10:30 AM</span>
                </div>

                {/* Region Row */}
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Region</span>
                  <span className="text-white flex items-center gap-1 font-medium">
                    <Globe className="w-3 h-3 text-text-muted" />
                    us-east-1
                  </span>
                </div>
              </div>
            </div>

            {/* Resources Card */}
            <div className="bg-[#050507] border border-border-dark rounded-xl p-4 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-white font-medium text-[13px] border-b border-border-dark pb-2">
                <Cpu className="w-4 h-4 text-text-muted" />
                <span>Resources</span>
              </div>

              <div className="flex flex-col gap-3 text-xs">
                {/* CPU Progress */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">CPU Usage</span>
                    <span className="text-white font-medium">45%</span>
                  </div>
                  <div className="w-full h-1.5 bg-bg-active rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full transition-all duration-500" style={{ width: '45%' }} />
                  </div>
                </div>

                {/* Memory Progress */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Memory Usage</span>
                    <span className="text-white font-medium">62%</span>
                  </div>
                  <div className="w-full h-1.5 bg-bg-active rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full transition-all duration-500" style={{ width: '62%' }} />
                  </div>
                </div>

                {/* Disk Progress */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Disk Usage</span>
                    <span className="text-white font-medium">38%</span>
                  </div>
                  <div className="w-full h-1.5 bg-bg-active rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full transition-all duration-500" style={{ width: '38%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Card */}
            <div className="bg-[#050507] border border-border-dark rounded-xl p-4 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-white font-medium text-[13px] border-b border-border-dark pb-2">
                <TrendingUp className="w-4 h-4 text-text-muted" />
                <span>Metrics <span className="text-[10px] text-text-muted font-normal">(Last 1 hour)</span></span>
              </div>

              <div className="flex flex-col gap-2.5 text-xs">
                {/* Requests Row */}
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Requests</span>
                  <span className="text-white font-semibold">1,245 req</span>
                </div>

                {/* Error Rate Row */}
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Error Rate</span>
                  <span className="text-white font-semibold">2.3%</span>
                </div>

                {/* Latency Row */}
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Latency (p95)</span>
                  <span className="text-white font-semibold">120 ms</span>
                </div>
              </div>
            </div>

            {/* Live Data Footer Notice */}
            <div className="flex items-center gap-1.5 justify-center py-2 text-text-muted text-[10px] italic">
              <Info className="w-3.5 h-3.5 text-text-muted" />
              <span>Runtime data is updated every 30 seconds</span>
            </div>
          </>
        ) : (
          /* Configuration View */
          <div className="bg-[#050507] border border-border-dark rounded-xl p-4 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-white font-medium text-[13px] border-b border-border-dark pb-2">
              <FileCode className="w-4 h-4 text-text-muted" />
              <span>Configuration Parameters</span>
            </div>

            <div className="flex flex-col gap-3.5 text-xs font-mono">
              <div className="flex flex-col gap-1">
                <span className="text-text-muted text-[10px] uppercase font-sans">Docker Image</span>
                <span className="text-white bg-bg-active/50 px-2 py-1 rounded border border-border-dark truncate">
                  node-service-{selectedNodeId}:v1.2.4
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-text-muted text-[10px] uppercase font-sans">Environment</span>
                <span className="text-white bg-bg-active/50 px-2 py-1 rounded border border-border-dark">
                  production
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-text-muted text-[10px] uppercase font-sans">Ports Mapping</span>
                <span className="text-white bg-bg-active/50 px-2 py-1 rounded border border-border-dark">
                  8080:8080/tcp
                </span>
              </div>

              <div className="flex justify-between items-center py-1 border-t border-border-dark mt-2 font-sans">
                <span className="text-text-muted">Min Replicas</span>
                <span className="text-white font-semibold">3</span>
              </div>

              <div className="flex justify-between items-center py-1 font-sans">
                <span className="text-text-muted">Max Replicas</span>
                <span className="text-white font-semibold">10</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default NodeInspector;
