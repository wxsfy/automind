"use client";

import { motion } from "framer-motion";

export default function Showcase() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#050505] to-[#0a0a0a] py-24 px-6 text-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
        >
          Results That Think
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
          Real systems. Real impact. AutoMind doesn’t just automate — it builds quiet engines
          that think, adapt, and grow your business while you focus on what matters.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* 1. Lead Magnet 24/7 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-[#0f0f0f]/80 border border-gray-800 p-8 rounded-2xl backdrop-blur-md hover:border-cyan-500/40 transition-all"
        >
          <h3 className="text-xl font-semibold mb-3 text-blue-300">💬 Lead Magnet 24/7</h3>
          <p className="text-gray-400 mb-3">
            Businesses were losing leads overnight because no one replied fast enough.
            AutoMind built an AI that captures, qualifies, and books clients automatically —
            through email, chat, or DMs.
          </p>
          <p className="text-sm italic text-cyan-400 mb-2">
            Result: 3× faster response time, +40% meeting rate, 0 missed leads.
          </p>
          <a
            href="/contact"
            className="text-blue-400 hover:text-cyan-300 text-sm font-medium transition"
          >
            Turn your inbox into a sales machine →
          </a>
        </motion.div>

        {/* 2. Revenue Tracker */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-[#0f0f0f]/80 border border-gray-800 p-8 rounded-2xl backdrop-blur-md hover:border-cyan-500/40 transition-all"
        >
          <h3 className="text-xl font-semibold mb-3 text-blue-300">💰 Revenue Tracker</h3>
          <p className="text-gray-400 mb-3">
            Founders were drowning in spreadsheets and late invoices. AutoMind built an AI
            that monitors revenue, syncs payments, and sends daily insights straight to Slack or email.
          </p>
          <p className="text-sm italic text-cyan-400 mb-2">
            Result: Real-time clarity, zero missed payments, and peace of mind.
          </p>
          <a
            href="/contact"
            className="text-blue-400 hover:text-cyan-300 text-sm font-medium transition"
          >
            Get your AI accountant →
          </a>
        </motion.div>

        {/* 3. Smart Scheduler */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-[#0f0f0f]/80 border border-gray-800 p-8 rounded-2xl backdrop-blur-md hover:border-cyan-500/40 transition-all"
        >
          <h3 className="text-xl font-semibold mb-3 text-blue-300">🧠 Smart Scheduler</h3>
          <p className="text-gray-400 mb-3">
            Teams were buried under calendars and manual follow-ups. AutoMind built an assistant
            that books calls, adjusts time zones, and reminds clients automatically.
          </p>
          <p className="text-sm italic text-cyan-400 mb-2">
            Result: +70% fewer no-shows and effortless coordination.
          </p>
          <a
            href="/contact"
            className="text-blue-400 hover:text-cyan-300 text-sm font-medium transition"
          >
            Let AI manage your calendar →
          </a>
        </motion.div>

        {/* 4. Follow-Up Engine */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-[#0f0f0f]/80 border border-gray-800 p-8 rounded-2xl backdrop-blur-md hover:border-cyan-500/40 transition-all"
        >
          <h3 className="text-xl font-semibold mb-3 text-blue-300">📈 Client Follow-Up Engine</h3>
          <p className="text-gray-400 mb-3">
            Warm leads were dying out with no follow-up. AutoMind created a human-sounding system
            that re-engages clients, checks in post-sale, and revives cold conversations.
          </p>
          <p className="text-sm italic text-cyan-400 mb-2">
            Result: 25% more returning clients and consistent monthly revenue.
          </p>
          <a
            href="/contact"
            className="text-blue-400 hover:text-cyan-300 text-sm font-medium transition"
          >
            Keep your clients warm →
          </a>
        </motion.div>

        {/* 5. Ops Control Hub */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-[#0f0f0f]/80 border border-gray-800 p-8 rounded-2xl backdrop-blur-md hover:border-cyan-500/40 transition-all md:col-span-2"
        >
          <h3 className="text-xl font-semibold mb-3 text-blue-300">🏢 Ops Control Hub</h3>
          <p className="text-gray-400 mb-3">
            Business owners had too many systems — CRMs, Sheets, messages — scattered everywhere.
            AutoMind unified it all into one live dashboard that predicts trends and reports automatically.
          </p>
          <p className="text-sm italic text-cyan-400 mb-2">
            Result: 1 dashboard, 0 confusion, and full control over every moving part.
          </p>
          <a
            href="/contact"
            className="text-blue-400 hover:text-cyan-300 text-sm font-medium transition"
          >
            Unify your operations →
          </a>
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto text-center mt-20">
        <p className="text-gray-500 text-sm">
          Every system you see here was built from one idea —
          <span className="text-cyan-400"> automate the ordinary, elevate the owner.</span>
        </p>
      </div>
    </section>
  );
}
