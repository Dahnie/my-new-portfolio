import React from 'react'
import { useRef, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { gsap } from "gsap";
import Work from "./Work";
import Resume from "./Resume";
import "../assets/styles/css/App.css";
import profileImg from "../assets/img/avatar-edit.png";
import githubAvatar from "../assets/img/github-avatar.svg";
import mailAvatar from "../assets/img/mail-avatar.svg";
import twitterAvatar from "../assets/img/twitter-avatar.svg";
import arrowUp from "../assets/img/arrow-up.svg";
import MobileHome from './mobile/MobileHome';




function Home() {


    const navigate = useNavigate()
    let location = useLocation()
    // State that handles the dynamic web page routing
    const [page, setPage] = useState("Work")
    // State that handles the dynamic mobile page routing while respecting the web state
    const [mobilePage, setMobilePage] = useState("Home")
    const workRef = useRef(null)
    const resumeRef = useRef(null)
    // Refs for animations using gsap
    let introductionRef = useRef(null)
    let webcontainerRef = useRef(null)
    let briefbioRef = useRef(null)
    let profileImgRef = useRef(null)
    let githubLinkRef = useRef(null)
    let mailLinkRef = useRef(null)
    let twitterLinkRef = useRef(null)
    let inspirationTextRef = useRef(null)
    let appNavigationRef = useRef(null)
    // GSAP Animation Timeline 
    const tl = gsap.timeline()

    // For work link, the 2 functions handle the hover on and off of the work link
    const handleWorkHoverOn = function (e) {
        e.stopPropagation();
        // Handle color change on words effect
        workRef.current.firstChild.classList.add("menu-hover")
        // Handle line effect
        if ((location.pathname === "/" || location.pathname === "/work") && workRef.current.classList.contains("active-menu")) {
            return true;
        } else {
            gsap.to(".work-line", { duration: 0.4, css: { width: "72px" } })
        }
    }
    const handleWorkHoverOff = function (e) {
        // Handle color change on words effect
        workRef.current.firstChild.classList.remove("menu-hover")
        // Handle line effect
        if (workRef.current.classList.contains("active-menu")) {
            return true;
        } else {
            gsap.to(".work-line", { duration: 0.4, css: { width: "54px" } })
        }
    }

    // For Resume Link, the 2 functions handle the hover on and off of the resume link
    const handleResumeHoverOn = function (e) {
        e.stopPropagation();
        // Handle line effect
        if (location.pathname === "/resume" && resumeRef.current.classList.contains("active-menu")) {
            return true;
        } else {
            gsap.to(".resume-line", { duration: 0.4, css: { width: "72px" } })
        }
        resumeRef.current.firstChild.classList.add("menu-hover")

    }
    const handleResumeHoverOff = function (e) {
        // Handles color change on words
        resumeRef.current.firstChild.classList.remove("menu-hover")
        // Handles line effect
        if (resumeRef.current.classList.contains("active-menu")) {
            return true
        } else {
            gsap.to(".resume-line", { duration: 0.4, css: { width: "54px" } })
        }
    }

    // Handles work active effects (onClick)
    const handleWorkActiveEffect = function (e) {
        e.stopPropagation()
        setPage("Work")
        setMobilePage("Work")
        // Change the url on active
        window.history.replaceState(null, "Resume | Daniel Adeneye", "/work")
        if (resumeRef.current.classList.contains("active-menu")) {
            // Handles line effect
            gsap.to(".work-line", { duration: 0.4, css: { width: "72px", opacity: "1" } })
            gsap.to(".resume-line", { duration: 0.4, css: { width: "54px", opacity: ".5" } })
            resumeRef.current.classList.remove("active-menu")
            workRef.current.classList.add("active-menu")
        }
    }

    // Handles work active effects (onClick)
    const handleResumeActiveEffect = function (e) {
        e.stopPropagation()
        setPage("Resume")
        setMobilePage("Resume")
        // chanhe the url on active
        window.history.replaceState(null, "Work | Daniel Adeneye", "/resume")
        if (workRef.current.classList.contains("active-menu")) {
            // Handle line effect
            gsap.to(".resume-line", { duration: 0.4, css: { width: "72px", opacity: "1" } })
            gsap.to(".work-line", { duration: 0.4, css: { width: "54px", opacity: ".5" } })
            workRef.current.classList.remove("active-menu")
            resumeRef.current.classList.add("active-menu")
        }
    }

    // Handle mail link actions
    const handleMailLink = function (e) {
        e.preventDefault()
        window.location.href = "mailto:adeneyedaniel007@gmail.com"
    }

    // Handle work link below on the footer of resume(both web and mobile)
    const handleWorkRouteButton = function () {
        setMobilePage("Work")
        setPage("Work")
        navigate("/work")
    }

    // Function that checks the value of route to determine page and handle effect
    const handlePageChangeOnRouteChange = function () {
        if (location.pathname === "/") {
            setPage("Work")
            // Sets the state for the mobile page view
            // Since Home is completely different from Work in mobile page, this is highly needed to keep track
            setMobilePage("Home")
            workRef.current.classList.add("active-menu")
            resumeRef.current.classList.remove("active-menu")
            // Handle line effect on load
            gsap.to(".work-line", { duration: 0.4, css: { width: "72px", opacity: "1" } })
        } else if (location.pathname === "/work") {
            setPage("Work")
            // Sets the state for the mobile page view
            setMobilePage("Work")
            workRef.current.classList.add("active-menu")
            resumeRef.current.classList.remove("active-menu")
            // Handle line effect on load
            gsap.to(".work-line", { duration: 0.4, css: { width: "72px", opacity: "1" } })

        }
        else if (location.pathname === "/resume") {
            setPage("Resume")
            // Sets the state for the mobile page view
            setMobilePage("Resume")
            resumeRef.current.classList.add("active-menu")
            workRef.current.classList.remove("active-menu")
            // Handle line effect on load
            gsap.to(".resume-line", { duration: 0.4, css: { width: "72px", opacity: "1" } })
        }
    }



    // adds the hover event listenerr on the menu navigation
    useEffect(() => {
        // WORK HANDLERS START
        handlePageChangeOnRouteChange()

        // Introduction VARS
        const firstIntroductionLine = introductionRef.firstElementChild;
        const secondIntroductionLine = firstIntroductionLine.nextSibling;

        // GSAP ANIMATIONS START
        tl
            .to(webcontainerRef, { duration: 0, css: { visibility: "visible" } })
        // FIX Uncomment animations
        //     .from([firstIntroductionLine.children, secondIntroductionLine.children], { duration: 1, y: 75, opacity: 0, autoAlpha: 0, ease: "power3.easeInOut", stagger: 0.18 }, "<.8")
        //     .from(briefbioRef, { duration: .8, opacity: 0, y: 50, ease: "power3.easeInOut", delay: .1 })
        //     .from(appNavigationRef, { duration: .5, opacity: 0, x: -30, ease: "power3.easeInOut" })
        //     .from(profileImgRef, { duration: .5, opacity: 0, x: -30, ease: "power3.easeInOut", delay: .1 })
        //     .from([githubLinkRef, mailLinkRef, twitterLinkRef, inspirationTextRef], { duration: 1, x: -30, opacity: 0, autoAlpha: 0, ease: "power3.easeInOut", stagger: 0.2 }, "<.3")

        // // Handles bio text animation
        setInterval(() => {
            tl
                .to([".bio-text-1", ".bio-text-2", ".bio-text-3", ".bio-text-4", ".bio-text-5"], { duration: 2, css: { color: "rgba(255, 255, 255, 1)" }, ease: "power3.easeInOut", stagger: 0, delay: 2 },)
                .to([".bio-text-1", ".bio-text-2", ".bio-text-3", ".bio-text-4", ".bio-text-5"], { duration: 2, css: { color: "rgba(255, 255, 255, .6)" }, autoAlpha: 0, ease: "power3.easeInOut", stagger: 0 },)

        }, 4000)

        // GSAP ANIMATIONS END

        // Creates the event listeners on the links
        if (workRef && workRef.current && resumeRef && resumeRef.current) {
            // Handles hover effects
            workRef.current.addEventListener("mouseover", handleWorkHoverOn)
            workRef.current.addEventListener("mouseout", handleWorkHoverOff)
            resumeRef.current.addEventListener("mouseover", handleResumeHoverOn)
            resumeRef.current.addEventListener("mouseout", handleResumeHoverOff)
            // Handles active effects
            workRef.current.addEventListener("click", handleWorkActiveEffect)
            resumeRef.current.addEventListener("click", handleResumeActiveEffect)
        }

        // WEB HANDLERS END

        return () => {
            // Cleanup the event listeners
            // workRef.current.removeEventListener("mouseover", handleWorkHoverOn)
            // workRef.current.removeEventListener("mouseout", handleWorkHoverOff)
            // resumeRef.current.removeEventListener("mouseover", handleResumeHoverOn)
            // resumeRef.current.removeEventListener("mouseout", handleResumeHoverOff)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    // The use effect tracks if the browser back or front button is pressed and reloads the page(Solves in-page routing bug where the route changees and page doesnt load)
    // The useEffect is dependent on change of the browwser location(pathname)
    useEffect(() => {
        handlePageChangeOnRouteChange()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])




    return (
        <div>
            <div className="app w-full">
                {/* Container for web view */}
                <div ref={el => { webcontainerRef = el }} className="web-container hidden w-full h-screen overflow-hidden lg:grid grid-cols-12 px-3 xl:px-12 2xl:px-5 3xl:px-28 bg-primaryBg font-cat-regular" >
                    {/* Left main side */}
                    <div className="left main-content col-span-6 text-white text-opacity-90 pl-8 xl:pl-12 2xl:pl-24 4xl:pl-32 5xl:pl-40 pt-20 w-full 2xl:w-4/5">
                        <div ref={el => { introductionRef = el }} className="introduction text-4xl xl:text-5xl font-cat-semibold leading-tight">
                            {/* Note: The styles on the div element below is VERY !important to the animation*/}
                            <div className='introduction-inner h-14 overflow-hidden'>
                                <div className=''>
                                    Hello, I'm
                                </div>
                            </div>
                            {/* Note: The styles on the div element below is VERY !important to the animation*/}
                            <div className='introduction-inner h-14 overflow-hidden'>
                                <div>
                                    Daniel Adeneye.
                                </div>
                            </div>
                        </div>
                        <div ref={el => { briefbioRef = el }} className="brief-bio py-5 w-400px 2xl:w-480px leading-7 text-white text-opacity-60 font-cat-light">
                            I'm a <span className=' text-white text-opacity-60 bio-text-1'>frontend developer</span>. I build high quality and modern <span className='bio-text-2 text-white text-opacity-60'>web applications</span> with amazing user interfaces with dynamic user <span className='bio-text-3 text-white text-opacity-60'>experieces</span>. I am <span className="bio-text-4 text-white text-opacity-60">currently learning</span>  server-side development and I am also deeply interested in <span className='bio-text-5 text-white text-opacity-60'>cybersecurity</span>.
                        </div>

                        {/* App navigation Section */}
                        <div ref={el => { appNavigationRef = el }} className="app-navigation pt-10">
                            {/*  */}
                            <div ref={workRef} className="menu-nav work-nav relative flex cursor-pointer text-white text-opacity-60 w-56 items-center active-menu">
                                <div className="">00</div>
                                <div className="line mx-3">
                                    <div className="default-line work-line" style={{ height: "1px", width: "54px", backgroundColor: "white", opacity: "0.5" }}></div>
                                </div>
                                <span>WORK</span>
                            </div>
                            {/* Resume Link */}
                            <div ref={resumeRef} className="menu-nav resume-nav flex cursor-pointer my-5 text-white text-opacity-60 w-56 items-center">
                                <div className="">01</div>
                                <div className="line mx-3">
                                    <div className="default-line resume-line bg-red-500" style={{ height: "1px", width: "54px", backgroundColor: "white", opacity: "0.5" }}></div>
                                </div>
                                <span>RESUME</span>
                            </div>
                        </div>


                        {/* Socials Section*/}
                        <div className="socials flex text-white text-opacity-60 pt-14">
                            <div ref={el => { profileImgRef = el }} className="profile-img w-12 h-12 rounded-full overflow-hidden">
                                <img src={profileImg} alt="avatar-img" />
                            </div>
                            {/* Github */}
                            <a href="https://github.com/Dahnie" ref={el => { githubLinkRef = el }} className="social-github flex items-center ml-5 mr-2 font-cat-medium cursor-pointer hover:text-white hover:text-opacity-100 hover:transition-all">
                                <img className="relative -top-0.5" src={githubAvatar} alt="github" />
                                <p className="px-1.5">Github</p>
                                <img src={arrowUp} alt="arrow-up" />
                            </a>
                            {/* Mail */}
                            <Link to="#" onClick={handleMailLink}
                                ref={el => { mailLinkRef = el }} className="social-mail flex items-center mx-2 font-cat-medium cursor-pointer hover:text-white hover:text-opacity-100 hover:transition-all">
                                <img className="relative -top-0.5" src={mailAvatar} alt="mail" />
                                <p className="px-1.5">Mail</p>
                                <img src={arrowUp} alt="arrow-up" />
                            </Link>

                            {/* Twitter */}
                            <a href='https://twitter.com/sage_dann' ref={el => { twitterLinkRef = el }} className="social-twitter flex items-center mx-2 font-cat-medium cursor-pointer hover:text-white hover:text-opacity-100 hover:transition-all">
                                <img className="relative -top-0.5" src={twitterAvatar} alt="linkedin" />
                                <p className="px-1.5">Twitter</p>
                                <img src={arrowUp} alt="arrow-up" />
                            </a>
                        </div>

                        {/* Inspiration Section */}
                        <div ref={el => { inspirationTextRef = el }} className="inspiration-text text-white text-opacity-60 font-cat-light py-5">
                            <p>Inspired by <a href="https://twitter.com/kadetXx" className="text-white font-cat-light text-opacity-100">kadet</a>
                            </p>
                        </div>
                    </div>

                    {/* Right dynamic side  */}
                    <div className="right sub-content col-span-6 text-white text-opacity-90 5xl:pr-28">
                        {/* Dynamic pages */}
                        {page === "Work" ? <Work /> : <Resume handleWorkRouteButton={handleWorkRouteButton} />}
                    </div>
                </div>

                {/* Container for mobile view */}
                <div className="mobile-container lg:hidden bg-primaryBg">
                    <MobileHome page={page} setPage={setPage} mobilePage={mobilePage} setMobilePage={setMobilePage} handleWorkRouteButton={handleWorkRouteButton} />
                </div>

            </div>
        </div>
    )
}

export default Home