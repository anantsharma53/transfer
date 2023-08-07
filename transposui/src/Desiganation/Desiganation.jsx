import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navbar from "../NavBar/Navbar";
import Footer from '../Footer/Footer';
function EmployeeDesi() {
    const token = localStorage.getItem('token')
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    function handleSubmit() {
        console.log(user);
        fetch("http://127.0.0.1:8000/api/employee/desi/", {
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
                    setUser({});
                    document.getElementById("employee-form").reset();
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
function Reset(){
    document.getElementById("employee-form").reset();
}

    return (
        <div>
            <Navbar></Navbar>
            <Formik
                initialValues={{
                    Post:'',
                }}
                validationSchema={Yup.object().shape({
                    Post: Yup.string().required('Post is required'),
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
                render={({ errors, status, touched }) => (
                    <section class=" container mt-5 ">
                        <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Employee Post</h3>
                        <Form id="employee-form" className="container">
                            <div className="form-group">
                                <label htmlFor="Post">Post</label>
                                <Field name="Post" type="text" onInput={(e) => {
                                    user.Post = e.target.value; 
                                    setUser(user);
                                }} className={'form-control' + (errors.Post && touched.Post ? ' is-invalid' : '')} />
                            </div>
                            <div className="form-group">
                                {
                                    user ? (<button type="submit" className="btn btn-primary mr-2" onClick={handleSubmit}>Submit</button>)
                                        : (
                                            <button type="submit" className="btn btn-primary mr-2" disabled>Submit</button>
                                        )}

                                <button type="reset" className="btn btn-secondary"onClick={Reset}>Reset</button>
                            </div>
                        </Form>
                    </section>
                )}
            />
            <Footer></Footer>
        </div>
    );
}

export default EmployeeDesi;