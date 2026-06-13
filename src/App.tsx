import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return true
  })

  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    if (isDark) {
      root.classList.add('dark')
      body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  // Satisfying count milestones
  const getCounterMessage = () => {
    if (count === 0) return 'Press to update state'
    if (count < 5) return 'Hot Module Replacement (HMR) is active! 🔥'
    if (count < 12) return 'State persists instantly. Superfast compile. 🚀'
    if (count < 20) return 'TypeScript compilation verified and clean. 🛡️'
    return 'Supercharged developer setup achieved! 🎉'
  }

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 bg-slate-50 text-slate-800 dark:bg-black dark:text-zinc-100">
      
      {/* Sticky Header / Navigation */}
      <header className="sticky top-0 z-50 glass backdrop-blur-md transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm shadow-md shadow-indigo-600/20">
              V
            </div>
            <span className="font-display font-bold text-lg tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
              Vite × React
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-zinc-400">
            <a href="https://vite.dev" target="_blank" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Vite Docs</a>
            <a href="https://react.dev" target="_blank" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">React Learn</a>
            <a href="https://github.com/vitejs/vite" target="_blank" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">GitHub</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-xl border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-900 transition-all duration-200 cursor-pointer text-slate-600 dark:text-zinc-400"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-12 md:py-20 flex flex-col gap-16">
        
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30 mb-6 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
              Next-Gen Development Template
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6">
              Build at the <br />
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-rose-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-indigo-300 dark:to-rose-400 animate-text-gradient">
                speed of light.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-xl mb-8 leading-relaxed font-light">
              Experience lightning-fast HMR, modular typescript integration, and premium Tailwind CSS v4 design primitives. Custom designed for the ultimate developer experience.
            </p>
            
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <a
                href="#next-steps"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-all duration-200 shadow-md shadow-slate-900/10 dark:shadow-white/5 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Started
              </a>
              <a
                href="https://react.dev"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-900 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Learn React
              </a>
            </div>
          </div>

          {/* Right Hologram Column */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/10 dark:to-pink-500/20 rounded-full filter blur-3xl z-[-1] scale-90"></div>
            
            {/* Interactive Logo Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              
              {/* Base Platform Ring */}
              <div className="absolute bottom-6 w-48 h-12 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full border border-indigo-500/10 dark:border-indigo-500/20 blur-[2px] transform rotateX(60deg)"></div>
              
              {/* Floating Base Hero Image */}
              <img
                src={heroImg}
                className="w-44 h-44 md:w-56 md:h-56 animate-float object-contain opacity-95 filter drop-shadow-[0_16px_24px_rgba(99,102,241,0.18)]"
                alt="Hero Illustration"
              />
              
              {/* Orbiting React Logo */}
              <img
                src={reactLogo}
                className="absolute top-6 right-6 w-14 h-14 md:w-16 md:h-16 animate-float-delayed filter drop-shadow-[0_4px_12px_rgba(97,218,251,0.35)] hover:scale-110 transition-transform cursor-pointer"
                alt="React logo"
                title="React"
              />
              
              {/* Orbiting Vite Logo */}
              <img
                src={viteLogo}
                className="absolute bottom-12 left-2 w-11 h-11 md:w-14 md:h-14 animate-float filter drop-shadow-[0_4px_12px_rgba(100,108,255,0.35)] hover:scale-110 transition-transform cursor-pointer"
                alt="Vite logo"
                title="Vite"
              />
            </div>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section id="next-steps" className="flex flex-col gap-6">
          <div className="text-center max-w-lg mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-2">Explore the Ecosystem</h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-zinc-400 font-light">Custom tools and resources designed to streamline your web development workflow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bento Card 1: Interactive Counter (Spans 2 columns on desktop) */}
            <div className="md:col-span-2 glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-950/50 flex items-center justify-center border border-violet-100 dark:border-violet-900/30 text-violet-600 dark:text-violet-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wider bg-violet-50 dark:bg-violet-950/50 px-2.5 py-1 rounded-full border border-violet-100 dark:border-violet-900/20">
                    State Sandbox
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Interactive Counter State
                </h3>
                <p className="text-sm text-slate-500 dark:text-zinc-400 font-light leading-relaxed max-w-md">
                  Vite bundles modules dynamically, so changing state is lightning fast. Click below to experience smooth UI response.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => setCount((count) => count + 1)}
                  className="w-full sm:w-auto relative overflow-hidden px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold shadow-md shadow-indigo-600/15 hover:shadow-indigo-600/25 transition-all duration-200 active:scale-98 cursor-pointer select-none text-sm"
                >
                  Count is {count}
                  <span className="ml-2.5 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold bg-white/20 rounded-md">
                    +{count}
                  </span>
                </button>
                <span className="text-xs text-slate-400 dark:text-zinc-500 italic pl-1">
                  {getCounterMessage()}
                </span>
              </div>
            </div>

            {/* Bento Card 2: Documentation Links */}
            <div className="glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center border border-indigo-100 dark:border-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                <h3 className="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Documentation
                </h3>
                <p className="text-sm text-slate-500 dark:text-zinc-400 font-light leading-relaxed">
                  Your core guides and API resources for React 19 and Vite 8 features.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-2">
                <a
                  href="https://vite.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-slate-100/50 hover:bg-slate-100 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/80 border border-slate-200/40 dark:border-zinc-800/40 transition-all group"
                >
                  <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300">Vite Guide</span>
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transform group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="https://react.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-slate-100/50 hover:bg-slate-100 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/80 border border-slate-200/40 dark:border-zinc-800/40 transition-all group"
                >
                  <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300">Learn React</span>
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transform group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Bento Card 3: GitHub Community */}
            <div className="glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 text-white dark:bg-zinc-800 flex items-center justify-center text-zinc-100">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
                
                <h3 className="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Open Source
                </h3>
                <p className="text-sm text-slate-500 dark:text-zinc-400 font-light leading-relaxed">
                  Contribute to Vite development. Check issues, submit PRs, and explore repository features.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="https://github.com/vitejs/vite"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-black font-semibold text-xs transition-transform hover:scale-[1.02] active:scale-[0.98] select-none"
                >
                  GitHub Repository
                </a>
              </div>
            </div>

            {/* Bento Card 4: Discord Chat */}
            <div className="glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 01-1.873-.894.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 01.078.009c.12.099.246.195.373.289a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
                  </svg>
                </div>
                
                <h3 className="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Community Chat
                </h3>
                <p className="text-sm text-slate-500 dark:text-zinc-400 font-light leading-relaxed">
                  Join the official Discord channel to discuss projects, get support, and collaborate.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="https://chat.vite.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-transform hover:scale-[1.02] active:scale-[0.98] select-none"
                >
                  Join Discord
                </a>
              </div>
            </div>

            {/* Bento Card 5: Social Feeds */}
            <div className="glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/50 flex items-center justify-center border border-sky-100 dark:border-sky-900/30 text-sky-600 dark:text-sky-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                
                <h3 className="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Social Channels
                </h3>
                <p className="text-sm text-slate-500 dark:text-zinc-400 font-light leading-relaxed">
                  Stay updated with announcements and community highlights on microblogs.
                </p>
              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href="https://x.com/vite_js"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center py-2.5 px-4 rounded-xl border border-slate-200 dark:border-zinc-800 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-zinc-900 transition-all text-center"
                >
                  X / Twitter
                </a>
                <a
                  href="https://bsky.app/profile/vite.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center py-2.5 px-4 rounded-xl border border-slate-200 dark:border-zinc-800 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-zinc-900 transition-all text-center"
                >
                  Bluesky
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/50 dark:border-zinc-900/50 mt-12 bg-white/20 dark:bg-black/20 backdrop-blur-sm transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-zinc-500 font-light">
          <span>&copy; {new Date().getFullYear()} Vite × React Template. Built for visual excellence.</span>
          <div className="flex gap-6">
            <a href="https://vite.dev" target="_blank" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Vite Engine</a>
            <a href="https://react.dev" target="_blank" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">React 19</a>
            <a href="https://tailwindcss.com" target="_blank" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Tailwind v4</a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
