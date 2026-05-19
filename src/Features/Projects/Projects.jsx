import SectionDivide from '../../Components/SectionDivide'

const projects = [
  {
    title: "GitHub Profile Analyzer",
    desc: "Analyze any public GitHub profile — view commit activity, language distribution, top repositories, and contribution insights in a clean dashboard.",
    tags: ["React", "GitHub API", "Charts"],
    live: "https://github-profile-analyze-2.netlify.app/",
    code: "https://github.com/tithy-ghosh/github-profile-analyzer",
    icon: (
      <svg className="w-5 h-5 fill-purple-400" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    title: "Vault Manager",
    desc: "Securely store and manage all your passwords in one place. Includes a built-in strong password generator with customizable length and character rules.",
    tags: ["Password Manager", "AES Encryption", "Generator"],
    live: "https://vault-manager-2.vercel.app/",
    code: "https://github.com/tithy-ghosh/Vault-Manager",
    icon: (
      <svg className="w-5 h-5 fill-cyan-400" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
      </svg>
    ),
  },
  {
    title: "TaskZen",
    desc: "Stay on top of every deadline. TaskZen shows your upcoming tasks, highlights overdue items, and tracks everything you've completed.",
    tags: ["Task Manager", "Deadline Tracker", "Productivity"],
    live: "https://task-zen-sooty-kappa.vercel.app/",
    code: "https://github.com/tithy-ghosh/Task-Zen",
    icon: (
      <svg className="w-5 h-5 fill-emerald-400" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
      </svg>
    ),
  },
]

export default function Projects() {
  return (
    <div id="projects" className="w-full py-20 bg-[#0a0a0f]">
      <h1 className="sora-font text-center text-font text-5xl font-bold mb-4">Projects</h1>
      <SectionDivide />
      <div className="max-w-6xl mx-auto px-10 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group relative rounded-2xl p-6 bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-500 flex flex-col"
          >
            {/* Gradient glow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/[0.04] to-cyan-500/[0.04] pointer-events-none" />

            {/* Project icon */}
            <div className="relative z-10 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
              {project.icon}
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-white sora-font group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-500">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed flex-1">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full text-[11px] font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/5">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                  Live Demo
                </a>
                <a href={project.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  Source Code
                </a>
              </div>
            </div>

            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-500 to-cyan-400" />
          </div>
        ))}
      </div>
    </div>
  )
}
