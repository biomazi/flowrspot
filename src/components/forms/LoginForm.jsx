import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import TextInput from './form-components/TextInput';
import Button from 'components/ui/Button';
import useAxios from 'hooks/useAxios';
import { useSessionContext } from 'hooks/useSessionContext';
import { MessageContext } from 'components/routing/Routes';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

const StyledTitle = styled.div`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: #334144;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    background-color: #F2F2F2;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
  height: 50px;
`;

const LoginForm = () => {
  const { setAuthToken } = useSessionContext();
  const { setOpenMessage } = useContext(MessageContext);
  const { post } = useAxios();
  const submit = async data => {
    const response = await post({
      url: '/api/v1/users/login',
      data,
    });
    setAuthToken(response.data['auth_token']);
    setOpenMessage({
      form: 'login',
      message: 'Congratulations! You have successfully logged into FlowrSpot!'
    });
  };

  return (
    <>
      <StyledTitle>Welcome Back</StyledTitle>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={submit}
        validateOnMount={true}
        validationSchema={loginSchema}>
        {({ isValid }) => (
          <Form>
            <TextInput
              label="Email"
              name="email"
            />
            <TextInput
              label="Password"
              name="password"
              type="password"
            />
            <StyledButton type="submit" disabled={!isValid}>Submit</StyledButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
