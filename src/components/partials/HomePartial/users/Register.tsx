import * as Yup from "yup";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button, Container, Alert } from "react-bootstrap";
import styled from "styled-components";
import UserDataService from "../../../../services/net/UserDataService";
import IUserData from "../../../../services/types/users.type";

const StyledContainer = styled(Container)`
  margin-top: 50px;
  max-width: 600px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledField = styled(Field)`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const RegistrationForm: React.FC = () => {
  const initialValues: IUserData = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = async (
    values: IUserData,
    { setSubmitting, resetForm, setStatus }: any
  ) => {
    try {
      await UserDataService.postUsers(values);
      setStatus({ success: "User registered successfully!" });
      resetForm();
    } catch (error) {
      setStatus({
        error: "An error occurred during registration. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <StyledContainer>
      <h2>Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <StyledForm>
            {status && status.success && (
              <Alert variant="success">{status.success}</Alert>
            )}
            {status && status.error && (
              <Alert variant="danger">{status.error}</Alert>
            )}

            <label htmlFor="firstName">First Name</label>
            <StyledField name="firstName" type="text" />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-danger"
            />

            <label htmlFor="lastName">Last Name</label>
            <StyledField name="lastName" type="text" />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-danger"
            />

            <label htmlFor="email">Email</label>
            <StyledField name="email" type="email" />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />

            <label htmlFor="password">Password</label>
            <StyledField name="password" type="password" />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <StyledField name="confirmPassword" type="password" />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-danger"
            />

            <Button type="submit" disabled={isSubmitting}>
              Register
            </Button>
          </StyledForm>
        )}
      </Formik>
    </StyledContainer>
  );
};

export default RegistrationForm;
