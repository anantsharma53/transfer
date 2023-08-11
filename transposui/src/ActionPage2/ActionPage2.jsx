import React from "react";
import { useState, useEffect } from 'react';
import './ActionPage2.css'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Header from '../Header/Header';
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import HeaderButton from "../HeaderButton/HeaderButton";
function ActionPage2() {
    const [post, setPost] = useState();
    const [employee, setEmployee] = useState();
    const [newemployee, setNewemployee] = useState();
    const [error, setError] = useState();
    const [Sl, setSL] = useState(); 
    const [postoption, setPostoption] = useState([]);
    const token = localStorage.getItem('token')
    // 
    function generatePDF() {
        const doc = new jsPDF('landscape'); // Change 'portrait' to 'landscape' for landscape orientation
        doc.setFontSize(14);
        // Center the heading
        doc.text('New Employee List - ' + post, 145, 20, 'center');
        // Get the current date and time
        const currentDate = new Date().toLocaleString();
        // Insert web page address and date/time using text method
        doc.setFontSize(10);

        const pageHeight = doc.internal.pageSize.height;
        const yCoordinate = pageHeight - 10;
        doc.text(`Date and Time: ${currentDate}`, 225, 20,);
        doc.text(` ${window.location.href}`, 225, yCoordinate,);
        const tableData = newemployee.map((employee, index) => ([
            index + 1,
            employee.Employee_Name,
            employee.Date_of_Birth,
            employee.Home_Block,
            employee.Current_Posting_Block,
            employee.Current_Posting_Year,
            employee.First_Previous_Block,
            employee.Alloted_Block,
        ]));

        doc.autoTable({
            head: [['Sl No', 'Employee Name', 'Date of Birth', 'Home Block',
                'Current Posting Block', 'Current Posting Year', '1st Previous Block',
                'Alloted New Block']],
            body: tableData,
            startY: 30,
            styles: {
                fontSize: 10,
                cellPadding: 6,
                lineColor: [0, 0, 0], // Border color (black)
                lineWidth: 0.1, // Border width (0.1 mm)
                valign: 'middle' // Vertical alignment of cells (centered)
            },
            headStyles: {
                fillColor: [41, 128, 185],
                textColor: [255, 255, 255], // Heading text color (white)
                fontSize: 12, // Heading font size
                fontStyle: 'bold' // Heading font style (bold)
            },
            alternateRowStyles: {
                fillColor: [240, 248, 255] // Background color for alternate rows
            },
        });

        doc.save('new_employee_list.pdf');
    }
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

        fetch("http://127.0.0.1:8000/api/employee/search/?query=" + props)
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
    function OnHandelRandomBlockSubmit(props) {
        console.log(props)

        // fetch("http://127.0.0.1:8000/api/employee/search/new?query=" + props)
        fetch("http://127.0.0.1:8000/api/employee/search/new?query=" + props)
            .then((res) => res.json())
            .then((jsonResponse) => {
                setNewemployee(jsonResponse);
                // console.log(employee)  
                setError();
                { alert("Assigne Block") }
            })
            .catch((err) => {
                console.log(err);
                setError(err);
            })

    }
    function OnHandelRandomSubmit(props) {
        console.log()
        console.log(props)
        fetch("http://127.0.0.1:8000/api/employee/newoffice/?query=" + props,
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
                setNewemployee(jsonResponse);
                // console.log(employee)  
                setError();
            })
            .catch((err) => {
                console.log(err);
                setError(err);
            })

    }
    function OnHandelResetSubmit() {
        fetch("http://127.0.0.1:8000/api/employee/search/new?query=clean")
        fetch("http://127.0.0.1:8000/api/employee/clean/?query=clean")
            .then((res) => res.json())
            .then((jsonResponse) => {
                setNewemployee(jsonResponse);

                // console.log(employee)  
                setError();
            })
            .catch((err) => {
                console.log(err);
                setError(err);
            })
    }
    function handlePrint() {
        window.print();
    }


    return (
        <>
            <Navbar></Navbar>
           
            <HeaderButton></HeaderButton>
            <div className='postSelection'>
                <div>
                    <label for="pet-select">Designations
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
                {/* <div className="form-group">
                                <h2>Designations</h2>
                                <select id="select_box" value={post} onChange={e => setPost(e.target.value)}>
                                    <option value={user.Post}
                                    >Select Designations</option>
                                    {post.map((post) => (
                                        <option key={post.Post} value={post.Post}>
                                            {post.Post}
                                        </option>
                                    ))}
                                </select>
                </div> */}
                {/* <div>
                    <select id="select_box" value={post} onChange={e => setPost(e.target.value)}>
                        <option value="" selected="selected">--Please choose an option--</option>
                        <option value="Panchyat Secretary">Panchyat Secretary</option>
                       
                    </select>
                </div> */}
                <div>
                    <h4>{post}</h4>
                </div>
                <div>
                    <button type="button" class="btn btn-primary btn-block mb-4" onClick={() => OnHandelSubmit(post)} >View employee</button>
                </div>
            </div>
            {post?
            <div>
                <div className='tableDesigne'>
                    <table>
                        <thead>
                            <tr>
                                {/* <th>Sl No</th>
                            <th>GPF No</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Current Office</th>
                            <th>Current Block</th>
                            <th>Current Posting Year</th>
                            <th>First Prev Office</th>
                            <th>First Prev Office Block</th>
                            <th>Second Prev Office</th>
                            <th>Second Prev Office Block</th>
                            <th>Dept Office</th>
                            <th>Dept Block</th> */}
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
                                        {/* <td>{employee.GPF_No}</td>
                                    <td>{employee.Name}</td>
                                    <td>{employee.Designation}</td>
                                    <td>{employee.Curr_office}</td>
                                    <td>{employee.Curr_block}</td>
                                    <td>{employee.Curr_post_year}</td>
                                    <td>{employee.First_post_office}</td>
                                    <td>{employee.First_post_office_block}</td>
                                    <td>{employee.Second_post_office}</td>
                                    <td>{employee.Second_post_office_block}</td>
                                    <td>{employee.Dept_office}</td>
                                    <td>{employee.Dept_block}</td> */}
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
                </div>
                <div className='Actionbutton'>

                    <button class="btn btn-secondary btn-lg" onClick={() => OnHandelRandomBlockSubmit(post)} type="button">
                        Get List
                    </button>
                    <button class="btn btn-secondary btn-lg" onClick={() => OnHandelRandomSubmit(post)}
                        type="button">
                        Click to Assigne Block
                    </button>
                    <button class="btn btn-secondary btn-lg" onClick={() => OnHandelResetSubmit(post)}

                        type="button">
                        Click to Clear Assigne Block
                    </button>
                    <button
                        class="btn btn-secondary btn-lg"
                        onClick={handlePrint} // Call handlePrint function on button click
                        type="button">Print</button>
                    {
                        newemployee ?
                            <button class="btn btn-secondary btn-lg" onClick={generatePDF}>Download PDF</button>
                            :
                            <button type="button" class="btn btn-secondary btn-lg" disabled >Download PDF</button>
                    }

                    {/* <button type="button" onClick={() => Rset()}>
                    Reload Page
                </button> */}
                </div>

                {/* Add a container div around the New Employee List table */}
                <div className='new-employee-table-container'>
                    <div className='tableDesigne print-table'>
                        <h3 class="mb-3 p-3 text-center">New Employee List- {post} </h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Sl No</th>
                                    <th>Employee Name</th>
                                    <th>Date of Birth</th>
                                    <th>Home Block</th>
                                    <th>Current Posting Block</th>
                                    <th>1st Previous Block</th>
                                    <th>Current Posting Year As per till date- 30.06.2023</th>
                                    <th>Alloted New Block</th>
                                    {/* <th>Sl No</th>
                                <th>GPF No</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Current Office</th>
                                <th>Current Block</th>
                                <th>Current Posting Year</th>
                                <th>First Prev Office</th>
                                <th>First Prev Office Block</th>
                                <th>Second Prev Office</th>
                                <th>Second Prev Office Block</th>
                                <th>Dept Office</th>
                                <th>Dept Block</th>
                                <th>Alloted New Office</th> */}
                                    {/* <th>Alloted Block</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {newemployee
                                    &&
                                    newemployee.map((newemployee, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{newemployee.Employee_Name}</td>
                                            <td>{newemployee.Date_of_Birth}</td>
                                            <td>{newemployee.Home_Block}</td>
                                            <td>{newemployee.Current_Posting_Block}</td>
                                            <td>{newemployee.First_Previous_Block}</td>
                                            <td>{newemployee.Current_Posting_Year}</td>
                                            <td>{newemployee.Alloted_Block}</td>

                                            {/* <td>{newemployee.GPF_No}</td>
                                        <td>{newemployee.Name}</td>
                                        <td>{newemployee.Designation}</td>
                                        <td>{newemployee.Curr_office}</td>
                                        <td>{newemployee.Curr_block}</td>
                                        <td>{newemployee.Curr_post_year}</td>
                                        <td>{newemployee.First_post_office}</td>
                                        <td>{newemployee.First_post_office_block}</td>
                                        <td>{newemployee.Second_post_office}</td>
                                        <td>{newemployee.Second_post_office_block}</td>
                                        <td>{newemployee.Dept_office}</td>
                                        <td>{newemployee.Dept_block}</td>
                                        <td>{newemployee.Alloted_office}</td> */}
                                            {/* <td>{newemployee.Alloted_Block}</td> */}

                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>:
            <Loader />
            }
            <Footer />

        </>
    );

}

export default ActionPage2;