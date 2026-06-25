export function JsonLd() {
  const baseUrl = "https://nurulla-hasan-portfolio-pink.vercel.app";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rafi",
    url: baseUrl,
    image: `${baseUrl}/og-image.png`,
    jobTitle: "Frontend-Focused MERN Stack Developer",
    description:
      "Frontend-Focused MERN Stack Developer specializing in building modern web applications with React, Next.js, and Node.js.",
    sameAs: [
      "https://github.com/nurulla-hasan",
      "https://www.linkedin.com/in/nurulla-hasan",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Web Development",
      "Frontend Development",
      "MERN Stack",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rafi Portfolio",
    url: baseUrl,
    description:
      "Portfolio website of Rafi — a Frontend-Focused MERN Stack Developer.",
    author: {
      "@type": "Person",
      name: "Rafi",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
