import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import TextInput from '../../atoms/TextInput/TextInput';
import Button from '../../atoms/Button/Button';
import '../Login/LoginPage.styel';

const initialValues = {
  email: '',
};

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

const ForgotPasswordPage = () => {
  return (
    <div className="forgot-password-container">
      <div className="form-container">
        <h1 className="title">Forgot Password</h1>
        <p className="description">
          Please enter the email address associated with your account. We will
          send you a code to reset your password.
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={ForgotPasswordSchema}
          onSubmit={(values, { resetForm }) => {
            console.log('Form Submitted:', values);
            resetForm();
          }}
        >
          {({ errors, touched, values, handleChange, handleBlur }) => (
            <Form>
              <TextInput
                name="email"
                type="email"
                label="Email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.email && errors.email)}
              />
              {touched.email && errors.email && (
                <span className="error-message">{errors.email}</span>
              )}

              <Button
                title="Reset"
                type="submit"
                onClick={() => {}}
                color="primary"
                variant="contained"
              />
            </Form>
          )}
        </Formik>

        <div className="back-to-login">
          <Link to="/" className="back-link">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
