import { useState, useEffect } from "react";
import "./EmployeeDetails.css";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navbar from "../NavBar/Navbar";
import Footer from '../Footer/Footer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import HeaderButton from "../HeaderButton/HeaderButton";
// import { useHistory } from "react-router-dom";
function EmployeeDetails() {
    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    // const history = useHistory();
    const [user, setUser] = useState({});
    const [post, setPost] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [homeBlock, setHomeBlock] = useState([]);

    const [searchQuery1, setSearchQuery1] = useState('');    
    const [suggestions1, setSuggestions1] = useState([]);
    
    const [searchQuery2, setSearchQuery2] = useState('');
    const [suggestions2, setSuggestions2] = useState([]);
    const [flashMessage, setFlashMessage] = useState(null);
    
    function removeFlashMessage() {
        setFlashMessage(null);
      }
    useEffect(() => {
        if (searchQuery.trim() !== '') {
            // Replace with your API endpoint URL
            const apiUrl = `http://127.0.0.1:8000/api/block/`;

            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ search_query: searchQuery }),
            })
                .then(response => response.json())
                .then(data => {
                    setHomeBlock(data);
                    
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else {
            setHomeBlock([]);
            
        }
    }, [searchQuery]);

    useEffect(() => {
        if (searchQuery1.trim() !== '') {
            // Replace with your API endpoint URL
            const apiUrl = `http://127.0.0.1:8000/api/office/`;

            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ search_query: searchQuery1 }),
            })
                .then(response => response.json())
                .then(data => {
                    setSuggestions1(data);
                    
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else {
            setSuggestions1([]);
            
        }
    }, [searchQuery1]);
    useEffect(() => {
        if (searchQuery2.trim() !== '') {
            // Replace with your API endpoint URL
            const apiUrl = `http://127.0.0.1:8000/api/office/`;

            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ search_query: searchQuery2 }),
            })
                .then(response => response.json())
                .then(data => {
                    setSuggestions2(data);
                    
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else {
            setSuggestions2([]);
            
        }
    }, [searchQuery2]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else if (response.status !== 200) {
                // Token expired, perform the redirect here
                window.location.href = "/login";
            } else {
                throw new Error("Network response was not ok");
            }
        })
        .then((data) => setPost(data))
        .catch((error) => console.log(error));
    }, []);

    // useEffect(() => {
    //     // Fetch the options from the API here
    //     fetch("http://127.0.0.1:8000/api/posts/",
    //         {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": `Bearer ${token}`,
    //             },

    //         }
    //     )
    //         .then((response) => response.json())
    //         .then((data) => setPost(data))
    //         .catch((error) => console.log(error));
    // }, []);
    

   

    function handleSubmit() {
        console.log(user);
        fetch("http://127.0.0.1:8000/api/employee/emp/", {
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
                    setUser(prevState => ({ ...prevState, Date_of_Birth: '' }));
                    setFlashMessage("Registration successful!");
                    setTimeout(removeFlashMessage, 1000);
                    setHomeBlock([]);
                    setSuggestions1([]);
                    setSuggestions2([]);
                    
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
            <HeaderButton/>
            <Formik
                initialValues={{
                    Employee_Name: '',
                    Date_of_Birth: '',
                    Home_Block: '',
                    Current_Posting_Block: '',
                    Current_Posting_Year: '',
                    First_Previous_Block: '',
                    Post: ''
                }}
                validationSchema={Yup.object().shape({
                    Employee_Name: Yup.string().required('Name is required'),
                    Date_of_Birth: Yup.string().required('DOB is required'),
                    Home_Block: Yup.string().required('Password is required'),
                    Current_Posting_Block: Yup.string().required(' required'),
                    Current_Posting_Year: Yup.string().required('required'),
                    First_Previous_Block: Yup.string().required('required'),
                })}
                // onSubmit={fields => {
                //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                // }}
                render={({ errors, status, touched, values, setFieldValue }) => (
                    <section class=" container mt-5 ">
                        <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Add Employee Information</h3>
                        {flashMessage && (
                        <div className="flash-message container">
                          {flashMessage}
                        </div>
                      )}
                        <Form id="employee-form" className="container">
                            <div className="form-group">
                                <label htmlFor="Employee_Name">Name</label>
                                <Field name="Employee_Name" type="text" onInput={(e) => {
                                    user.Employee_Name = e.target.value; //setUser(user);
                                }} className={'form-control' + (errors.Employee_Name && touched.Employee_Name ? ' is-invalid' : '')} />
                                {/* <div><ErrorMessage name="Employee_Name" component="div" className="invalid-feedback" /></div> */}
                            </div>
                            <div className="form-group">
                            <label htmlFor="Date_of_Birth">Designations</label>
                                <Field as="select" name="Post" className="form-control"
                                    onInput={(e) => {
                                        user.Post = e.target.value; //setUser(user);
                                    }}
                                >
                                    <option value="">Select Designations</option>
                                    {post.map((post) => (
                                        <option key={post.Post} value={post.Post}>
                                            {post.Post}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage name="Post" component="div" className="invalid-feedback" />
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
                                        setUser(user);
                                    }}
                                ></Field>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Home_Block">Home Block</label>
                                <Field
                                    type="text"
                                    name="Home_Block"
                                    placeholder="Home_Block..."
                                    className="form-control"
                                    value={values.Home_Block}
                                    onChange={e => {
                                        const inputValue = e.target.value;
                                        setSearchQuery(inputValue);
                                        // setUser(prevuser => ({ ...prevuser, Home_Block: inputValue }));
                                        setFieldValue('Home_Block', inputValue);  // Set Formik field value
                                    }}
                                    onBlur={() => {
                                        if (!homeBlock.some(office => office.block_Name === values.Home_Block)) {
                                            setFieldValue('Home_Block', ''); 
                                            setUser(prevuser => ({ ...prevuser, Home_Block: '' }));
                                             // Reset value if not a valid suggestion
                                        }
                                    }}
                                />
                                <div>
                                    {homeBlock.map((office, index) => (
                                        <option
                                            key={index}
                                            value={user.Home_Block}
                                            onClick={() => {
                                                setFieldValue('Home_Block', office.block_Name);  // Set Formik field value
                                                setUser(prevuser => ({ ...prevuser, Home_Block: office.block_Name }));
                                                setHomeBlock([]);  // Clear suggestions after selecting
                                            }}
                                        >
                                            {office.block_Name}
                                        </option>
                                    ))}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Current_Posting_Block">Current Posting Office Name with Block</label>
                                <Field                                    
                                    type="text"
                                    name="Current_Posting_Block"
                                    placeholder="Current_Posting_Block..."
                                    className="form-control"
                                    value={values.Current_Posting_Block}
                                    onChange={e => {
                                        const inputValue = e.target.value;
                                        setSearchQuery1(inputValue);
                                        // setUser(prevuser => ({ ...prevuser, Current_Posting_Block: inputValue }));
                                        setFieldValue('Current_Posting_Block', inputValue);  // Set Formik field value
                                    }}
                                    onBlur={() => {
                                        if (!suggestions1.some(office => office.Office_name === values.Current_Posting_Block)) {
                                            setFieldValue('Current_Posting_Block', ''); 
                                            setUser(prevuser => ({ ...prevuser, Current_Posting_Block: '' }));
                                             // Reset value if not a valid suggestion
                                        }
                                    }}
                                />
                                <div >
                                    {suggestions1.map((office, index) => (
                                        <option 
                                        key={index}
                                            value={user.Current_Posting_Block}
                                            onClick={() => {
                                                setFieldValue('Current_Posting_Block', office.Office_name);  // Set Formik field value
                                                setUser(prevuser => ({ ...prevuser, Current_Posting_Block: office.Office_name }));
                                                setSuggestions1([]);  // Clear suggestions after selecting
                                            }}
                                        >
                                        {office.Office_name}
                                    </option>
                                        
                                    ))}
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="Current_Posting_Year">Current Posting Year</label>
                                <Field name="Current_Posting_Year"
                                    onInput={(e) => {
                                        user.Current_Posting_Year = e.target.value;
                                        setUser(user);
                                    }}
                                    className={'form-control' + (errors.Current_Posting_Year && touched.Current_Posting_Year ? ' is-invalid' : '')} />
                                {/* <ErrorMessage name="Current_Posting_Year" component="div" className="invalid-feedback" /> */}
                            </div>
                            
                           
                            <div className="form-group">
                                <label htmlFor="First_Previous_Block">First Previous Posting Office with Block</label>
                                <Field
                                    type="text"
                                    name="First_Previous_Block"
                                    placeholder="First_Previous_Block..."
                                    className="form-control"
                                    value={values.First_Previous_Block}
                                    onChange={e => {
                                        const inputValue = e.target.value;
                                        setSearchQuery2(inputValue);
                                        // setUser(prevuser => ({ ...prevuser, First_Previous_Block: inputValue }));
                                        setFieldValue('First_Previous_Block', inputValue);  // Set Formik field value
                                    }}
                                    onBlur={() => {
                                        if (!suggestions2.some(office => office.Office_name === values.First_Previous_Block)) {
                                            setFieldValue('First_Previous_Block', ''); 
                                            setUser(prevuser => ({ ...prevuser, First_Previous_Block: '' }));
                                             // Reset value if not a valid suggestion
                                        }
                                    }}
                                />
                                <div>
                                    {suggestions2.map((office, index) => (
                                        <option
                                            key={index}
                                            value={user.First_Previous_Block}
                                            onClick={() => {
                                                setFieldValue('First_Previous_Block', office.Office_name);  // Set Formik field value
                                                setUser(prevuser => ({ ...prevuser, First_Previous_Block: office.Office_name }));
                                                setSuggestions2([]);  // Clear suggestions after selecting
                                            }}
                                        >
                                            {office.Office_name}
                                        </option>
                                    ))}
                                </div>
                            </div>
                            <div className="form-group">
                                {
                                    user ? (<button type="submit" className="btn btn-primary mr-2" onClick={handleSubmit}>Submit</button>)
                                        : (
                                            <button type="submit" className="btn btn-primary mr-2" disabled>Submit</button>
                                        )}

                                <button type="reset" className="btn btn-secondary" onClick={Reset}>Reset</button>
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


