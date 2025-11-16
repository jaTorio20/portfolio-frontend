import { Link } from 'react-router';

const AboutPreview = () => {
  return (
    <section className='mt-12 p-10 flex flex-col md:flex-row items-center gap-8'>
        <img
          src='/images/gradPhoto2.jpg'
          alt='profile'
          className='w-32 h-32 rounded-full object-cover hover:scale-102 duration-300 transform about-card'
        />
      
      <div>
        <h2 className='text-2xl font-bold text-white mb-2'> About Me</h2>
        <p className='text-gray-200 mb-4 max-w 4xl'>
            I'm a passionate aspiring software engineer focused on building
            modern applications with the MERN stack and TypeScript.
        </p>
        <Link
          to='/about'
          className='inline-block text-indigo-400 hover:underline text-sm'
        >
          Learn More About Me
        </Link>
      </div>
    </section>
  );
};

export default AboutPreview;
