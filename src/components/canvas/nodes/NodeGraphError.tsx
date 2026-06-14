export function NodeGraphError({ message }: { message: string }) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-bg-dark border border-dashed border-red-500/20 rounded-2xl p-6 text-center select-none">
      <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-4 animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 8.25h.008v.008H12v-.008Z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-zinc-200 mb-2">Failed to Load Node Graph</h3>
      <p className="text-sm text-text-muted max-w-md mb-6">{message}</p>
    </div>
  );
}