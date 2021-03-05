const Searchbar = ({ register, handleSubmit, errors, filter, setFilter }) => {
  function onSubmit(data) {
    console.log(data);
  }

  const handleChange = e => {
    //setFilter(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name='name'
        type='text'
        id='name'
        className='w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors'
        placeholder='Filter...'
        onChange={handleChange}
        ref={register}
      />
      {errors.filter && <span>This field is required</span>}
    </form>
  );
};

export default Searchbar;
