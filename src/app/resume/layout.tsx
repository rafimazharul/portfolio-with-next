import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "View the professional resume of Nurulla Hasan — Frontend-Focused MERN Stack Developer with expertise in React, Next.js, TypeScript, and Node.js.",
  openGraph: {
    title: "Resume | Nurulla Hasan",
    description:
      "Professional resume of Nurulla Hasan — a Frontend-Focused MERN Stack Developer.",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
