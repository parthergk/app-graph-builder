import { AlertTriangle } from "lucide-react";

export const AppErrorState = () => {
    return (
        <div className="flex flex-col items-center justify-center p-5 my-2 rounded-2xl border border-rose-500/10 bg-rose-500/5 text-center transition-all duration-300">
            <div className="p-2.5 rounded-full bg-rose-500/10 text-rose-400 mb-3">
                <AlertTriangle className="w-5 h-5 animate-pulse" />
            </div>
            <h3 className="text-white text-xs font-semibold mb-1">Failed to Load Apps</h3>
            <p className="text-text-muted text-[10px] leading-relaxed max-w-[180px] mb-3">
                We encountered an error while fetching your applications.
            </p>
        </div>
    );
};