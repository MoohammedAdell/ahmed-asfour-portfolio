import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed Asfour — Flutter Developer",
  description: "Portfolio of Ahmed Asfour, a Flutter Developer building modern, scalable and beautiful mobile applications.",
  openGraph: {
    title: "Ahmed Asfour — Flutter Developer",
    description: "Portfolio of Ahmed Asfour, a Flutter Developer building modern, scalable and beautiful mobile applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050816] text-[#F8FAFC] antialiased selection:bg-[#42A5F5]/30 selection:text-[#00D4FF]">
        {children}
      </body>
    </html>
  );
}
