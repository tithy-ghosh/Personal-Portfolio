import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import SectionDivide from '../../Components/SectionDivide'

const EMAILJS_SERVICE_ID  = 'service_2rjxgc6'
const EMAILJS_TEMPLATE_ID = 'template_07x84kn'
const EMAILJS_PUBLIC_KEY  = 'E4ywDyz-XezVncpS_'

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/tithy-ghosh',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shrabony-ghosh-tithy',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:sgt.tithy.717@gmail.com',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
]

function InputField({ label, id, type = 'text', value, onChange, error, placeholder }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-widest"
        style={{ fontFamily: '"JetBrains Mono", monospace', color: '#4a4770' }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-300"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: error ? '1px solid rgba(239,68,68,0.5)' : '1px solid rgba(255,255,255,0.08)',
          fontFamily: '"Sora", sans-serif',
        }}
        onFocus={e => {
          e.target.style.border = '1px solid rgba(139,92,246,0.5)'
          e.target.style.background = 'rgba(139,92,246,0.04)'
        }}
        onBlur={e => {
          e.target.style.border = error ? '1px solid rgba(239,68,68,0.5)' : '1px solid rgba(255,255,255,0.08)'
          e.target.style.background = 'rgba(255,255,255,0.03)'
        }}
      />
      {error && (
        <p className="text-[11px] text-red-400" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errDetail, setErrDetail] = useState('')

  // Initialise EmailJS once when the component mounts
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  function validate() {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                              e.email   = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 10)
                              e.message = 'Message is too short'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')
    setErrors({})
    setErrDetail('')

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
          to_name:    'Tithy',
        }
        // ← no 4th arg needed after emailjs.init()
      )
      console.log('EmailJS success:', result)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setErrDetail(err?.text || err?.message || 'Unknown error')
      setStatus('error')
    }
  }

  function update(field) {
    return e => {
      setForm(f => ({ ...f, [field]: e.target.value }))
      if (errors[field]) setErrors(ev => ({ ...ev, [field]: '' }))
    }
  }

  return (
    <div id="contact" className="w-full py-20 bg-[#0a0a0f]">
      <h1 className="sora-font text-center text-font text-5xl font-bold mb-4">Contact</h1>
      <SectionDivide />

      <div className="max-w-5xl mx-auto px-10 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* ── Left: info panel ── */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="sora-font text-2xl font-bold text-white mb-3">
              Let's build something{' '}
              <span className="text-font">together</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Have a project in mind, a role to fill, or just want to say hi?
              Drop a message and I'll get back to you within 24 hours.
            </p>
          </div>

          {/* Info rows */}
          <div className="flex flex-col gap-4">
            {[
              { label: 'Email',    value: 'sgt.tithy.717@gmail.com',  href: 'mailto:sgt.tithy.717@gmail.com' },
              { label: 'Location', value: 'Sylhet, Bangladesh',        href: null },
              { label: 'Status',   value: 'Open to opportunities',     href: null, pulse: true },
            ].map(row => (
              <div key={row.label} className="flex items-center gap-3">
                <span
                  className="text-[10px] uppercase tracking-widest w-20 flex-shrink-0"
                  style={{ fontFamily: '"JetBrains Mono", monospace', color: '#4a4770' }}
                >
                  {row.label}
                </span>
                <div className="flex items-center gap-2">
                  {row.pulse && (
                    <span
                      className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"
                      style={{ animation: 'pulse 2s infinite' }}
                    />
                  )}
                  {row.href
                    ? <a href={row.href} className="text-sm text-gray-300 hover:text-white transition-colors">{row.value}</a>
                    : <span className="text-sm text-gray-300">{row.value}</span>
                  }
                </div>
              </div>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex gap-3">
            {SOCIAL_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 hover:text-white transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(139,92,246,0.1)'
                  e.currentTarget.style.border = '1px solid rgba(139,92,246,0.35)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'
                }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: form ── */}
        <div
          className="rounded-2xl p-8 relative overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div
            className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
            style={{ background: 'radial-gradient(circle at top right, rgba(139,92,246,0.08), transparent 70%)' }}
          />

          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)' }}
              >
                <svg className="w-7 h-7 fill-emerald-400" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
              <div>
                <p className="sora-font text-lg font-bold text-white mb-1">Message sent!</p>
                <p className="text-sm text-gray-400">I'll get back to you within 24 hours.</p>
              </div>
              <button
                onClick={() => setStatus('idle')}
                className="mt-2 text-xs text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                Send another →
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
              <InputField
                label="Name"   id="name"  value={form.name}
                onChange={update('name')}  error={errors.name}
                placeholder="Shrabony Ghosh"
              />
              <InputField
                label="Email"  id="email" type="email" value={form.email}
                onChange={update('email')} error={errors.email}
                placeholder="hello@example.com"
              />

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ fontFamily: '"JetBrains Mono", monospace', color: '#4a4770' }}
                >
                  Message
                </label>
                <textarea
                  id="message" rows={4}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell me about your project or idea..."
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 resize-none"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: errors.message ? '1px solid rgba(239,68,68,0.5)' : '1px solid rgba(255,255,255,0.08)',
                    fontFamily: '"Sora", sans-serif',
                  }}
                  onFocus={e => {
                    e.target.style.border = '1px solid rgba(139,92,246,0.5)'
                    e.target.style.background = 'rgba(139,92,246,0.04)'
                  }}
                  onBlur={e => {
                    e.target.style.border = errors.message ? '1px solid rgba(239,68,68,0.5)' : '1px solid rgba(255,255,255,0.08)'
                    e.target.style.background = 'rgba(255,255,255,0.03)'
                  }}
                />
                {errors.message && (
                  <p className="text-[11px] text-red-400" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Error banner */}
              {status === 'error' && (
                <div
                  className="px-4 py-3 rounded-xl text-sm text-red-300"
                  style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}
                >
                  <p>Something went wrong. Please try again or email directly.</p>
                  {errDetail && (
                    <p className="mt-1 text-[11px] text-red-400 opacity-70" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                      {errDetail}
                    </p>
                  )}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: status === 'sending'
                    ? 'rgba(139,92,246,0.4)'
                    : 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
                }}
              >
                {status === 'sending' ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="mt-20">
        <SectionDivide />
      </div>
    </div>
  )
}