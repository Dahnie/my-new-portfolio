import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import profileImg from "../../assets/img/profile-img.png";
import githubAvatar from "../../assets/img/github-avatar.svg";
import mailAvatar from "../../assets/img/mail-avatar.svg";
import twitterAvatar from "../../assets/img/twitter-avatar.svg";
import linkedinAvatar from "../../assets/img/linkedin-avatar.svg";
import navClose from "../../assets/img/nav-close.svg";
import navBurger from "../../assets/img/nav-burger.svg";
import rightArrow from "../../assets/img/right-arrow.svg"
import MobileWork from './MobileWork';
import MobileResume from './MobileResume';


function MobileHome({ mobilePage, setMobilePage }) {
    const navigate = useNavigate()
    // const [navOpen, setNavOpen] = useState(false)




    // Functions
    // Handle mail link actions
    const handleMailLink = function (e) {
        e.preventDefault()
        window.location.href = "mailto:adeneyedaniel007@gmail.com"
    }


    const handleHomeClick = function () {
        setMobilePage("Home");
        navigate("/");
        // navbarSection.classList.add("hidden")
        // mobileMainContent.classList.remove("hidden")


    }

    const handleWorkClick = function () {

    }

    const handleResumeClick = function () {

    }



    useEffect(() => {


        const navOpen = document.querySelector(".nav-open")
        const navClose = document.querySelector(".nav-close")
        // const  = document.querySelector(".nav-content")
        const navbarSection = document.querySelector(".mobile-nav")
        const mobileMainContent = document.querySelector(".mobile-main-content")

        // On Nav Open
        navOpen.addEventListener("click", (e) => {
            e.stopPropagation();
            // Handles burger toggle
            // Open nav content
            // setNavOpen(true);
            navbarSection.classList.remove("hidden")
            mobileMainContent.classList.add("hidden")



        })

        // On Nav Close
        navClose.addEventListener("click", (e) => {
            e.stopPropagation();
            // setNavOpen(false)
            // Handles burger toggle
            // Close nav  content
            navbarSection.classList.add("hidden")
            mobileMainContent.classList.remove("hidden")

        })

    })
    return (
        <div className='mobile text-white'>
            {/* Navigation */}
            <div className="mobile-nav hidden relative h-screen">
                {/* Close */}
                <div className="nav-option">
                    <div className="nav-option-inner w-full flex justify-end py-5 px-3 md:px-10">
                        <img className='nav-close py-3 px-3' src={navClose} alt="cancel" />
                    </div>
                </div>

                <div className="nav-content">
                    {/* Nav Links */}
                    <nav className="nav-content-inner pt-40 flex flex-col items-center">
                        {/* Nav home */}
                        <div onClick={handleHomeClick} className='nav-home w-max px-10 py-3 text-2xl text-white text-opacity-60 bg-red-500'>
                            <p>
                                Home
                            </p>
                        </div>

                        {/* Nav work */}
                        <div onClick={handleWorkClick} className='nav-work w-max my-3 px-10 py-3 text-2xl text-white text-opacity-60 bg-green-700'>
                            <p>
                                Work
                            </p>
                        </div>

                        {/* Nav resume */}
                        <div onClick={handleResumeClick} className='nav-resume w-max mb-3 px-10 py-3 text-2xl text-white text-opacity-60'>
                            <p>
                                Résumé
                            </p>
                        </div>
                    </nav>

                    {/* Social connections */}
                    <div className="social-connections flex flex-col items-center pt-6">
                        <div className="title w-max text-opacity-90 px-3 py-1 text-2xl font-cat-semibold">
                            <p>
                                Connect with me
                            </p>
                        </div>

                        {/* social links */}
                        <div className="social-links flex px-3 py-2 w-max">
                            {/* Github */}
                            {/* Used anchor tags because of external link, check if solution to v6 external routing exists later */}
                            <a href="https://github.com/Dahnie" className="mobile-github-link">
                                <img src={githubAvatar} alt="github" className="h-7" />
                            </a>

                            {/* Mail */}
                            <Link to="#" onClick={handleMailLink} className="mobile-mail-link">
                                <img src={mailAvatar} alt="mail" className="h-7 px-2 mx-2.5" />
                            </Link>

                            {/* LinkedIn */}
                            {/* Used anchor tags because of external link, check if solution to v6 external routing exists later */}
                            <a href="https://https://www.linkedin.com/in/daniel-adeneye-0825b81a1/" className="mobile-linkedin-link">
                                <img src={linkedinAvatar} alt="linkedin" className="h-7 pr-2 mr-2.5" />
                            </a>

                            {/* Twitter */}
                            {/* Used anchor tags because of external link, check if solution to v6 external routing exists later */}
                            {/* TODO Get the correct twitter link */}
                            <a href="https://github.com/Dahnie" className="mobile-twitter-link">
                                <img src={twitterAvatar} alt="" className="h-7" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className='mobile-main-content h-screen overflow-auto'>
                {/* Open */}
                <div className="nav-option flex">
                    <div className="nickname flex justify-end py-5 px-4 md:px-10 text-white text-3xl text-opacity-90 font-cat-medium">
                        <p>Dan.</p>
                    </div>

                    <div className="nav-option-inner w-full flex justify-end py-5 px-3 md:px-10">
                        <img className='nav-open py-3 px-3' src={navBurger} alt="open" />
                    </div>
                </div>

                {/* Dynamic part of page dependding on route */}
                <div className="mobile-main-content-inner">
                    {
                        // If pathname === "/", fully home and not "work-home"(like on web), set to Home
                        mobilePage === "Home" ?
                            (
                                <div className="mobile-home mt-10">
                                    {/* Mobile Home */}
                                    <div className="mobile-home-inner">
                                        <div className="mobile-bio  flex flex-col items-center">
                                            <div className="profile-img h-40 w-40 rounded-full overflow-hidden">
                                                <img src={profileImg} alt="avatar-img" />
                                            </div>
                                            <div className="name text-2xl md:text-3xl font-cat-medium flex justify-center pt-7">
                                                <p>
                                                    Hello, I'm Daniel Adeneye.
                                                </p>
                                            </div>
                                            <div className="mobile-description w-3/4 md:w-4/6 mt-2 md:mt-5">
                                                <p className='text-center text-white text-opacity-60'>
                                                    I'm a <span className=' text-white text-opacity-60 mobile-bio-text-1'>frontend developer</span>. I build high quality and modern <span className='mobile-bio-text-2 text-white text-opacity-60'>web applications</span> with amazing user interfaces with dynamic user experieces. I am currently learning <span className="mobile-bio-text-3 text-white text-opacity-60">server-side development</span> and I am also deeply interested in <span className='bio-text-4 text-white text-opacity-60'>cybersecurity</span>.
                                                </p>
                                            </div>
                                        </div>
                                        {/* Explore btn */}
                                        <div className="explore-btn flex justify-center mt-5">
                                            <button className='flex items-center bg-secondaryBg px-7 py-4 text-lg font-cat-medium'>Explore My Work<span><img src={rightArrow} alt="right arrow" /></span></button>
                                        </div>

                                        {/* footer */}
                                        <div className="footer mt-24 md:mt-36 flex flex-col items-center">
                                            {/* social links */}
                                            <div className="social-links flex px-3 py-2 w-max">
                                                {/* Github */}
                                                <Link to="https://github.com/Dahnie" className="mobile-github-link">
                                                    <img src={githubAvatar} alt="github" className="h-7" />
                                                </Link>
                                                {/* Mail */}
                                                <Link to="#" onClick={handleMailLink} className="mobile-mail-link">
                                                    <img src={mailAvatar} alt="mail" className="h-7 px-2 mx-6" />
                                                </Link>
                                                {/* LinkedIn */}
                                                {/* TODO get the correct avatar */}
                                                <Link to="https://https://www.linkedin.com/in/daniel-adeneye-0825b81a1/" className="mobile-linkedin-link">
                                                    <img src={linkedinAvatar} alt="linkedin" className="h-7 pr-2 mr-6" />
                                                </Link>
                                                {/* Twitter */}
                                                {/* TODO Get the correct twitter link */}
                                                <Link to="https://github.com/Dahnie" className="mobile-twitter-link">
                                                    <img src={twitterAvatar} alt="" className="h-7" />
                                                </Link>
                                            </div>
                                            {/* Inspiration Text */}
                                            <div className="mobile-inspiration-text mt-2 text-white text-opacity-60 font-cat-medium">
                                                <p>Inspired by <span className='text-white text-opacity-100'>Kadet</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            // Else if page === Work, set to work
                            : mobilePage === "Work" ?
                                <MobileWork />
                                // Else page === Resume, set to resume
                                :
                                <MobileResume />

                    }
                </div>
            </div>
        </div>

    )
}

export default MobileHome