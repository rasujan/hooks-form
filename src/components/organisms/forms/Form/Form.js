import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = values => {
    return new Promise(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 1000);
    });
  };

  const navigate = useNavigate();

  useEffect(() => navigate('/personal-info'), [navigate]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label> Name </label>
        <input
          className="padding-xs"
          defaultValue="test"
          {...register('example')}
        />

        <label> username</label>
        <input
          className="padding-xs"
          {...register('exampleRequired', { required: true })}
        />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && (
          <span className="error">This field is required</span>
        )}

        <select
          className="padding-xs"
          {...register('gender', { required: true })}
        >
          <option disabled value={null}>
            Select Gender
          </option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>

        {/* errors will return when field validation fails  */}
        {errors.gender && <span className="error">This field is required</span>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Loading..' : 'Submit'}
        </button>
      </form>
    </>
  );
}
