import SectionDivide from '../../Components/SectionDivide'

import { useEffect, useRef, useState } from 'react'

const TOTAL_LINES = 14
const LINE_DELAY_MS = 80

export default function Education() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [panelVisible, setPanelVisible] = useState(false)
  const ref = useRef(null)
  const timerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          let count = 0
          timerRef.current = setInterval(() => {
            count++
            setVisibleLines(count)
            if (count >= TOTAL_LINES) {
              clearInterval(timerRef.current)
              setTimeout(() => setPanelVisible(true), 200)
            }
          }, LINE_DELAY_MS)
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => {
      observer.disconnect()
      clearInterval(timerRef.current)
    }
  }, [])

  const pct = 50

  return (
    <div
      id="education"
      className="w-full py-20"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0f0d1a 50%, #0a0a0f 100%)' }}
    >
      <div className="px-4 sm:px-10 w-full" style={{ position: 'relative' }}>
        <div className="flex items-center gap-2 mb-5" style={{ position: 'relative' }}>
          <span className="w-5 h-[1px] bg-[#8b5cf6] inline-block" />
          <span
            className="text-[11px] tracking-[0.15em] uppercase text-[#8b5cf6]"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            Education
          </span>
        </div>
      </div>
      <SectionDivide />

      {/* IDE Window */}
      <div
        ref={ref}
        className="max-w-[800px] mx-auto px-4 sm:px-6 mt-16"
        style={{
          opacity:    visibleLines > 0 ? 1 : 0,
          transform:  visibleLines > 0 ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}
      >
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border:     '1px solid rgba(139,92,246,0.25)',
            boxShadow:  '0 0 60px rgba(139,92,246,0.08), 0 0 120px rgba(6,182,212,0.04)',
          }}
        >
          {/* Title Bar */}
          <div
            className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3"
            style={{ background: '#1a1730', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div className="flex gap-[6px]">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex ml-2">
              <div
                className="flex items-center gap-1.5 px-3 py-1 text-[11px] text-[#d1d5db]"
                style={{
                  fontFamily:   '"JetBrains Mono", monospace',
                  background:   'rgba(139,92,246,0.08)',
                  borderBottom: '1px solid #8B5CF6',
                  borderRight:  '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <span className="w-[5px] h-[5px] rounded-full bg-[#8B5CF6]" />
                education.json
              </div>
              <div
                className="px-3 py-1 text-[11px] text-[#3d3a5e]"
                style={{ fontFamily: '"JetBrains Mono", monospace', borderRight: '1px solid rgba(255,255,255,0.05)' }}
              >
                read
              </div>
            </div>
            <div
              className="ml-auto text-[10px] text-[#3d3a5e] hidden sm:block"
              style={{ fontFamily: '"JetBrains Mono", monospace' }}
            >
              portfolio / data / education.json
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col md:flex-row" style={{ background: '#0d0b1f' }}>

            {/* Code + Gutter */}
            <div className="flex-1 min-w-0">
              <pre
                style={{
                  margin:      0,
                  padding:     '16px 0',
                  fontFamily:  '"JetBrains Mono", monospace',
                  fontSize:    '12px',
                  lineHeight:  '22px',
                  background:  'transparent',
                }}
              >
                <AnimLine i={1}  v={visibleLines}><C w>{'{'}</C></AnimLine>
                <AnimLine i={2}  v={visibleLines}><C c>{'  // 🎓 Academic Profile — Shrabony Ghosh Tithy'}</C></AnimLine>
                <AnimLine i={3}  v={visibleLines}>{'  '}<C b>"degree"</C><C g>: </C><C s>"B.Sc in Computer Science & Engineering"</C><C g>,</C></AnimLine>
                <AnimLine i={4}  v={visibleLines}>{'  '}<C b>"institution"</C><C g>: </C><C s>"Sylhet Engineering College"</C><C g>,</C></AnimLine>
                <AnimLine i={5}  v={visibleLines}>{'  '}<C b>"duration"</C><C g>: </C><C s>"2024 → 2028"</C><C g>,</C></AnimLine>
                <AnimLine i={6}  v={visibleLines}>{'  '}<C b>"status"</C><C g>: </C><C p>true</C><C g>,{'  '}</C><C c>{'// currently enrolled'}</C></AnimLine>
                <AnimLine i={7}  v={visibleLines}>{'  '}<C b>"yearsCompleted"</C><C g>: </C><C pk>2</C><C g>,</C></AnimLine>
                <AnimLine i={8}  v={visibleLines}>{'  '}<C b>"focus"</C><C g>: [</C></AnimLine>
                <AnimLine i={9}  v={visibleLines}>{'    '}<C s>"Data Structures & Algorithms"</C><C g>,</C></AnimLine>
                <AnimLine i={10} v={visibleLines}>{'    '}<C s>"Web Engineering"</C><C g>,</C></AnimLine>
                <AnimLine i={11} v={visibleLines}>{'    '}<C s>"OOP & Software Design"</C></AnimLine>
                <AnimLine i={12} v={visibleLines}>{'  '}<C g>],</C></AnimLine>
                <AnimLine i={13} v={visibleLines}>{'  '}<C b>"passion"</C><C g>: </C><C s>"Frontend Engineering"</C></AnimLine>
                <AnimLine i={14} v={visibleLines}><C g>{'}'}</C>{visibleLines >= TOTAL_LINES && <BlinkCursor />}</AnimLine>
              </pre>
            </div>

            {/* Right Panel */}
            <div
              className="w-full md:w-[220px] flex-shrink-0 flex flex-col items-center justify-center gap-5 py-6 px-5 border-t border-white/5 md:border-t-0 md:border-l"
              style={{
                background: '#0f0d1a',
                opacity:    panelVisible ? 1 : 0,
                transform:  panelVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              {/* Enrolled badge */}
              <div
                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px]"
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  background: 'rgba(139,92,246,0.12)',
                  border:     '1px solid rgba(139,92,246,0.3)',
                  color:      '#a78bfa',
                }}
              >
                <PulseDot />
                Enrolled
              </div>

              {/* Progress ring */}
              <div className="relative w-[110px] h-[110px]">
                <svg width="110" height="110" viewBox="0 0 110 110" style={{ transform: 'rotate(-90deg)' }}>
                  <defs>
                    <linearGradient id="pgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%"   stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                  <circle cx="55" cy="55" r="46" fill="none" stroke="rgba(139,92,246,0.1)" strokeWidth="7" />
                  <circle
                    cx="55" cy="55" r="46" fill="none"
                    stroke="url(#pgGrad)" strokeWidth="7" strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 46}
                    strokeDashoffset={panelVisible
                      ? 2 * Math.PI * 46 - (pct / 100) * 2 * Math.PI * 46
                      : 2 * Math.PI * 46}
                    style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1) 0.2s' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <CountUp target={panelVisible ? pct : 0} suffix="%" className="text-xl font-bold text-white" mono />
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
                {[['year', '2 of 4'], ['batch', "'28"], ['location', 'Sylhet, BD']].map(([k, v], idx) => (
                  <div
                    key={k}
                    className="flex items-center gap-2 text-[10px]"
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      opacity:    panelVisible ? 1 : 0,
                      transform:  panelVisible ? 'translateX(0)' : 'translateX(-10px)',
                      transition: `opacity 0.4s ease ${0.3 + idx * 0.1}s, transform 0.4s ease ${0.3 + idx * 0.1}s`,
                    }}
                  >
                    <span style={{ color: '#4a4770' }}>{k}</span>
                    <span style={{ color: '#d1d5db' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div
            className="flex items-center gap-4 px-4 py-1.5"
            style={{ background: '#1a1730', borderTop: '1px solid rgba(255,255,255,0.04)' }}
          >
            <StatusItem accent dot="green">Active</StatusItem>
            <StatusItem>JSON</StatusItem>
            <StatusItem>UTF-8</StatusItem>
            <div className="flex-1" />
            <StatusItem>Ln {visibleLines}, Col 1</StatusItem>
            <StatusItem accent>education.json</StatusItem>
          </div>
        </div>
      </div>

      <div className="mt-16"><SectionDivide /></div>
    </div>
  )
}

function AnimLine({ i, v, children }) {
  const show = v >= i
  return (
    <div style={{ display: 'flex', lineHeight: '22px', opacity: show ? 1 : 0, transform: show ? 'translateX(0)' : 'translateX(-6px)', transition: 'opacity 0.25s ease, transform 0.25s ease' }}>
      <span style={{ display: 'inline-block', minWidth: '2.5rem', paddingRight: '12px', paddingLeft: '4px', textAlign: 'right', color: show ? '#4a4770' : '#2e2b4a', fontSize: '11px', background: '#0a0919', flexShrink: 0, userSelect: 'none', transition: 'color 0.3s ease' }}>{i}</span>
      <span style={{ paddingLeft: '12px', paddingRight: '16px', color: '#d1d5db', whiteSpace: 'pre-wrap', wordBreak: 'break-word', flex: 1 }}>{children}</span>
    </div>
  )
}

function C({ children, b, s, g, p, c, pk, w }) {
  const color = b ? '#7dd3fc' : s ? '#86efac' : g ? '#6b7280' : p ? '#c084fc' : c ? '#3d3a5e' : pk ? '#f9a8d4' : w ? '#d1d5db' : '#d1d5db'
  return <span style={{ color, ...(c ? { fontStyle: 'italic' } : {}) }}>{children}</span>
}

function CountUp({ target, suffix = '', className, mono }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (target === 0) { setVal(0); return }
    let start = 0
    const step = Math.ceil(target / 30)
    const t = setInterval(() => {
      start += step
      if (start >= target) { setVal(target); clearInterval(t) }
      else setVal(start)
    }, 40)
    return () => clearInterval(t)
  }, [target])
  return <span className={className} style={mono ? { fontFamily: '"JetBrains Mono", monospace' } : {}}>{val}{suffix}</span>
}

function BlinkCursor() {
  return <span style={{ display: 'inline-block', width: '2px', height: '13px', background: '#8B5CF6', verticalAlign: 'middle', marginLeft: '2px', animation: 'blink 1s steps(1) infinite' }} />
}

function PulseDot() {
  return <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', flexShrink: 0, animation: 'pulse 2s infinite' }} />
}

function StatusItem({ children, accent, dot }) {
  return (
    <div className="flex items-center gap-1.5 text-[10px]" style={{ fontFamily: '"JetBrains Mono", monospace', color: accent ? '#8B5CF6' : '#4a4770' }}>
      {dot && <span style={{ display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%', background: dot === 'green' ? '#28c840' : '#8B5CF6' }} />}
      {children}
    </div>
  )
}