export const AppSkeletonList = () => {
    return (
        <div className="flex flex-col gap-1.5 w-full">
            {[1, 2, 3, 4].map((i) => (
                <div 
                    key={i} 
                    className="flex items-center gap-3 w-full p-3 rounded-xl border border-transparent bg-bg-active/40 animate-pulse"
                >
                    <div className="w-4.5 h-4.5 rounded bg-white/5" />
                    <div className="h-3 bg-white/10 rounded w-24" />
                </div>
            ))}
        </div>
    );
};
