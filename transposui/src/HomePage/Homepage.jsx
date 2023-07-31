import React from "react";
import './Homepage.css'
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
function Homepage() {

    return (

        <body style={{ backgroundColor: '#eee' }}>
            {/* <section className="h-500 gradient-form" style={{ backgroundColor: '#eee' }}> */}
            <Navbar />
            <section id="hero" class="d-flex align-items-center">

                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <h1>Employee Transfer and Posting Service Portal</h1>
                            <h2>Hi!! Here You get</h2>
                            <div class="d-flex justify-content-center justify-content-lg-start">
                                <Link to="/login" class="btn-get-started scrollto">Get Started</Link>
                                {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a> */}
                            </div>
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <img src="https://static.vecteezy.com/system/resources/previews/023/353/937/original/business-people-characters-working-in-the-office-minimal-co-working-space-group-of-working-office-employees-free-png.png" class="img-fluid animated" alt="img" />
                        </div>
                    </div>
                </div>

            </section>
            
            <main id="main">
                <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container">
                        <h2>Welcome to our Employee Transfer and Posting Service Portal!</h2>
                        <p>
                            We are dedicated to streamlining the process of transferring and posting employees within our organization.
                            This portal serves as a comprehensive platform to facilitate seamless transitions for our valued employees.
                        </p>

                        <h3>Why Use Our Portal?</h3>
                        <ul>
                            <li>
                                <strong>Efficiency:</strong> Our portal is designed to reduce administrative burdens and save time for both
                                employees and HR personnel. With automated processes, you can expect faster responses and quicker turnaround times
                                for transfer and posting requests.
                            </li>
                            <li>
                                <strong>User-Friendly Interface:</strong> The portal boasts an intuitive user interface, ensuring ease of use for all
                                employees. Accessible from any device with an internet connection, employees can initiate requests at their
                                convenience.
                            </li>
                            <li>
                                <strong>Real-Time Tracking:</strong> Say goodbye to waiting anxiously for updates. Our portal allows employees to
                                track the progress of their transfer and posting requests in real-time. No more uncertainties about the status of your
                                application!
                            </li>
                            <li>
                                <strong>Document Management:</strong> The portal facilitates secure document submission and storage. Employees can
                                upload the required documents, and our system ensures that all necessary paperwork is in place for smooth processing.
                            </li>
                            <li>
                                <strong>Transparent Communication:</strong> Communication is key to a successful transfer or posting process. Our
                                portal enables clear and transparent communication between employees and HR personnel. You can expect timely
                                notifications and updates throughout the entire process.
                            </li>
                        </ul>

                        <h3>How to Use the Portal:</h3>
                        <ul>
                            <li>
                                <strong>Log In:</strong> To access the portal, simply log in using your designated credentials. If you are a new user,
                                follow the registration process to create an account.
                            </li>
                            <li>
                                <strong>Initiate a Request:</strong> Once logged in, navigate to the "Transfer/Posting Request" section. Complete the
                                required fields, including the reason for the transfer/posting, preferred location, and any additional notes you'd
                                like to include.
                            </li>
                            <li>
                                <strong>Attach Documents:</strong> Upload the necessary documents, such as transfer letters, recommendations, or any
                                other relevant paperwork. Our secure file management system ensures the confidentiality of your documents.
                            </li>
                            <li>
                                <strong>Submit and Track:</strong> After reviewing your request, submit it through the portal. You can then monitor the
                                status of your application in real-time under the "My Requests" section.
                            </li>
                            <li>
                                <strong>Receive Notifications:</strong> Our portal will keep you informed at every stage of the process. You will
                                receive notifications when your request is received, under review, approved, or denied.
                            </li>
                        </ul>

                        <h3>Security and Confidentiality:</h3>
                        <p>
                            We understand the sensitivity of personal and professional information. Rest assured that our portal is equipped with
                            robust security measures to protect your data. All information shared through the portal is encrypted and stored in
                            compliance with industry standards.
                        </p>

                        
                        

                    </div>
                </section>
                <section id="about" class="about">
                    <div class="container" data-aos="fade-up">

                        <div class="section-title">
                            <h2>About Us</h2>
                        </div>

                        <div class="row content">
                            <div class="col-lg-6">
                                <p>
                                    National Informatics Centre Services include.
                                </p>
                                <ul>
                                    <li><i class="ri-check-double-line"></i> Digital Government Research Centre (DGRC)</li>
                                    <li><i class="ri-check-double-line"></i> Video Conferencing</li>
                                    <li><i class="ri-check-double-line"></i> National Knowledge Network (NKN)</li>
                                    <li><i class="ri-check-double-line"></i> Webcast</li>
                                    <li><i class="ri-check-double-line"></i> NICNET</li>
                                    <li><i class="ri-check-double-line"></i> Security</li>
                                    <li><i class="ri-check-double-line"></i> Data Centre</li>
                                </ul>
                            </div>
                            <div class="col-lg-6 pt-4 pt-lg-0">
                                <p>
                                    The National Informatics Centre (NIC) is a premier Indian government department under the
                                    Ministry of Electronics and Information Technology (MeitY).[4][5][6] The NIC provides infrastructure,
                                    IT Consultancy, IT Services including but not limited to architecture, design, development and implementation
                                    of IT Systems to Central Government Departments and State Governments thus enabling delivery of government
                                    services to Citizens and pioneering the initiatives of Digital India.[7] Research for betterment of citizens
                                    and Government department and organizations is also carried out by scientists working in NIC .It recruits
                                    various scientists and Scientific/Technical Assistants almost every three years and many NIT and IIT graduates
                                    have joined this premier organisation in past few decades. NIC endeavours to cater to ICT needs at all levels
                                    of governance for making last mile delivery of Government services.
                                </p>
                                <a href="#" class="btn-learn-more">Learn More</a>
                            </div>
                        </div>

                    </div>
                </section>
                <section id="contact" class="contact">
                    <div class="container" data-aos="fade-up">

                        <div class="section-title">
                            <h2>Contact</h2>
                            <p>
                                If you encounter any issues while using the portal or have questions about the transfer/posting process, our dedicated
                                support team is here to assist you. Feel free to reach out to our HR department or use the provided contact information
                                within the portal.
                            </p>
                            <p>
                            At our Employee Transfer and Posting Service Portal, we strive to make the employee transfer and posting process as
                            seamless as possible. Thank you for choosing our platform to manage your career advancement within our organization. Your
                            success is our priority!
                        </p>
                        </div>

                        <div class="row">

                            <div class="col-lg-5 d-flex align-items-stretch">
                                <div class="info">
                                    <div class="address">
                                        <i class="bi bi-geo-alt"></i>
                                        <h4>Location:</h4>
                                        <p>NIC Jamtara Combined Building Jamtara</p>
                                    </div>

                                    <div class="email">
                                        <i class="bi bi-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>info@nic.in</p>
                                    </div>

                                    <div class="phone">
                                        <i class="bi bi-phone"></i>
                                        <h4>Call:</h4>
                                        <p>XX-XXX-XXX-XX</p>
                                    </div>

                                    <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3645.35518419092!2d86.82371177594766!3d23.983231579796797!2m3!1f0!2f0!3f0!
              3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x39f6d6cdccf416db%3A0xde04621951e9373b
              !2sXRMG%2B7GV%20Combined%20Building%2C%20Jamtara%2C%20Sonathar%2C%20Jharkhand%208
              15352!3m2!1d23.9832267!2d86.8262867!5e0!3m2!1sen!2sin!4v1690795577881!5m2!1sen!2sin"
                                        frameborder="0" style={{ border: '0', width: "100%", height: "290px" }} allowfullscreen></iframe>
                                </div>

                            </div>

                            <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label for="name">Your Name</label>
                                            <input type="text" name="name" class="form-control" id="name" required />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="name">Your Email</label>
                                            <input type="email" class="form-control" name="email" id="email" required />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Subject</label>
                                        <input type="text" class="form-control" name="subject" id="subject" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Message</label>
                                        <textarea class="form-control" name="message" rows="10" required></textarea>
                                    </div>
                                    <div class="my-3">
                                        <div class="loading">Loading</div>
                                        <div class="error-message"></div>
                                        <div class="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div class="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>

            </main>
            <footer id="footer">
                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <h4>Join Our Newsletter</h4>
                                <form action="" method="post">
                                    <input type="email" name="email" />
                                    <input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>NIC Jamtara</h3>
                                <p>
                                    First Floor  <br />
                                    Combined Building Jamtara<br />
                                    DC office, 815351 <br /><br />
                                    <strong>Phone:</strong> X-XX-XXX-XXX<br />
                                    <strong>Email:</strong> nicjamtara@nic.in<br />
                                </p>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right"></i> <a href="#">JharseWa</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i> <a href="#">Birth & Death Registration</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i> <a href="#">JharBhomi</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i> <a href="#">e-Kalyan</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i> <a href="#">NIC service Desk</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                {/* <ul>
                                    <li>
                                        <i className="bx bx-chevron-right"></i> <a href="#">Web Design</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i> <a href="#">Web Development</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i> <a href="#">Product Management</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i> <a href="#">Marketing</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a>
                                    </li>
                                </ul> */}
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Social Networks</h4>
                                {/* <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p> */}
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter">
                                        <i className="bx bxl-twitter"></i>
                                    </a>
                                    <a href="#" className="facebook">
                                        <i className="bx bxl-facebook"></i>
                                    </a>
                                    <a href="#" className="instagram">
                                        <i className="bx bxl-instagram"></i>
                                    </a>
                                    <a href="#" className="google-plus">
                                        <i className="bx bxl-skype"></i>
                                    </a>
                                    <a href="#" className="linkedin">
                                        <i className="bx bxl-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container footer-bottom clearfix">
                    <div className="copyright">
                        &copy; {new Date().getFullYear()} Copyright <strong><span>NIC Jamtara</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="#">NIC Jamtara</a>
                    </div>
                </div>
            </footer>
        </body>
    );
}
export default Homepage;
