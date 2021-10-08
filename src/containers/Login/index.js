import React from 'react';
import { Formik } from 'formik';
import { MyInputs, BasicButtons } from '../../components';
import LoginIcon from '@mui/icons-material/Login';
import "./css/style.css"

const Login = () => (
    <div className="loginPage">
        <div className="myHeading">
            <h1>Login</h1>
            <LoginIcon className="myIcon" />
        </div>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >

            {({
                values,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <div className="inputs mt-10">
                        <MyInputs
                            type="email"
                            error={errors.email}
                            label="Email"
                            name="email"
                            placeholder="Enter Email Address"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            fullWidth="true"
                        />
                    </div>
                    <div className="inputs mt-10">
                        <MyInputs
                            type="password"
                            fullWidth="true"
                            error={errors.password}
                            name="password"
                            placeholder="Enter Password"
                            label="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                    </div>
                    <div className="inputs mt-10">
                        <BasicButtons variant="contained" label="Login" type="submit" disabled={isSubmitting} fullWidth="true" />
                    </div>
                    <div className="inputs mt-10">
                        <BasicButtons variant="outlined" label="Register Now" type="submit" disabled={isSubmitting} />
                    </div>
                </form>
            )}
        </Formik>
    </div>
);

export default Login;