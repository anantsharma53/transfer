import React from "react";
import { Link } from "react-router-dom";
import './HeaderButton.css'
function HeaderButton() {

    return (
        <div class="container">
                <div class="col-md-12 mt-5">
                    {/* <h2 class="heading-section">
                    <small>Pick Your Color</small>
                </h2> */}
                    {/* <button type="button" class="btn mb-2 mb-md-0 btn-primary">Default Primary</button>
                <button type="button" class="btn mb-2 mb-md-0 btn-secondary">Default Secondary</button>
                <button type="button" class="btn mb-2 mb-md-0 btn-tertiary">Default Tertiary</button> */}
                    <Link to ='/user'><button type="button" class="btn mb-2 mb-md-0 btn-quarternary">Add User</button></Link>
                    <Link to='/viewemp'><button type="button" class="btn mb-2 mb-md-0 btn-quarternary">View Employee</button></Link>
                    <button type="button" class="btn mb-2 mb-md-0 btn-quarternary">Add Department</button>
                    <Link to ='/home'><button type="button" class="btn mb-2 mb-md-0 btn-quarternary">Transfer & Posting</button></Link>
                </div>
            </div>
    );
}
export default HeaderButton