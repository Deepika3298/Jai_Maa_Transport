import React from 'react'
import './styles/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className="text-white mt_max pt-5 pb-5 bg_secondary">
                <div className="container">
                    <div className="footer row justify-content-between">
                        <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                            <Link to='/'>
                                <img
                                    className="footer_logo mb-4"
                                    src={"/assets/logo2.png"}
                                    alt="logo"
                                />
                            </Link>
                            <h3>Let’s get started on something great</h3>
                            <h6 className="footer_headings">Your Goods, Our Responsibility</h6>
                            <a href='/#contact_us_tab' className='action_btn2'>Contact Us</a>
                        </div>

                        <div className="col-6 col-lg-2">
                            <h6 className="footer_headings">Company</h6>
                            <div><a href='/#about_tab'>About us</a></div>
                            <div><a href='/#features_tab'>Features</a></div>
                            {/* <div><a href=''>Affiliations</a></div> */}
                            <div><a href='/#contact_us_tab'>Services</a></div>
                            <div><a href='/#branches_tab'>Branches</a></div>
                            <div><Link to='/blogs'>Blogs</Link></div>
                        </div>

                        {/* <div className="col-6 col-lg-2">
                            <h6 className="footer_headings">Social</h6>
                            <div><a href='/#'>LinkedIn</a></div>
                            <div><a href='/#'>Facebook</a></div>
                        </div> */}

                        <div className="col-6 col-lg-2">
                            <h6 className="footer_headings">Contact us</h6>
                            <div>+91 9355559955</div>
                            <div>tpt.jaimaa@gmail.com</div>
                        </div>

                        {/* <div className="col-6 col-lg-2">
                            <h6 className="footer_headings">Legal</h6>
                            <div><a herf='#'>Terms</a></div>
                            <div><a herf='#'>Privacy</a></div>
                            <div><a herf='#'>Licenses</a></div>
                        </div> */}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
