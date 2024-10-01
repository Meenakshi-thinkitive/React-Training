import { React } from 'react'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Typography, TextField, MenuItem, Select, FormControl, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Divider } from '@mui/material';
import Checkmark from '../Checkmark.svg';
import Button from "@mui/material/Button";
import cross from '../cross.png';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

function Register() {
    // const [age, setAge] = React.useState('');

    //   const handleChange = (event) => {
    //     setAge(event.target.value);
    //   };
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        account: '',
        npi: '',
        licenseType: '',
        password: '',
        confirmPassword: '',
    };

    // Validation schema using Yup
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'First name must be at least 2 characters')
            .max(50, 'First name must not exceed 50 characters')
            .required('First name is required'),
        lastName: Yup.string()
            .min(2, 'Last name must be at least 2 characters')
            .max(50, 'Last name must not exceed 50 characters')
            .required('Last name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        account: Yup.string().required('Account name is required'),
        npi: Yup.string().optional(),
        licenseType: Yup.string().required('Please select a License Type'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const onSubmit = (values , { resetForm }) => {
        console.log('Form data:', values);
        resetForm();
        alert("Form submitted");
    };

    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // height: '176vh',
                height: 'auto',
                minHeight: '100vh',
                padding: '10px',
                backgroundImage: 'linear-gradient(90deg, rgba(8, 181, 172, 1) 0%, rgba(126, 217, 87, 1) 100% )'
            }}>
                {/* height: '166vh' */}
                <Card sx={{ height: 'auto', width: '800px', borderRadius: '10px', padding: '15px' }} >
                    <Typography sx={{ textAlign: 'center', fontSize: "1.6rem", fontWeight: "100", margin: '20px 0px 0px' }}>
                        Your Information
                    </Typography>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {({ handleChange, handleBlur, values, errors, touched }) => (
                            <Form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                        <Box sx={{
                                            marginTop: '15px',
                                            marginLeft: '42px',  // Consistent left margin of 42px for all screen sizes
                                        }}>
                                            <Typography
                                                fontStyle="italic"
                                                fontSize="0.75rem"
                                                fontWeight="200"
                                                style={{ opacity: 0.5 }}
                                            >
                                                First Name
                                            </Typography>
                                            <TextField
                                                sx={{
                                                    width: { xs: '100%', sm: '335px' },  // Full width for small screens, 330px for sm and above
                                                }}
                                                id="firstName"
                                                variant="standard"
                                                type="text"
                                                name="firstName"
                                                value={values.firstName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.firstName && !!errors.firstName}
                                                helperText={touched.firstName && errors.firstName}
                                                focused
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Box sx={{
                                            marginTop: '15px',
                                            marginLeft: '5px',  // Consistent left margin of 42px for all screen sizes
                                        }}>
                                            <Typography
                                                fontStyle="italic"
                                                fontSize="0.75rem"
                                                fontWeight="200"
                                                style={{ opacity: 0.5 }}
                                            >
                                                Last Name
                                            </Typography>
                                            <TextField
                                                sx={{
                                                    width: { xs: '100%', sm: '336px' },  // Full width for small screens, 330px for sm and above
                                                    '& .MuiInput-underline:after': {
                                                        borderBottom: '2px solid',
                                                        borderImageSlice: 1,
                                                        borderImageSource: 'linear-gradient(to left, rgba(126, 217, 87, 1) 0%, rgba(8, 181, 172, 1) 100%)',
                                                    },
                                                }}
                                                id="lastName"
                                                variant="standard"
                                                type="text"
                                                focused
                                                name="lastName"
                                                value={values.lastName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.lastName && !!errors.lastName}
                                                helperText={touched.lastName && errors.lastName}

                                            />
                                        </Box>
                                    </Grid>


                                    <Grid item xs={12} sm={6}>
                                        <Box sx={{ marginTop: '15px', marginLeft: '42px' }}>
                                            <Typography
                                                fontStyle="italic"
                                                fontSize="0.75rem"
                                                fontWeight="200"
                                                align=''
                                                style={{ opacity: 0.5 }}
                                            >
                                                Email Address
                                            </Typography>

                                            <TextField
                                                sx={{ width: { xs: '330px', sm: '470px' } }} // Responsive width
                                                id="email"
                                                variant="standard"
                                                type="text"
                                                focused
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.email && !!errors.email}
                                                helperText={touched.email && errors.email}
                                            />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Box sx={{ marginTop: '15px', marginLeft: '42px' }}>
                                            <Typography
                                                fontStyle="italic"
                                                fontSize="0.75rem"
                                                fontWeight="200"
                                                align=''
                                                style={{ opacity: 0.5 }}
                                            >
                                                Account
                                            </Typography>

                                            <TextField
                                                sx={{ width: { xs: '330px', sm: '470px' } }} // Responsive width
                                                id="account"
                                                variant="standard"
                                                type="text"
                                                focused
                                                name="account"
                                                placeholder='Your Practice Name'
                                                value={values.account}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.account && !!errors.account}
                                                helperText={touched.account && errors.account}
                                            />
                                        </Box>
                                    </Grid>


                                    <Grid container spacing={2}>
                                        {/* NPI Field */}
                                        <Grid item xs={12} sm={4}>
                                            <Box sx={{ marginTop: '15px', marginLeft: '42px' }}>
                                                <Typography
                                                    fontStyle="italic"
                                                    fontSize="0.75rem"
                                                    fontWeight="200"
                                                    style={{ opacity: 0.5 }}
                                                >
                                                    NPI
                                                </Typography>
                                                <TextField
                                                    sx={{
                                                        width: { xs: '100%', sm: '335px' }, // Full width for small screens, 400px for md and above
                                                        // marginRight: '5px',
                                                    }}
                                                    id="npi"
                                                    variant="standard"
                                                    type="text"
                                                    focused
                                                    name="npi"
                                                    placeholder="Optional"
                                                    value={values.npi}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </Box>
                                        </Grid>

                                        {/* License Type Field */}
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Box sx={{ marginTop: '15px', marginLeft: '5px' }}>
                                                <FormControl variant="standard" sx={{ m: 0.4, minWidth: 335 }}>
                                                    <Typography
                                                        fontStyle="italic"
                                                        fontSize="0.75rem"
                                                        fontWeight="200"
                                                        style={{ opacity: 0.5 }}

                                                    >
                                                        License-Type
                                                    </Typography>
                                                    <Select
                                                        sx={{
                                                            width: { xs: '100%', md: '335px' }, // Full width for small screens, 330px for md and above
                                                        }}
                                                        name="licenseType"
                                                        value={values.licenseType} // Binds to Formik's licenseType value
                                                        onChange={handleChange} // Formik's handleChange updates the value
                                                        onBlur={handleBlur} // Formik's handleBlur sets field as touched
                                                        error={touched.licenseType && !!errors.licenseType} // Error prop conditionally based on touched and errors
                                                        // focused
                                                    >
                                                        <MenuItem value='md'>MD</MenuItem>
                                                        <MenuItem value='do'>DO</MenuItem>
                                                        <MenuItem value='np'>NP</MenuItem>
                                                        <MenuItem value= 'rn'>RN</MenuItem>
                                                        <MenuItem value= 'lvn'>LVN</MenuItem>
                                                    </Select>
                                                    {touched.licenseType && errors.licenseType && (
                                                        <Typography sx={{ color: 'red', fontSize: '0.75rem' }}>{errors.licenseType}</Typography>
                                                    )}
                                                </FormControl>
                                            </Box>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12} sm={4}>
                                        <Box sx={{ marginTop: '15px', marginLeft: '42px' }}>
                                            <Typography
                                                fontStyle="italic"
                                                fontSize="0.75rem"
                                                fontWeight="200"
                                                style={{ opacity: 0.5 }}
                                            >
                                                Password
                                            </Typography>
                                            <TextField sx={{ width: '335px', marginRight: '5px' }}
                                                // fullWidth
                                                id="password"
                                                variant="standard"
                                                type="text"
                                                focused
                                                name="password"
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.password && !!errors.password}
                                                helperText={touched.password && errors.password}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Box sx={{ marginTop: '15px', marginLeft: '0px' }}>
                                            <Typography
                                                fontStyle="italic"
                                                fontSize="0.75rem"
                                                fontWeight="200"
                                                style={{ opacity: 0.5 }}
                                            >
                                                Re-type Password
                                            </Typography>

                                            <TextField sx={{ width: '336px' }}
                                                // fullWidth
                                                id="confirmPassword"
                                                variant="standard"
                                                type="text"
                                                focused
                                                name="confirmPassword"
                                                value={values.confirmPassword}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.confirmPassword && !!errors.confirmPassword}
                                                helperText={touched.confirmPassword && errors.confirmPassword}
                                                placeholder='Re-type Password'
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Box sx={{ marginLeft: '6px' }}>
                                    <Typography sx={{ textAlign: 'center', fontSize: "1.6rem", fontWeight: "100", marginTop: '25px' }}>Choose a Plan</Typography>
                                    <Grid container spacing={3}>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginTop: '5px'
                                        }}>
                                            <Card sx={{ margin: '10px 26px', height: 'auto', width: '220px', boxShadow: '3', borderRadius: '10px' }}>
                                                <Typography sx={{
                                                    textAlign: 'center', fontSize: "1.4rem", fontWeight: "600", margin: '20px 0px 0px', fontFamily: 'Montserrat',

                                                }}>Basic
                                                </Typography>
                                                <Typography sx={{
                                                    margin: '5px 20px', fontFamily: "Roboto Condensed",
                                                    textAlign: 'center', fontSize: '14px',
                                                    fontWeight: '400', alignSelf: 'flex-start'
                                                }}>
                                                    Starter plan ideal for single provider practices
                                                </Typography>
                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15px' }}>
                                                    <Typography sx={{
                                                        fontSize: '12px',
                                                        fontWeight: '400',
                                                        fontFamily: "Roboto Condensed"
                                                    }}>$</Typography>
                                                    <Typography sx={{
                                                        fontFamily: 'Montserrat',
                                                        fontSize: '28px',
                                                        fontWeight: '500',
                                                    }}>250</Typography>
                                                    <Typography sx={{
                                                        fontSize: '12px',
                                                        fontWeight: '400',
                                                        fontFamily: "Roboto Condensed"
                                                    }}>/Mo</Typography>
                                                </Box>

                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px', marginTop: '8px' }}>
                                                    <Typography sx={{
                                                        fontSize: '12px',
                                                        fontWeight: '400',
                                                        fontFamily: "Roboto Condensed"
                                                    }}>+</Typography>
                                                    <Typography sx={{
                                                        fontFamily: 'Montserrat',
                                                        fontSize: '14px',
                                                        fontWeight: '500',
                                                    }}>$35</Typography>
                                                    <Typography sx={{
                                                        fontSize: '12px',
                                                        fontWeight: '400',
                                                        fontFamily: "Roboto Condensed"
                                                    }}>/Care Plan</Typography>
                                                </Box>
                                                <Divider sx={{
                                                    ml: -2,
                                                    minWidth: 500,
                                                    borderBottomWidth: "3px",
                                                    minHeight: "3px",
                                                    borderImageSlice: 1,
                                                    borderImageSource:
                                                        "linear-gradient(to left, rgba(126, 217, 87, 1) 50%, rgba(8, 181, 172, 1) 100%)",
                                                    display: "inline-block",
                                                }} />
                                                <CardContent>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '3px' }}>
                                                        <Box sx={{ height: '30px' }} component="img" alt="check"
                                                            src={Checkmark}>
                                                        </Box>
                                                        <Typography sx={{
                                                            fontFamily: "Roboto Condensed",
                                                            fontSize: '14px',
                                                            fontWeight: '400',
                                                        }}>Unlimited Care Plans</Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '3px' }}>
                                                        <Box sx={{ height: '30px' }} component="img" alt="check"
                                                            src={Checkmark}>
                                                        </Box>
                                                        <Typography sx={{
                                                            fontFamily: "Roboto Condensed",
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }}>2 Licenses</Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '3px' }}>
                                                        <Box sx={{ height: '12px', marginLeft: '7px', marginRight: '8px' }} component="img" alt="check"
                                                            src={cross}>
                                                        </Box>
                                                        <Typography sx={{
                                                            color: 'rgb(219, 219, 219)',
                                                            fontFamily: "Roboto Condensed",
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }}>Consult Support</Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                                                        <Box sx={{ height: '12px', marginLeft: '7px', marginRight: '8px' }} component="img" alt="check"
                                                            src={cross}>
                                                        </Box>
                                                        <Typography sx={{
                                                            color: 'rgb(219, 219, 219)',
                                                            fontFamily: "Roboto Condensed",
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }}>Care Plan +</Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                                                        <Box sx={{ height: '12px', marginLeft: '7px', marginRight: '8px' }} component="img" alt="check"
                                                            src={cross}>
                                                        </Box>
                                                        <Typography sx={{
                                                            color: 'rgb(219, 219, 219)',
                                                            fontFamily: "Roboto Condensed",
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }}>Customized Templates</Typography>

                                                    </Box>

                                                    <Button
                                                        fullWidth
                                                        variant="contained"
                                                        sx={{
                                                            marginTop: '16px',
                                                            py: "0.65rem",
                                                            textTransform: "none",
                                                            borderRadius: "0.4rem",
                                                            fontSize: "1rem",
                                                            backgroundColor: 'rgb(230, 230, 230)',
                                                            color: 'rgb(255 255 255)',
                                                            height: '6vh',
                                                            boxShadow: "0px 2px 8px 0px rgba(35,37,49, 0.3)",
                                                            ":hover": {
                                                                backgroundColor: "rgba(230, 230, 230, 1)",
                                                                backgroundImage:
                                                                    "linear-gradient( to left, rgba(126, 217, 87, 1) 0%,rgba(8, 181, 172, 1) 100%)",
                                                            },
                                                            fontFamily: 'Montserrat',
                                                        }}
                                                    >
                                                        Continue
                                                    </Button>
                                                </CardContent>
                                            </Card>

                                            <Card sx={{ marginTop: '17px', marginBottom: '20px', marginRight: '26px', height: 'auto', width: '220px', boxShadow: '3', borderRadius: '10px' }}>
                                                <Typography sx={{
                                                    textAlign: 'center', fontSize: "1.4rem", fontWeight: "600", margin: '20px 0px 0px', fontfamily: 'Montserrat',
                                                    fontsize: '22px'
                                                }}>Premium
                                                </Typography>
                                                <Typography sx={{
                                                    margin: '10px 20px', fontFamily: "Roboto Condensed",
                                                    textAlign: 'center', fontSize: '14px',
                                                    fontWeight: '400', alignself: 'flex-start'
                                                }}>
                                                    Upgraded plan ideal for multi-provider practices
                                                </Typography>
                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Typography sx={{
                                                        fontSize: '12px',
                                                        fontWeight: '400',
                                                        fontFamily: "Roboto Condensed"
                                                    }}>$</Typography>
                                                    <Typography sx={{
                                                        fontFamily: 'Montserrat',
                                                        fontSize: '28px',
                                                        fontWeight: '500',
                                                    }}>1,250</Typography>
                                                    <Typography sx={{
                                                        fontSize: '12px',
                                                        fontWeight: '400',
                                                        fontFamily: "Roboto Condensed"
                                                    }}>/Mo</Typography>
                                                </Box>

                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px', marginTop: '10px' }}>
                                                    <Typography sx={{
                                                        fontSize: '12px',
                                                        fontWeight: '400',
                                                        fontFamily: "Roboto Condensed"
                                                    }}>+</Typography>
                                                    <Typography sx={{
                                                        fontFamily: 'Montserrat',
                                                        fontSize: '14px',
                                                        fontWeight: '500',
                                                    }}>$20</Typography>
                                                    <Typography sx={{
                                                        fontSize: '12px',
                                                        fontWeight: '400',
                                                        fontFamily: "Roboto Condensed"
                                                    }}>/Care Plan</Typography>
                                                </Box>
                                                <Divider sx={{
                                                    ml: -2,
                                                    minWidth: 500,
                                                    borderBottomWidth: "3px",
                                                    minHeight: "3px",
                                                    borderImageSlice: 1,
                                                    borderImageSource:
                                                        "linear-gradient(to left, rgba(126, 217, 87, 1) 50%, rgba(8, 181, 172, 1) 100%)",
                                                    display: "inline-block",
                                                }} />
                                                <CardContent>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Box sx={{ height: '30px' }} component="img" alt="check"
                                                            src={Checkmark}>
                                                        </Box>
                                                        <Typography sx={{
                                                            fontFamily: "Roboto Condensed",
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }}>Unlimited Care Plans</Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Box sx={{ height: '30px' }} component="img" alt="check"
                                                            src={Checkmark}>
                                                        </Box>
                                                        <Typography sx={{
                                                            fontFamily: "Roboto Condensed",
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }}>10 Licenses</Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Box sx={{ height: '30px' }} component="img" alt="check"
                                                            src={Checkmark}>
                                                        </Box>
                                                        <Typography sx={{
                                                            // color: 'rgb(219, 219, 219)',
                                                            fontFamily: "Roboto Condensed",
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }}>Consult Support</Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Box sx={{ height: '30px' }} component="img" alt="check"
                                                            src={Checkmark}>
                                                        </Box>
                                                        <Typography sx={{
                                                            // color: 'rgb(219, 219, 219)',
                                                            fontFamily: "Roboto Condensed",
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }}>Care Plan +</Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Box sx={{ height: '12px', marginLeft: '7px', marginRight: '8px' }} component="img" alt="check"
                                                            src={cross}>
                                                        </Box>
                                                        <Typography sx={{
                                                            color: 'rgb(219, 219, 219)',
                                                            fontFamily: "Roboto Condensed",
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }}>Customized Templates</Typography>

                                                    </Box>

                                                    <Button
                                                        fullWidth
                                                        variant="contained"
                                                        sx={{
                                                            marginTop: '14px',
                                                            py: "0.65rem",
                                                            textTransform: "none",
                                                            borderRadius: "0.4rem",
                                                            fontSize: "1rem",
                                                            backgroundColor: 'rgb(230, 230, 230)',
                                                            color: 'rgb(255 255 255)',
                                                            height: '6vh',
                                                            boxShadow: "0px 2px 8px 0px rgba(35,37,49, 0.3)",
                                                            ":hover": {
                                                                backgroundColor: "rgba(230, 230, 230, 1)",
                                                                backgroundImage:
                                                                    "linear-gradient( to left, rgba(126, 217, 87, 1) 0%,rgba(8, 181, 172, 1) 100%)",
                                                            },
                                                            fontFamily: 'Montserrat',
                                                        }}
                                                    // className="auth-button-backgroud-color"
                                                    // onClick={formik.handleSubmit}
                                                    > Continue </Button>
                                                </CardContent>
                                            </Card>

                                            <Card sx={{ marginTop: '10px', marginBottom: '20px', marginRight: '30px', height: 'auto', width: '220px', boxShadow: '3', borderRadius: '10px' }}>
                                                <Typography sx={{
                                                    textAlign: 'center', fontSize: "1.4rem", fontWeight: "600", margin: '20px 0px 0px', fontfamily: 'Montserrat',
                                                    fontsize: '22px'
                                                }}>Elite
                                                </Typography>
                                                <Typography sx={{
                                                    margin: '15px 20px', fontFamily: "Roboto Condensed",
                                                    textAlign: 'center', fontSize: '14px',
                                                    fontWeight: '400', alignself: 'flex-start'
                                                }}>
                                                    Starter plan ideal for single provider practices
                                                </Typography>
                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', lineHeight: '1' }}>
                                                    <Typography sx={{
                                                        fontSize: '24px',
                                                        fontWeight: '500',
                                                        fontFamily: "Montserrat",
                                                        marginBottom: '28px',
                                                        marginTop: '15px'
                                                    }}>Call for Pricing</Typography>

                                                </Box>


                                                <Divider sx={{
                                                    ml: -2,
                                                    minWidth: 500,
                                                    borderBottomWidth: "3px",
                                                    minHeight: "3px",
                                                    borderImageSlice: 1,
                                                    borderImageSource:
                                                        "linear-gradient(to left, rgba(126, 217, 87, 1) 50%, rgba(8, 181, 172, 1) 100%)",
                                                    display: "inline-block",
                                                }} />
                                                <CardContent>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '0px' }}>
                                                        <Box sx={{ height: '30px' }} component="img" alt="check"
                                                            src={Checkmark}>
                                                        </Box>
                                                        <Typography sx={{
                                                            fontFamily: "Roboto Condensed",
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }}>Unlimited Care Plans</Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '0px' }}>
                                                        <Box sx={{ height: '30px' }} component="img" alt="check"
                                                            src={Checkmark}>
                                                        </Box>
                                                        <Typography sx={{
                                                            fontFamily: "Roboto Condensed",
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }}>2 Licenses</Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '0px' }}>
                                                        <Box sx={{ height: '30px' }} component="img" alt="check"
                                                            src={Checkmark}>
                                                        </Box>
                                                        <Typography sx={{
                                                            // color: 'rgb(219, 219, 219)',
                                                            fontFamily: "Roboto Condensed",
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }}>Consult Support</Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '0px' }}>
                                                        <Box sx={{ height: '30px' }} component="img" alt="check"
                                                            src={Checkmark}>
                                                        </Box>
                                                        <Typography sx={{
                                                            // color: 'rgb(219, 219, 219)',
                                                            fontFamily: "Roboto Condensed",
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }}>Care Plan Plus</Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '0px' }}>
                                                        <Box sx={{ height: '30px' }} component="img" alt="check"
                                                            src={Checkmark}>
                                                        </Box>
                                                        <Typography sx={{
                                                            // color: 'rgb(219, 219, 219)',
                                                            fontFamily: "Roboto Condensed",
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }}>Customized Templates</Typography>

                                                    </Box>

                                                    <Button
                                                        fullWidth
                                                        variant="contained"
                                                        sx={{
                                                            marginTop: '6px',
                                                            py: "0.65rem",
                                                            textTransform: "none",
                                                            borderRadius: "0.4rem",
                                                            fontSize: "1rem",
                                                            backgroundColor: 'rgb(230, 230, 230)',
                                                            color: 'rgb(255 255 255)',
                                                            height: '6vh',
                                                            boxShadow: "0px 2px 8px 0px rgba(35,37,49, 0.3)",
                                                            ":hover": {
                                                                backgroundColor: "rgba(230, 230, 230, 1)",
                                                                backgroundImage:
                                                                    "linear-gradient( to left, rgba(126, 217, 87, 1) 0%,rgba(8, 181, 172, 1) 100%)",
                                                            },
                                                            fontFamily: 'Montserrat',
                                                        }}
                                                    // className="auth-button-backgroud-color"
                                                    // onClick={formik.handleSubmit}
                                                    > Continue </Button>
                                                </CardContent>


                                            </Card>
                                        </Box>
                                    </Grid>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        type='submit'
                                        sx={{
                                            width: '40vh',
                                            marginTop: '6px',
                                            py: "0.65rem",
                                            textTransform: "none",
                                            borderRadius: "0.4rem",
                                            fontSize: "1rem",
                                            backgroundColor: 'rgb(230, 230, 230)',
                                            color: 'rgb(255 255 255)',
                                            height: '6vh',
                                            boxShadow: "0px 2px 8px 0px rgba(35,37,49, 0.3)",
                                            ":hover": {
                                                backgroundColor: "rgba(230, 230, 230, 1)",
                                                backgroundImage:
                                                    "linear-gradient( to left, rgba(126, 217, 87, 1) 0%,rgba(8, 181, 172, 1) 100%)",
                                            },
                                            fontFamily: 'Montserrat',
                                        }}
                                    // className="auth-button-backgroud-color"
                                    // onClick={formik.handleSubmit}
                                    > Continue </Button>
                                </Box>
                            </Form>
                        )}

                    </Formik>

                </Card >


            </Box >
        </>

    )
}

export default Register