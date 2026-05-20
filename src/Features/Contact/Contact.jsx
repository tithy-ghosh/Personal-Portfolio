import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { useInView } from '../../hooks/useInView'

const EMAILJS_SERVICE_ID  = 'service_2rjxgc6'
const EMAILJS_TEMPLATE_ID = 'template_07x84kn'
const EMAILJS_PUBLIC_KEY  = 'E4ywDyz-XezVncpS_'

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)
const LinkedInIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
const EmailIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)
const PhoneIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
)
const ArrowIcon = () => (
  <svg style={{ width: '14px', height: '14px', fill: 'none', stroke: 'currentColor', strokeWidth: 2, opacity: 0.35 }} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/>
  </svg>
)

const CONTACTS = [
  { label: 'Email',    value: 'sgt.tithy.717@gmail.com', href: 'mailto:sgt.tithy.717@gmail.com', icon: <EmailIcon /> },
  { label: 'Phone',    value: '+8801891483878',                  href: 'tel:+8801891483878',                     icon: <PhoneIcon /> },
  { label: 'LinkedIn', value: 'linkedin.com/in/shrabony-ghosh-tithy',      href: 'https://www.linkedin.com/in/shrabony-ghosh-tithy',    icon: <LinkedInIcon /> },
  { label: 'GitHub',   value: 'github.com/tithy-ghosh',           href: 'https://github.com/tithy-ghosh',         icon: <GithubIcon /> },
]

// ── shared field style helpers ──────────────────────────────────────────────
const baseInput = (focused, error) => ({
  width: '100%',
  padding: '10px 14px',
  borderRadius: '6px',
  fontSize: '13px',
  color: '#e2e0ff',
  background: focused ? 'rgba(139,92,246,0.05)' : 'rgba(255,255,255,0.03)',
  border: error
    ? '1px solid rgba(248,113,113,0.5)'
    : focused
    ? '1px solid rgba(139,92,246,0.55)'
    : '1px solid rgba(255,255,255,0.1)',
  outline: 'none',
  transition: 'all 0.2s',
  fontFamily: '"Sora", sans-serif',
  caretColor: '#8b5cf6',
  boxSizing: 'border-box',
})

const monoLabel = {
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: '10px',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#6b6890',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  marginBottom: '6px',
}

function Field({ label, id, type = 'text', value, onChange, error, placeholder, required }) {
  const [f, setF] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor={id} style={monoLabel}>
        {label}{required && <span style={{ color: '#8b5cf6' }}>*</span>}
      </label>
      {error && <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', color: '#f87171', marginBottom: '4px' }}>Required</span>}
      <input
        id={id} type={type} value={value} onChange={onChange} placeholder={placeholder}
        onFocus={() => setF(true)} onBlur={() => setF(false)}
        style={baseInput(f, error)}
      />
    </div>
  )
}

function Textarea({ id, label, value, onChange, error, placeholder, rows = 5, required }) {
  const [f, setF] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor={id} style={monoLabel}>
        {label}{required && <span style={{ color: '#8b5cf6' }}>*</span>}
      </label>
      {error && <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', color: '#f87171', marginBottom: '4px' }}>Required</span>}
      <textarea
        id={id} rows={rows} value={value} onChange={onChange} placeholder={placeholder}
        onFocus={() => setF(true)} onBlur={() => setF(false)}
        style={{ ...baseInput(f, error), resize: 'vertical' }}
      />
    </div>
  )
}

// ── tab intro banners ────────────────────────────────────────────────────────
function HireBanner() {
  return (
    <div style={{
      borderRadius: '10px',
      background: 'rgba(139,92,246,0.07)',
      border: '1px solid rgba(139,92,246,0.18)',
      padding: '16px 18px',
      marginBottom: '22px',
      display: 'flex',
      gap: '14px',
      alignItems: 'flex-start',
    }}>
      <div style={{
        width: '36px', height: '36px', borderRadius: '8px', flexShrink: 0,
        background: 'rgba(139,92,246,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg style={{ width: '18px', height: '18px', fill: '#a78bfa' }} viewBox="0 0 24 24">
          <path d="M20 6h-2.18c.07-.44.18-.88.18-1.36C18 2.51 15.49 0 12.36 0c-1.9 0-3.45 1.04-4.36 2.56L12 7l3.96-4.44C15.55 2.21 15.96 2 16.36 2c1.14 0 1.64.96 1.64 1.64 0 .44-.21.88-.53 1.22L15.36 7H14V6h-4v1H8.64L6.53 4.86C6.21 4.52 6 4.08 6 3.64 6 2.96 6.5 2 7.64 2c.4 0 .81.21 1.1.56l-.74.83c-.56-.63-1.3-1.08-2.18-1.19C4.49 2.51 2 5.02 2 7.64c0 .48.11.92.18 1.36H0v14h24V6h-4zm-8 11l-4-4h3V9h2v4h3l-4 4z"/>
        </svg>
      </div>
      <div>
        <p style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: 700, color: '#c4b5fd' }}>
          Open to new opportunities
        </p>
        <p style={{ margin: 0, fontSize: '12px', color: '#6b6890', lineHeight: 1.6 }}>
          Lead & Senior engineering roles · Consulting · Remote-first, worldwide.
          Share your role and project details — I'll respond within 24 hours.
        </p>
      </div>
    </div>
  )
}

function HelloBanner() {
  return (
    <div style={{
      borderRadius: '10px',
      background: 'rgba(6,182,212,0.06)',
      border: '1px solid rgba(6,182,212,0.15)',
      padding: '16px 18px',
      marginBottom: '22px',
      display: 'flex',
      gap: '14px',
      alignItems: 'flex-start',
    }}>
      <div style={{
        width: '36px', height: '36px', borderRadius: '8px', flexShrink: 0,
        background: 'rgba(6,182,212,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg style={{ width: '18px', height: '18px', fill: '#67e8f9' }} viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
      </div>
      <div>
        <p style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: 700, color: '#67e8f9' }}>
          Just want to say hi?
        </p>
        <p style={{ margin: 0, fontSize: '12px', color: '#6b6890', lineHeight: 1.6 }}>
          Happy to chat about tech, ideas, or anything interesting. No agenda needed.
        </p>
      </div>
    </div>
  )
}

// ── main component ───────────────────────────────────────────────────────────
export default function Contact() {
  const [tab, setTab] = useState('hello')
  const [hireForm, setHireForm] = useState({ name: '', email: '', role: '', company: '', message: '' })
  const [helloForm, setHelloForm] = useState({ name: '', message: '' })
  const [hireErrors, setHireErrors] = useState({})
  const [helloErrors, setHelloErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [errDetail, setErrDetail] = useState('')

  const [headerRef, headerVisible] = useInView(0.1)
  const [leftRef,   leftVisible]   = useInView(0.1)
  const [rightRef,  rightVisible]  = useInView(0.1)

  useEffect(() => { emailjs.init(EMAILJS_PUBLIC_KEY) }, [])

  function updateHire(field) {
    return e => {
      setHireForm(f => ({ ...f, [field]: e.target.value }))
      if (hireErrors[field]) setHireErrors(ev => ({ ...ev, [field]: undefined }))
    }
  }
  function updateHello(field) {
    return e => {
      setHelloForm(f => ({ ...f, [field]: e.target.value }))
      if (helloErrors[field]) setHelloErrors(ev => ({ ...ev, [field]: undefined }))
    }
  }

  async function send(payload) {
    setStatus('sending')
    setErrDetail('')
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { ...payload, to_name: 'Tithy' })
      setStatus('success')
    } catch (err) {
      setErrDetail(err?.text || err?.message || 'Unknown error')
      setStatus('error')
    }
  }

  function submitHire(e) {
    e.preventDefault()
    const errs = {}
    if (!hireForm.name.trim()) errs.name = true
    if (!hireForm.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(hireForm.email)) errs.email = true
    if (!hireForm.message.trim() || hireForm.message.trim().length < 10) errs.message = true
    if (Object.keys(errs).length) { setHireErrors(errs); return }
    send({ from_name: hireForm.name, from_email: hireForm.email, message: `[HIRE ME]\nRole: ${hireForm.role}\nCompany: ${hireForm.company}\n\n${hireForm.message}` })
  }

  function submitHello(e) {
    e.preventDefault()
    const errs = {}
    if (!helloForm.name.trim()) errs.name = true
    if (!helloForm.message.trim() || helloForm.message.trim().length < 5) errs.message = true
    if (Object.keys(errs).length) { setHelloErrors(errs); return }
    send({ from_name: helloForm.name, from_email: '(no email)', message: `[SAY HELLO]\n${helloForm.message}` })
  }

  function resetSuccess() {
    setStatus('idle')
    setHireForm({ name: '', email: '', role: '', company: '', message: '' })
    setHelloForm({ name: '', message: '' })
  }

  const tabBtn = (active, accent) => ({
    flex: 1,
    padding: '9px 0',
    borderRadius: '5px',
    border: 'none',
    fontSize: '13px',
    fontWeight: 600,
    fontFamily: '"Sora", sans-serif',
    cursor: 'pointer',
    transition: 'all 0.2s',
    background: active
      ? accent === 'purple'
        ? 'linear-gradient(135deg, #7c3aed, #6366f1)'
        : 'linear-gradient(135deg, #0891b2, #06b6d4)'
      : 'transparent',
    color: active ? '#fff' : '#6b6890',
    letterSpacing: '0.01em',
  })

  const submitBtnStyle = (accent) => ({
    width: '100%',
    padding: '13px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '14px',
    fontWeight: 700,
    fontFamily: '"Sora", sans-serif',
    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
    background: status === 'sending'
      ? 'rgba(139,92,246,0.35)'
      : accent === 'purple'
      ? 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)'
      : 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'opacity 0.2s',
    letterSpacing: '0.02em',
    marginTop: '4px',
  })

  return (
    <div id="contact" style={{
      width: '100%', minHeight: '100vh', background: '#0c0b14',
      padding: '80px 0', boxSizing: 'border-box', fontFamily: '"Sora", sans-serif',
    }}>
      {/* Section label */}
      <div
        ref={headerRef}
        className="px-4 sm:px-10 w-full"
        style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div style={{
          fontFamily: '"JetBrains Mono", monospace', fontSize: '11px',
          letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8b5cf6',
          marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px',
        }}>
          <span style={{ width: '20px', height: '1px', background: '#8b5cf6', display: 'inline-block' }} />
          Contact
        </div>
      </div>

      <div
        style={{ maxWidth: '1100px', margin: '0 auto' }}
        className="px-4 sm:px-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-[80px] items-stretch"
      >
        {/* ── LEFT ── */}
        <div
          ref={leftRef}
          style={{
            opacity: leftVisible ? 1 : 0,
            transform: leftVisible ? 'translateX(0)' : 'translateX(-36px)',
            transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
          }}
        >
          {/* Heading — each word pops in */}
          <div style={{ overflow: 'hidden', marginBottom: '4px' }}>
            <h2
              style={{
                fontSize: 'clamp(32px, 8vw, 52px)', fontWeight: 800, color: '#f0eeff',
                lineHeight: 1.1, margin: 0, letterSpacing: '-0.02em',
                opacity: leftVisible ? 1 : 0,
                transform: leftVisible ? 'translateY(0)' : 'translateY(60px)',
                transition: 'opacity 0.6s ease 0.05s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.05s',
              }}
            >
              Let's build
            </h2>
          </div>
          <div style={{ overflow: 'hidden', marginBottom: '28px' }}>
            <h2
              style={{
                fontSize: 'clamp(32px, 8vw, 52px)', fontWeight: 800, fontStyle: 'italic',
                color: '#7c6ff7', lineHeight: 1.1, margin: 0, letterSpacing: '-0.02em',
                opacity: leftVisible ? 1 : 0,
                transform: leftVisible ? 'translateY(0)' : 'translateY(60px)',
                transition: 'opacity 0.6s ease 0.18s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.18s',
              }}
            >
              something great
            </h2>
          </div>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', marginBottom: '4px' }} />

          {CONTACTS.map((c, idx) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '18px 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
                textDecoration: 'none',
                opacity: leftVisible ? 1 : 0,
                transform: leftVisible ? 'translateX(0) rotateX(0deg)' : 'translateX(-24px) rotateX(30deg)',
                transition: `opacity 0.5s ease ${0.3 + idx * 0.09}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${0.3 + idx * 0.09}s, padding-left 0.2s`,
              }}
              onMouseEnter={e => { e.currentTarget.style.paddingLeft = '6px' }}
              onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0px' }}
            >
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b5cf6',
              }}>{c.icon}</div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4a4770' }}>{c.label}</span>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#e2e0ff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.value}</span>
              </div>
              <ArrowIcon />
            </a>
          ))}
        </div>

        {/* ── RIGHT — slides up from below ── */}
        <div
          ref={rightRef}
          style={{
            paddingTop: '36px', display: 'flex', flexDirection: 'column', height: '100%',
            opacity: rightVisible ? 1 : 0,
            transform: rightVisible ? 'translateY(0)' : 'translateY(48px)',
            transition: 'opacity 0.7s ease 0.3s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s',
          }}
        >
          {/* Tab toggle */}
          <div style={{
            display: 'flex', background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px',
            padding: '4px', gap: '4px', marginBottom: '24px',
          }}>
            <button style={tabBtn(tab === 'hire', 'purple')} onClick={() => { setTab('hire'); setStatus('idle') }}>
              Hire Me
            </button>
            <button style={tabBtn(tab === 'hello', 'cyan')} onClick={() => { setTab('hello'); setStatus('idle') }}>
              Say Hello
            </button>
          </div>

          {/* Success state */}
          {status === 'success' ? (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: '60px 0', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg style={{ width: '28px', height: '28px', fill: '#34d399' }} viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: '18px', fontWeight: 700, color: '#f0eeff', margin: '0 0 6px' }}>Message sent!</p>
                <p style={{ fontSize: '13px', color: '#6b6890', margin: 0 }}>I'll get back to you within 24 hours.</p>
              </div>
              <button onClick={resetSuccess} style={{ marginTop: '8px', fontSize: '12px', color: '#8b5cf6', background: 'none', border: 'none', cursor: 'pointer', fontFamily: '"JetBrains Mono", monospace' }}>
                Send another →
              </button>
            </div>

          ) : tab === 'hire' ? (
            /* ── HIRE ME FORM ── */
            <form onSubmit={submitHire} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
                <Field label="Your Name" id="name" value={hireForm.name} onChange={updateHire('name')} error={hireErrors.name} placeholder="Jane Smith" required />
                <Field label="Email Address" id="email" type="email" value={hireForm.email} onChange={updateHire('email')} error={hireErrors.email} placeholder="jane@company.com" required />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
                <Field label="Role / Position" id="role" value={hireForm.role} onChange={updateHire('role')} error={hireErrors.role} placeholder="Senior Engineer" />
                <Field label="Company" id="company" value={hireForm.company} onChange={updateHire('company')} error={hireErrors.company} placeholder="Acme Inc." />
              </div>

              <Textarea
                label="Tell me about the role"
                id="hire-message"
                value={hireForm.message}
                onChange={updateHire('message')}
                error={hireErrors.message}
                placeholder="Describe the role, tech stack, team size, and what you're building..."
                rows={4}
                required
              />

              {status === 'error' && <ErrorBanner detail={errDetail} />}

              <button type="submit" disabled={status === 'sending'} style={submitBtnStyle('purple')}>
                {status === 'sending' ? <Spinner /> : <>Send Inquiry <span>→</span></>}
              </button>
            </form>

          ) : (
            /* ── SAY HELLO FORM ── */
            <form onSubmit={submitHello} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <HelloBanner />

              <Field
                label="Your Name"
                id="hello-name"
                value={helloForm.name}
                onChange={updateHello('name')}
                error={helloErrors.name}
                placeholder="Jane Smith"
                required
              />

              <Textarea
                label="Message"
                id="hello-message"
                value={helloForm.message}
                onChange={updateHello('message')}
                error={helloErrors.message}
                placeholder="What's on your mind? Happy to chat about tech, ideas, or anything else..."
                rows={6}
                required
              />

              {status === 'error' && <ErrorBanner detail={errDetail} />}

              <button type="submit" disabled={status === 'sending'} style={submitBtnStyle('cyan')}>
                {status === 'sending' ? <Spinner /> : <>Send Message <span>→</span></>}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}

function Spinner() {
  return (
    <>
      <svg style={{ width: '16px', height: '16px', animation: 'spin 1s linear infinite' }} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25"/>
        <path fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" opacity="0.75"/>
      </svg>
      Sending...
    </>
  )
}

function ErrorBanner({ detail }) {
  return (
    <div style={{ padding: '12px 16px', borderRadius: '8px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', fontSize: '13px', color: '#fca5a5' }}>
      <p style={{ margin: 0 }}>Something went wrong. Please try again or email directly.</p>
      {detail && <p style={{ margin: '4px 0 0', fontSize: '11px', opacity: 0.7, fontFamily: '"JetBrains Mono", monospace' }}>{detail}</p>}
    </div>
  )
}