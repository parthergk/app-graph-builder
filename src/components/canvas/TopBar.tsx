import { Hand, Minus, MousePointer, Plus } from "lucide-react"

const CanvasTopBar = ({setActiveCanvasTool, activeCanvasTool, setZoomPercent, zoomPercent}) => {
    return(
       <div className="absolute top-4 left-4 bg-bg-panel border border-border-dark rounded-xl p-1.5 flex justify-center items-center gap-1 shadow-lg shadow-black/40 z-10">
            <button
              onClick={() => setActiveCanvasTool('pointer')}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                activeCanvasTool === 'pointer' ? 'bg-bg-active text-white' : 'text-text-muted hover:text-white'
              }`}
              title="Select Tool"
            >
              <MousePointer className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveCanvasTool('hand')}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                activeCanvasTool === 'hand' ? 'bg-bg-active text-white' : 'text-text-muted hover:text-white'
              }`}
              title="Pan Tool"
            >
              <Hand className="w-4 h-4" />
            </button>
                        <div className="w-px bg-border-dark h-4" />
            <button
              onClick={() => setZoomPercent(prev => Math.min(200, prev + 10))}
              className="p-2 rounded-lg text-text-muted hover:text-white transition-colors cursor-pointer"
              title="Zoom In"
            >
              <Plus className="w-4 h-4" />
            </button>
             <span className="text-white text-xs font-medium text-center font-mono">
              {zoomPercent}%
            </span>
            <button
              onClick={() => setZoomPercent(prev => Math.max(50, prev - 10))}
              className="p-2 rounded-lg text-text-muted hover:text-white transition-colors cursor-pointer"
              title="Zoom Out"
            >
              <Minus className="w-4 h-4" />
            </button>
            
          </div>
    )
}

export default CanvasTopBar