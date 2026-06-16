import { Plus, Search } from "lucide-react";
import { useState } from "react";
import { useApps } from "../../hooks/useApps";
import { appIcons } from "../../constants/appIcons";
import { AppErrorState } from "./AppErrorState";
import { AppSkeletonList } from "./AppSkeletonList";
import { useBuilderStore } from "../../store/useBuilderStore";


const Apps = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const selectedAppId = useBuilderStore((state) => state.selectedAppId)
    const setSelectedAppId = useBuilderStore((state) => state.setSelectedAppId)

    const { data, isLoading, error } = useApps();

    const displayLoading = isLoading
    const displayError = error

    const filteredApps = data?.filter((app) =>
        app.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h2 className="text-foreground font-sans font-semibold text-base">
                    Applications
                </h2>
                <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-border-dark hover:bg-bg-active text-foreground text-[11px] font-medium transition-all cursor-pointer">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add App</span>
                </button>
            </div>

            <div className="relative w-full">
                <Search className="w-4 h-4 text-text-muted absolute left-3 top-2.5" />
                <input
                    type="text"
                    placeholder="Search applications..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-black/5 dark:bg-black/40 border border-border-dark rounded-lg pl-9 pr-4 py-2 text-xs text-foreground placeholder-text-muted outline-none focus:border-border-dark focus:ring-1 focus:ring-border-dark transition-all"
                />
            </div>

            <div className="flex flex-col gap-1.5 mt-2">
                {displayError ? (
                    <AppErrorState />
                ) : displayLoading ? (
                    <AppSkeletonList />
                ) : filteredApps && filteredApps.length > 0 ? (
                    filteredApps.map((app) => {
                        const Icon = appIcons[app.type];
                        const isActive = app.id === selectedAppId;
                        return (
                            <button
                                key={app.id}
                                onClick={() => setSelectedAppId(app.id)}
                                className={`flex items-center justify-between w-full p-3 rounded-xl border transition-all duration-200 text-left cursor-pointer group ${isActive
                                    ? 'bg-bg-active border-border-dark text-foreground font-medium shadow-md shadow-black/5 dark:shadow-black/30'
                                    : 'bg-transparent border-transparent text-text-muted hover:text-foreground hover:bg-bg-active/40'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon
                                        className={`w-4.5 h-4.5 transition-colors ${isActive
                                            ? 'text-foreground'
                                            : 'text-text-muted group-hover:text-foreground'
                                            }`}
                                    />
                                    <span className="text-[13px] tracking-wide">{app.name}</span>
                                </div>
                            </button>
                        );
                    })
                ) : (
                    <div className="text-text-muted text-[11px] text-center py-4 italic">
                        No applications found
                    </div>
                )}
            </div>
        </div>
    );
};

export default Apps;