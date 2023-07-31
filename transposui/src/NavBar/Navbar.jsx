import './Navbar.css'
import { Link } from "react-router-dom";
import { useEffect,useState} from "react";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      setLoggedIn(false)
    } else {
      setLoggedIn(true)
    }
  }, [loggedIn]);
  const onLogoutHandler = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  }
  return (
    <header id="header" class="fixed-top header-inner-pages" >
    <div class="container d-flex align-items-center">
        {/* <h1 class="logo me-auto"><a href="index.html">NIC</a></h1> */}
        <a href="/home" class="logo me-auto">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK887cbVsyxqWITzA6fQR1VCK25khaJdggQfXyDcD_vOfPQwVIXawhn2EOKAsThEzGRjU&usqp=CAU"
            style={{ width: '160px', height:'200px' }} alt="logo" />
            </a>
        <nav id="navbar" class="navbar">
            <ul>
                <li><Link class="nav-link scrollto active" to='/home1'>Home</Link></li>
                <li><a class="nav-link scrollto" href="#about">About</a></li>
                <li><a class="nav-link scrollto" href="#services">Services</a></li>
                <li>
                {
            loggedIn ? (
              <Link className="nav-link   scrollto" to="/home">Dashboard</Link>
            ) : (
               <Link className="nav-link   scrollto" to="/login">
                 Dashboard
               </Link>
             )
           }
                  {/* <a class="nav-link   scrollto" href="#portfolio">Portfolio
                  </a> */}
                  </li>
                <li><a class="nav-link scrollto" href="#team">Team</a></li>
                {/* <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                            <ul>
                                <li><a href="#">Deep Drop Down 1</a></li>
                                <li><a href="#">Deep Drop Down 2</a></li>
                                <li><a href="#">Deep Drop Down 3</a></li>
                                <li><a href="#">Deep Drop Down 4</a></li>
                                <li><a href="#">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Drop Down 2</a></li>
                        <li><a href="#">Drop Down 3</a></li>
                        <li><a href="#">Drop Down 4</a></li>
                    </ul>
                </li> */}
                <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                {/* <li><Link class="getstarted scrollto" to="/login">Get Started</Link></li> */}
                <li>
                {
            loggedIn ? (
              <Link className="getstarted scrollto" onClick={onLogoutHandler} to="/home1">Logout</Link>
            ) : (
               <Link className="getstarted scrollto" to="/login">
                 Login
               </Link>
             )
           }
                </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>

    </div>
</header>
    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //       Transfer Posting APP
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
        
    //     <div>
    //       {
    //         loggedIn ? (
    //           <Link className="btn btn-outline-success my-2 my-sm-0" onClick={onLogoutHandler} to="/login">Logout</Link>
    //         ) : (
    //           <Link className="btn btn-outline-success my-2 my-sm-0" to="/login">
    //             Login
    //           </Link>
    //         )
    //       }
          
    //     </div>
    //   </div>
    // </nav>
  )
}
