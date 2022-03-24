import React, { useRef, useEffect } from 'react'
import { Link } from "react-router-dom"
import { gsap } from "gsap";
import githubAvatar from "../../assets/img/github-avatar.svg";
import mailAvatar from "../../assets/img/mail-avatar.svg";
import twitterAvatar from "../../assets/img/twitter-avatar.svg";
import linkedinAvatar from "../../assets/img/linkedin-avatar.svg";


function MobileResume({ handleWorkClick, handleHomeClick, handleMailLink, handleWorkRouteButton }) {
    let tl = gsap.timeline()
    let nameRef = useRef(null);
    let titleRef = useRef(null);
    let bioRef = useRef(null);
    let coreSkillsRef = useRef(null);
    let familiarSkillsRef = useRef(null);
    let onTheJobSkillsRef = useRef(null);
    let toolsSkillsRef = useRef(null);
    let experienceRef = useRef(null);
    let projectsRef = useRef(null);

    // const myFUnc = function (){
    //     window.location.
    // }


    useEffect(() => {
        tl
            .from([nameRef.children, titleRef.children, bioRef.children], { duration: 1, y: 75, opacity: 0, autoAlpha: 0, ease: "power3.easeInOut", stagger: 0.25 }, "<.8")
            .from([coreSkillsRef, familiarSkillsRef, onTheJobSkillsRef, toolsSkillsRef, experienceRef, projectsRef], { duration: 1, delay: .5, x: 150, opacity: 0, autoAlpha: 0, ease: "power3.easeInOut", stagger: 0.25 }, "<1")

    }, [])
    return (
        <div className="mobile-resume">
            <div id='resume-section' className='resume w-11/12 pb-8 pl-8 md:pl-14'>
                <div className="resume-inner bg-secondaryBg py-8 px-7">
                    <div ref={el => { nameRef = el }} className="name mb-1 h-10 overflow-hidden">
                        <div className='name-inner font-cat-medium text-white text-opacity-90 text-4xl '>
                            Daniel Adeneye
                        </div>
                    </div>
                    <div ref={el => { titleRef = el }} className="title mb-5 h-6 overflow-hidden">
                        <div className="title-inner text-white text-opacity-70 text-lg font-cat-light">
                            Frontend Developer
                        </div>
                    </div>
                    <div ref={el => { bioRef = el }} className="bio mb-10 h-max overflow-hidden">
                        <div className="bio-inner text-white text-opacity-40 font-cat-light leading-6">
                            I’m a <span className='text-white text-opacity-40'>frontend developer</span>. I harness modern tools and technologies in the design, build and customization of high quality and modern web applications with amazing user interfaces and dynamic user experiences. I am currently learning server-side development and I am also deeply interested in cybersecurity.
                        </div>
                    </div>
                    <div className="skills">
                        {/* Core technologies */}
                        <div ref={el => { coreSkillsRef = el }} className="core-technologies">
                            <div className="title text-white text-opacity-90 font-cat-medium flex items-center w-full">
                                <div className="flex flex-nowrap pr-1.5">
                                    <span>Core</span> <span className='pl-1'>Technologies</span>
                                </div>
                                {/* Divider line */}
                                <div className="divider-line h-1px w-full bg-white opacity-30">
                                </div>
                            </div>
                            <div className="content py-2">
                                <div className="content-inner text-white text-opacity-30 text-sm font-cat-light tracking-wider">
                                    HTML/CSS/Tailwind CSS, Javascript [ES6+], React JS, Next JS, Redux, Flux, Git,
                                    Material UI, GSAP.
                                </div>
                            </div>
                        </div>
                        {/* Familiar with */}
                        <div ref={el => { familiarSkillsRef = el }} className="familiar-with mt-3">
                            <div className="title text-white text-opacity-90 font-cat-medium flex items-center w-full">
                                <div className=" md:w-28 flex flex-nowrap pr-1.5">
                                    <span>Familiar</span> <span className='pl-1'>With</span>
                                </div>
                                {/* Divider line */}
                                <div className="divider-line h-1px w-full bg-white opacity-30">
                                </div>
                            </div>
                            <div className="content py-2">
                                <div className="content-inner text-white text-opacity-30 text-sm font-cat-light tracking-wider">
                                    Node JS, Express, MongoDB, MySQL, Sequelize-cli, Ejs.
                                </div>
                            </div>
                        </div>
                        {/* On the job */}
                        <div ref={el => { onTheJobSkillsRef = el }} className="on-the-job mt-3">
                            <div className="title text-white text-opacity-90 font-cat-medium flex items-center w-full">
                                <div className="flex flex-nowrap pr-1.5">
                                    <span>On</span> <span className='pl-1'>the</span> <span className='pl-1'>Job</span>
                                </div>
                                {/* Divider line */}
                                <div className="divider-line h-1px w-full bg-white opacity-30">
                                </div>
                            </div>
                            <div className="content py-2">
                                <div className="content-inner text-white text-opacity-30 text-sm font-cat-light tracking-wider">
                                    Agile/ Scrum. Version Control (Git).
                                </div>
                            </div>
                        </div>
                        {/* Tools  */}
                        <div ref={el => { toolsSkillsRef = el }} className="tools mt-3">
                            <div className="title text-white text-opacity-90 font-cat-medium flex items-center w-full">
                                <div className="flex flex-nowrap pr-1.5">
                                    <span>Tools</span>
                                </div>
                                {/* Divider line */}
                                <div className="divider-line h-1px w-full bg-white opacity-30">
                                </div>
                            </div>
                            <div className="content py-2">
                                <div className="content-inner text-white text-opacity-30 text-sm font-cat-light tracking-wider">
                                    Postman, Heroku, Firebase.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience*/}
                    <div ref={el => { experienceRef = el }} className="experiences">
                        {/*   */}
                        <div className="experience-1 mt-3">
                            <div className="title text-white text-opacity-90 font-cat-medium flex items-center w-full">
                                <div className="flex flex-nowrap pr-1.5">
                                    <p>Work </p> <span className='pl-1'> Experience</span>
                                </div>
                                {/* Divider line */}
                                <div className="divider-line h-1px w-full bg-white opacity-30">
                                </div>
                            </div>
                            <div className="work-place pt-3 pb-2">
                                <div className="work-place-inner text-white text-opacity-70 font-cat-light">
                                    HNG Internships - Frontend Developer [Intern]
                                </div>
                            </div>
                            <div className="work-date pb-2">
                                <div className="work-date-inner text-white text-opacity-30 text-sm font-cat-light tracking-wider">
                                    August 2021 - September 2021
                                </div>
                            </div>
                            <ul className="tasks-completed list-disc py-1 pl-5">
                                <li className="tasks-completed-inner list-item text-white text-opacity-30 text-sm font-cat-light tracking-wider">
                                    I contributed in developing user interfaces for quite a number of products
                                    within three months while learning new skills.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Projects*/}
                    <div ref={el => { projectsRef = el }} className="projects">
                        {/*   */}
                        <div className="experience-1 mt-5">
                            <div className="title text-white text-opacity-90 text-lg font-cat-medium flex items-center w-full">
                                <div className="flex flex-nowrap pr-1.5">
                                    <span>Projects</span>
                                </div>
                                {/* Divider line */}
                                <div className="divider-line h-1px w-full bg-white opacity-30">
                                </div>
                            </div>
                            <div className="content py-2">
                                <div className="content-inner text-white text-opacity-30 text-sm font-cat-light tracking-wider">
                                    <div className="content py-2">
                                        <div className="content-inner text-white text-opacity-30 font-cat-light tracking-wider">
                                            Links to my works can be found on <button onClick={handleWorkRouteButton} className='cursor-pointer text-white opacity-80'>sage-dann.netlify.com/work </button> and more
                                            details can be provided upon request
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lower section */}

            <div className="nav-buttons flex justify-center mb-2 text-sm">
                <div className="nav-btn pr-2 ">
                    <button onClick={handleHomeClick} className='home-btn bg-secondaryBg w-32 md:w-56 px-3 py-2'>
                        Home
                    </button>
                </div>
                <div className="nav-btn pl-2">
                    <button onClick={handleWorkClick} className='work-btn bg-secondaryBg w-32 md:w-56 px-3 py-2'>
                        Work
                    </button>
                </div>
            </div>

            {/* Soccials Section */}
            <div className="social-section mt-12 mb-16 flex flex-col items-center">
                {/* social links */}
                <div className="social-links flex px-3 py-2 w-max">
                    {/* Github */}
                    <a href="https://github.com/Dahnie" className="mobile-github-link">
                        <img src={githubAvatar} alt="github" className="h-7" />
                    </a>
                    {/* Mail */}
                    <Link to="#" onClick={handleMailLink} className="mobile-mail-link">
                        <img src={mailAvatar} alt="mail" className="h-7 px-2 mx-6" />
                    </Link>
                    {/* LinkedIn */}
                    {/* TODO get the correct avatar */}
                    <a href="https://https://www.linkedin.com/in/daniel-adeneye-0825b81a1/" className="mobile-linkedin-link">
                        <img src={linkedinAvatar} alt="linkedin" className="h-7 pr-2 mr-6" />
                    </a>
                    {/* Twitter */}
                    {/* TODO Get the correct twitter link */}
                    <a href="https://twitter.com/sage_dann" className="mobile-twitter-link">
                        <img src={twitterAvatar} alt="" className="h-7" />
                    </a>
                </div>
                {/* Inspiration Text */}
                <div className="mobile-inspiration-text mt-3 text-xs text-white text-opacity-60 font-cat-medium">
                    <p>Inspired by <a href='https://twitter.com/kadetXx' className='text-white text-sm text-opacity-100'>Kadet</a></p>
                </div>
            </div>
        </div>
    )
}

export default MobileResume