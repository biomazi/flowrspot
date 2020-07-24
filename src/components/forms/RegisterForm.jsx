import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import TextInput from './form-components/TextInput';
import Button from 'components/ui/Button';
import useAxios from 'hooks/useAxios';
import { MessageContext } from 'components/routing/Routes';

const registerSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  last_name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  date_of_birth: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
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

const StyledName = styled.div`
  display: flex;
  div {
    margin-top: 0;
    margin-bottom: 0;
    &:first-child {
      margin-right: 10px;
    }
  }

  @media (max-width: 767px) {
    background-color: #F2F2F2;

    div {
      width: 49%;
      &:first-child {
        margin-right: 2%;
      }
    }
  }
`;

const RegisterForm = ({ toggleRegister }) => {
  const { setOpenMessage } = useContext(MessageContext);
  const { post } = useAxios();
  const submit = async data => {
    await post({
      url: '/api/v1/users/register',
      data,
    });
    setOpenMessage({
      form: 'register',
      message: 'Congratulations! You have successfully signed up for FlowrSpot!'
    });
    toggleRegister()
  };

  return (
    <>
      <StyledTitle>Create an Account</StyledTitle>
      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          date_of_birth: '',
          email: '',
          password: '',
        }}
        onSubmit={submit}
        validateOnMount={true}
        validationSchema={registerSchema}>
        {({ isValid }) => (
          <Form>
            <StyledName>
              <TextInput
                label="First name"
                name="first_name"
              />
              <TextInput
                label="Last Name"
                name="last_name"
              />
            </StyledName>
            <TextInput
              label="Date of Birth"
              name="date_of_birth"
            />
            <TextInput
              label="Email"
              name="email"
            />
            <TextInput
              label="Password"
              name="password"
              type="password"
            />
            <StyledButton type="submit" disabled={!isValid}>Create Account</StyledButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
