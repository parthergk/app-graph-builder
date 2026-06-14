import { useState } from 'react';
import TopBar from './components/layout/TopBar';
import LeftRail from './components/layout/LeftRail';
import CanvasTopBar from './components/canvas/TopBar';
import AppPanel from './components/apps/AppPanel';

function App() {
  const [activeCanvasTool, setActiveCanvasTool] = useState('pointer');
  const [zoomPercent, setZoomPercent] = useState(100);




  return (
    <div className="w-screen h-screen flex flex-col bg-bg-dark text-zinc-100 font-sans overflow-hidden">
      <TopBar
        onMenuToggle={() => console.log('Menu Toggled')}
        onFitView={() => setZoomPercent(100)}
        onToggleTheme={() => console.log('Toggle Theme')}
        onSettingsClick={() => console.log('Settings Clicked')}
      />

      <div className="flex-1 flex overflow-hidden">
        <LeftRail/>

        {/* Center Canvas Viewport */}
        <main
          className="flex-1 relative flex flex-col justify-center items-center overflow-hidden"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        >
          <div style={{transform: `scale(${zoomPercent / 100})`}}>
          hwoodd
          </div>
          <CanvasTopBar setActiveCanvasTool={setActiveCanvasTool} activeCanvasTool={activeCanvasTool} setZoomPercent={setZoomPercent} zoomPercent={zoomPercent}/>
        </main>
        <AppPanel/>
      </div>
    </div>
  );
}

export default App;
