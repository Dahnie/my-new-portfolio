import React from 'react'
import { Link } from "react-router-dom"
import eyeIcon from "../../assets/img/eye-icon.svg";
import githubAvatar from "../../assets/img/github-avatar.svg";
import mailAvatar from "../../assets/img/mail-avatar.svg";
import twitterAvatar from "../../assets/img/twitter-avatar.svg";
import linkedinAvatar from "../../assets/img/linkedin-avatar.svg";

function MobileWork({ handleResumeClick, handleHomeClick, handleMailLink }) {

    const featuredProjects = [
        {
            name: "Quik Notes",
            tools: `REACT + TAILWINDCSS + MATERIAL UI`,
            description: "A sticky-note-taking application",
            githubLink: "https://github.com/Dahnie/Notepad-pro",
            isProjectLive: true,
            projectLink: "https://quik-note.netlify.app",
        },

        {
            name: "Plug App Page",
            tools: `REACT`,
            description: "A landing page for a mobile app",
            githubLink: "https://github.com/Dahnie/plug-landing-page",
            isProjectLive: true,
            projectLink: "https://plug-app.netlify.app",
        }
    ]

    const otherProjects = [
        {
            name: "My portfolio",
            tools: `REACT + GSAP`,
            description: "My amazing portfolio",
            githubLink: "https://github.com/Dahnie/my-new-portfolio",
            isProjectLive: true,
            projectLink: "https://sage-dann.netlify.app"
        },

        {
            name: "Tinder clone",
            tools: `REACT + EXPRESS + MONGODB + FIREBASE`,
            description: "Tinder app clone",
            githubLink: "https://github.com/Dahnie/tinder-app-clone",
            isProjectLive: true,
            projectLink: "https://tinder-clone-6fa92.web.app/"
        },
        {
            name: "Flick app",
            tools: `REACT + REACT BOOTSTRAP`,
            description: "A dashboard, signin and signup build",
            githubLink: "https://github.com/Dahnie/flick-project",
            isProjectLive: true,
            projectLink: "https://flick-dash.netlify.app"
        },
        {
            name: "Asap app",
            tools: `JAVASCRIPT + BLADE + TAILWINDCSS`,
            description: "A CMS application",
            githubLink: "https://github.com/Ajibola03/asap",
            isProjectLive: true,
            projectLink: "http://test-asap.herokuapp.com/"
        },

        {
            name: "Choice coin",
            tools: `HTML/CSS + JAVASCRIPT + AlGORAND SDK`,
            description: "A voting algorithm on algorand blockchain",
            githubLink: "https://github.com/Dahnie/choice-coin-voting",
            isProjectLive: false,
            projectLink: "##"
        },
        {
            name: "Tiktok clone",
            tools: `REACT + EXPRESS + MONGODB + HEROKU`,
            description: "Tiktok app clone",
            githubLink: "https://github.com/Dahnie/tiktok-clone-app",
            isProjectLive: false,
            projectLink: "#"
        },
        // {
        //     name: "DSA",
        //     tools: `JAVASCRIPT(ES6+) + DEEP THINKING`,
        //     description: "Algorithm scripting",
        //     githubLink: "#",
        //     isProjectLive: false,
        //     projectLink: "#"
        // }

    ]

    // Functions

    return (
        <div className='mobile-work'>
            {/* FEATURED */}
            <div className="featured-works pl-8 md:pl-14 ">
                <div className="title text-white text-opacity-40 text-sm font-cat-semibold pb-4">FEATURED</div>
                <div className="projects">
                    {/* Mapping all the projects in the array out */}
                    {featuredProjects.map((project, i) => (
                        <div key={i} className={`elem-${i} project bg-secondaryBg w-11/12 py-6 px-10 mb-8`}>
                            <div className="project-name text-white text-opacity-90 text-2xl xl:text-3xl pb-1.5">
                                {project.name}
                            </div>
                            <div className="project-tools text-white text-opacity-60 text-xs font-cat-medium flex">
                                {project.tools}
                            </div>
                            <div className="project-description pt-6 pb-12 lg:pb-6 text-white text-opacity-40">
                                {project.description}
                            </div>
                            <div className="project-links flex text-xs 2xl:text-sm text-white text-opacity-60 ">
                                {/* Used ancchor tags because of external link, check if solution to v6 external routing exists later */}
                                <a href={project.githubLink} className="github-link flex pr-4">
                                    <img className="relative top-0" src={githubAvatar} alt="github-icon" />
                                    <p className="px-1">Code</p>
                                </a>

                                {/* Used ancchor tags because of external link, check if solution to v6 external routing exists later */}
                                {project.isProjectLive &&
                                    (<a href={project.projectLink} className="live-link flex">
                                        <img className="relative top-0" src={eyeIcon} alt="eye-icon" />
                                        <p className="px-1">Live</p>
                                    </a>)
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* OTHERS */}
            <div className="other-works pl-8 md:pl-14 pb-8 pt-5">
                <div className="title text-white text-opacity-40 text-sm font-cat-semibold pb-4">OTHERS</div>
                <div className="projects">
                    {/* Mapping all the projects in the array out */}
                    {otherProjects.map((project, i) => (
                        <div key={i} className={`elem-${i} project bg-secondaryBg w-11/12 py-6 px-10 mb-8`}>
                            <div className="project-name text-white text-opacity-90 text-2xl xl:text-3xl pb-1.5">
                                {project.name}
                            </div>
                            <div className="project-tools text-white text-opacity-60 text-xs font-cat-medium flex">
                                {project.tools}
                            </div>
                            <div className="project-description pt-6 pb-12 lg:pb-6 text-white text-opacity-40">
                                {project.description}
                            </div>
                            <div className="project-links flex text-xs 2xl:text-sm text-white text-opacity-60 ">
                                <a href={project.githubLink} className="github-link flex pr-4">
                                    <img className="relative top-0" src={githubAvatar} alt="github-icon" />
                                    <p className="px-1">Code</p>
                                </a>

                                {project.isProjectLive &&
                                    (<a href={project.projectLink} className="live-link flex">
                                        <img className="relative top-0" src={eyeIcon} alt="eye-icon" />
                                        <p className="px-1">Live</p>
                                    </a>)
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Nav Buttons */}
            <div className="nav-buttons flex justify-center mb-2 text-sm">
                <div className="nav-btn pr-2 ">
                    <button onClick={handleHomeClick} className='home-btn bg-secondaryBg w-32 md:w-56 px-3 py-2'>
                        Home
                    </button>
                </div>
                <div className="nav-btn pl-2">
                    <button onClick={handleResumeClick} className='resume-btn bg-secondaryBg w-32 md:w-56 px-3 py-2'>
                        Résumé
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

export default MobileWork