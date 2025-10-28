"use client";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen bg-[#0b0b0f] text-gray-100 flex flex-col items-center justify-center px-6 py-32">
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0f] via-[#0b1220] to-[#0b0b0f] opacity-70 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-3">
          Let’s Talk About How YOU Benefit.
        </h1>
        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
          Schedule a free strategy call with <span className="text-blue-400">AutoMind</span>.  
          In 15 minutes, we’ll break down your workflow and show how AI can save you  
          time, clients, and stress — all in one system.
        </p>
        <p className="text-gray-500 text-sm mt-10 italic">
  “One call could save your team hours every week — let's make your system think for you.”  
</p>


        {/* Calendly Embed (clean, integrated) */}
        <div
          className="overflow-hidden rounded-2xl border border-gray-800 shadow-lg shadow-blue-900/20 backdrop-blur-sm bg-[#0e0e14]/70 hover:scale-[1.01] transition-all duration-500"
          style={{ minHeight: "720px" }}
        >
          <iframe
            src="https://calendly.com/ywasfy1/30min"
            width="100%"
            height="720"
            frameBorder="0"
            scrolling="no"
            title="AutoMind Strategy Call"
            className="rounded-2xl"
          ></iframe>
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm mt-10">
          AutoMind © 2025 — building systems that think for you.
        </p>
      </div>
    </section>
  );
}
