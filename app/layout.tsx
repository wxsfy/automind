import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AutoMind — so you don’t mind",
  description: "AI automations and intelligent tools by Y. Wasfy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0b0b0f] text-white`}>
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
