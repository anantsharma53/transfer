import React from "react";
import { Link } from "react-router-dom";
import './HeaderButton.css'
function HeaderButton() {
    const user = JSON.parse(localStorage.getItem('user_details'));
    const isSuperUser = user && user.is_superuser;
    console.log(user.is_superuser)
    return (
        <div class="headerbutton">
            <div class="col-md-12 mt-5">
                {/* <h2 class="heading-section">
                    <small>Pick Your Color</small>
                </h2> */}
                {/* <button type="button" class="btn mb-2 mb-md-0 btn-primary">Default Primary</button>
                <button type="button" class="btn mb-2 mb-md-0 btn-secondary">Default Secondary</button>
                <button type="button" class="btn mb-2 mb-md-0 btn-tertiary">Default Tertiary</button> */}
                {
                    isSuperUser === true ? (
                        <Link to='/user'><button type="button" className="btn mb-2 mb-md-0 btn-quarternary">Add User</button></Link>
                    ) : (
                        <Link to='#'><button type="button" className="btn mb-2 mb-md-0 btn-quarternary" disabled>Add User</button></Link>
                    )
                }
                <Link to='/emp'><button type="button" className="btn mb-2 mb-md-0 btn-quarternary">Add Employee</button></Link>
                <Link to='/viewemp'><button type="button" class="btn mb-2 mb-md-0 btn-quarternary">View Employee</button></Link>
                <Link to='/desi'><button type="button" class="btn mb-2 mb-md-0 btn-quarternary">Add Staff Desiganations</button></Link>
                <Link to='/home'><button type="button" class="btn mb-2 mb-md-0 btn-quarternary">Transfer & Posting</button></Link>
                <button type="button" class="btn mb-2 mb-md-0 btn-quarternary">Else</button>
            </div>
        </div>
    );
}
export default HeaderButton