import React, { useRef, useEffect } from 'react'
import { gsap } from "gsap";
import linkedinAvatar from "../assets/img/linkedin-avatar.svg";
import { Link } from 'react-router-dom';


function Resume({ handleWorkRouteButton }) {
    const tl = gsap.timeline();
    let nameRef = useRef(null);
    let titleRef = useRef(null);
    let bioRef = useRef(null);
    let coreSkillsRef = useRef(null);
    let familiarSkillsRef = useRef(null);
    let onTheJobSkillsRef = useRef(null);
    let toolsSkillsRef = useRef(null);
    let experienceRef = useRef(null);
    let projectsRef = useRef(null);

    // FIX Uncomment
    // useEffect(() => {
    //     tl
    //         .from([nameRef.children, titleRef.children, bioRef.children], { duration: 1, y: 75, opacity: 0, autoAlpha: 0, ease: "power3.easeInOut", stagger: 0.25 }, "<.8")
    //         .from([coreSkillsRef, familiarSkillsRef, onTheJobSkillsRef, toolsSkillsRef, experienceRef, projectsRef], { duration: 1, delay: .5, x: 150, opacity: 0, autoAlpha: 0, ease: "power3.easeInOut", stagger: 0.25 }, "<1")

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    useEffect(() => {
        setInterval(() => {
            tl
                .to([".resume-link-wrapper",], { duration: 1.7, css: { color: "rgba(255, 255, 255, 1)" }, ease: "power3.easeInOut", stagger: 0, delay: 2 },)
                .to([".resume-link-wrapper",], { duration: 1.7, css: { color: "rgba(255, 255, 255, .8)" }, autoAlpha: 0, ease: "power3.easeInOut", stagger: 0 },)

        }, 5000)
    }, [])
    return (
        <div id='resume-section' className='resume overflow-auto h-screen pt-20 w-full pr-10 2xl:pr-14 5xl:pr-16 pb-14'>
            <div className="resume-inner bg-secondaryBg py-8 px-7">
                <div className="resume-top">
                    <div ref={el => { nameRef = el }} className="name h-14 overflow-hidden flex justify-between">
                        <div className='name-inner font-cat-medium text-white text-opacity-90 text-5xl '>
                            Daniel Adeneye
                        </div>
                        <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/daniel-adeneye-07/" className='linkedin-link flex justify-end items-center pr-2'>
                            <img className='h-8' src={linkedinAvatar} alt="linkedin" />
                        </a>
                    </div>
                </div>
                <div ref={el => { titleRef = el }} className="title mb-6 h-6 overflow-hidden">
                    <div className="title-inner text-white text-opacity-70 text-xl font-cat-light">
                        Frontend Developer
                    </div>
                </div>
                <div ref={el => { bioRef = el }} className="bio mb-10 h-max overflow-hidden">
                    <div className="bio-inner text-white text-opacity-40 font-cat-light leading-6">
                        I’m a <span className='text-white text-opacity-40'>frontend developer</span>. I harness modern tools and technologies in the design, build and customization of high quality and modern web applications with amazing user interfaces and dynamic user experiences.
                        I am currently learning server-side development and I am also deeply interested in cybersecurity.
                        You can download my <a className='text-white text-opacity-60 resume-link-wrapper' rel="noreferrer" target='_blank' href={"https://drive.google.com/file/d/1eHlcYdE3WPfwefClql9e2eCUqPS_Yi9e/view?usp=sharing"}>resume here</a>
                    </div>
                </div>
                <div className="skills">
                    {/* Core technologies */}
                    <div ref={el => { coreSkillsRef = el }} className="core-technologies">
                        <div className="title text-white text-opacity-90 text-lg font-cat-medium flex items-center w-full">
                            <div className="flex flex-nowrap pr-1.5">
                                <span>Core</span> <span className='pl-1'>Technologies</span>
                            </div>
                            {/* Divider line */}
                            <div className="divider-line h-1px w-full bg-white opacity-30">
                            </div>
                        </div>
                        <div className="content py-2">
                            <div className="content-inner text-white text-opacity-30 font-cat-light tracking-wider">
                                HTML/CSS/Tailwind CSS, Javascript [ES6+], React JS, Next JS, CSS-in-JS, Typescript, Redux, Firebase, Git,
                                Material UI, GSAP.
                            </div>
                        </div>
                    </div>
                    {/* Familiar with */}
                    <div ref={el => { familiarSkillsRef = el }} className="familiar-with mt-3">
                        <div className="title text-white text-opacity-90 text-lg font-cat-medium flex items-center w-full">
                            <div className="flex flex-nowrap pr-1.5">
                                <span>Familiar</span> <span className='pl-1'>With</span>
                            </div>
                            {/* Divider line */}
                            <div className="divider-line h-1px w-full bg-white opacity-30">
                            </div>
                        </div>
                        <div className="content py-2">
                            <div className="content-inner text-white text-opacity-30 font-cat-light tracking-wider">
                                Node JS, Express, MongoDB, Ejs, PWAs, SEO.
                            </div>
                        </div>
                    </div>
                    {/* On the job */}
                    <div ref={el => { onTheJobSkillsRef = el }} className="on-the-job mt-3">
                        <div className="title text-white text-opacity-90 text-lg font-cat-medium flex items-center w-full">
                            <div className="flex flex-nowrap pr-1.5">
                                <span>On</span> <span className='pl-1'>the</span> <span className='pl-1'>Job</span>
                            </div>
                            {/* Divider line */}
                            <div className="divider-line h-1px w-full bg-white opacity-30">
                            </div>
                        </div>
                        <div className="content py-2">
                            <div className="content-inner text-white text-opacity-30 font-cat-light tracking-wider">
                                Agile / Scrum. Version Control (Git).
                            </div>
                        </div>
                    </div>
                    {/* Tools  */}
                    <div ref={el => { toolsSkillsRef = el }} className="tools mt-3">
                        <div className="title text-white text-opacity-90 text-lg font-cat-medium flex items-center w-full">
                            <div className="flex flex-nowrap pr-1.5">
                                <span>Tools</span>
                            </div>
                            {/* Divider line */}
                            <div className="divider-line h-1px w-full bg-white opacity-30">
                            </div>
                        </div>
                        <div className="content py-2">
                            <div className="content-inner text-white text-opacity-30 font-cat-light tracking-wider">
                                Postman, Heroku, Firebase.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience*/}
                <div ref={el => { experienceRef = el }} className="experiences">
                    {/*   */}
                    <div className="experience-1 mt-3">
                        <div className="title text-white text-opacity-90 text-lg font-cat-medium flex items-center w-full">
                            <div className="flex flex-nowrap pr-1.5">
                                <p>Work </p> <span className='pl-1'> Experience</span>
                            </div>
                            {/* Divider line */}
                            <div className="divider-line h-1px w-full bg-white opacity-30">
                            </div>
                        </div>
                        <div className="work-experience-details-wrapper mt-3">
                            <div className="work-place pt-3 pb-2">
                                <div className="work-place-inner text-white text-lg text-opacity-70 font-cat-light">
                                    Tech Minte - Frontend Engineer
                                </div>
                            </div>
                            <div className="work-date pb-2">
                                <div className="work-date-inner text-white text-opacity-30 font-cat-light tracking-wider">
                                    APRIL 2022 - PRESENT
                                </div>
                            </div>
                            <ul className="tasks-completed list-disc py-1 pl-5">
                                <li className='list-none text-white text-[17px] text-opacity-30 font-cat-light tracking-wider mb-2'>
                                    I’m currently solving problems with 0s and 1s at Tech Minte
                                </li>
                                <li className='list-none text-white text-opacity-30 font-cat-light tracking-wider mb-[5px]'>
                                    <span className='-translate-y-[1.5px] inline-block text-[18px]'>■</span> Built products with clean, maintainable, reusable and robust
                                    code for a diverse array of clients, bringing efficient
                                    software with seamless UX to live.
                                </li>
                                <li className='list-none text-white text-opacity-30 font-cat-light tracking-wider mb-[5px]'>
                                    <span className='-translate-y-[1.5px] inline-block text-[18px]'>■</span>
                                    Established and maintained efficient and scalable structures and layouts for various web applications.
                                </li>
                                <li className='list-none text-white text-opacity-30 font-cat-light tracking-wider mb-[5px]'>
                                    <span className='-translate-y-[1.5px] inline-block text-[18px]'>■</span> Maintained a well structured codebase and used Typescript to improve predictability.
                                </li>
                                <li className='list-none text-white text-opacity-30 font-cat-light tracking-wider mb-[5px]'>
                                    <span className='-translate-y-[1.5px] inline-block text-[18px]'>■</span> Engineered state management with Redux and Hooks.
                                </li>
                                <li className='list-none text-white text-opacity-30 font-cat-light tracking-wider mb-[5px]'>
                                    <span className='-translate-y-[1.5px] inline-block text-[18px]'>■</span> Used Next Js to deliver optimised, pre-rendered pages when necessary.
                                </li>
                                <li className='list-none text-white text-opacity-30 font-cat-light tracking-wider mb-[5px]'>
                                    <span className='-translate-y-[1.5px] inline-block text-[18px]'>■</span> Worked
                                    on various connections with RESTful APIs using axios and the Fetch API.
                                </li>
                            </ul>
                        </div>
                        <div className="work-experience-details-wrapper">
                            <div className="work-place pt-3 pb-2">
                                <div className="work-place-inner text-white text-lg text-opacity-70 font-cat-light">
                                    HNG Internships - Frontend Developer [Intern]
                                </div>
                            </div>
                            <div className="work-date pb-2">
                                <div className="work-date-inner text-white text-opacity-30 font-cat-light tracking-wider">
                                    AUGUST 2021 - SEPTEMBER 2021
                                </div>
                            </div>
                            <ul className="tasks-completed list-disc py-1 pl-5">
                                <li className="tasks-completed-inner list-none text-white text-opacity-30 font-cat-light tracking-wider">
                                    <span className='-translate-y-[1.5px] inline-block text-[18px]'>■</span> Contributed in developing user interfaces for quite a number of products
                                    within three months while learning new skills.
                                </li>
                            </ul>
                        </div>
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
                            <div className="content-inner text-white text-opacity-30 font-cat-light tracking-wider">
                                <div className="content py-2">
                                    <div className="content-inner text-white text-opacity-30 font-cat-light tracking-wider">
                                        Links to my works can be found on <button onClick={handleWorkRouteButton} className='cursor-pointer text-white opacity-80'> sage-dann.netlify.com/work </button> and more
                                        details can be provided upon request
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Resume