import Apps from "../apps/Apps";
import NodeInspector from "../inspector/NodeInspector";
import { useBuilderStore } from "../../store/useBuilderStore";

const RightPanel = () => {
    const isMobilePanelOpen = useBuilderStore((state) => state.isMobilePanelOpen);
    const setIsMobilePanelOpen = useBuilderStore((state) => state.setIsMobilePanelOpen);

    return (
        <div className={`w-80 bg-bg-panel flex flex-col gap-3 p-4 border-l border-border-dark overflow-y-auto
            fixed lg:relative top-16 lg:top-0 right-0 z-40 lg:z-0
            h-[calc(100vh-64px)] lg:h-full
            transition-transform duration-300 ease-in-out
            ${isMobilePanelOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        `} onClick={() => setIsMobilePanelOpen(false)}>
            <Apps />
            <NodeInspector />
        </div>
    )
}

export default RightPanel;