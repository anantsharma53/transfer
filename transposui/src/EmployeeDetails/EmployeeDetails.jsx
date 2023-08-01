import { useState } from "react";
import "./EmployeeDetails.css";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navbar from "../NavBar/Navbar";
import Footer from '../Footer/Footer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function EmployeeDetails() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    function handleSubmit() {
        console.log(user);
        fetch("http://127.0.0.1:8000/api/employee/", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },

        })
            .then((res) => {
                console.log(res);
                if (res.status === 201) {
                    setUser({});
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

    return (
        <div>
            <Navbar></Navbar>
            <Formik
                initialValues={{
                    Employee_Name: '',
                    Date_of_Birth: '',
                    Home_Block: '',
                    Current_Posting_Block: '',
                    Current_Posting_Year: '',
                    First_Previous_Block: ''
                }}
                validationSchema={Yup.object().shape({
                    Employee_Name: Yup.string().required('Name is required'),
                    Date_of_Birth: Yup.string().required('DOB is required'),
                    Home_Block: Yup.string().required('Password is required'),
                    Current_Posting_Block: Yup.string().required(' required'),
                    Current_Posting_Year: Yup.string().required('required'),
                    First_Previous_Block: Yup.number().required('required'),
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
                render={({ errors, status, touched }) => (
                    <section class=" container mt-5 ">
                        <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Employee Information</h3>
                        <Form className="container">
                            <div className="form-group">
                                <label htmlFor="Employee_Name">Name</label>
                                <Field name="Employee_Name" type="text" onInput={(e) => {
                                    user.Employee_Name = e.target.value; //setUser(user);
                                }} className={'form-control' + (errors.Employee_Name && touched.Employee_Name ? ' is-invalid' : '')} />
                                {/* <div><ErrorMessage name="Employee_Name" component="div" className="invalid-feedback" /></div> */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="Date_of_Birth">Date of Birth</label>
                                <Field
                                    name="Date_of_Birth"
                                    type="date"
                                    className="form-control"
                                    id="date"
                                    value={user.Date_of_Birth}
                                    onInput={(e) => {
                                        user.Date_of_Birth = e.target.value;
                                        setUser(user);}}                                    
                                ></Field>                                
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="Date_of_Birth" >Date of Birth</label>
                                <Field name="Date_of_Birth" type="text" onInput={(e) => {
                                    user.Date_of_Birth = e.target.value;
                                    setUser(user);
                                }} className={'form-control' + (errors.Date_of_Birth && touched.Date_of_Birth ? ' is-invalid' : '')} />
                                {/* <ErrorMessage name="Date_of_Birth" component="div" className="invalid-feedback" /> 
                                </div> */}
                            <div className="form-group">
                                <label htmlFor="Home_Block">Home_Block</label>
                                <Field name="Home_Block" type="text" onInput={(e) => {
                                    user.Home_Block = e.target.value;
                                    setUser(user);
                                }} className={'form-control' + (errors.Home_Block && touched.Home_Block ? ' is-invalid' : '')} />
                                {/* <ErrorMessage name="Home_Block" component="div" className="invalid-feedback" /> */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Current_Posting_Block</label>
                                <Field name="Current_Posting_Block" onInput={(e) => {
                                    user.Current_Posting_Block = e.target.value;
                                    setUser(user);
                                }} className={'form-control' + (errors.Current_Posting_Block && touched.Current_Posting_Block ? ' is-invalid' : '')} />
                                {/* <ErrorMessage name="Current_Posting_Block" component="div" className="invalid-feedback" /> */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="Current_Posting_Year">Current_Posting_Year</label>
                                <Field name="Current_Posting_Year"
                                    onInput={(e) => {
                                        user.Current_Posting_Year = e.target.value;
                                        setUser(user);
                                    }}
                                    className={'form-control' + (errors.Current_Posting_Year && touched.Current_Posting_Year ? ' is-invalid' : '')} />
                                {/* <ErrorMessage name="Current_Posting_Year" component="div" className="invalid-feedback" /> */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="First_Previous_Block">First_Previous_Block</label>
                                <Field name="First_Previous_Block" onInput={(e) => {
                                    user.First_Previous_Block = e.target.value;
                                    setUser(user);
                                }} className={'form-control' + (errors.First_Previous_Block && touched.First_Previous_Block ? ' is-invalid' : '')} />
                                {/* <ErrorMessage name="First_Previous_Block" component="div" className="invalid-feedback" /> */}
                            </div>
                            <div className="form-group">
                                {
                                    user ? (<button type="submit" className="btn btn-primary mr-2" onClick={handleSubmit}>Submit</button>)
                                        : (
                                            <button type="submit" className="btn btn-primary mr-2" disabled>Submit</button>
                                        )}

                                <button type="reset" className="btn btn-secondary">Reset</button>
                            </div>
                        </Form>
                    </section>
                )}
            />
            <Footer></Footer>
        </div>
    );
}

export default EmployeeDetails;