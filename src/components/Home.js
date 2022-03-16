import React from 'react'
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Work from "./Work";
import Resume from "./Resume";
import "../assets/styles/css/App.css";
import smallLine from "../assets/img/small-line.svg";
import longLine from "../assets/img/long-line.svg";
import profileImg from "../assets/img/profile-img.png";
import githubAvatar from "../assets/img/github-avatar.svg";
import mailAvatar from "../assets/img/mail-avatar.svg";
import twitterAvatar from "../assets/img/twitter-avatar.svg";
import arrowUp from "../assets/img/arrow-up.svg";


function Home() {


    // let navigate = useNavigate()
    // The code below handles the hover and active animation effects on the navigation
    const [workLineSrc, setWorkLineSrc] = useState(smallLine)
    const [resumeLineSrc, setResumeLineSrc] = useState(smallLine)
    // State that handles the dynamic page routing
    const [page, setPage] = useState("Work")
    const workRef = useRef(null)
    const resumeRef = useRef(null)
    // Refs for animations using gsap
    let introductionRef = useRef(null)
    let webcontainerRef = useRef(null)
    let briefbioRef = useRef(null)
    let profileImgRef = useRef(null)
    let githubLinkRef = useRef(null)
    let mailLinkRef = useRef(null)
    let LinkedInLinkRef = useRef(null)
    let inspirationTextRef = useRef(null)
    let appNavigationRef = useRef(null)
    let workLineRef = useRef(null)
    let resumeLineRef = useRef(null)
    // GSAP Animation Timeline 
    const tl = gsap.timeline()

    // For work link, the 2 functions handle the hover on and off of the work link
    const handleWorkHoverOn = function (e) {
        e.stopPropagation();
        workRef.current.firstChild.classList.add("menu-hover")
        // tl.to(workLineRef, { duration: .5, width: "100px" })
        // tl.set(document.querySelector(".work-menu-line"), { duration: 2, attr: { src:  } });
        setTimeout(() => {
            setWorkLineSrc(longLine)
        }, 120);
    }
    const handleWorkHoverOff = function (e) {
        workRef.current.firstChild.classList.remove("menu-hover")
        if (workRef.current.classList.contains("active-menu")) {
            setTimeout(() => {
                setWorkLineSrc(longLine)
            }, 120);
        } else {
            // tl.set(document.querySelector(".work-menu-line"), { duration: .8, attr: { src: smallLine } });
            setTimeout(() => {
                setWorkLineSrc(smallLine)
            }, 120);
        }
    }

    // For Resume Link, the 2 functions handle the hover on and off of the resume link
    const handleResumeHoverOn = function (e) {
        e.stopPropagation();
        resumeRef.current.firstChild.classList.add("menu-hover")
        setTimeout(() => {
            setResumeLineSrc(longLine)
        }, 120);

    }
    const handleResumeHoverOff = function (e) {
        resumeRef.current.firstChild.classList.remove("menu-hover")
        if (resumeRef.current.classList.contains("active-menu")) {
            setTimeout(() => {
                setResumeLineSrc(longLine)
            }, 120);
        } else {
            setTimeout(() => {
                setResumeLineSrc(smallLine)
            }, 120);
        }
    }

    // Handles work active effects (onClick)
    const handleWorkActiveEffect = function (e) {
        e.stopPropagation()
        setPage("Work")
        // history.push("/work")
        // navigate("/work")
        if (resumeRef.current.classList.contains("active-menu")) {
            resumeRef.current.classList.remove("active-menu")
            workRef.current.classList.add("active-menu")
            setResumeLineSrc(smallLine)
        }
    }

    // Handles work active effects (onClick)
    const handleResumeActiveEffect = function (e) {
        e.stopPropagation()
        setPage("Resume")
        // navigate("/resume")
        // history.push("/resume")
        if (workRef.current.classList.contains("active-menu")) {
            workRef.current.classList.remove("active-menu")
            resumeRef.current.classList.add("active-menu")
            setWorkLineSrc(smallLine);
        }
    }
    const workElement = document.querySelector(".work-nav");
    const resumeElement = document.querySelector(".resume-nav");
    // adds the hover event listenerr on the menu navigation
    useEffect(() => {

        // GSAP ANIMATIONS START
        tl
            // .to(webcontainerRef, 0, { css: { visibility: "visible" } })
            .from(introductionRef, { duration: .8, opacity: 0, y: 50, ease: "power3.easeInOut" })
            .from(briefbioRef, { duration: .8, opacity: 0, y: 50, ease: "power3.easeInOut", delay: .1 })
            // TODO Change the next two to staggerFrom
            // .to(appNavigationRef, { duration: .9, css: { visibility: "visible" } })
            .from(appNavigationRef, { duration: .4, opacity: 0, x: -30, ease: "power3.easeInOut" })
            // .from(resumeElement, { duration: .4, opacity: 0, x: -30, ease: "power3.easeInOut" })
            .from(profileImgRef, { duration: .6, opacity: 0, x: -30, ease: "power3.easeInOut", delay: .1 })
            .from(githubLinkRef, { duration: .3, opacity: 0, y: 30, ease: "power3.easeInOut", delay: .1 })
            .from(mailLinkRef, { duration: .3, opacity: 0, y: 30, ease: "power3.easeInOut", delay: .1 })
            .from(LinkedInLinkRef, { duration: .3, opacity: 0, y: 30, ease: "power3.easeInOut", delay: .1 })
            .from(inspirationTextRef, { duration: .6, opacity: 0, x: -30, ease: "power3.easeInOut", delay: .1 })





        // GSAP ANIMATIONS END



        // Checks if a link contains the active menu at mount state(on first load)
        if (resumeRef.current.classList.contains("active-menu")) {
            setResumeLineSrc(longLine)
        } else {
            setResumeLineSrc(smallLine)
        }
        // Checks if a link contains the active menu at mount state(on first load)
        if (workRef.current.classList.contains("active-menu")) {
            setWorkLineSrc(longLine)
        } else {
            setWorkLineSrc(smallLine)
        }

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

        return () => {
            // Cleanup the event listeners
            workRef.current.removeEventListener("mouseover", handleWorkHoverOn)
            workRef.current.removeEventListener("mouseout", handleWorkHoverOff)
            resumeRef.current.removeEventListener("mouseover", handleResumeHoverOn)
            resumeRef.current.removeEventListener("mouseout", handleResumeHoverOff)
        }
    }, [])

    // Handling URL query change on click of link




    return (
        <div>
            <div className="app">

                {/* Container for web view */}
                <div ref={el => { webcontainerRef = el }} className="web-container h-screen grid grid-cols-12 px-16 bg-primaryBg font-cat-regular" >
                    {/* Left main side */}
                    <div className="left main-content col-span-6 text-white text-opacity-90 pl-8 pt-20">
                        <div ref={el => { introductionRef = el }} className="introduction text-5xl font-cat-semibold leading-tight">
                            Hello, I'm <br /> Daniel Adeneye
                        </div>
                        <div ref={el => { briefbioRef = el }} className="brief-bio py-5 w-553 leading-7 text-white text-opacity-60">
                            I'm a frontend developer. I build high quality and modern web applications with amazing user interfaces with dynamic user experieces. I am currently learning server-side development and I am also deeply interested in cybersecurity.
                        </div>

                        {/* App navigation Section */}
                        <div ref={el => { appNavigationRef = el }} className="app-navigation pt-10">
                            {/*  */}
                            <div ref={workRef} className="menu-nav work-nav relative flex cursor-pointer text-white text-opacity-60 w-56 items-center active-menu">
                                <div className="">00</div>
                                <div className="line mx-3">
                                    <div ref={el => { workLineRef = el }} className="default-line"></div>
                                    <img className="transition duration-1000 ease-in-out" src={workLineSrc} alt="menu-line" />
                                    {/* <img className="work-menu-line transition duration-1000 ease-in-out" src={smallLine} alt="menu-line" /> */}
                                </div>
                                <span>WORK</span>
                            </div>
                            {/* Resume Link */}
                            <div ref={resumeRef} className="menu-nav resume-nav flex cursor-pointer my-5 text-white text-opacity-60 w-56 items-center">
                                <div className="">01</div>
                                <div className="line mx-3">
                                    <div ref={el => { resumeLineRef = el }} className="default-line"></div>
                                    <img className='' src={resumeLineSrc} alt="menu-line" />
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
                            <div ref={el => { githubLinkRef = el }} className="social-github flex items-center ml-5 mr-2 font-cat-medium cursor-pointer">
                                <img className="relative -top-0.5" src={githubAvatar} alt="github" />
                                <p className="px-1.5">Github</p>
                                <img src={arrowUp} alt="arrow-up" />
                            </div>
                            {/* Mail */}
                            <div ref={el => { mailLinkRef = el }} className="social-mail flex items-center mx-2 font-cat-medium cursor-pointer">
                                <img className="relative -top-0.5" src={mailAvatar} alt="mail" />
                                <p className="px-1.5">Mail</p>
                                <img src={arrowUp} alt="arrow-up" />
                            </div>
                            {/* LinkedIn */}
                            <div ref={el => { LinkedInLinkRef = el }} className="social-linkedin flex items-center mx-2 font-cat-medium cursor-pointer">
                                <img className="relative -top-0.5" src={twitterAvatar} alt="linkedin" />
                                <p className="px-1.5">LinkedIn</p>
                                <img src={arrowUp} alt="arrow-up" />
                            </div>
                        </div>

                        {/* Inspiration Section */}
                        <div ref={el => { inspirationTextRef = el }} className="inspiration-text text-white text-opacity-60 font-cat-medium py-5">
                            <p>Inspired by <span className="text-white text-opacity-100">kadet</span>
                                {/* <Link to={() => window.path = "/"}>Home</Link> */}
                            </p>
                        </div>
                    </div>

                    {/* Right dynamic side  */}
                    <div className="right sub-content col-span-6 text-white text-opacity-90 ">
                        {/* Dynamic pages */}
                        {page === "Work" ? <Work /> : <Resume />}
                    </div>
                </div>

                {/* Container for mobile view */}
                <div className="mobile-container"></div>


            </div>
        </div>
    )
}

export default Home