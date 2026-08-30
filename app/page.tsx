export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#171717]">

      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between">

        <div className="text-xl font-bold tracking-tight">
          GF<span className="text-purple-600">.</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">

          <a href="#about" className="hover:text-black transition">
            About
          </a>

          <a href="#skills" className="hover:text-black transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-black transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>

        </div>

        <a
          href="#contact"
          className="border border-gray-300 rounded-full px-5 py-2 text-sm hover:bg-black hover:text-white transition"
        >
          Let's talk
        </a>

      </nav>


     {/* HERO */}
<section className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-32">

  <div className="grid md:grid-cols-2 gap-16 items-center">

    {/* HERO TEXT */}

    <div>

      <p className="text-sm font-semibold tracking-[0.25em] text-purple-600 mb-6">
        BCA SCIENCE · TY STUDENT
      </p>

      <h1 className="text-6xl md:text-8xl font-bold tracking-[-0.04em] leading-[0.88]">

        Genesis
        <br />

        <span className="relative inline-block">
          Fernandes
          <span className="absolute -right-4 bottom-1 w-3 h-3 rounded-full bg-purple-600" />
        </span>

      </h1>

      <p className="mt-9 text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">

        I build practical applications while exploring
        <span className="text-black font-medium"> software engineering</span>,
        <span className="text-black font-medium"> cloud computing</span> and
        <span className="text-black font-medium"> data.</span>

      </p>


      <div className="flex flex-wrap gap-4 mt-10">

        <a
          href="#projects"
          className="group bg-black text-white px-7 py-3.5 rounded-full hover:bg-purple-600 transition-all duration-300"
        >
          View my work
          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>

        <a
          href="#contact"
          className="border border-gray-300 bg-white/50 px-7 py-3.5 rounded-full hover:border-black hover:bg-white transition-all duration-300"
        >
          Get in touch
        </a>

      </div>


      {/* SMALL INTRO */}

      <div className="flex items-center gap-4 mt-12 text-sm text-gray-400">

        <div className="w-10 h-px bg-gray-300" />

        <span>
          Currently exploring · Software · Cloud · Data
        </span>

      </div>

    </div>


    {/* HERO VISUAL */}

    <div className="relative h-[430px] hidden md:flex items-center justify-center">

      {/* background glow */}

      <div className="absolute w-80 h-80 rounded-full bg-purple-200 blur-3xl opacity-50" />


      {/* decorative circle */}

      <div className="absolute w-[330px] h-[330px] rounded-full border border-purple-200" />

      <div className="absolute w-[250px] h-[250px] rounded-full border border-gray-200" />


      {/* MAIN CARD */}

      <div className="relative w-64 h-80 bg-white/90 backdrop-blur border border-gray-200 rounded-[2rem] shadow-2xl rotate-3 p-8 hover:rotate-0 transition-transform duration-500">

        <div className="flex justify-between items-center">

          <span className="text-sm font-semibold">
            GF / 2026
          </span>

          <span className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />

        </div>


        <div className="mt-14">

          <p className="text-xs uppercase tracking-widest text-gray-400">
            portfolio
          </p>

          <p className="text-2xl font-semibold mt-2">
            Developer
          </p>

        </div>


        <div className="mt-10 space-y-4">

          <div className="h-2 bg-gray-200 rounded-full w-3/4" />

          <div className="h-2 bg-gray-200 rounded-full w-full" />

          <div className="h-2 bg-purple-200 rounded-full w-2/3" />

        </div>


        <div className="absolute bottom-8 left-8">

          <p className="text-xs text-gray-400">
            currently building
          </p>

          <p className="font-semibold mt-1">
            &lt;things /&gt;
          </p>

        </div>

      </div>


      {/* FLOATING LABEL */}

      <div className="absolute top-12 right-4 bg-black text-white px-5 py-3 rounded-full text-xs shadow-lg rotate-6">
        open to opportunities
      </div>


      {/* FLOATING DOT */}

      <div className="absolute bottom-12 left-8 w-4 h-4 bg-purple-500 rounded-full" />

    </div>

  </div>

</section>


      {/* ABOUT */}

      <section
        id="about"
        className="bg-[#171717] text-white px-6 md:px-10 py-28"
      >

        <div className="max-w-5xl mx-auto">

          <p className="text-purple-400 text-sm font-semibold tracking-widest mb-6">
            01 — ABOUT
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">

            A developer in progress,

            <span className="text-gray-500">
              {" "}learning by actually building.
            </span>

          </h2>


          <p className="mt-10 text-gray-400 text-lg leading-relaxed max-w-3xl">

            I'm a third-year BCA Science student at MIT World Peace
            University, Pune. I'm interested in software development,
            cloud computing and data-driven applications.

          </p>

        </div>

      </section>


      {/* SKILLS */}

      <section
        id="skills"
        className="max-w-7xl mx-auto px-6 md:px-10 py-28"
      >

        <p className="text-purple-600 text-sm font-semibold tracking-widest mb-6">
          02 — SKILLS
        </p>


        <h2 className="text-4xl md:text-5xl font-bold">
          Tools I work with.
        </h2>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">

          <SkillCard
            title="Languages"
            skills="Python · Java · JavaScript · C · C++ · PHP"
          />

          <SkillCard
            title="Web"
            skills="HTML · CSS · Flask"
          />

          <SkillCard
            title="Data"
            skills="NumPy · Pandas · Matplotlib · ML basics"
          />

          <SkillCard
            title="Tools"
            skills="Git · GitHub · VS Code · Jupyter"
          />

        </div>

      </section>


      {/* PROJECTS */}

      <section
        id="projects"
        className="bg-[#171717] text-white px-6 md:px-10 py-28"
      >

        <div className="max-w-7xl mx-auto">

          <p className="text-purple-400 text-sm font-semibold tracking-widest mb-6">
            03 — SELECTED WORK
          </p>


          <h2 className="text-4xl md:text-6xl font-bold">
            Things I've built.
          </h2>


          <div className="grid md:grid-cols-2 gap-6 mt-14">

          <div className="flex flex-col gap-3">
            <img
              src="/projects/notes-exchange.png"
              alt="Notes Exchange application"
              className="w-full h-48 object-cover rounded-xl border border-slate-800"
            />
            <ProjectCard
              number="01"
              tech="JAVASCRIPT"
              title="Notes Exchange"
              description="A platform designed to make sharing and accessing academ..."
            />
          </div>


            <div className="flex flex-col gap-3">
            <img
              src="/projects/smart-classroom.png"
              alt="Smart Classroom Finder Application"
              className="w-full h-48 object-cover rounded-xl border border-slate-800"
            />
            <ProjectCard
              number="02"
              tech="FLASK . POSTGRESQL"
              title="Smart Classroom Finder"
              description="A classroom-finding application developed as a practical academic project."
            />
          </div>


            <div className="md:col-span-2">

               <img
              src="/projects/daily-quiz.png"
              alt="Daily Quiz Application"
              className="w-full h-48 object-cover rounded-xl border border-slate-800"
            />
            <ProjectCard
              number="03"
              tech="PYTHON . FLASK . POSTGRESQL"
              title="Daily Quiz"
              description="A web-based quiz application built using Flask with PostgreSQL for storing and managing quiz data."
            />
          </div>

          </div>

        </div>

      </section>


      {/* EDUCATION */}

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-28">

        <p className="text-purple-600 text-sm font-semibold tracking-widest mb-6">
          04 — EDUCATION
        </p>


        <div className="flex flex-col md:flex-row md:justify-between gap-8">

          <div>

            <h2 className="text-4xl font-bold">
              MIT World Peace University
            </h2>

            <p className="text-gray-500 mt-3">
              BCA (Science) · 2024–2027
            </p>

          </div>


          <div>

            <p className="text-sm text-gray-400">
              CURRENT CGPA
            </p>

            <p className="text-4xl font-bold mt-2">
              8.95
            </p>

          </div>

        </div>

      </section>


      {/* CONTACT */}

      <section
        id="contact"
        className="bg-purple-600 text-white px-6 md:px-10 py-28"
      >

        <div className="max-w-5xl mx-auto">

          <p className="text-purple-200 text-sm font-semibold tracking-widest mb-6">
            05 — CONTACT
          </p>


          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Let's build something.
          </h2>


          <p className="mt-8 text-purple-100 text-lg max-w-xl">

            I'm currently looking for opportunities where I can
            learn, contribute and grow as a developer.

          </p>


          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="mailto:genesis.r.fernandes@gmail.com"
              className="bg-white text-black px-7 py-3 rounded-full"
            >
              Email me ↗  
            </a>

            <a
              href="linkedin.com/in/genesis-fernandes-1a6a2b37a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-7 py-3 rounded-full"
            >
              LinkedIn ↗
            </a>


            <a
              href="https://github.com/genesisfernandes06-star"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-7 py-3 rounded-full"
            >
              GitHub ↗
            </a>


             <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-7 py-3 rounded-full"
            >
              Resume ↗
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="bg-[#171717] text-gray-500 px-6 md:px-10 py-8 text-sm">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-3">

          <p>
            © 2026 Genesis Fernandes
          </p>

          <p>
            Built with curiosity & code.
          </p>

        </div>

      </footer>

    </main>
  );
}


function SkillCard({
  title,
  skills,
}: {
  title: string;
  skills: string;
}) {

  return (

    <div className="border border-gray-200 rounded-2xl p-7 hover:-translate-y-1 transition duration-300">

      <h3 className="font-semibold mb-4">
        {title}
      </h3>

      <p className="text-gray-500 leading-relaxed">
        {skills}
      </p>

    </div>

  );
}


function ProjectCard({
  number,
  tech,
  title,
  description,
}: {
  number: string;
  tech: string;
  title: string;
  description: string;
}) {

  return (

    <div className="bg-[#222222] rounded-3xl p-8 min-h-[320px] hover:-translate-y-2 transition duration-300">

      <div className="flex justify-between">

        <span className="text-sm text-gray-500">
          {number}
        </span>

        <span className="text-purple-400">
          ↗
        </span>

      </div>


      <div className="mt-20">

        <p className="text-sm text-purple-400 mb-3">
          {tech}
        </p>

        <h3 className="text-3xl font-semibold">
          {title}
        </h3>

        <p className="text-gray-400 mt-4 max-w-xl leading-relaxed">
          {description}
        </p>

      </div>

    </div>

  );
}