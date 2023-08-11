import React from "react";
import { useState, useEffect } from 'react';
import './ActionPage.css'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Header from '../Header/Header';
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import HeaderButton from "../HeaderButton/HeaderButton";
import Loader from "../Loader/Loader";
function ActionPage() {
    const [post, setPost] = useState();
    const [employee, setEmployee] = useState();
    const [newemployee, setNewemployee] = useState();
    const [error, setError] = useState();

    const [Sl, setSL] = useState();
    const [postoption, setPostoption] = useState([]);

    const token = localStorage.getItem('token') 
    // useEffect(() => {
    //     // Fetch the options from the API here
    //     fetch("http://127.0.0.1:8000/api/posts/",
    //     {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `Bearer ${token}`,
    //         },

    //     }
    //     )
    //         .then((response) => response.json())
    //         .then((data) => setPostoption(data))
    //         .catch((error) => console.log(error));
    // }, []);
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
        .then((data) => setPostoption(data))
        .catch((error) => console.log(error));
    }, []);

    function OnHandelSubmit(props) {
        // console.log(props)

        fetch("http://127.0.0.1:8000/api/employee/search/?query=" + props,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },

        }
        )
            .then((res) => res.json())
            .then((jsonResponse) => {
                setEmployee(jsonResponse);
                // console.log(employee)  
                setError();
            })
            .catch((err) => {
                console.log(err);
                setError(err);
            })

    }
    

    return (
        <>
            <Navbar></Navbar>
            <HeaderButton/>
            
            <div className='postSelection'>
                <div>
                    <label for="pet-select">Select Post:
                    </label>
                </div>
                <div>
                <select id="select_box" value={postoption.Post} onChange={e => setPost(e.target.value)}>
                                    <option value={postoption.Post}
                                    >Select Designations</option>
                                    {postoption.map((postoption) => (
                                        <option key={postoption.Post} value={postoption.Post}>
                                            {postoption.Post}
                                        </option>
                                    ))}
                                </select>
                                </div>
                <div>
                    <h4>{post}</h4>
                </div>
                <div>
                    <button type="button" class="btn-primary " onClick={() => OnHandelSubmit(post)} >View employee</button>
                </div>
            </div>
            {post?
            <div className='tableDesigne'>
                <table>
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Employee Name</th>
                            <th>Date of Birth</th>
                            <th>Home Block</th>
                            <th>Current Posting Block</th>
                            <th>Current Posting Year As per till date- 30.06.2023</th>
                            <th>1st Previous Block</th>
                            <th>Alloted New Block</th>
                            {/* <th>Alloted Block</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {employee
                            &&
                            employee.map((employee, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{employee.Employee_Name}</td>
                                    <td>{employee.Date_of_Birth}</td>
                                    <td>{employee.Home_Block}</td>
                                    <td>{employee.Current_Posting_Block}</td>
                                    <td>{employee.Current_Posting_Year}</td>
                                    <td>{employee.First_Previous_Block}</td>
                                    <td>Wait..</td>
                                    {/* <td>Wait..</td> */}
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>:
            <Loader/>
            }
            
            <Footer/>

        </>
    );

}

export default ActionPage;

  