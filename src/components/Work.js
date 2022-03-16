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
            name: "Project 1",
            tools: `Tool A + Tool B + Tool C + Tool D`,
            description: "Lorem, ipsum dolor sit amet consectete temporibus",
            githubLink: "#",
            isProjectLive: true,
            projectLink: "#",
            ref: "project1",
        },

        {
            name: "Project 2",
            tools: `Tool A + Tool B`,
            description: "Lorem, i adipisicing Ratione temporibus",
            githubLink: "##",
            isProjectLive: false,
            projectLink: "##",
            ref: "project2",
        }
    ]

    // Other projects array
    const otherProjects = [
        {
            name: "Project 3",
            tools: `Tool A + Tool B + Tool C + Tool D`,
            description: "Lorem, ipsum dolor sit ame",
            githubLink: "#",
            isProjectLive: true,
            projectLink: "#"
        },

        {
            name: "Project 4",
            tools: `Tool A + Tool B + Tool C`,
            description: "Lorem,atione temporibus",
            githubLink: "##",
            isProjectLive: false,
            projectLink: "##"
        },
        {
            name: "Project 5",
            tools: `Tool A + Tool B + Tool C + Tool D`,
            description: "Lorem, ipsum isicing elit. Ratione temporibus",
            githubLink: "#",
            isProjectLive: true,
            projectLink: "#"
        },

        {
            name: "Project 6",
            tools: `Tool A + Tool B`,
            description: "Lorem, i adipisicing ",
            githubLink: "##",
            isProjectLive: false,
            projectLink: "##"
        },
        {
            name: "Project 7",
            tools: `Tool A + Tool B + Tool C + Tool D `,
            description: "Lorem, i adipisicing elit.s",
            githubLink: "##",
            isProjectLive: false,
            projectLink: "##"
        },
        {
            name: "Project 8",
            tools: `Tool A + Tool B + Tool C + Tool D`,
            description: "Lorem, ipsum dolor sit amet consectete temporibus",
            githubLink: "#",
            isProjectLive: true,
            projectLink: "#"
        },

        {
            name: "Project 9",
            tools: `Tool A + Tool B + Tool C`,
            description: "Lorem, i adipisicing elit. Quasi, temporibus",
            githubLink: "##",
            isProjectLive: false,
            projectLink: "##"
        }
    ]

    let feauturedProjectsReveal = CSSRulePlugin.getRule(".project::after")
    let featuredTitleRef = useRef(null)
    let featuredProjectsRef = useRef(null)
    let otherTitleRef = useRef(null)

    // Gsap animations
    const tl = gsap.timeline();
    useEffect(() => {
        // GSAP ANIMATIONS
        // Featured projects
        tl.from(featuredTitleRef, { duration: 0.7, opacity: 0, y: -30, delay: 1.5 })
            .to(featuredProjectsRef, { duration: 0, css: { visibility: "visible" }, delay: .3 })
            .to(feauturedProjectsReveal, { duration: 1.9, width: "0%", ease: "power2.easeInOut" })
            .from(featuredProjectsRef, { duration: "0.4", scale: "0.95", ease: "power3.easeInOut" })

            // Other projects
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
                project.style.opacity = "1"
            })
            // On mouseout, change all elements' opacity to 1
            project.addEventListener("mouseout", (e) => {
                otherProjects.forEach((project) => {
                    project.style.opacity = "1"
                })
                project.style.opacity = "1"
            })
        })


    }, [])
    return (
        <div id="work-section" className='work overflow-auto h-screen pt-24'>
            {/* Featured */}
            <div className="featured-works pl-10">
                <div ref={el => { featuredTitleRef = el }} className="title text-white text-opacity-40 text-sm font-cat-semibold pb-4">FEATURED</div>
                <div ref={el => { featuredProjectsRef = el }} className="projects" style={{ visibility: "hidden" }}>
                    {/* Mapping all the projects in the array out */}
                    {featuredProjects.map((project, i) => (
                        <div key={i} className={`elem-${i} project bg-secondaryBg w-11/12 py-6 px-10 mb-2.5`}>
                            <div className="project-name text-white text-opacity-90 text-3xl pb-1.5">
                                {project.name}
                            </div>
                            <div className="project-tools text-white text-opacity-60 text-xs font-cat-bold flex">
                                {/* Tool A + Tool B + Tool C */}
                                {project.tools}
                            </div>
                            <div className="project-description py-6 font-cat-medium text-white text-opacity-40">
                                {project.description}
                            </div>
                            <div className="project-links flex text-sm text-white text-opacity-60 ">
                                <div className="github-link flex pr-4">
                                    <img className="relative -top-0.5" src={githubAvatar} alt="github-icon" />
                                    <p className="px-1">Github</p>
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
            <div className="other-works my-14 px-12">
                <div ref={el => { otherTitleRef = el }} className="title text-white text-opacity-40 text-sm font-cat-semibold pb-5">OTHERS</div>
                {/* Mapping all the projects in the array out */}
                <div className="projects-masonry ">
                    {/* Used react-masonry to create the unbalanced effect on the grid */}
                    <Masonry
                        breakpointCols={2}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {/* array of JSX items */}
                        {otherProjects.map((project, i) => (
                            <div key={i} alt={i} className="other-project bg-secondaryBg  py-10 px-10">
                                <div className="project-name text-white text-opacity-90 text-3xl pb-3">
                                    {project.name}
                                </div>
                                <div className="project-tools text-white text-opacity-60 text-xs font-cat-bold flex">
                                    {project.tools}
                                </div>
                                <div className="project-description py-6 font-cat-medium text-white text-opacity-40">
                                    {project.description}
                                </div>
                                <div className="project-links flex text-sm text-white text-opacity-60 pt-12 pb-2">
                                    {/* Github */}
                                    <div className="github-link flex pr-4">
                                        <img className="relative -top-0.5" src={githubAvatar} alt="github-icon" />
                                        <p className="px-1">Github</p>
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