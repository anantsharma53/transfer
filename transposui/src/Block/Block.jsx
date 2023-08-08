import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navbar from "../NavBar/Navbar";
import Footer from '../Footer/Footer';
import HeaderButton from "../HeaderButton/HeaderButton";
function Block() {
    const token = localStorage.getItem('token')
    const [user, setUser] = useState({});
    const [flashMessage, setFlashMessage] = useState(null);
    const navigate = useNavigate();
    function removeFlashMessage() {
        setFlashMessage(null);
      }
    function handleSubmit() {
        console.log(user);
        fetch("http://127.0.0.1:8000/api/employee/block/", {
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
                    setFlashMessage("Registration successful!");
                    setTimeout(removeFlashMessage, 1000);

                } else if (res.status === 401) {
                    setFlashMessage("Check Office Name May be already exists!");
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
            <HeaderButton/>
            <Formik
                initialValues={{
                    block_Name:'',
                }}
                validationSchema={Yup.object().shape({
                    block_Name: Yup.string().required('Post is required'),
                })}
                // onSubmit={fields => {
                //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                // }}
                render={({ errors, status, touched }) => (
                    <section class=" container mt-5 ">
                        {flashMessage && (
                        <div className="flash-message container">
                          {flashMessage}
                        </div>
                      )}
                        <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">District Block Name</h3>
                        <Form id="employee-form" className="container">
                            <div className="form-group">
                                <label htmlFor="block_Name">Block Name</label>
                                <Field name="block_Name" type="text" onInput={(e) => {
                                    user.block_Name = e.target.value; 
                                    setUser(user);
                                }} className={'form-control' + (errors.block_Name && touched.block_Name ? ' is-invalid' : '')} />
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

export default Block;