import { useRef, useState, useEffect } from 'react'
import SectionDivide from '../../Components/SectionDivide'
import { useInView } from '../../hooks/useInView'

const projects = [
  {
    title: 'GitHub Profile Analyzer',
    desc: 'Analyze any public GitHub profile — view commit activity, language distribution, top repositories, and contribution insights in a clean dashboard.',
    tags: ['React', 'GitHub API', 'Charts'],
    live: 'https://github-profile-analyze-2.netlify.app/',
    code: 'https://github.com/tithy-ghosh/github-profile-analyzer',
    accent: '#8B5CF6',
    icon: (
      <svg className="w-6 h-6 fill-purple-400" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    title: 'Vault Manager',
    desc: 'Securely store and manage all your passwords in one place. Includes a built-in strong password generator with customizable length and character rules.',
    tags: ['Password Manager', 'AES Encryption', 'Generator'],
    live: 'https://vault-manager-2.vercel.app/',
    code: 'https://github.com/tithy-ghosh/Vault-Manager',
    accent: '#06B6D4',
    icon: (
      <svg className="w-6 h-6 fill-cyan-400" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
      </svg>
    ),
  },
  {
    title: 'TaskZen',
    desc: 'Stay on top of every deadline. TaskZen shows your upcoming tasks, highlights overdue items, and tracks everything you\'ve completed.',
    tags: ['Task Manager', 'Deadline Tracker', 'Productivity'],
    live: 'https://task-zen-sooty-kappa.vercel.app/',
    code: 'https://github.com/tithy-ghosh/Task-Zen',
    accent: '#10b981',
    icon: (
      <svg className="w-6 h-6 fill-emerald-400" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
      </svg>
    ),
  },
]

function SpotlightCard({ project, index }) {
  const cardRef = useRef(null)
  const [spot, setSpot] = useState({ x: 0, y: 0, opacity: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  function onMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect()
    setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top, opacity: 1 })
  }

  function onMouseLeave() {
    setSpot(s => ({ ...s, opacity: 0 }))
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative rounded-2xl p-6 flex flex-col overflow-hidden cursor-default"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.08)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.5s ease ${index * 120}ms, transform 0.5s ease ${index * 120}ms`,
      }}
    >
      {/* Mouse spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: spot.opacity,
          background: `radial-gradient(280px circle at ${spot.x}px ${spot.y}px, ${project.accent}18, transparent 70%)`,
        }}
      />

      {/* Border glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ border: `1px solid ${project.accent}44` }}
      />

      {/* Icon */}
      <div
        className="relative z-10 w-11 h-11 rounded-xl p-[1.5px] mb-5 flex-shrink-0"
        style={{ background: `linear-gradient(135deg, ${project.accent}99, ${project.accent}33)` }}
      >
        <div
          className="w-full h-full rounded-[10px] flex items-center justify-center"
          style={{ background: '#0d0b1f' }}
        >
          {project.icon}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        <h3
          className="text-lg font-bold text-white mb-2 sora-font transition-all duration-300"
          style={{
            '--accent': project.accent,
          }}
        >
          <span className="group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
            style={{
              backgroundImage: `linear-gradient(90deg, ${project.accent}, #fff)`,
              WebkitBackgroundClip: 'text',
            }}
          >
            {project.title}
          </span>
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed flex-1">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium"
              style={{
                background: `${project.accent}14`,
                border: `1px solid ${project.accent}30`,
                color: project.accent,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div
          className="flex items-center gap-4 mt-5 pt-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
            style={{ color: project.accent }}
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
            Live Demo
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-300 transition-colors duration-200"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Source Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [headerRef, headerVisible] = useInView(0.2)

  return (
    <div id="projects" className="w-full py-20 bg-[#0a0a0f]">
      <div
        ref={headerRef}
        className="px-4 sm:px-10 w-full"
        style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div className="flex items-center gap-2 mb-5">
          <span className="w-5 h-[1px] bg-[#8b5cf6] inline-block" />
          <span className="text-[11px] tracking-[0.15em] uppercase text-[#8b5cf6]" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
            Projects
          </span>
        </div>
      </div>
      <SectionDivide />
      <div className="max-w-6xl mx-auto px-4 sm:px-10 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <SpotlightCard key={project.title} project={project} index={i} />
        ))}
      </div>
      <div className="mt-16">
        <SectionDivide />
      </div>
    </div>
  )
}