import { Link } from 'react-router-dom';
const Navbar = ({ handlePrev, handleNext, page }) => {
  return (
    <nav className='fixed bg-gray-800' style={{ width: '100%' }}>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>

              <svg
                className='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>

              <svg
                className='hidden h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <Link
                  to='/'
                  className='focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-green-600 rounded-md bg-green-500 hover:bg-green-400'
                >
                  Cards View
                </Link>
              </div>
            </div>
          </div>
          <div
            className='absolute inset-y-0 right-0 flex justify-around pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'
            style={{ width: '300px' }}
          >
            <button
              className={
                'focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-blue-600 rounded-md bg-blue-500 hover:bg-blue-400'
              }
              onClick={handlePrev}
            >
              Previous Page
            </button>
            <button
              className={
                'focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-blue-600 rounded-md bg-blue-500 hover:bg-blue-400'
              }
              onClick={handleNext}
            >
              Next Page
            </button>
          </div>
          <p className='text-white'>Current Page {page}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
