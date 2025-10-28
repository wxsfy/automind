"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  // --- Typing effect ---
  const [text, setText] = useState("");
  const fullText = "We build AI that runs your business.";
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setShowRest(true), 500);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // --- Fade-in animation helper ---
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true },
  });

  return (
    <main className="bg-[#0b0b0f] text-white overflow-hidden">
      {/* ================= HERO ================= */}
   {/* HERO - Fixed spacing version */}
<section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
  {/* Background gradient pulse */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-transparent blur-3xl animate-pulse-slow" />

  {/* Subtle bottom fade */}
  <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0b0b0f] to-transparent pointer-events-none" />

  <motion.h1
    className="text-6xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 relative z-10"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    AutoMind
  </motion.h1>

  <motion.p
    className="italic text-gray-400 mb-10 text-lg relative z-10"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
  >
    so you don’t mind.
  </motion.p>

  <motion.p
    className="text-gray-300 text-2xl md:text-3xl font-light relative z-10"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.7 }}
  >
    We build AI that runs your business.
  </motion.p>

  <motion.p
    className="text-gray-400 max-w-xl text-lg leading-relaxed mt-10 mb-12 relative z-10"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.7 }}
  >
    From automations that save time to assistants that talk like you —  
    Automind quietly powers your workflow, so you can focus on what matters.
  </motion.p>

  <motion.div
    className="flex flex-col sm:flex-row gap-4 relative z-10"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.6 }}
  >
    <Link
      href="/services"
      className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-xl text-lg transition-all"
    >
      Explore Services
    </Link>
    <Link
      href="/showcase"
      className="border border-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-xl text-lg transition-all"
    >
      See Results
    </Link>
  </motion.div>

  {/* Scroll Indicator (moved up) */}
  <motion.div
    className="absolute bottom-4 flex flex-col items-center text-gray-500 cursor-pointer z-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.6, y: [0, 8, 0] }}
    transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
  >
    <span className="text-sm mb-1">scroll</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </motion.div>
</section>




      {/* ================= WHAT WE BUILD ================= */}
      <section className="py-28 px-6 text-center border-t border-gray-800">
        <motion.h2
          className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
          {...fadeUp()}
        >
          What We Build
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-12 max-w-2xl mx-auto"
          {...fadeUp(0.2)}
        >
          Every Automind system is designed to think, act, and deliver results.
        </motion.p>

        <motion.div
          className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto"
          {...fadeUp(0.3)}
        >
          {[
            {
              title: "⚙️ Automation Systems",
              desc: "We connect your tools and workflows with smart automations that save you hours every week.",
            },
            {
              title: "🧠 AI Assistants",
              desc: "Conversational bots that talk, sell, teach, or support — trained to sound exactly like you.",
            },
            {
              title: "🌐 Smart Websites",
              desc: "Websites that don’t just display — they think, respond, and convert automatically.",
            },
          ].map((c, i) => (
            <motion.div
              key={i}
              className="bg-[#14141a] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-900/30 transition-all"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl text-blue-300 mb-3">{c.title}</h3>
              <p className="text-gray-400">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= WHO IT’S FOR ================= */}
      <section className="py-28 px-6 border-t border-gray-800 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
          {...fadeUp()}
        >
          Who It’s For
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-14 max-w-2xl mx-auto"
          {...fadeUp(0.2)}
        >
          Whether you’re a business, creator, or brand — Automind builds AI that fits you.
        </motion.p>

        <motion.div
          className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto"
          {...fadeUp(0.3)}
        >
          {[
            ["💈 Barbers & Gyms", "Automate your DMs, bookings, and reminders — run your business hands-free."],
            ["🎥 Creators & Coaches", "Let AI handle leads and client onboarding so you can focus on your craft."],
            ["🛍️ Brands & Stores", "AI chat that sells — recommend products, answer questions, and close deals 24/7."],
            ["💼 Agencies & Businesses", "Automate follow-ups, reports, and client systems — scale without hiring more people."],
          ].map(([t, d], i) => (
            <motion.div
              key={i}
              className="bg-[#14141a] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl text-blue-300 mb-3">{t}</h3>
              <p className="text-gray-400">{d}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-28 px-6 text-center border-t border-gray-800">
        <motion.h2
          className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
          {...fadeUp()}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-14 max-w-2xl mx-auto"
          {...fadeUp(0.2)}
        >
          Simple process. Serious impact.
        </motion.p>

        <motion.div
          className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto"
          {...fadeUp(0.3)}
        >
          {[
            ["1️⃣ Talk to Us", "We understand your goals and find where AI fits best in your workflow."],
            ["2️⃣ We Build Your System", "We design and train your AI — automations, chatbots, or custom integrations."],
            ["3️⃣ You Scale Effortlessly", "Your AI takes over. You save time, close more deals, and work smarter."],
          ].map(([t, d], i) => (
            <motion.div
              key={i}
              className="bg-[#14141a] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl text-blue-300 mb-3">{t}</h3>
              <p className="text-gray-400">{d}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 px-6 text-center border-t border-gray-800">
        <motion.h2
          className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
          {...fadeUp()}
        >
          Ready to Automate?
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-12 max-w-xl mx-auto text-lg"
          {...fadeUp(0.2)}
        >
          Your business deserves to run on autopilot. Let’s build the AI that makes it happen.
        </motion.p>
        <motion.div {...fadeUp(0.3)}>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-10 rounded-xl text-lg font-medium transition-all"
          >
            Let’s Build Something Smart →
          </Link>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-8 text-gray-600 text-sm border-t border-gray-800">
        AutoMind © {new Date().getFullYear()} — YW
      </footer>
    </main>
  );
}
