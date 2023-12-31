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
                {
                    isSuperUser === true ? (
                        <>
                            <Link to='/user'><button type="button" className="btn mb-2 mb-md-0 btn-quarternary">Add User</button></Link>
                            <Link to='/desi'><button type="button" className="btn mb-2 mb-md-0 btn-quarternary">Add Staff Desiganations</button></Link>
                            <Link to='/office'><button type="button" className="btn mb-2 mb-md-0 btn-quarternary">Add Office</button></Link>
                            <Link to='/home'><button type="button" className="btn mb-2 mb-md-0 btn-quarternary">Transfer & Posting</button></Link>
                            <Link to='/block'><button type="button" className="btn mb-2 mb-md-0 btn-quarternary">Add Block</button></Link>
                        </>
                    ) : (
                        <>
                            <Link to='#'><button type="button" className="btn mb-2 mb-md-0 btn-quarternary" disabled>Add User</button></Link>
                            <Link to='#'><button type="button" className="btn mb-2 mb-md-0 btn-quarternary" disabled>Add Staff Desiganations</button></Link>
                            <Link to='#'><button type="button" className="btn mb-2 mb-md-0 btn-quarternary" disabled>Add Office</button></Link>
                            <Link to='#'><button type="button" className="btn mb-2 mb-md-0 btn-quarternary" disabled>Transfer & Posting</button></Link>
                            <Link to='#'><button type="button" className="btn mb-2 mb-md-0 btn-quarternary" disabled>Add Block</button></Link>
                        </>
                    )
                }
                <Link to='/emp'><button type="button" className="btn mb-2 mb-md-0 btn-quarternary">Add Employee</button></Link>
                <Link to='/viewemp'><button type="button" className="btn mb-2 mb-md-0 btn-quarternary">View Employee</button></Link>
            </div>
        </div>
    );
}
export default HeaderButton