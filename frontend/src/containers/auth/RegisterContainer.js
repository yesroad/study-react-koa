import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFiled, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

function RegisterContainer() {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.register,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeFiled({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default RegisterContainer;
