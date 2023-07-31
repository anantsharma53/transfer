import React from "react";
import './Footer.css'


function Footer() {
    return (
        <footer id="footerdas">
        <div className="container footer-bottom clearfix ">
                    <div className="copyright">
                        &copy; {new Date().getFullYear()} Copyright <strong><span>NIC Jamtara</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="#">NIC Jamtara</a>
                    </div>
                </div>
                </footer>
       );
    }
    export default Footer;