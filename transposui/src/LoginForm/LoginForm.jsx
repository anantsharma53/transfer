
import "./LoginForm.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//import { useDispatch } from 'react-redux';
//import loginDetails from '../../data/loginDetails.json';
//import { addUser } from "../../reducers/cartReducer";

function Login() {
  let navigate = useNavigate();
  //const dispatch=useDispatch();
  let location = useLocation();

  //const[userName,setUserName]=useState([]);

  console.log(location.pathname);
  const [user, setFormData] = useState({
    username: '',
    password: '',
  });
  function handleSubmit() {

    fetch("http://127.0.0.1:8000/api/employee/user/login/", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",

      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json(); // Parse response as JSON
        } else if (res.status === 400) {
          console.log("Unauthorized request");
          alert("Login Error");
          throw new Error("Unauthorized request");
        } else {
          console.log("Something went wrong");
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.access); // Store the access_token in localStorage
        localStorage.setItem("tokenExpiration", data.access);
       
        navigate("/dashboard");
      })
      .catch((err) => {
        alert("Check your Username Or Password");
        console.log(err);
      });
  }
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...user, [name]: value });
    console.log(user);
  }
  
  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: '185px' }} alt="logo" /> */}
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK887cbVsyxqWITzA6fQR1VCK25khaJdggQfXyDcD_vOfPQwVIXawhn2EOKAsThEzGRjU&usqp=CAU"
                        style={{ width: '185px' }} alt="logo" />                        
                      <h4 className="mt-1 mb-5 pb-1">NIC Jamtara Team</h4>
                    </div>
                    <form>
                      <p>Please login to your account</p>
                      <div className="form-outline mb-4">
                        <input type="email" id="username" className="form-control"
                          placeholder="username" name="username"  onChange={handleChange} value={user.username} />
                        <label className="form-label" htmlFor="form2Example11">Username</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" name="password" id="password" onChange={handleChange} value={user.password} className="form-control" />
                        <label className="form-label" htmlFor="form2Example22">Password</label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button className="btn btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={handleSubmit}>Log
                          in</button>
                        <a className="text-muted" href="#!">Forgot password?</a>
                      </div>

                      {/* <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <Link to="/user" type="button" className="btn btn-outline-danger">Create new</Link>
                      </div> */}
                    </form>
                  </div>
                </div>
                
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4 ">
                  <Link className="center-image" to='/home1'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Firefox_Home_-_logo.png"
                        style={{ width: '80px' }} alt="logo" />
                  </Link>
                    <h4 className="mb-4">We are more than just a office</h4>
                    <p className="small mb-0">The National Informatics Centre (NIC) is a 
                    government agency in many countries, including India. It serves as the 
                    premier information technology organization, providing e-governance solutions
                     to support various government functions. NIC develops and implements ICT 
                     (Information and Communication Technology) projects, offering services like 
                     data hosting, network management, and software development for efficient 
                     public administration.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>








    // <div>
    //   <Navbar></Navbar>
    //   <Header/>
    //   <form className="login-container">
    //     <div class="  form-outline mb-4">
    //       <input type="`text`"  class="form-control" name="username" id="username" onChange={handleChange} value={user.username}/>
    //       <label class="form-label" for="form2Example1">Username</label>
    //     </div>
    //     <div class="form-outline mb-4">
    //       <input type="password" name="password" id="password" onChange={handleChange} value={user.password} class="form-control" />
    //       <label class="form-label" for="form2Example2">Password</label>
    //     </div>
    //     <div class="row mb-4">
    //       <div class="col d-flex justify-content-center">

    //         <div class="form-check">
    //           <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
    //           <label class="form-check-label" for="form2Example31"> Remember me </label>
    //         </div>
    //       </div>
    //       <div class="col">
    //         <a href="#!">Forgot password?</a>
    //       </div>
    //     </div>
    //     <button type="button" class="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Sign in</button>
    //     <div class="text-center">
    //       <p>Not a member? <Link to="/user">Register</Link> </p>
    //       <p>or sign up with:</p>
    //       {/* <button type="button" class="btn btn-link btn-floating mx-1">
    //         <i class="fab fa-facebook-f"></i>
    //       </button>

    //       <button type="button" class="btn btn-link btn-floating mx-1">
    //         <i class="fab fa-google"></i>
    //       </button>

    //       <button type="button" class="btn btn-link btn-floating mx-1">
    //         <i class="fab fa-twitter"></i>
    //       </button>

    //       <button type="button" class="btn btn-link btn-floating mx-1">
    //         <i class="fab fa-github"></i>
    //       </button> */}
    //     </div>
    //   </form>
    // </div>
  );
}
export default Login;
