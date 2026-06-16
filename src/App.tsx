import { useState } from 'react';
import TopBar from './components/layout/TopBar';
import LeftRail from './components/layout/LeftRail';
import CanvasControls from './components/canvas/CanvasControls';
import { NodeGraph } from './components/canvas/NodeGraph';
import RightPanel from './components/layout/RightPanel';
import { useBuilderStore } from './store/useBuilderStore';

function App() {
  const [zoomPercent, setZoomPercent] = useState(100);
  const isMobilePanelOpen = useBuilderStore((state) => state.isMobilePanelOpen);
  const setIsMobilePanelOpen = useBuilderStore((state) => state.setIsMobilePanelOpen);

  return (
    <div className="w-screen h-screen flex flex-col bg-bg-dark text-zinc-100 font-sans overflow-hidden">
      <TopBar
        onMenuToggle={() => setIsMobilePanelOpen(!isMobilePanelOpen)}
        onFitView={() => setZoomPercent(100)}
        onToggleTheme={() => console.log('Toggle Theme')}
      />

      <div className="flex-1 flex overflow-hidden">
        <LeftRail />
        
        <main
          className="flex-1 relative flex flex-col justify-center items-center overflow-hidden pb-16 md:pb-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        >
            <NodeGraph zoomPercent={zoomPercent} setZoomPercent={setZoomPercent} />
          <CanvasControls setZoomPercent={setZoomPercent} zoomPercent={zoomPercent} />
        </main>

        <RightPanel />
      </div>
    </div>
  );
}

export default App;
