import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import './styles/NavBar.css'

function NavBar() {
    const [click, setClick] = useState(false)
    const [y, setY] = useState(0)
    const toogleNav = () => setClick(!click)
    const closeNav = () => setClick(false)

    useEffect(() => {
        if (click) document.body.style.overflow = "hidden"
        else document.body.style.overflow = "auto"
        function handleScroll() {
            if (!click) {
                if (y > window.scrollY)
                    document.getElementById("nav_style").classList.add("nav_style_changer_mobile")
                else if (y < window.scrollY)
                    document.getElementById("nav_style").classList.remove("nav_style_changer_mobile")
                setY(window.scrollY)
            }
        }
        document.addEventListener("scroll", handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [click, y])

    return (
        <>
            <div className="navbar_container" id="nav_style">
                <div className="container">
                    <div className="navbar nav_mobile">
                        <Link to={'/'}>
                            <img
                                className="navbar_logo"
                                src={"/assets/logo.png"}
                                alt="logo"
                            />
                        </Link>
                        <ul className={click ? "navbar_right active" : "navbar_right"}>
                            <li><a href={'/#services_tab'} onClick={closeNav}>Services</a></li>
                            <li><Link to={'/blogs'} onClick={closeNav}>Blogs</Link></li>
                            <li><a href={'/#branches_tab'} onClick={closeNav}>Branches</a></li>
                            <li><a href={'/#clients_tab'} onClick={closeNav}>Clients</a></li>
                            <li><a href='/#contact_us_tab' className='action_btn1' onClick={closeNav}>Contact us</a></li>
                        </ul>
                        <span onClick={toogleNav} className="hamburgerMenu d-none">{click ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
