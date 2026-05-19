import { useState } from "react";
import jsLogo from "../../assets/javascript-logo.svg";
import htmlLogo from "../../assets/logos/html.svg";
import cssLogo from "../../assets/logos/css.png";
import cLogo from "../../assets/logos/c.svg";
import cppLogo from "../../assets/logos/cpp.svg";
import reactLogo from "../../assets/logos/react.svg";
import reactRouterLogo from "../../assets/logos/react-router.svg";
import tailwindLogo from "../../assets/logos/tailwind.svg";
import gitLogo from "../../assets/logos/git.svg";
import viteLogo from "../../assets/logos/vite.svg";
import axiosLogo from "../../assets/logos/axios.svg";
import mongodbLogo from "../../assets/logos/mongodb.svg";
import vercelLogo from "../../assets/logos/vercel.svg";
import netlifyLogo from "../../assets/logos/netlify.svg";
import firebaseLogo from "../../assets/logos/firebase.svg";
import figmaLogo from "../../assets/logos/figma.svg";
import githubLogo from "../../assets/logos/github.svg";

const allSkillData = {
  languages: {
    cards: [
      { icon: "JS",   label: "JavaScript",  iconBg: "bg-yellow-400", iconText: "text-black", logoImg: jsLogo },
      { icon: "HTML", label: "HTML",        iconBg: "bg-orange-600", iconText: "text-white", logoImg: htmlLogo },
      { icon: "CSS",  label: "CSS",         iconBg: "bg-blue-600",   iconText: "text-white", logoImg: cssLogo },
      { icon: "C",    label: "C",           iconBg: "bg-blue-700",   iconText: "text-white", logoImg: cLogo },
      { icon: "CPP",  label: "C++",         iconBg: "bg-blue-800",   iconText: "text-white", logoImg: cppLogo },
    ],
  },
  frameworks: {
    cards: [
      { icon: "Re", label: "React", iconBg: "bg-cyan-500",  iconText: "text-white", logoImg: reactLogo },
      { icon: "RR", label: "React Router", iconBg: "bg-red-500",   iconText: "text-white", logoImg: reactRouterLogo },
    ],
  },
  libraries: {
    cards: [
      { icon: "Vi", label: "Vite",  iconBg: "bg-purple-500", iconText: "text-white", logoImg: viteLogo },
      { icon: "TW", label: "Tailwind CSS",  iconBg: "bg-teal-500",  iconText: "text-white", logoImg: tailwindLogo },
      { icon: "Ax", label: "Axios",  iconBg: "bg-purple-600", iconText: "text-white", logoImg: axiosLogo },
    ],
  },
  databases: {
    cards: [
      { icon: "MG", label: "MongoDB",  iconBg: "bg-green-700", iconText: "text-white", logoImg: mongodbLogo },
    ],
  },
  tooling: {
    cards: [
      { icon: "Gi", label: "Git", iconBg: "bg-orange-600", iconText: "text-white", logoImg: gitLogo },
      { icon: "VR", label: "Vercel",  iconBg: "bg-gray-900",   iconText: "text-white", logoImg: vercelLogo },
      { icon: "Nt", label: "Netlify",  iconBg: "bg-teal-500",   iconText: "text-white", logoImg: netlifyLogo },
      { icon: "Fb", label: "Firebase", iconBg: "bg-orange-500", iconText: "text-white", logoImg: firebaseLogo },
      { icon: "Fg", label: "Figma", iconBg: "bg-purple-500", iconText: "text-white", logoImg: figmaLogo },
      { icon: "Gh", label: "GitHub", iconBg: "bg-gray-900",   iconText: "text-white", logoImg: githubLogo },
    ],
  },
};



function LangIcon({ icon, logoImg }) {
  return (
    <div className="w-12 h-12 rounded-xl p-[1.5px] shadow-lg" style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}>
      <div className="w-full h-full rounded-xl flex items-center justify-center" style={{ background: "#0d0d0f" }}>
        {logoImg ? (
          <img src={logoImg} alt={icon} className="w-7 h-7" />
        ) : (
          <span className="text-sm font-black text-white">{icon}</span>
        )}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [active, setActive] = useState("all");
  const categories = ["all", "languages", "frameworks", "libraries", "databases", "tooling"];
  const data = active === "all"
    ? {
        cards: Object.values(allSkillData).flatMap((d) => d.cards),
      }
    : allSkillData[active];

  return (
    <section id="skills"
      className="min-h-screen px-8 md:px-16 py-20 sora-font hero-glow"
      style={{ color: "#e2e8f0" }}
    >
      {/* Header */}
      <div className="mb-10">
        <div className="flex justify-center mb-6">
          <p className="text-4xl tracking-[0.25em] text-cyan-500 font-semibold">
             SKILLS AND STACK
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-black leading-tight">
          Everything I{" "}
          <span className="text-purple-400">build</span>{" "}
          <span className="text-cyan-400">with</span>
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider border transition-all duration-200 cursor-pointer ${
              active === cat
                ? "border-white text-white bg-white/5"
                : "border-white/20 text-gray-500 hover:border-white/40 hover:text-gray-300 bg-transparent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="flex gap-4 mb-10 flex-wrap">
        {data.cards.map((card, i) => (
          <div
            key={`${active}-card-${i}`}
            className="relative w-48 rounded-2xl p-5 flex flex-col items-center gap-3 bg-white/[0.03] backdrop-blur-sm cursor-pointer transition-all duration-300 hover:bg-white/[0.06]"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <LangIcon icon={card.icon} logoImg={card.logoImg} />
            <div className="text-center">
              <p className="text-sm font-bold text-white">{card.label}</p>
            </div>
            <div
              className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
              style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
