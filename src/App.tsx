import { useState, useEffect } from 'react';
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

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') return stored;
    }
    return 'dark'; // default theme is dark
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    if (theme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="w-screen h-screen flex flex-col bg-bg-dark text-foreground font-sans overflow-hidden">
      <TopBar
        theme={theme}
        isMobilePanelOpen={isMobilePanelOpen}
        onMenuToggle={() => setIsMobilePanelOpen(!isMobilePanelOpen)}
        onFitView={() => setZoomPercent(100)}
        onToggleTheme={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
      />

      <div className="flex-1 flex overflow-hidden">
        <LeftRail />
        
        <main
          className="flex-1 relative flex flex-col justify-center items-center overflow-hidden pb-16 md:pb-0"
          style={{
            backgroundImage: 'radial-gradient(var(--grid-dots) 1px, transparent 1px)',
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
