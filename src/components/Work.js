import React, { useEffect, useRef } from 'react';
import Masonry from 'react-masonry-css'
import { gsap } from 'gsap';
import CSSRulePlugin from "gsap/CSSRulePlugin"
import "../assets/styles/css/Work.css";
import eyeIcon from "../assets/img/eye-icon.svg";
import githubAvatar from "../assets/img/github-avatar.svg";

function Work() {
    // Featured projects array
    const featuredProjects = [
        {
            name: "Quik Notes",
            tools: `REACT + TAILWINDCSS + MATERIAL UI`,
            description: "A sticky-note-taking application",
            githubLink: "#",
            isProjectLive: true,
            projectLink: "https://quik-notes.netlify.app",
        },

        {
            name: "Plug App Page",
            tools: `REACT`,
            description: "A landing page for a mobile app",
            githubLink: "##",
            isProjectLive: true,
            projectLink: "https://plug-app.netlify.app",
        }
    ]

    // Other projects array
    const otherProjects = [
        {
            name: "My portfolio",
            tools: `REACT + GSAP`,
            description: "My amazing portfolio",
            githubLink: "#",
            isProjectLive: true,
            projectLink: "https://daniel-adeneye.netlify.app"
        },

        {
            name: "Tinder clone",
            tools: `REACT + EXPRESS + MONGODB + FIREBASE`,
            description: "Tinder app clone",
            githubLink: "##",
            isProjectLive: true,
            projectLink: "https://tinder-clone-6fa92.web.app/"
        },
        {
            name: "Flick app",
            tools: `REACT+ REACT BOOTSTRAP`,
            description: "A dashboard, signin and signup build",
            githubLink: "#",
            isProjectLive: true,
            projectLink: "#"
            // TODO Rename the flick wheel deploy link
        },

        {
            name: "Choice coin",
            tools: `HTML/CSS + JAVASCRIPT + AlGORAND SDK`,
            description: "A voting algorithm on algorand blockchain",
            githubLink: "##",
            isProjectLive: false,
            projectLink: "##"
        },
        {
            name: "Tiktok clone",
            tools: `REACT + EXPRESS + MONGODB + HEROKU`,
            description: "Tiktok app clone",
            githubLink: "##",
            isProjectLive: true,
            projectLink: "https://"
        },
        {
            name: "DSA",
            tools: `JAVASCRIPT(ES6+) + DEEP THINKING`,
            description: "Algorithm scripting",
            githubLink: "#",
            isProjectLive: false,
            projectLink: "#"
        },

        {
            name: "Asap app",
            tools: `JAVASCRIPT + BLADE + TAILWINDCSS`,
            description: "A CMS application",
            githubLink: "##",
            isProjectLive: false,
            projectLink: "##"
        }
    ]

    let feauturedProjectsReveal = CSSRulePlugin.getRule(".project::after")
    let featuredTitleRef = useRef(null)
    let featuredProjectsRef = useRef(null)
    let otherTitleRef = useRef(null)
    let workSectionRef = useRef(null)
    let masonryRef = useRef(null)

    // Gsap animations
    const tl = gsap.timeline();
    useEffect(() => {
        // GSAP ANIMATIONS
        // Featured projects
        // TODO SSTOPPED
        tl
            .to(workSectionRef, { duration: 0, css: { visibility: "visible" } })
            .from(featuredTitleRef, { duration: 0.7, opacity: 0, y: -30, delay: 1.5 })
            .to(featuredProjectsRef, { duration: 0, css: { visibility: "visible" }, delay: .3 })
            .to(feauturedProjectsReveal, { duration: 1.9, width: "0%", ease: "power2.easeInOut" })
            .from(featuredProjectsRef, { duration: "0.8", scale: "0.95", ease: "power3.easeInOut", delay: -1 })
            .from(otherTitleRef, { duration: 0.7, opacity: 0, y: -30 })



        // FEAUTIRED
        const projects = document.querySelectorAll(".project");
        projects.forEach((project) => {
            project.addEventListener("mouseover", (e) => {
                e.stopPropagation();
                if (project.nextElementSibling) {
                    project.nextElementSibling.style.opacity = ".45"
                }
                if (project.previousElementSibling) {
                    project.previousElementSibling.style.opacity = ".45"
                }
            })
            project.addEventListener("mouseout", (e) => {
                e.stopPropagation();
                if (project.nextElementSibling) {
                    project.nextElementSibling.style.opacity = "1"
                }
                if (project.previousElementSibling) {
                    project.previousElementSibling.style.opacity = "1"
                }
            })


        })

        // OTHERS

        // NOTE: The mansonry grid renders the elements as two separate columns and the below script is to get all the children nodes into one array(otherProjects) 
        const masonryGridCol = document.querySelectorAll(".my-masonry-grid_column")
        let otherProjects = [];
        let gridColumn = [];
        masonryGridCol.forEach((column, i) => {
            gridColumn.push(column)
        })
        // GridColumn consists of the two mansonry columns whicch is an object with a method of chilNodes that contains the children of that node
        for (let i = 0; i < gridColumn.length; i++) {
            for (let j = 0; j < gridColumn[i].childNodes.length; j++) {
                otherProjects.push(gridColumn[i].childNodes[j])
            }
        }

        // Handling the hover effect on all the elements (change of color)
        otherProjects.forEach((project, i) => {
            // On hover, change all elements opacity to .55 while leaving the hovered elements opacity on 1
            project.addEventListener("mouseover", (e) => {
                otherProjects.forEach((project) => {
                    project.style.opacity = ".45"
                })
                // Changing the prsent element back to default
                project.style.opacity = "1"
            })
            // On mouseout, change all elements' opacity to 1
            project.addEventListener("mouseout", (e) => {
                otherProjects.forEach((project) => {
                    project.style.opacity = "1"
                })
                // Changing the present element back to default
                project.style.opacity = "1"
            })
        })


    }, [])
    return (
        <div ref={el => (workSectionRef = el)} id="work-section" className='work overflow-auto h-screen pt-24'>
            {/* Featured */}
            <div className="featured-works pl-10">
                <div ref={el => { featuredTitleRef = el }} className="title text-white text-opacity-40 text-sm font-cat-semibold pb-4">FEATURED</div>
                <div ref={el => { featuredProjectsRef = el }} className="projects" style={{ visibility: "hidden" }}>

                    {/* <div className='cursor-pointer' onClick={() => { window.location.replace("/", "/resume") }}>Linkkkkk</div> */}
                    {/* Mapping all the projects in the array out */}
                    {featuredProjects.map((project, i) => (
                        <div key={i} className={`elem-${i} project bg-secondaryBg w-11/12 py-6 px-10 mb-2.5`}>
                            <div className="project-name text-white text-opacity-90 text-3xl pb-1.5">
                                {project.name}
                            </div>
                            <div className="project-tools text-white text-opacity-60 text-xs font-cat-medium flex">
                                {/* Tool A + Tool B + Tool C */}
                                {project.tools}
                            </div>
                            <div className="project-description py-6 text-white text-opacity-40">
                                {project.description}
                            </div>
                            <div className="project-links flex text-sm text-white text-opacity-60 ">
                                <div className="github-link flex pr-4">
                                    <img className="relative -top-0.5" src={githubAvatar} alt="github-icon" />
                                    <p className="px-1">Code</p>
                                </div>

                                {project.isProjectLive &&
                                    (<div className="live-link flex">
                                        <img className="relative -top-0.5" src={eyeIcon} alt="eye-icon" />
                                        <p className="px-1">View project</p>
                                    </div>)
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Other works */}
            <div className="other-works my-14 px-11">
                <div ref={el => { otherTitleRef = el }} className="title text-white text-opacity-40 text-sm font-cat-semibold pb-5">OTHERS</div>
                {/* Mapping all the projects in the array out */}
                <div className="projects-masonry ">
                    {/* Used react-masonry to create the unbalanced effect on the grid */}
                    <Masonry
                        ref={el => (masonryRef = el)}
                        breakpointCols={2}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {/* array of JSX items */}
                        {otherProjects.map((project, i) => (
                            <div key={i} alt={i} className="other-project bg-secondaryBg  py-10 px-10">
                                <div className="project-name text-white text-opacity-90 text-3xl pb-3">
                                    {project.name}
                                </div>
                                <div className="project-tools text-white text-opacity-60 text-xs font-cat-medium flex">
                                    {project.tools}
                                </div>
                                <div className="project-description py-6 text-white text-opacity-40">
                                    {project.description}
                                </div>
                                <div className="project-links flex text-sm text-white text-opacity-60 pt-12 pb-2">
                                    {/* Github */}
                                    <div className="github-link flex pr-4">
                                        <img className="relative -top-0.5" src={githubAvatar} alt="github-icon" />
                                        <p className="px-1">Code</p>
                                    </div>
                                    {/* Live */}
                                    {project.isProjectLive &&
                                        (<div className="live-link flex">
                                            <img className="relative -top-0.5" src={eyeIcon} alt="eye-icon" />
                                            <p className="px-1">View project</p>
                                        </div>)
                                    }
                                </div>
                            </div>
                        ))}
                    </Masonry>
                </div>
            </div>
        </div>
    )
}

export default Work