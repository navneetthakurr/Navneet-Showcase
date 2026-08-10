import React, { useEffect, useRef, useState } from "react";
import profileImg from "../assets/me.jpeg";

function FadeInSection({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  
  return (
    <div
      ref={ref}
      className={`transition-all duration-1500 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-stone-100 text-neutral-900 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>


      <header className="max-w-[1800px] mx-auto px-6 sm:px-10 py-8 flex justify-between items-center font-inter">
        <div className="text-sm font-semibold tracking-widest uppercase">
          Navneet Chauhan
        </div>
        <a
          href="mailto:navneet08.dev@gmail.com"
          className="group relative overflow-hidden text-xs tracking-widest uppercase bg-stone-200 px-6 py-3 rounded-full transition-colors duration-300 hover:text-stone-100"
        >
          <span className="absolute inset-0 bg-neutral-900 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out rounded-full"></span>
          <span className="relative">Let's Talk</span>
        </a>
      </header>

      <main className="max-w-[1800px] mx-auto px-6 sm:px-10 font-inter">
        <FadeInSection>
          <section className="pt-10">
            <div className="flex flex-col-reverse sm:flex-row items-center gap-6 sm:gap-10 lg:gap-80">
              <h1 className="font-extrabold tracking-tight leading-[0.92] text-5xl sm:text-8xl lg:text-[9rem] break-words text-center sm:text-left">
                Navneet
                <br />
                Chauhan
              </h1>
              <img
                src={profileImg}
                alt="Navneet Chauhan"
                className="w-32 h-32 sm:w-56 sm:h-56 lg:w-72 lg:h-72 object-cover rounded-full grayscale shrink-0"
              />
            </div>

            <div className="flex flex-wrap justify-center sm:justify-between items-center sm:items-start gap-4 mt-9 text-center sm:text-left">
              <div className="text-lg sm:text-xl space-y-1">
                <div>Full Stack Developer</div>
                <div>AI Enthusiast</div>
              </div>
              <div className="text-lg sm:text-xl">Noida, India</div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="pt-32 pb-24 grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-10">
            <div className="text-sm uppercase tracking-widest">About</div>
            <p className="text-xl sm:text-xl leading-relaxed text-neutral-800 max-w-3xl">
              If you're looking for a builder who doesn't stop at "it works" —
              someone who digs into the why behind every bug, documents the
              system instead of just shipping it, and treats each project as a
              chance to get sharper, that's exactly the approach I bring. I work
              across the full stack — React and Tailwind on the front end, SQL
              and Node.js doing the heavy lifting behind the scenes — and I'm
              actively pushing that stack further by teaching it to talk to
              language models instead of just databases. Every project, from{" "}
              <span className="font-semibold text-neutral-900">Amber &amp; Oat</span>{" "}
              to{" "}
              <span className="font-semibold text-neutral-900">Eventora</span>{" "}
              to{" "}
              <span className="font-semibold text-neutral-900">TechVeer</span>,
              has been a deliberate step toward building things end to end —
              interfaces people actually enjoy using, backed by systems that
              hold up.
            </p>
          </section>
        </FadeInSection>

        <section className="pt-16 pb-24 border-t border-stone-300">
          <FadeInSection>
            <h2 className="font-extrabold tracking-tight text-5xl sm:text-7xl lg:text-8xl mb-12">
              Selected Work
            </h2>
          </FadeInSection>

          <FadeInSection>
            <div className="grid grid-cols-[1fr_auto] items-center gap-4 sm:gap-6 py-8 border-t border-stone-300">
              <div>
                <div className="font-extrabold text-2xl sm:text-3xl">
                  TechVeer
                </div>
                <div className="italic font-bold text-base mt-3">
                  Full Stack — Tech News Platform
                </div>
                <p className="mt-2 text-base text-neutral-800 max-w-xl">
                  Built a tech news website from the ground up using React
                  (Navbar, MobileHome components) and Tailwind CSS on the front
                  end, backed by a SQL database. Documented every piece with
                  handwritten notes tracking how it all connects.
                </p>
              </div>
              <div className="font-extrabold text-3xl sm:text-6xl lg:text-7xl leading-none">
                01
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="grid grid-cols-[1fr_auto] items-center gap-4 sm:gap-6 py-8 border-t border-stone-300">
              <div>
                <div className="font-extrabold text-2xl sm:text-3xl">
                  Eventora
                </div>
                <div className="italic font-bold text-base mt-3">
                  Full Stack — Event Management Platform
                </div>
                <p className="mt-2 text-base text-neutral-800 max-w-xl">
                  A data-heavy event management app built with Next.js on the
                  front end and Node.js on the back end, built while learning
                  the MERN stack. Frontend deployed on Vercel, backend on
                  Render.
                </p>
              </div>
              <div className="font-extrabold text-3xl sm:text-6xl lg:text-7xl leading-none">
                02
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="grid grid-cols-[1fr_auto] items-center gap-4 sm:gap-6 py-8 border-t border-stone-300">
              <div>
                <div className="font-extrabold text-2xl sm:text-3xl">
                  Amber &amp; Oat
                </div>
                <div className="italic font-bold text-base mt-3">
                  Interactive Web App — Coffee Order Builder
                </div>
                <p className="mt-2 text-base text-neutral-800 max-w-xl">
                  A fun, interactive coffee shop order builder where you pick
                  your drink, size, milk, and extras — with a live visual cup
                  and real-time order summary. Built with vanilla HTML, CSS,
                  and JavaScript, no frameworks.
                </p>
              </div>
              <div className="font-extrabold text-3xl sm:text-6xl lg:text-7xl leading-none">
                03
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <p className="mt-10 text-lg text-neutral-800 max-w-lg">
              More projects are in progress — including work combining this
              stack with generative AI. This space will grow.
            </p>

            <a
              href="mailto:navneet08.dev@gmail.com"
              className="group relative overflow-hidden mt-7 inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase bg-neutral-900 text-stone-100 px-7 py-4 rounded-full"
            >
              <span className="relative flex items-center gap-3">
                <span className="w-4 h-px bg-stone-100 inline-block transition-all duration-300 group-hover:w-6"></span>
                Get in Touch
              </span>
            </a>
          </FadeInSection>
        </section>

        <footer className="py-10 border-t border-stone-300 flex flex-col sm:flex-row gap-4 justify-between items-center text-sm text-center sm:text-left">
          <div>©2026. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="https://github.com/navneetthakurr" target="_blank" rel="noopener noreferrer" className="font-medium hover:opacity-60 transition-opacity">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/navneet-chauhan-dev" target="_blank" rel="noopener noreferrer" className="font-medium hover:opacity-60 transition-opacity">
              LinkedIn
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
