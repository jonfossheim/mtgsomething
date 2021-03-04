import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  email: yup
    .string()
    .required('Please enter an email address')
    .email('Please enter a valid email address'),
  message: yup
    .string()
    .required('Please enter your message')
    .min(10, 'The message must be at least 10 characters')
});

const FormYup = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmit(data) {
    console.log('data', data);
  }

  console.log('error', errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <input
        className='mb-2  font-bold text-lg border py-2 px-3 text-grey-darkest'
        name='name'
        placeholder='Your name'
        ref={register}
      />
      {errors.name && <span>{errors.name.message}</span>}

      <input
        className=' mb-2  font-bold text-lg border py-2 px-3 text-grey-darkest'
        name='email'
        placeholder='Your email..'
        ref={register}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <textarea
        className='mb-2  font-bold text-lg border py-2 px-3 text-grey-darkest'
        name='message'
        placeholder='Your message..'
        ref={register}
      ></textarea>
      {errors.message && <span>{errors.message.message}</span>}

      <button>Send</button>
    </form>
  );
};

export default FormYup;
