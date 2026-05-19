import SectionDivide from '../../Components/SectionDivide'

export default function Contact() {
  return (
    <div id="contact" className="w-full py-20 bg-[#0a0a0f]">
      <h1 className="sora-font text-center text-font text-5xl font-bold mb-4">Contact</h1>
      <SectionDivide />
      <div className="max-w-lg mx-auto px-10 mt-16">
        <p className="text-center text-gray-400 mb-10">
          Have a project in mind or just want to say hi? Fill out the form below and I'll get back to you.
        </p>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/10 text-white text-sm placeholder-gray-500 outline-none focus:border-purple-500/50 transition-colors duration-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/10 text-white text-sm placeholder-gray-500 outline-none focus:border-purple-500/50 transition-colors duration-300"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/10 text-white text-sm placeholder-gray-500 outline-none focus:border-purple-500/50 transition-colors duration-300 resize-none"
          />
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-semibold hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
