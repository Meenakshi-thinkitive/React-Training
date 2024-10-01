import React from 'react'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Link } from "@mui/material";
// import Grid from '@mui/material/Unstable_Grid2';-
import logo from '../logo.svg';
import Typography from "@mui/material/Typography";
import { useFormik, FormikProvider } from "formik";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import Button from "@mui/material/Button";
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import '../sass/Home.scss';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

function Home() {
  const navigate = useNavigate(); 
  const initialValues = {
    email: '',
    password: '',
  };
  

  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Login form values:', values);


    setTimeout(() => {
      setSubmitting(false);
      resetForm();
      // setIsLoggedIn(true);
      navigate('/testtable', { state: { email: values.email } });
      // navigate('/protected', { state: {logIn} })
    }, 1000);

  };

  const handleLogin = (event) => {
    if (event.key === 'Enter') {
      formik.handleSubmit();
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  

  return (
    <Grid sx={{}}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundImage: 'linear-gradient(90deg, rgba(8, 181, 172, 1) 0%, rgba(126, 217, 87, 1) 100% )'
        }}
      >
        <Card sx={{
          borderRadius: "0.7rem",
          display: 'flex',
          // height: '500px',
          height :{ xs: '100%', md: '500px'},
          width: { xs: '50%', sm: '50%', md: '800px' }, // Responsive width
          justifyContent: 'center'
        }}>
          <Grid
            container
            direction="row"
            sx={{ height: '100%' }} // Ensure the Grid takes full height
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                backgroundColor: "rgba(35,37,49,1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  maxHeight: "23.87rem",
                  maxWidth: "23.87rem",
                  width: '270px',
                  height: "100%", // Set to 100% for responsiveness
                  py: "4.75rem",
                  px: "4.5rem",
                }}
                alt="Advanta Logo"
                src={logo}
              />
            </Grid>

            <Grid item xs={12} md={6} name="form-grid">
              <Box
                sx={{
                  height: "70%", width: '322px',
                  mx: "2rem",
                  my: "4rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignContent: "center",
                }}
              >
                <Typography fontSize="1.6rem" fontWeight="600" mb="0.1rem">
                  Sign in
                </Typography>
                <FormikProvider value={formik}>
                  <Box>
                    <Typography
                      fontStyle="italic"
                      fontSize="0.75rem"
                      fontWeight="200"
                      style={{ opacity: 0.5 }}
                    >
                      Email Address
                    </Typography>
                    <TextField
                      fullWidth
                      id="email-input"
                      variant="standard"
                      type="text"
                      focused
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onKeyDown={handleLogin}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Box>

                  <Box>
                    <Typography
                      fontStyle="italic"
                      fontSize="0.75rem"
                      fontWeight="200"
                      style={{ opacity: 0.5 }}
                    >
                      Password
                    </Typography>
                    <TextField
                      fullWidth
                      id="password-input"
                      variant="standard"
                      type="password"
                      focused
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onKeyDown={handleLogin}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                    />
                  </Box>

                  <Box>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        py: "0.65rem",
                        textTransform: "none",
                        borderRadius: "0.4rem",
                        backgroundColor: formik.isValid
                          ? "rgba(200, 200, 200)"
                          : "rgba(230, 230, 230)",
                        fontSize: "1rem",
                        boxShadow: "0px 2px 8px 0px rgba(35,37,49, 0.3)",
                        ":hover": {
                          backgroundColor: "rgba(230, 230, 230, 1)",
                          backgroundImage:
                            "linear-gradient(to left, rgba(126, 217, 87, 1) 0%, rgba(8, 181, 172, 1) 100%)",
                        },
                      }}
                      onClick={formik.handleSubmit}
                    > Continue </Button>
                  </Box>
                  <Typography
                    fontSize="0.88rem"
                    fontWeight="200"
                    color="rgba(177,177,177)"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: "1rem",
                    }}
                  >
                    Don't have an account?{" "}
                    <Link
                      underline="none"
                      color="rgba(35,37,49,1)"
                      component={RouterLink}
                      to="/register"
                      sx={{ ml: "0.2rem" }}
                    >
                      Register Here
                    </Link>
                  </Typography>
                  <Typography
                    fontSize="0.88rem"
                    fontWeight="200"
                    color="rgba(177,177,177)"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: "1rem",
                      marginTop: '0px'
                    }}
                  >
                    Forgot Password?{" "}
                    <Link
                      underline="none"
                      color="rgba(35,37,49,1)"
                      component={RouterLink}
                      to="/reset"
                      sx={{ ml: "0.2rem" }}
                    >
                      Reset Here
                    </Link>
                  </Typography>
                </FormikProvider>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Grid>
  )
}

export default Home;