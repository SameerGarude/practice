import { useEffect, useState } from "react";
import data from "./data.json";
import "./index.css";

function Section({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-2 mb-6 uppercase tracking-wider">
        {title}
      </h2>
      <div className="text-gray-300 text-lg leading-relaxed">{children}</div>
    </section>
  );
}

function App() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(data);
  }, []);

  if (!content)
    return <div className="text-white text-center p-10">Loading...</div>;

  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans p-8">
      {/* Navbar */}
      <nav className="bg-gray-800 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="text-xl text-indigo-400 font-bold">Sameer Garude</div>
          <ul className="flex space-x-6 text-white">
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#extra">Extra</a>
            </li>
            <li>
              <a href="#get-it-now">Get it Now</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-14">
          <img
            src={content.aboutMe.image}
            alt="Profile"
            className="w-36 h-36 rounded-full mx-auto border-4 border-indigo-600 shadow-md mb-4"
          />
          <h1 className="text-5xl font-bold text-indigo-400 mb-2">
            {content.aboutMe.name}
          </h1>
          <p className="text-gray-400 text-xl">{content.aboutMe.description}</p>
        </header>

        <Section title="About Me">
          <p>{content.aboutMe.details}</p>
        </Section>

        <Section title="Skills">
          <div className="flex flex-wrap gap-3">
            {content.skills.map((skill, i) => (
              <span
                key={i}
                className="bg-indigo-700 text-white px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Hobbies & Interests">
          <ul className="list-disc list-inside">
            {content.hobbies.map((hobby, i) => (
              <li key={i}>{hobby}</li>
            ))}
          </ul>
        </Section>

        <Section title="Passions">
          <ul className="list-disc list-inside">
            {content.passions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="Academic Background">
          <ul className="list-disc list-inside">
            {content.education.map((edu, i) => (
              <li key={i}>
                {edu.degree} from {edu.institution} ({edu.year})
              </li>
            ))}
          </ul>
        </Section>

        {content.workExperience && (
          <Section title="Work Experience">
            <ul className="list-disc list-inside">
              {content.workExperience.map((job, i) => (
                <li key={i}>
                  {job.role} at {job.company} ({job.years})
                </li>
              ))}
            </ul>
          </Section>
        )}

        {content.certifications && (
          <Section title="Certifications">
            <ul className="list-disc list-inside">
              {content.certifications.map((cert, i) => (
                <li key={i}>{cert}</li>
              ))}
            </ul>
          </Section>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 mt-16">
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="mb-4">
            <a
              href="https://twitter.com"
              className="mr-6 hover:text-indigo-400"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              className="mr-6 hover:text-indigo-400"
            >
              Facebook
            </a>
            <a href="https://instagram.com" className="hover:text-indigo-400">
              Instagram
            </a>
          </div>
          <p className="text-gray-400">©2025 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
