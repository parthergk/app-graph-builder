import Apps from "../apps/Apps";
import NodeInspector from "../inspector/NodeInspector";

const RightPanel = () => {
    return (
        <div className="w-80 h-full bg-bg-panel flex flex-col justify-between p-4 border-l border-border-dark overflow-y-scroll">
            <Apps />
            <NodeInspector/>
        </div>
    )
}

export default RightPanel;