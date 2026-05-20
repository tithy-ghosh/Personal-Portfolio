import SectionDivide from '../../Components/SectionDivide'
import { useEffect, useRef, useState } from 'react'

const LINE_NUMBERS = Array.from({ length: 15 }, (_, i) => i + 1)

export default function Education() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Progress: 2026 is ~2 yrs into a 2024–2028 degree = ~50%, but visually show 35% (year 2 of 4)
  const totalYears = 4
  const yearsIn = 2
  const pct = Math.round((yearsIn / totalYears) * 100)
  const circumference = 2 * Math.PI * 50   // r=50
  const offset = circumference - (pct / 100) * circumference

  return (
    <div
      id="education"
      className="w-full py-20"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0f0d1a 50%, #0a0a0f 100%)' }}
    >
      <h1 className="sora-font text-center text-font text-5xl font-bold mb-4">Education</h1>
      <SectionDivide />

      {/* IDE Window */}
      <div
        ref={ref}
        className="max-w-[800px] mx-auto px-6 mt-16 transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(32px)',
        }}
      >
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: '1px solid rgba(139,92,246,0.25)',
            boxShadow: '0 0 60px rgba(139,92,246,0.08), 0 0 120px rgba(6,182,212,0.04)',
          }}
        >

          {/* ── Title Bar ── */}
          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{ background: '#1a1730', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
          >
            {/* Traffic lights */}
            <div className="flex gap-[7px]">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>

            {/* Tabs */}
            <div className="flex ml-2">
              <div
                className="flex items-center gap-1.5 px-4 py-1 text-[11px] text-[#d1d5db]"
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  background: 'rgba(139,92,246,0.08)',
                  borderBottom: '1px solid #8B5CF6',
                  borderRight: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <span className="w-[5px] h-[5px] rounded-full bg-[#8B5CF6]" />
                education.json
              </div>
              <div
                className="px-4 py-1 text-[11px] text-[#3d3a5e]"
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  borderRight: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                README.md
              </div>
            </div>

            {/* Breadcrumb */}
            <div
              className="ml-auto text-[10px] text-[#3d3a5e]"
              style={{ fontFamily: '"JetBrains Mono", monospace' }}
            >
              portfolio / data / education.json
            </div>
          </div>

          {/* ── Body ── */}
          <div className="flex" style={{ background: '#0d0b1f', minHeight: '300px' }}>

            {/* Gutter */}
            <div
              className="flex flex-col py-4 select-none"
              style={{ background: '#0a0919', minWidth: '44px' }}
            >
              {LINE_NUMBERS.map(n => (
                <div
                  key={n}
                  className="text-right px-3 leading-[22px] text-[11px]"
                  style={{ fontFamily: '"JetBrains Mono", monospace', color: '#2e2b4a' }}
                >
                  {n}
                </div>
              ))}
            </div>

            {/* Code */}
            <div
              className="flex-1 py-4 pl-0 pr-6 text-[12.5px] leading-[22px] whitespace-pre overflow-x-auto"
              style={{ fontFamily: '"JetBrains Mono", monospace' }}
            >
              {`{`}{'\n'}
              <span style={{ color: '#3d3a5e', fontStyle: 'italic' }}>{'  // 🎓 Academic Profile — Shrabony Ghosh Tithy'}</span>{'\n'}
              {'  '}<span style={{ color: '#7dd3fc' }}>"degree"</span><span style={{ color: '#6b7280' }}>:</span>  <span style={{ color: '#86efac' }}>"B.Sc in Computer Science &amp; Engineering"</span><span style={{ color: '#6b7280' }}>,</span>{'\n'}
              {'  '}<span style={{ color: '#7dd3fc' }}>"institution"</span><span style={{ color: '#6b7280' }}>:</span>  <span style={{ color: '#86efac' }}>"Sylhet Engineering College"</span><span style={{ color: '#6b7280' }}>,</span>{'\n'}
              {'  '}<span style={{ color: '#7dd3fc' }}>"duration"</span><span style={{ color: '#6b7280' }}>:</span>  <span style={{ color: '#86efac' }}>"2024 → 2028"</span><span style={{ color: '#6b7280' }}>,</span>{'\n'}
              {'  '}<span style={{ color: '#7dd3fc' }}>"status"</span><span style={{ color: '#6b7280' }}>:</span>  <span style={{ color: '#c084fc' }}>true</span><span style={{ color: '#6b7280' }}>,</span>  <span style={{ color: '#3d3a5e', fontStyle: 'italic' }}>{'// currently enrolled'}</span>{'\n'}
              {'  '}<span style={{ color: '#7dd3fc' }}>"yearsCompleted"</span><span style={{ color: '#6b7280' }}>:</span>  <span style={{ color: '#f9a8d4' }}>2</span><span style={{ color: '#6b7280' }}>,</span>{'\n'}
              {'  '}<span style={{ color: '#7dd3fc' }}>"focus"</span><span style={{ color: '#6b7280' }}>:</span>  <span style={{ color: '#6b7280' }}>[</span>{'\n'}
              {'    '}<span style={{ color: '#86efac' }}>"Data Structures &amp; Algorithms"</span><span style={{ color: '#6b7280' }}>,</span>{'\n'}
              {'    '}<span style={{ color: '#86efac' }}>"Web Engineering"</span><span style={{ color: '#6b7280' }}>,</span>{'\n'}
              {'    '}<span style={{ color: '#86efac' }}>"OOP &amp; Software Design"</span>{'\n'}
              {'  '}<span style={{ color: '#6b7280' }}>],</span>{'\n'}
              {'  '}<span style={{ color: '#7dd3fc' }}>"passion"</span><span style={{ color: '#6b7280' }}>:</span>  <span style={{ color: '#86efac' }}>"Frontend Engineering"</span>{'\n'}
              <span style={{ color: '#6b7280' }}>{'}'}</span>
              <BlinkCursor />
            </div>

            {/* Right Panel */}
            <div
              className="w-[220px] flex-shrink-0 flex flex-col items-center justify-center gap-5 py-6 px-5"
              style={{ background: '#0f0d1a', borderLeft: '1px solid rgba(255,255,255,0.04)' }}
            >
              {/* Enrolled badge */}
              <div
                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px]"
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  background: 'rgba(139,92,246,0.12)',
                  border: '1px solid rgba(139,92,246,0.3)',
                  color: '#a78bfa',
                }}
              >
                <PulseDot />
                Enrolled
              </div>

              {/* Progress ring */}
              <div className="relative w-[110px] h-[110px]">
                <svg
                  width="110" height="110" viewBox="0 0 110 110"
                  style={{ transform: 'rotate(-90deg)' }}
                >
                  <defs>
                    <linearGradient id="pgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="55" cy="55" r="46"
                    fill="none"
                    stroke="rgba(139,92,246,0.1)"
                    strokeWidth="7"
                  />
                  <circle
                    cx="55" cy="55" r="46"
                    fill="none"
                    stroke="url(#pgGrad)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 46}
                    strokeDashoffset={2 * Math.PI * 46 - (pct / 100) * 2 * Math.PI * 46}
                    style={{ transition: 'stroke-dashoffset 1.2s ease 0.4s' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold text-white" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                    {pct}%
                  </span>
                  <span
                    className="text-[9px] uppercase tracking-widest"
                    style={{ fontFamily: '"JetBrains Mono", monospace', color: '#4a4770' }}
                  >
                    complete
                  </span>
                </div>
              </div>

              {/* Meta rows */}
              <div className="w-full flex flex-col gap-2">
                {[
                  ['year', '2 of 4'],
                  ['batch', "'28"],
                  ['location', 'Sylhet, BD'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center gap-2 text-[10px]" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                    <span style={{ color: '#4a4770' }}>{k}</span>
                    <span style={{ color: '#d1d5db' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Status Bar ── */}
          <div
            className="flex items-center gap-4 px-4 py-1.5"
            style={{ background: '#1a1730', borderTop: '1px solid rgba(255,255,255,0.04)' }}
          >
            <StatusItem accent dot="green">Active</StatusItem>
            <StatusItem>JSON</StatusItem>
            <StatusItem>UTF-8</StatusItem>
            <div className="flex-1" />
            <StatusItem>Ln 15, Col 1</StatusItem>
            <StatusItem accent>education.json</StatusItem>
          </div>

        </div>
      </div>

      <div className="mt-16">
        <SectionDivide />
      </div>
    </div>
  )
}

function BlinkCursor() {
  return (
    <span
      className="inline-block w-[2px] h-[13px] bg-[#8B5CF6] align-middle"
      style={{ animation: 'blink 1s steps(1) infinite' }}
    />
  )
}

function PulseDot() {
  return (
    <span
      className="w-[6px] h-[6px] rounded-full bg-[#8B5CF6] flex-shrink-0"
      style={{ animation: 'pulse 2s infinite' }}
    />
  )
}

function StatusItem({ children, accent, dot }) {
  return (
    <div
      className="flex items-center gap-1.5 text-[10px]"
      style={{
        fontFamily: '"JetBrains Mono", monospace',
        color: accent ? '#8B5CF6' : '#4a4770',
      }}
    >
      {dot && (
        <span
          className="w-[7px] h-[7px] rounded-full"
          style={{ background: dot === 'green' ? '#28c840' : '#8B5CF6' }}
        />
      )}
      {children}
    </div>
  )
}