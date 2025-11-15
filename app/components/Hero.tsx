import { Link } from 'react-router';

type HeroProps = {
  name: string,
  text: string,
}

const Hero = ({
  name = 'John Ashley Torio',
  text = 'Aspiring Full Stack Software Engineer',
}: HeroProps) => {
  return (
    <header className=' py-20 text-white transition-colors duration-300 max-w-7xl mx-auto my-8'>
      <div className='grid md:grid-cols-12 grid-cols-1'>
          <div className='md:col-span-6 text-center mb-8 p-3'>
              <h2 className='text-4xl font-bold mb-4'>Hello, I'm {name}</h2>
              <p className='text-lg text-gray-300 max-w-2xl mx-auto mb-6'>{text}</p>
              <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                <Link
                  to='/projects'
                  className='w-3/4 md:w-auto bg-gray-100 text-gray-900 px-5 py-2 rounded hover:bg-white transition-transform hover:-translate-y-1 duration-300'
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
          <div className="md:col-span-6 flex justify-center text-center px-5">
            <img className='rounded-4xl w-full sm:w-2/3 md:w-2/3 h-auto' alt="Profile" src='/images/gradPhoto2.jpg'/>
          </div>
      </div>
    </header>
  );
};

export default Hero;
