import Apps from "../apps/Apps";

const RightPanel = () => {
    return (
        <div className="w-64 h-full bg-bg-panel flex flex-col justify-between p-4 border-l border-border-dark">
            <Apps />
        </div>
    )
}

export default RightPanel;