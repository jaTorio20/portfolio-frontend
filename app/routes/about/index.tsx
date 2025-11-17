import "./About.css";

const AboutPage = () => {
  return (
    <div className='max-w-5xl mx-auto px-6 py-16 '>
      {/* Introduction */}
      <div className='flex flex-col md:flex-row md:items-start items-center gap-10 mb-12'>
        <img
          src='/images/gradPhoto2.jpg'
          alt='profile'
          className='w-40 h-40 rounded-full object-cover hover:scale-102 duration-300 transform shadow-card'
        />
        <div>
          <h1 className='text-3xl font-bold text-white mb-2'>
            Hey, I'm John
          </h1>
          <p className='text-gray-300 text-lg'>
            I'm a passionate aspiring software engineer focused on building
            modern applications with the MERN stack and TypeScript.
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className='mb-12'>
      <h2 className='text-2xl font-semibold text-white mb-4'>About Me</h2>
      <p className='text-gray-300 leading-relaxed'>
        I am a fresh graduate and aspiring Software Engineer with a strong focus on
        the MERN stack and TypeScript. My passion lies in building full-stack
        applications that are clean, scalable, and user-friendly. I am currently
        learning new skills and exploring modern technologies to stay adaptable in the
        fast-evolving tech industry. As I begin my professional journey, I'm eager to
        contribute my energy, curiosity, and creativity to projects that make a real
        impact.
      </p>

      </div>

      {/* Tech Stack */}
      <h2 className='text-2xl font-semibold text-white mb-4'>TechStack</h2>
      <ul className='flex flex-wrap gap-4 text-sm text-gray-300'>
        {[
          'React',
          'Express',
          'Tailwind CSS',
          'Bootstrap',
          'Node.js',
          'Typescript',
          'MongoDB',
          'MySQL',
          'EJS',
        ].map((tech) => (
          <li key={tech} className='px-3 py-1 border rounded border-gray-700 text-gray-200 hover:bg-gray-900 transform shadow-card'>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
