export function NodeGraphSkeleton() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-bg-dark relative overflow-hidden select-none">
      {/* Background grid representation */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(var(--grid-dots) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* SVG for connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none text-zinc-800 opacity-40">
        <line x1="25%" y1="50%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
        <line x1="50%" y1="50%" x2="75%" y2="30%" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
        <line x1="50%" y1="50%" x2="75%" y2="70%" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
      </svg>

      {/* Nodes */}
      <div className="absolute left-[25%] top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="w-[180px] h-[74px] bg-bg-panel border border-border-dark rounded-xl animate-pulse flex items-center px-4 gap-3 shadow-lg">
          <div className="w-10 h-10 rounded-lg bg-zinc-800 animate-pulse flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-3 bg-zinc-800 rounded w-4/5 animate-pulse" />
            <div className="h-2 bg-zinc-800/60 rounded w-1/2 animate-pulse" />
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="w-[180px] h-[74px] bg-bg-panel border border-border-dark rounded-xl animate-pulse flex items-center px-4 gap-3 shadow-lg ring-2 ring-indigo-500/10">
          <div className="w-10 h-10 rounded-lg bg-zinc-800 animate-pulse flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-3 bg-zinc-800 rounded w-3/4 animate-pulse" />
            <div className="h-2 bg-zinc-800/60 rounded w-2/3 animate-pulse" />
          </div>
        </div>
      </div>

      <div className="absolute left-[75%] top-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="w-[180px] h-[74px] bg-bg-panel border border-border-dark rounded-xl animate-pulse flex items-center px-4 gap-3 shadow-lg">
          <div className="w-10 h-10 rounded-lg bg-zinc-800 animate-pulse flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-3 bg-zinc-800 rounded w-4/5 animate-pulse" />
            <div className="h-2 bg-zinc-800/60 rounded w-1/3 animate-pulse" />
          </div>
        </div>
      </div>

      <div className="absolute left-[75%] top-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="w-[180px] h-[74px] bg-bg-panel border border-border-dark rounded-xl animate-pulse flex items-center px-4 gap-3 shadow-lg">
          <div className="w-10 h-10 rounded-lg bg-zinc-800 animate-pulse flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-3 bg-zinc-800 rounded w-2/3 animate-pulse" />
            <div className="h-2 bg-zinc-800/60 rounded w-1/2 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}