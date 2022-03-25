import React, { useEffect, useRef } from 'react';
import Masonry from 'react-masonry-css'
import { gsap } from 'gsap';
import CSSRulePlugin from "gsap/CSSRulePlugin"
import ScrollTrigger from "gsap/ScrollTrigger";
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
            githubLink: "https://github.com/Dahnie/Notepad-pro",
            isProjectLive: true,
            projectLink: "https://quik-notes.netlify.app",
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

    // Other projects array
    const otherProjects = [
        {
            name: "My portfolio",
            tools: `REACT + GSAP`,
            description: "My amazing portfolio",
            githubLink: "https://github.com/Dahnie/my-new-portfolio",
            isProjectLive: true,
            projectLink: "https://daniel-adeneye.netlify.app"
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
        {
            name: "DSA",
            tools: `JAVASCRIPT(ES6+) + DEEP THINKING`,
            description: "Algorithm scripting",
            githubLink: "#",
            isProjectLive: false,
            projectLink: "#"
        }

    ]

    gsap.registerPlugin(CSSRulePlugin);
    let featuredTitleRef = useRef(null)
    let featuredProjectsRef = useRef(null)
    let otherWorksRef = useRef(null)
    let workSectionRef = useRef(null)

    // Gsap animations
    const tl = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        // GSAP ANIMATIONS
        // Featured projects
        // TODO STOPPED
        gsap.to(featuredProjectsRef.firstChild, {
            scrollTrigger: {
                trigger: ".other-projects-1",
                start: "center 90%",
                scroller: workSectionRef,
                scrub: 0.9,
            },
            x: 300,
            y: -300,
            z: -50,
            rotation: 60,
            opacity: 0,
            duration: 3,
        })

        gsap.to(featuredProjectsRef.lastChild, {
            scrollTrigger: {
                trigger: ".other-projects-1",
                start: "center 90%",
                scroller: workSectionRef,
                scrub: 0.8,
            },
            x: 300,
            y: -300,
            z: -50,
            rotation: 60,
            opacity: 0,
            duration: 3,
        })


        tl
            .to(workSectionRef, { css: { visibility: "visible" }, delay: 0.6 })
            .from(featuredTitleRef, { duration: 0.7, opacity: 0, y: -30 })
            .from([featuredProjectsRef.firstChild, featuredProjectsRef.lastChild], {
                duration: 1, x: 200, y: -200, z: -50, rotation: 60, opacity: 0, autoAlpha: 0, ease: "power3.easeInOut", stagger: 0.2
            }, "<.3")
            .from(otherWorksRef, { duration: 1, opacity: 0, y: 100 })



        // FEAUTURED
        const projects = document.querySelectorAll(".project");
        projects.forEach((project) => {
            project.addEventListener("mouseover", (e) => {
                e.stopPropagation();
                if (project.nextElementSibling) {
                    project.nextElementSibling.style.opacity = ".45"
                    project.style.transform = "scale(1.08)"
                }
                if (project.previousElementSibling) {
                    project.previousElementSibling.style.opacity = ".45"
                    project.style.transform = "scale(1.08)"
                }
            })
            project.addEventListener("mouseout", (e) => {
                e.stopPropagation();
                if (project.nextElementSibling) {
                    project.nextElementSibling.style.opacity = "1"
                    project.style.transform = "scale(1)"
                }
                if (project.previousElementSibling) {
                    project.previousElementSibling.style.opacity = "1"
                    project.style.transform = "scale(1)"
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
                // project.style.transform = "scale(1.1)"
            })
            // On mouseout, change all elements' opacity to 1
            project.addEventListener("mouseout", (e) => {
                otherProjects.forEach((project) => {
                    project.style.opacity = "1"
                })
                // Changing the present element back to default
                project.style.opacity = "1"
                // project.style.transform = "scale(1)"
            })
        })


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div ref={el => (workSectionRef = el)} id="work-section" className='work overflow-auto h-screen pt-20 w-full'>
            {/* Featured */}
            <div className="featured-works pl-10">
                <div ref={el => { featuredTitleRef = el }} className="title text-white text-opacity-40 text-sm font-cat-semibold pb-4">FEATURED</div>
                <div ref={el => { featuredProjectsRef = el }} className="projects">
                    {/* Mapping all the projects in the array out */}
                    {featuredProjects.map((project, i) => (
                        <div key={i} className={`elem-${i} project bg-secondaryBg w-11/12 py-6 px-10 mb-2.5`}>
                            <div className="project-name text-white text-opacity-90 text-2xl xl:text-3xl pb-1.5">
                                {project.name}
                            </div>
                            <div className="project-tools text-white text-opacity-60 text-xs font-cat-medium flex">
                                {project.tools}
                            </div>
                            <div className="project-description py-6 text-white text-opacity-40">
                                {project.description}
                            </div>
                            <div className="project-links flex lg:text-xs 2xl:text-sm text-white text-opacity-60 ">
                                {/* Used ancchor tags because of external link, check if solution to v6 external routing exists later */}
                                <a href={project.githubLink} className="github-link flex pr-4">
                                    <img className="relative -top-0.5" src={githubAvatar} alt="github-icon" />
                                    <p className="px-1">Code</p>
                                </a>
                                {/* Used ancchor tags because of external link, check if solution to v6 external routing exists later */}

                                {project.isProjectLive &&
                                    (<a href={project.projectLink} className="live-link flex">
                                        <img className="relative -top-0.5" src={eyeIcon} alt="eye-icon" />
                                        <p className="px-1">View project</p>
                                    </a>)
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Other works */}
            <div ref={el => { otherWorksRef = el }} className="other-works my-14 px-14 xl:px-12 4xl:pr-24 5xl:pr-28">
                <div className="title text-white text-opacity-40 text-sm font-cat-semibold pb-5">OTHERS</div>
                {/* Mapping all the projects in the array out */}
                <div className="projects-masonry ">
                    {/* Used react-masonry to create the unbalanced effect on the grid */}
                    <Masonry
                        breakpointCols={2}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {/* array of JSX items */}
                        {otherProjects.map((project, i) => (
                            <div key={i} alt={i} className={`other-project other-projects-${i} bg-secondaryBg  py-10 lg:px-5 xl:px-8`}>
                                <div className="project-name text-white text-opacity-90 text-2xl xl:text-3xl pb-3">
                                    {project.name}
                                </div>
                                <div className="project-tools text-white text-opacity-60 text-xs font-cat-medium flex">
                                    {project.tools}
                                </div>
                                <div className="project-description lg:text-sm xl:text-base py-6 text-white text-opacity-40">
                                    {project.description}
                                </div>
                                <div className="project-links flex lg:text-xs 2xl:text-sm text-white text-opacity-60 pt-12 pb-2">
                                    {/* Github */}
                                    <a href={project.githubLink} className="github-link flex items-center pr-2.5 xl:pr-4">
                                        <img className="relative lg:h-4 xl:h-max xl:-top-0.5" src={githubAvatar} alt="github-icon" />
                                        <p className="px-1">Code</p>
                                    </a>
                                    {/* Live */}
                                    {project.isProjectLive &&
                                        (<a href={project.projectLink} className="live-link flex items-center">
                                            <img className="relative lg:h-4 xl:h-max xl:-top-0.5" src={eyeIcon} alt="eye-icon" />
                                            <p className="px-1">View project</p>
                                        </a>)
                                    }
                                </div>
                            </div>
                        ))}
                    </Masonry>
                </div>
            </div >
        </div >
    )
}
export default Work;