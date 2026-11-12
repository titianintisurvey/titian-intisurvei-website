'use client';
import React, { useState } from 'react';

export default function SpatialWorkspace() {
  const [activeTab, setActiveTab] = useState('preview');
  const [code, setCode] = useState('// Spatially optimized workspace for Xreal Nebula\nconst arMode = true;');

  return (
    <div className="w-screen h-screen bg-slate-950 text-slate-100 flex flex-col overflow-hidden font-sans select-none">
      
      {/* AR Status Header */}
      <header className="h-10 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></div>
          <span className="font-bold tracking-wider text-xs text-cyan-400">TITIAN SURVEY - XREAL SPATIAL WORKSPACE</span>
        </div>
        <div className="text-[10px] text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded border border-slate-700">
          AR Optimized (3-Panel Grid)
        </div>
      </header>

      {/* Main 3-Window Spatial Grid */}
      <main className="flex-1 grid grid-cols-12 gap-3 p-3 overflow-hidden">
        
        {/* Panel Kiri: Dokumentasi (Span 3) */}
        <section className="col-span-3 bg-slate-900/95 border border-slate-800/80 rounded-xl flex flex-col shadow-xl backdrop-blur-md overflow-hidden">
          <div className="bg-slate-800/90 px-3 py-2 border-b border-slate-700/50 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">📚 Dokumentasi</span>
          </div>
          <div className="p-3 flex-1 overflow-y-auto text-xs text-slate-300 space-y-2">
            <h4 className="font-semibold text-cyan-400">Panduan Spasial</h4>
            <p className="text-[11px] leading-relaxed text-slate-400">
              Tata letak dirancang agar pas di dalam field-of-view (FOV) kacamata Xreal tanpa perlu menoleh berlebihan.
            </p>
          </div>
        </section>

        {/* Panel Tengah: IDE / Editor Utama (Span 6) */}
        <section className="col-span-6 bg-slate-900/95 border border-slate-800/80 rounded-xl flex flex-col shadow-xl backdrop-blur-md overflow-hidden ring-1 ring-cyan-500/20">
          <div className="bg-slate-800/90 px-3 py-2 border-b border-slate-700/50 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">💻 Workspace Editor</span>
          </div>
          <div className="flex-1 p-3 bg-slate-950 flex flex-col">
            <textarea 
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full flex-1 bg-transparent font-mono text-xs text-cyan-200 resize-none focus:outline-none leading-relaxed"
              spellCheck="false"
            />
          </div>
        </section>

        {/* Panel Kanan: Preview / Chat (Span 3) */}
        <section className="col-span-3 bg-slate-900/95 border border-slate-800/80 rounded-xl flex flex-col shadow-xl backdrop-blur-md overflow-hidden">
          <div className="bg-slate-800/90 px-3 py-2 border-b border-slate-700/50 flex items-center space-x-2">
            <button 
              onClick={() => setActiveTab('preview')}
              className={`text-[11px] font-bold px-2 py-0.5 rounded transition-colors ${activeTab === 'preview' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}>
              Preview
            </button>
            <button 
              onClick={() => setActiveTab('chat')}
              className={`text-[11px] font-bold px-2 py-0.5 rounded transition-colors ${activeTab === 'chat' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}>
              Chat
            </button>
          </div>
          
          <div className="flex-1 p-3 overflow-y-auto flex flex-col justify-between text-xs">
            {activeTab === 'preview' ? (
              <div className="h-28 bg-slate-950 rounded border border-slate-800 flex items-center justify-center text-slate-500 text-[11px]">
                [Live Viewport]
              </div>
            ) : (
              <div className="text-slate-400 text-[11px]">AI Assistant siap membantu pengkodean Anda di AR.</div>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}
