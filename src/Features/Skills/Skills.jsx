import { useState, useEffect, useRef } from 'react'
import SectionDivide from '../../Components/SectionDivide'

import jsLogo       from '../../assets/javascript-logo.svg'
import htmlLogo     from '../../assets/logos/html.svg'
import cssLogo      from '../../assets/logos/css.png'
import cLogo        from '../../assets/logos/c.svg'
import cppLogo      from '../../assets/logos/cpp.svg'
import reactLogo    from '../../assets/logos/react.svg'
import reactRouterLogo from '../../assets/logos/react-router.svg'
import tailwindLogo from '../../assets/logos/tailwind.svg'
import gitLogo      from '../../assets/logos/git.svg'
import viteLogo     from '../../assets/logos/vite.svg'
import axiosLogo    from '../../assets/logos/axios.svg'
import mongodbLogo  from '../../assets/logos/mongodb.svg'
import vercelLogo   from '../../assets/logos/vercel.svg'
import netlifyLogo  from '../../assets/logos/netlify.svg'
import firebaseLogo from '../../assets/logos/firebase.svg'
import figmaLogo    from '../../assets/logos/figma.svg'
import githubLogo   from '../../assets/logos/github.svg'

// tier: 'core' | 'proficient' | 'familiar'
const SKILLS = [
  { label: 'JavaScript',   icon: 'JS',   logo: jsLogo,          cat: 'languages',  tier: 'core'       },
  { label: 'HTML',          icon: 'HTML', logo: htmlLogo,        cat: 'languages',  tier: 'core'       },
  { label: 'CSS',           icon: 'CSS',  logo: cssLogo,         cat: 'languages',  tier: 'core'       },
  { label: 'C',             icon: 'C',    logo: cLogo,           cat: 'languages',  tier: 'familiar'   },
  { label: 'C++',           icon: 'C++',  logo: cppLogo,         cat: 'languages',  tier: 'familiar'   },
  { label: 'React',         icon: 'Re',   logo: reactLogo,       cat: 'frameworks', tier: 'core'       },
  { label: 'React Router',  icon: 'RR',   logo: reactRouterLogo, cat: 'frameworks', tier: 'proficient' },
  { label: 'Vite',          icon: 'Vi',   logo: viteLogo,        cat: 'libraries',  tier: 'proficient' },
  { label: 'Tailwind CSS',  icon: 'TW',   logo: tailwindLogo,    cat: 'libraries',  tier: 'core'       },
  { label: 'Axios',         icon: 'Ax',   logo: axiosLogo,       cat: 'libraries',  tier: 'proficient' },
  { label: 'MongoDB',       icon: 'MG',   logo: mongodbLogo,     cat: 'databases',  tier: 'familiar'   },
  { label: 'Git',           icon: 'Gi',   logo: gitLogo,         cat: 'tooling',    tier: 'core'       },
  { label: 'GitHub',        icon: 'Gh',   logo: githubLogo,      cat: 'tooling',    tier: 'core'       },
  { label: 'Vercel',        icon: 'VR',   logo: vercelLogo,      cat: 'tooling',    tier: 'proficient' },
  { label: 'Netlify',       icon: 'Nt',   logo: netlifyLogo,     cat: 'tooling',    tier: 'proficient' },
  { label: 'Firebase',      icon: 'Fb',   logo: firebaseLogo,    cat: 'tooling',    tier: 'familiar'   },
  { label: 'Figma',         icon: 'Fg',   logo: figmaLogo,       cat: 'tooling',    tier: 'familiar'   },
]

const CATEGORIES = ['all', 'languages', 'frameworks', 'libraries', 'databases', 'tooling']

const TIER_CONFIG = {
  core:       { label: 'Core',       border: 'rgba(139,92,246,0.4)',  dot: '#8B5CF6' },
  proficient: { label: 'Proficient', border: 'rgba(6,182,212,0.25)',  dot: '#06B6D4' },
  familiar:   { label: 'Familiar',   border: 'rgba(255,255,255,0.07)', dot: '#374151' },
}



function SkillCard({ skill, index }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setVisible(true) },
        { threshold: 0.1 }
      )
      if (ref.current) observer.observe(ref.current)
      return () => observer.disconnect()
    }, index * 40)   // stagger by 40 ms per card
    return () => clearTimeout(t)
  }, [index])

  const cfg = TIER_CONFIG[skill.tier]

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl p-5 flex flex-col items-center gap-2.5 cursor-pointer"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: `1px solid ${cfg.border}`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.4s ease ${index * 30}ms, transform 0.4s ease ${index * 30}ms`,
      }}
    >
      {/* Hover card glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'rgba(255,255,255,0.025)' }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl p-[1.5px]"
        style={{ background: 'linear-gradient(135deg,#7c3aed,#06b6d4)' }}
      >
        <div
          className="w-full h-full rounded-[10px] flex items-center justify-center"
          style={{ background: '#0d0d0f' }}
        >
          {skill.logo
            ? <img src={skill.logo} alt={skill.label} className="w-7 h-7 object-contain" />
            : <span className="text-[11px] font-black text-white" style={{ fontFamily: '"JetBrains Mono",monospace' }}>{skill.icon}</span>
          }
        </div>
      </div>

      {/* Label */}
      <p className="text-[12px] font-semibold text-[#d1d5db] text-center leading-tight">
        {skill.label}
      </p>
    </div>
  )
}

export default function SkillsSection() {
  const [active, setActive] = useState('all')
  const [key, setKey] = useState(0)

  const filtered = active === 'all' ? SKILLS : SKILLS.filter(s => s.cat === active)

  function handleFilter(cat) {
    setActive(cat)
    setKey(k => k + 1)   // remount cards so stagger replays on filter change
  }

  return (
    <section
      id="skills"
      className="w-full py-20 sora-font"
      style={{
        background: 'linear-gradient(180deg, #0a0a0f 0%, #0f0d1a 50%, #0a0a0f 100%)',
      }}
    >
      {/* ── Header ── */}
      <h1 className="sora-font text-center text-font text-5xl font-bold mb-4">Skills</h1>
      <SectionDivide />

      <div className="max-w-5xl mx-auto px-10 mt-14">

        {/* ── Filter tabs ── */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`px-5 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase border transition-all duration-200 cursor-pointer ${
                active === cat
                  ? 'border-white/60 text-white bg-white/5'
                  : 'border-white/10 text-gray-500 hover:border-white/30 hover:text-gray-300 bg-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Tier legend ── */}
        <div className="flex items-center justify-center gap-6 mb-10">
          {Object.entries(TIER_CONFIG).map(([tier, cfg]) => (
            <div key={tier} className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: cfg.dot }}
              />
              <span
                className="text-[11px]"
                style={{ fontFamily: '"JetBrains Mono",monospace', color: '#4a4770' }}
              >
                {cfg.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Cards grid ── */}
        <div
          key={key}
          className="grid gap-3"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))' }}
        >
          {filtered.map((skill, i) => (
            <SkillCard key={`${skill.label}-${key}`} skill={skill} index={i} />
          ))}
        </div>

        
      </div>

      <div className="mt-16">
        <SectionDivide />
      </div>
    </section>
  )
}