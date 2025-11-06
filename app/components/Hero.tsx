import { Link } from 'react-router';

const Hero = ({
  name = 'John Ashley Torio',
  text = 'Aspiring Full Stack Software Engineer',
}) => {
  return (
    <header className=' py-20 px-4  text-white transition-colors duration-300'>
      <div className='grid md:grid-cols-12 grid-cols-1'>
          <div className='md:col-span-8 text-center'>
              <h2 className='text-4xl font-bold mb-4'>Hello, I'm {name}</h2>
              <p className='text-lg text-gray-300 max-w-2xl mx-auto mb-6'>{text}</p>
              <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                <Link
                  to='/projects'
                  className='w-3/4 md:w-auto bg-gray-50 text-gray-900 px-5 py-2 rounded hover:bg-gray-300 transition'
                >
                  View Projects
                </Link>
                <Link
                  to='/contact'
                  className='w-3/4 md:w-auto border border-gray-50 text-white px-5 py-2 rounded hover:bg-gray-50 hover:text-gray-900 transition'
                >
                  Contact Me
                </Link>
              </div>
          </div>
          <div className="md:col-span-4 text-center">

            <span>image</span>
            <img alt="Profile" />
          </div>
      </div>
    </header>
  );
};

export default Hero;
