import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Dharanidharan's Portfolio",
  description: 'Cybersecurity Specialist & Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={cn("min-h-screen bg-[#030303] text-white relative overflow-x-hidden selection:bg-purple-500/30")}>
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/[0.03] rounded-full blur-[120px]"></div>
        </div>
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}