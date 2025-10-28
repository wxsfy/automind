"use client";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <section className="py-28 px-6 border-t border-gray-800 text-center bg-[#0b0b0f]">
      <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
        One brain.<br />Three ways to automate your world.
      </h2>
      <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
        Everything we build runs on one idea — <span className="text-blue-400">make life easier with intelligence.</span>
        Whether it’s quiet systems, talkative bots, or full AI websites — AutoMind connects them all under one brain.
      </p>

      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto text-left">

        {/* Card 1 */}
        <div className="group bg-[#14141a] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 hover:shadow-blue-900/20 hover:shadow-lg transition-all">
          <h3 className="text-2xl font-semibold text-blue-300 mb-3">⚙️ Automation Setup</h3>
          <p className="text-gray-400 mb-3">
            You lose clients every time you miss a DM. We build AI that never sleeps — replying, booking, and sending reminders automatically.
            <span className="italic block mt-2 text-blue-400">Result: 10+ hours saved weekly and zero missed leads.</span>
          </p>
          <p className="text-sm text-gray-500 italic">
            Example: A local gym gained 15 new members in 2 weeks with automated DMs.
          </p>
          <Link href="/contact?service=automation" className="text-blue-400 hover:text-blue-300 font-medium block mt-4">
            Start My Automation →
          </Link>
        </div>

        {/* Card 2 */}
        <div className="group bg-[#1b1b22] p-8 rounded-2xl border border-blue-500 shadow-lg shadow-blue-900/30 transition-all">
          <h3 className="text-2xl font-semibold text-cyan-300 mb-3">🤖 Custom AI Bots</h3>
          <p className="text-gray-300 mb-3">
            We build AI that talks, sells, teaches, or supports — built to sound like you and run your business 24/7.  
            Not just a chatbot — your digital twin.
            <span className="italic block mt-2 text-blue-400">Result: Converts messages into paying clients automatically.</span>
          </p>
          <p className="text-sm text-gray-500 italic">
            Example: A real estate bot that pre-qualifies buyers while the agent sleeps.
          </p>
          <Link href="/contact?service=bots" className="text-blue-400 hover:text-blue-300 font-medium block mt-4">
            Build My Bot →
          </Link>
        </div>

        {/* Card 3 */}
        <div className="group bg-[#14141a] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 hover:shadow-blue-900/20 hover:shadow-lg transition-all">
          <h3 className="text-2xl font-semibold text-blue-300 mb-3">🌐 AI + Web Integration</h3>
          <p className="text-gray-400 mb-3">
            Want a website that thinks? We build full sites powered by AI — chat, bookings, analytics, reminders — all running 24/7.
            <span className="italic block mt-2 text-blue-400">Result: 2× higher engagement and self-managing clients.</span>
          </p>
          <p className="text-sm text-gray-500 italic">
            Example: A restaurant site that books tables and confirms reservations automatically.
          </p>
          <Link href="/contact?service=web" className="text-blue-400 hover:text-blue-300 font-medium block mt-4">
            Get an AI Website →
          </Link>
        </div>
      </div>
    </section>
  );
}
