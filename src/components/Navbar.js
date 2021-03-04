import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Searchbar from '../components/Searchbar';
const Navbar = ({ handlePrev, handleNext, page, setFilter, filter }) => {
  const { register, handleSubmit, errors } = useForm();
  return (
    <nav className='fixed bg-gray-800' style={{ width: '100%' }}>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <Link
                  to='/'
                  className='focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-green-600 rounded-md bg-green-500 hover:bg-green-400'
                >
                  Cards View
                </Link>
                <Searchbar
                  register={register}
                  handleSubmit={handleSubmit}
                  errors={errors}
                  setFilter={setFilter}
                  filter={filter}
                />
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
