import React from 'react';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Base background */}
      <div className="absolute inset-0 bg-background" />

      {/* ── Ambient colour orbs ── */}
      {/* Top-left warm white glow */}
      <div className="absolute top-[-15%] left-[-10%] w-[55%] h-[55%] rounded-full bg-white/[0.04] blur-[60px] md:blur-[140px] animate-orb-1 transform-gpu" />
      {/* Bottom-right cold blue-white glow */}
      <div className="absolute bottom-[-20%] right-[-15%] w-[60%] h-[60%] rounded-full bg-indigo-400/[0.06] blur-[60px] md:blur-[160px] animate-orb-2 transform-gpu" />
      {/* Centre-right subtle violet tint */}
      <div className="absolute top-[35%] right-[10%] w-[35%] h-[45%] rounded-full bg-violet-500/[0.05] blur-[50px] md:blur-[120px] animate-orb-3 transform-gpu" />
      {/* Bottom-left accent */}
      <div className="absolute bottom-[5%] left-[5%] w-[30%] h-[35%] rounded-full bg-sky-400/[0.04] blur-[50px] md:blur-[110px] animate-orb-4 transform-gpu" />
      {/* Top-right cool cyan */}
      <div className="absolute top-[0%] right-[20%] w-[25%] h-[30%] rounded-full bg-cyan-300/[0.03] blur-[40px] md:blur-[100px] animate-orb-5 transform-gpu" />

      {/* ── Prominent Glowing Background Lights ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large sweeping gradients — enabled on md+ to prevent mobile GPU thermal throttling */}
        <div className="hidden md:block absolute -top-[50%] left-0 w-[40%] h-[200%] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent animate-sweep-1 blur-[80px] transform-gpu" />
        <div className="hidden md:block absolute -top-[50%] left-0 w-[30%] h-[200%] bg-gradient-to-r from-transparent via-indigo-400/[0.03] to-transparent animate-sweep-2 blur-[80px] transform-gpu" />
        
        {/* Floating glowing orbs */}
        <div className="hidden sm:block absolute top-[10%] left-[20%] w-72 h-72 bg-violet-500/20 rounded-full blur-[50px] md:blur-[80px] animate-float-light mix-blend-screen transform-gpu" />
        <div className="hidden sm:block absolute bottom-[10%] right-[20%] w-80 h-80 bg-cyan-400/20 rounded-full blur-[50px] md:blur-[90px] animate-float-light-alt mix-blend-screen transform-gpu" />
        <div className="hidden md:block absolute top-[40%] left-[60%] w-64 h-64 bg-fuchsia-500/15 rounded-full blur-[70px] animate-float-light mix-blend-screen transform-gpu" style={{ animationDelay: '2s' }} />
        <div className="hidden md:block absolute bottom-[30%] left-[10%] w-56 h-56 bg-primary/15 rounded-full blur-[60px] animate-float-light-alt mix-blend-screen transform-gpu" style={{ animationDelay: '4s' }} />
      </div>

      {/* ── Shooting light beams (thin diagonal streaks) ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="0.035" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beam2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beam3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Top-left → bottom-right beam */}
        <rect
          x="-10%" y="-5%"
          width="120%" height="4px"
          fill="url(#beam1)"
          className="animate-beam-1"
          style={{ transformBox: 'fill-box', transformOrigin: 'center', transform: 'rotate(35deg)' }}
        />
        {/* Top-right → bottom-left beam */}
        <rect
          x="-10%" y="20%"
          width="120%" height="3px"
          fill="url(#beam2)"
          className="animate-beam-2"
          style={{ transformBox: 'fill-box', transformOrigin: 'center', transform: 'rotate(-28deg)' }}
        />
        {/* Bottom-left → top-right short beam */}
        <rect
          x="-10%" y="65%"
          width="120%" height="2px"
          fill="url(#beam3)"
          className="animate-beam-3"
          style={{ transformBox: 'fill-box', transformOrigin: 'center', transform: 'rotate(18deg)' }}
        />
      </svg>

      {/* ── Floating particles / starfield ── */}
      {[
        { top: '12%', left: '22%', size: 1.5, delay: '0s',  dur: '4s'  },
        { top: '34%', left: '78%', size: 1,   delay: '1.2s', dur: '5s'  },
        { top: '58%', left: '14%', size: 2,   delay: '0.5s', dur: '6s'  },
        { top: '74%', left: '55%', size: 1.5, delay: '2s',  dur: '4.5s' },
        { top: '20%', left: '90%', size: 1,   delay: '0.8s', dur: '7s'  },
        { top: '88%', left: '38%', size: 2,   delay: '1.5s', dur: '5.5s'},
        { top: '45%', left: '47%', size: 1,   delay: '3s',  dur: '8s'  },
        { top: '6%',  left: '63%', size: 1.5, delay: '2.5s', dur: '4s'  },
        { top: '66%', left: '85%', size: 1,   delay: '0.3s', dur: '6.5s'},
        { top: '92%', left: '8%',  size: 2,   delay: '1s',  dur: '5s'  },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/25 animate-particle"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: p.delay,
            animationDuration: p.dur,
          }}
        />
      ))}

      {/* ── Subtle dot-grid mesh ── */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* ── Vignette edge darkening ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
};
