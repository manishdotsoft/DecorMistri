import { useDispatch } from "react-redux";
import { setLoginData } from "../../store/reducers/loginSlice";
import { AppDispatch } from "../../store/store";
import { Box, Typography } from "@mui/material";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../../atoms/TextInput/TextInput";
import Button from "../../atoms/Button/Button";
import {
  StyledContainer,
  StyledForm,
  StyledHeader,
  MainFlex,
  ChildFlex,
  AllImg,
  LoginLink,
  Title,
} from "./Forgetpage.style";

import loginImage from "../../assets/images/signUpLogImage/SignUpLog.png";
import loginLogo from "../../assets/images/logo/Layer_x0020_1.svg";

const initialValues = {
  email: "",
};

// Validation Schema
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const ForgetPassword = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <StyledContainer>
      <MainFlex>
        <ChildFlex>
          <StyledForm>
            <StyledHeader>
              <img
                style={{ width: "40px", height: "45px" }}
                src={loginLogo}
                alt="Decormistri Logo"
                className="logo-image"
              />
              <Title>
                <Typography
                  sx={{
                    fontSize: "36px",
                    fontWeight: 300,
                    marginBottom: "5px",
                  }}
                >
                  Forgot password
                </Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                  No worries, We’ll send you instructions for reset
                </Typography>
              </Title>
            </StyledHeader>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                dispatch(setLoginData(values));
                localStorage.setItem("authToken", "your-auth-token");
                resetForm();
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isValid,
              }) => {
                const isButtonDisabled = !values.email || !isValid;

                return (
                  <Form>
                    <TextInput
                      name="email"
                      type="email"
                      label="Email Address / Mobile Number"
                      placeholder="Enter Your Email"
                      value={values.email}
                      onChange={handleChange}
                      style={{
                        width: "96%",
                        borderRadius: "8px",
                        height: "10px",
                        marginBottom: "50px",
                      }}
                      onBlur={handleBlur}
                      error={Boolean(touched.email && errors.email)}
                      helperText={
                        touched.email && errors.email ? errors.email : undefined
                      }
                    />

                    <LoginLink to="/newpassword">
                      <Button
                        title="Reset Password"
                        type="submit"
                        color="primary"
                        variant="contained"
                        onClick={() => {}}
                        backgroundColor={
                          isButtonDisabled ? "#e432a9" : "#C7148A"
                        }
                        disabled={isButtonDisabled}
                        style={{
                          marginTop: "20px",
                          color: "#ffffff",
                          width: "100%",
                          height: "50px",
                          borderRadius: "5px",
                          cursor: isButtonDisabled ? "not-allowed" : "pointer",
                        }}
                      />
                    </LoginLink>
                  </Form>
                );
              }}
            </Formik>
          </StyledForm>
          <LoginLink to="/">
            <Button
              title="Back"
              type="submit"
              color="primary"
              variant="contained"
              backgroundColor="#ffffff"
              onClick={() => {}}
              style={{
                borderRadius: "5px",
                background: "white",
                color: "black",
                border: "1px solid #cccccc",
                width: "100%",
                height: "50px",
                marginTop: "15px",
              }}
            />
          </LoginLink>
        </ChildFlex>

        <Box sx={{ width: "50%", height: "auto" }}>
          <AllImg src={loginImage} alt="Login illustration" />
        </Box>
      </MainFlex>
    </StyledContainer>
  );
};

export default ForgetPassword;
