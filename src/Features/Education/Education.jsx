import SectionDivide from '../../Components/SectionDivide'

const education = [
  {
    degree: "BSc in Computer Science",
    school: "Sylhet Engineering College",
    year: "2024-2028",
  },
]

export default function Education() {
  return (
    <div id="education" className="w-full py-20" style={{ background: "linear-gradient(180deg, #0a0a0f 0%, #0f0d1a 50%, #0a0a0f 100%)" }}>
      <h1 className="sora-font text-center text-font text-5xl font-bold mb-4">Education</h1>
      <SectionDivide />
      <div className="relative max-w-3xl mx-auto px-10 mt-16">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-500" />

        {education.map((item, i) => (
          <div key={i} className="relative flex gap-8 pb-16 last:pb-0">
            {/* Timeline dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#0a0a0f] border-2 border-purple-500 flex items-center justify-center shadow-[0_0_12px_#7c3aed66]">
                <svg className="w-5 h-5 fill-cyan-400" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm0 2.82l6.94 3.94L12 13.7 5.06 9.76 12 5.82zM5 12.18l1.5.82L5 13.82v-1.64zm0 3.82l7 3.82 7-3.82v-1.64L12 17.3l-7-3.82v1.64z"/>
                </svg>
              </div>
            </div>

            {/* Content card */}
            <div className="flex-1 group">
              <div className="relative rounded-2xl p-6 bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-500">
                {/* Gradient glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/[0.03] to-cyan-500/[0.03] pointer-events-none" />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white sora-font group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-500">
                      {item.degree}
                    </h3>
                    <p className="text-cyan-400/80 mt-1.5 flex items-center gap-2">
                      <svg className="w-4 h-4 fill-cyan-400/60" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      {item.school}
                    </p>
                  </div>
                  <span className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                    {item.year}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
