import { useState, useRef, useEffect } from "react";
import { useInView } from "../../hooks/useInView";

// ─── Your Projects Data ───────────────────────────────────────────────────────
const projects = [
  {
    icon: "📊",
    iconBg: "#8b5cf6",
    borderColor: "#8b5cf644",
    name: "GitHub Profile Analyzer",
    desc: "Analyze any public GitHub profile — view commit activity, language distribution, top repositories, and contribution insights in a clean dashboard.",
    tags: ["React", "GitHub API", "Charts"],
    tagBg: "#3b0764",
    tagText: "#a78bfa",
    link: "https://github-profile-analyze-2.netlify.app/",
  },
  {
    icon: "🔐",
    iconBg: "#0ea5e9",
    borderColor: "#0ea5e944",
    name: "Vault Manager",
    desc: "Securely store and manage all your passwords in one place. Includes a built-in strong password generator with customizable length and character rules.",
    tags: ["Password Manager", "AES Encryption", "Generator"],
    tagBg: "#0c4a6e",
    tagText: "#38bdf8",
    link: "https://vault-manager-2.vercel.app/",
  },
  {
    icon: "✅",
    iconBg: "#22c55e",
    borderColor: "#22c55e44",
    name: "TaskZen",
    desc: "Stay on top of every deadline. TaskZen shows your upcoming tasks, highlights overdue items, and tracks everything you've completed.",
    tags: ["Task Manager", "Deadline Tracker", "Productivity"],
    tagBg: "#14532d",
    tagText: "#4ade80",
    link: "https://task-zen-sooty-kappa.vercel.app/",
  },
];

// ─── AI Responses ─────────────────────────────────────────────────────────────
const RESPONSES = {
  Projects: { type: "projects" },
  "About me": {
    type: "text",
    text: "I'm a self-driven developer who loves building impactful, polished products from scratch.. I enjoy solving real problems through clean, thoughtful code. Currently open to exciting opportunities! ",
  },
  Skills: {
    type: "text",
    text: "Here's what I work with:\n\n🎨 Frontend — React, Next.js, Tailwind CSS\n⚙️ Backend — Node.js, Express\n🗄️ Database — MongoDB, \n🔐  Tools — Git, Vercel,",
  },
  Contact: {
    type: "text",
    text: "You can reach me through:\n\n📧 Email: sgt.tithy.717@gmail.com\n💼 LinkedIn: www.linkedin.com/in/shrabony-ghosh-tithy\n🐙 GitHub: https://github.com/tithyghosh",
  },
};

const QUICK_ACTIONS = ["Projects", "About me", "Skills", "Contact"];

// ─── Subcomponents ────────────────────────────────────────────────────────────

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3 bg-[#1e1b3a] border border-[#2e2b4a] rounded-[4px_16px_16px_16px] w-fit">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full bg-gray-500"
          style={{
            animation: `typingBounce 1.2s ${i * 0.2}s infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
}

function ProjectCard({ project, delay }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className="rounded-xl p-3 transition-all duration-500"
      style={{
        background: "#13112a",
        border: `0.5px solid ${project.borderColor}`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}
    >
      <div className="flex items-center gap-2.5 mb-2">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
          style={{ background: project.iconBg + "22" }}
        >
          {project.icon}
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="text-[13px] font-semibold text-white font-sans">
            {project.name}
          </span>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] text-violet-400 hover:text-violet-300 transition-colors font-mono"
          >
            View →
          </a>
        </div>
      </div>
      <p className="text-[12px] text-gray-400 font-sans leading-relaxed mb-2.5">
        {project.desc}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2 py-0.5 rounded-full font-mono"
            style={{ background: project.tagBg, color: project.tagText }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function AIMessage({ message }) {
  if (message.type === "projects") {
    return (
      <div className="flex flex-col gap-2 max-w-[95%]">
        <div className="bg-[#1e1b3a] border border-[#2e2b4a] text-[#d1d5db] text-[13px] px-4 py-3 rounded-[4px_16px_16px_16px] font-sans leading-relaxed">
          Here are my projects — each one built to solve a real problem 👇
        </div>
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} delay={i * 280} />
        ))}
      </div>
    );
  }

  return (
    <div className="bg-[#1e1b3a] border border-[#2e2b4a] text-[#d1d5db] text-[13px] px-4 py-3 rounded-[4px_16px_16px_16px] max-w-[92%] font-sans leading-relaxed whitespace-pre-wrap">
      {message.text}
    </div>
  );
}

function UserMessage({ text }) {
  return (
    <div className="flex justify-end">
      <div className="bg-violet-600 text-white text-[13px] px-4 py-2.5 rounded-[16px_16px_4px_16px] max-w-[80%] font-sans leading-relaxed">
        {text}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HeroChatCard() {
  const [cardRef, cardVisible] = useInView(0.1)
  const [messages, setMessages] = useState([
    {
      role: "ai",
      type: "text",
      text: "Hi! I'm Tithy's-ai. Ask me about her projects, skills or contact information 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showPills, setShowPills] = useState(true);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const getResponse = (text) => {
    const lower = text.toLowerCase();
    if (
      lower.includes("project") ||
      lower.includes("work") ||
      lower.includes("vault") ||
      lower.includes("taskzen") ||
      lower.includes("shadow")
    )
      return RESPONSES["Projects"];
    if (lower.includes("about") || lower.includes("who") || lower.includes("yourself"))
      return RESPONSES["About me"];
    if (
      lower.includes("skill") ||
      lower.includes("tech") ||
      lower.includes("stack") ||
      lower.includes("know")
    )
      return RESPONSES["Skills"];
    if (
      lower.includes("contact") ||
      lower.includes("email") ||
      lower.includes("reach") ||
      lower.includes("hire")
    )
      return RESPONSES["Contact"];

    // Check direct pill matches
    for (const key of QUICK_ACTIONS) {
      if (lower === key.toLowerCase()) return RESPONSES[key];
    }

    return {
      type: "text",
      text: "Great question! Try asking about my Projects, Skills, About me, or how to Contact me 😊",
    };
  };

  const send = async (text) => {
    if (!text.trim() || isTyping) return;
    setInput("");
    setShowPills(false);

    setMessages((prev) => [...prev, { role: "user", text }]);
    setIsTyping(true);

    await new Promise((r) => setTimeout(r, 1200));

    const response = getResponse(text);
    setIsTyping(false);
    setMessages((prev) => [...prev, { role: "ai", ...response }]);
  };

  return (
    <>
      {/* Inject keyframes */}
      <style>{`
        @keyframes typingBounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-5px); opacity: 1; }
        }
      `}</style>

      <div
        ref={cardRef}
        className="bg-[#13112a] rounded-2xl border border-[#2e2b4a] overflow-hidden shadow-2xl w-full max-w-full sm:max-w-sm lg:max-w-md flex flex-col h-[380px] sm:h-[420px] lg:h-[460px]"
        style={{
          fontFamily: '"Sora", sans-serif',
          opacity: cardVisible ? 1 : 0,
          transform: cardVisible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.97)',
          transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
        }}
      >

        {/* ── Title Bar ── */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1730] border-b border-[#2e2b4a] flex-shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="flex-1 text-center text-xs text-[#6b6894] font-mono -ml-11">
            Tithy's-ai — chat
          </span>
        </div>

        {/* ── Messages ── */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 scroll-smooth [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-[#2e2b4a] [&::-webkit-scrollbar-thumb]:rounded-full">
          {messages.map((msg, i) =>
            msg.role === "user" ? (
              <UserMessage key={i} text={msg.text} />
            ) : (
              <AIMessage key={i} message={msg} />
            )
          )}
          {isTyping && <TypingIndicator />}
          <div ref={bottomRef} />
        </div>

        {/* ── Quick Action Pills ── */}
        {showPills && (
          <div className="flex gap-2 flex-wrap px-4 pb-3 flex-shrink-0">
            {QUICK_ACTIONS.map((action) => (
              <button
                key={action}
                onClick={() => send(action)}
                className="text-xs px-3 py-1.5 rounded-full border border-[#3d3a5e] text-[#d1d5db] hover:bg-[#2a2750] hover:border-violet-500 transition-all duration-200 font-sans cursor-pointer"
              >
                {action}
              </button>
            ))}
          </div>
        )}

        {/* ── Input Bar ── */}
        <div className="flex items-center gap-3 px-4 py-3 bg-[#1a1730] border-t border-[#2e2b4a] flex-shrink-0">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send(input)}
            placeholder="Ask anything..."
            className="flex-1 bg-transparent border-none outline-none text-[13px] text-[#d1d5db] placeholder-[#4b4870] font-mono caret-violet-500"
          />
          <button
            onClick={() => send(input)}
            disabled={isTyping}
            className="w-8 h-8 rounded-full bg-violet-600 hover:bg-violet-500 disabled:opacity-40 flex items-center justify-center flex-shrink-0 transition-colors cursor-pointer"
          >
            <svg
              className="w-3.5 h-3.5 fill-white"
              viewBox="0 0 24 24"
            >
              <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}