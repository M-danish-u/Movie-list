import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../Features/Movie/MovieSlice';

const AdminForm = () => {
  const movies = useSelector((state) => state.movie.sel);
  const selectedMovie = useSelector((state) => state.movie.selectedMovie);

  const dispatch = useDispatch();
  const isEditing = !!selectedMovie;
  const initialValues = isEditing
    ? { ...selectedMovie }
    : {
        title: '',
        cast: '',
        image: '',
        id: '', // New ID field
      };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    cast: Yup.string().required('Cast is required'),
    image: Yup.string().url('Invalid URL').required('Image URL is required'),
    id: Yup.number().required('ID is required'),
  });

  const onSubmit = async (values, { setSubmitting,resetForm }) => {
    dispatch(setMovies(values));

    // Handle submission logic here
    console.log(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className='flex items-center justify-center flex-col gap-4'>
        <span className='font-bold text-lg'>ADD MOVIE</span>
        <Form className='border-2 border-black p-8 flex gap-4 flex-col bg-white rounded-md'>
        <div className='mb-4'>
            <label htmlFor='id' className='block text-sm font-medium text-gray-700'>
              ID:
            </label>
            <Field
              type='number'
              id='id'
              name='id'
              className='mt-1 p-2 border rounded-md w-full'
            />
            <ErrorMessage name='id' component='div' className='text-red-500 text-sm' />
          </div>
          <div className='mb-4'>
            <label htmlFor='title' className='block text-sm font-medium text-gray-700'>
              Movie Title:
            </label>
            <Field
              type='text'
              id='title'
              name='title'
              className='mt-1 p-2 border rounded-md w-full'
            />
            <ErrorMessage name='title' component='div' className='text-red-500 text-sm' />
          </div>

          <div className='mb-4'>
            <label htmlFor='cast' className='block text-sm font-medium text-gray-700'>
              Cast:
            </label>
            <Field
              type='text'
              id='cast'
              name='cast'
              className='mt-1 p-2 border rounded-md w-full'
            />
            <ErrorMessage name='cast' component='div' className='text-red-500 text-sm' />
          </div>

          <div className='mb-4'>
            <label htmlFor='image' className='block text-sm font-medium text-gray-700'>
              Image URL:
            </label>
            <Field
              type='text'
              id='image'
              name='image'
              className='mt-1 p-2 border rounded-md w-full'
            />
            <ErrorMessage name='image' component='div' className='text-red-500 text-sm' />
          </div>

         

          <div className='flex justify-center'>
            <button
              type='submit'
              className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700'
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default AdminForm;
