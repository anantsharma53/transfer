import { useState } from "react";
import "./SignUpForm.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navbar from "../NavBar/Navbar";
import Footer from '../Footer/Footer';
import HeaderButton from "../HeaderButton/HeaderButton";

function Register() {
  const token = localStorage.getItem('token')
  const [user, setUser] = useState({});
  const [flashMessage, setFlashMessage] = useState(null);
  const navigate = useNavigate();
  function removeFlashMessage() {
    setFlashMessage(null);
  }
  function handleSubmit() {
    console.log(user);
    fetch("http://127.0.0.1:8000/api/employee/user/signup/", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,

      },

    })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          document.getElementById("employee-form").reset();
          setFlashMessage("Registration successful!");
          setTimeout(removeFlashMessage, 1000);
        } else if (res.status === 401) {
          console.log("Unauthorized request");
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(user);
  }
  function Reset() {
    document.getElementById("employee-form").reset();
    setUser(prevState => ({ ...prevState, Date_of_Birth: '' }));

  }
  return (
    <div>
      <Navbar></Navbar>
      <HeaderButton />

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          mobile_number: '',
          username: ''
        }}
        validationSchema={Yup.object().shape({
          Name: Yup.string().required('First Name is required'),
          email: Yup.string().email('Email is invalid').required('Email is required'),
          password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
          confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
          username: Yup.string().min(6, 'Username must be at least 6 characters').required('username is required'),
          mobile_number: Yup.number().required('Mobile Number is required'),
        })}
        onSubmit={fields => {
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
        }}
        render={({ errors, status, touched }) => (
          <section class="vh-50 ">
            <div class="container py-3 h-80">
              <div class="row justify-content-center align-items-center h-100">
                <div class="col-12 col-lg-9 col-xl-7">
                  <div class="card shadow-2-strong card-registration" style={{ borderradius: '10px' }}>
                    <div class="card-body p-8 p-md-5">
                      <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">User Registration Form</h3>
                      {flashMessage && (
                        <div className="flash-message container">
                          {flashMessage}
                        </div>
                      )}
                      <Form id="employee-form">
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <Field name="name" type="text" onInput={(e) => {
                            user.name = e.target.value; //setUser(user);
                          }} className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                          <ErrorMessage name="name" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email" >Email</label>
                          <Field name="email" type="text" onInput={(e) => {
                            user.email = e.target.value;
                            setUser(user);
                          }} className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                          <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="username">Username</label>
                          <Field name="Username" type="text" onInput={(e) => {
                            user.username = e.target.value;
                            setUser(user);
                          }} className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                          <ErrorMessage name="username" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="username">Mobile Number</label>
                          <Field name="mobile_number" type="number" onInput={(e) => {
                            user.mobile_number = e.target.value;
                            setUser(user);
                          }} className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                          <ErrorMessage name="username" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                          <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="confirmPassword">Confirm Password</label>
                          <Field name="confirmPassword" type="password" onInput={(e) => {
                            user.password = e.target.value;
                            setUser(user);
                          }} className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                          <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                          {
                            user ? (<Link type="submit" className="btn btn-primary mr-2" onClick={handleSubmit}>Register</Link>)
                              : (
                                <Link className="btn btn-outline-success my-2 my-sm-0" to="/login">
                                  Login
                                </Link>)}

                          <button type="reset" className="btn btn-secondary" onClick={Reset}>Reset</button>
                        </div>
                      </Form>
                      {/* <p class="text-center text-muted ">Have already an account? <a href="#!"class="fw-bold text-body">
                          <Link to="/Login">Login here</Link></a></p> */}
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      />
      <Footer></Footer>
    </div>
  );
}

export default Register;