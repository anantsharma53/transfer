import React from "react";
import './Dashboard.css'
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import './Dashboard.css';
import { Link } from "react-router-dom";
import HeaderButton from "../HeaderButton/HeaderButton";
function Dashboard() {
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
                <div class="container mt-5 table">
                    <div class="row">

                        <div class="main-box clearfix">
                            <div class="table-responsive">
                                <table class="table user-list">
                                    <thead>
                                        <tr>
                                            <th><span>User</span></th>
                                            <th><span>Created</span></th>
                                            <th class="text-center"><span>Status</span></th>
                                            <th><span>Email</span></th>
                                            <th><span>Actions</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                                <a href="#" class="user-link">Mila Kunis</a>
                                                <span class="user-subhead">Admin</span>
                                            </td>
                                            <td>
                                                2013/08/08
                                            </td>
                                            <td class="text-center">
                                                <span class="label label-default">Inactive</span>
                                            </td>
                                            <td>
                                                <a href="#">mila@kunis.com</a>
                                            </td>
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
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                                <a href="#" class="user-link">Mila Kunis</a>
                                                <span class="user-subhead">Admin</span>
                                            </td>
                                            <td>
                                                2013/08/08
                                            </td>
                                            <td class="text-center">
                                                <span class="label label-default">Inactive</span>
                                            </td>
                                            <td>
                                                <a href="#">mila@kunis.com</a>
                                            </td>
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
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="pagination-container">
                                <ul class="pagination pull-left">
                                    <li><a href="#"><i class="fa fa-chevron-left"></i></a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#"><i class="fa fa-chevron-right"></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <Footer></Footer>
        </>

    );
}
export default Dashboard;