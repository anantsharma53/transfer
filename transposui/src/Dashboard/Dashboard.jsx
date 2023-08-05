import React, { useEffect } from "react";
import { useState } from "react";
import './Dashboard.css'
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import './Dashboard.css';
import { Link } from "react-router-dom";
import HeaderButton from "../HeaderButton/HeaderButton";
function Dashboard() {
    const user = JSON.parse(localStorage.getItem('user_details'));
    const isSuperUser = user && user.is_superuser;
    const token = localStorage.getItem('token')
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    // Function to fetch User List from the API
    function userList(pageNumber) {
        fetch("http://127.0.0.1:8000/api/userlist/",
            {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`,
                },
            }

        )
            .then((res) => res.json())
            .then((jsonResponse) => {
                setUsers(jsonResponse.results);
                setTotalPages(jsonResponse.total_pages);
            })
            .catch((err) => {
                console.log(err);
                setError(err);
            });
    }

    // useEffect(() => {
    //     userList(currentPage);
    // }, []);
    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber);
        localStorage.setItem("currentPage", pageNumber);
    }
    useEffect(() => {
        const storedPage = localStorage.getItem("currentPage");
        setCurrentPage(storedPage ? parseInt(storedPage) : 1);
        userList(currentPage);
      }, [currentPage]);
      

    return (
        <>
            <Navbar></Navbar>

            <HeaderButton></HeaderButton>

            <div class="">
                <div class="row">
                    <div class="left-section">
                    </div>
                    <div class="right-section">

                        <div class="card">
                            <article class="card-group-item">
                                <header class="card-header">
                                    <h6 class="title">Brands </h6>
                                </header>
                                <div class="filter-content">
                                    <div class="card-body">
                                        <form>
                                            <label class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" />
                                                <span class="form-check-label">
                                                    Mersedes Benz
                                                </span>
                                            </label>
                                            <label class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" />
                                                <span class="form-check-label">
                                                    Nissan Altima
                                                </span>
                                            </label>
                                            <label class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" />
                                                <span class="form-check-label">
                                                    Another Brand
                                                </span>
                                            </label>
                                        </form>

                                    </div>
                                </div>
                            </article>

                            <article class="card-group-item">
                                <header class="card-header">
                                    <h6 class="title">Choose type </h6>
                                </header>
                                <div class="filter-content">
                                    <div class="card-body">
                                        <label class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadio" value="" />
                                            <span class="form-check-label">
                                                First hand items
                                            </span>
                                        </label>
                                        <label class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadio" value="" />
                                            <span class="form-check-label">
                                                Brand new items
                                            </span>
                                        </label>
                                        <label class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadio" value="" />
                                            <span class="form-check-label">
                                                Some other option
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                {isSuperUser ?
                    (<div class="container mt-5 table">
                        <div class="row">

                            <div class="main-box clearfix">
                                <div class="table-responsive">
                                    <table class="table user-list">
                                        <thead>
                                            <tr>
                                                <th class="text-center"><span>Sl No</span></th>
                                                <th class="text-center"><span>Name</span></th>
                                                <th class="text-center"><span>User Name</span></th>
                                                <th class="text-center"><span>Email</span></th>
                                                <th class="text-center"><span>Mobile number</span></th>
                                                <th class="text-center"><span>Actions</span></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {users
                                                &&
                                                users.map((user, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                                            <a href="#" class="user-link">{user.name}</a>
                                                        </td>
                                                        <td class="text-center">{user.username}</td>
                                                        <td class="text-center">
                                                            <a href="#">{user.email}</a>
                                                        </td>
                                                        <td>{user.mobile_number}</td>
                                                        {
                                                            user.is_superuser === true ? <td>Supar Admin</td> :
                                                                <td style={{ width: '20%' }}>
                                                                    <a href="#" class="table-link">
                                                                        <span class="fa-stack">
                                                                            <i class="fa fa-square fa-stack-2x"></i>
                                                                            <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                                                                        </span>
                                                                    </a>
                                                                    <a href="#" class="table-link">
                                                                        <span class="fa-stack">
                                                                            <i class="fa fa-square fa-stack-2x"></i>
                                                                            <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                                        </span>
                                                                    </a>
                                                                    <a href="#" class="table-link danger">
                                                                        <span class="fa-stack">
                                                                            <i class="fa fa-square fa-stack-2x"></i>
                                                                            <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                                        </span>
                                                                    </a>
                                                                </td>

                                                        }


                                                    </tr>
                                                ))}

                                        </tbody>
                                    </table>
                                </div>
                                <div class="pagination-container">
                                    <ul class="pagination pull-left">
                                        <li><a href="#"><i class="fa fa-chevron-left"></i></a></li>
                                        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                                            <li key={page}>
                                                <a
                                                    href="#"
                                                    onClick={() => handlePageChange(page)}
                                                    className={currentPage === page ? "active" : ""}
                                                >
                                                   page {page}
                                                </a>
                                            </li>
                                        ))}
                                        {/* <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li> */}
                                        <li><a href="#"><i class="fa fa-chevron-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>) : (<></>)
                }
            </div>




            <Footer></Footer>
        </>

    );
}
export default Dashboard;