import React from 'react'
import { gsap } from "gsap";
// import { Link, useHistory } from "react-router-dom"

function Resume() {
    return (
        <div id='resume-section' className='resume overflow-auto h-screen pt-20 w-full pr-10 2xl:pr-14 5xl:pr-16 pb-14'>
            <div className="resume-inner bg-secondaryBg py-8 px-7">
                <div className="name mb-2">
                    <div className='name-inner font-cat-medium text-white text-opacity-90 text-5xl'>
                        Daniel Adeneye
                    </div>
                </div>
                <div className="title mb-5">
                    <div className="title-inner text-white text-opacity-70 text-xl font-cat-light">
                        Frontend Developer
                    </div>
                </div>
                <div className="bio mb-10">
                    <div className="bio-inner text-white text-opacity-40 font-cat-light leading-5">
                        I’m a frontend developer. I harness modern tools and technologies in the design, build and customization of high quality and modern web applications with amazing user interfaces and dynamic user experiences. I am currently learning server-side development and I am also deeply interested in cybersecurity.
                    </div>
                </div>
                <div className="skills">
                    {/* Core technologies */}
                    <div className="core-technologies">
                        <div className="title text-white text-opacity-90 text-lg font-cat-medium flex items-center w-full">
                            <div className="lg:w-60 xl:w-52 3xl:w-48 flex flex-nowrap">
                                <p>
                                    Core Technologies
                                </p>
                            </div>
                            {/* Divider line */}
                            <div className="divider-line h-1px w-full bg-white opacity-30">
                            </div>
                        </div>
                        <div className="content py-2">
                            <div className="content-inner text-white text-opacity-30 font-cat-light tracking-wider">
                                HTML/CSS/Tailwind CSS, Javascript [ES6+], React JS, Next JS, Redux, Flux, Git,
                                Material UI, GSAP.
                            </div>
                        </div>
                    </div>
                    {/* Familiar with */}
                    <div className="familiar-with mt-3">
                        <div className="title text-white text-opacity-90 text-lg font-cat-medium flex items-center w-full">
                            <div className="lg:w-36 xl:w-32 3xl:w-28 flex flex-nowrap">
                                <p>
                                    Familiar with
                                </p>
                            </div>
                            {/* Divider line */}
                            <div className="divider-line h-1px w-full bg-white opacity-30">
                            </div>
                        </div>
                        <div className="content py-2">
                            <div className="content-inner text-white text-opacity-30 font-cat-light tracking-wider">
                                Node JS, Express, MongoDB, MySQL, Sequelize-cli, Ejs.
                            </div>
                        </div>
                    </div>
                    {/* On the job */}
                    <div className="on-the-job mt-3">
                        <div className="title text-white text-opacity-90 text-lg font-cat-medium flex items-center w-full">
                            <div className="lg:w-28 3xl:w-24 flex flex-nowrap">
                                <p>
                                    On the job
                                </p>
                            </div>
                            {/* Divider line */}
                            <div className="divider-line h-1px w-full bg-white opacity-30">
                            </div>
                        </div>
                        <div className="content py-2">
                            <div className="content-inner text-white text-opacity-30 font-cat-light tracking-wider">
                                Agile/ Scrum. Version Control (Git).
                            </div>
                        </div>
                    </div>
                    {/* Tools  */}
                    <div className="on-the-job mt-3">
                        <div className="title text-white text-opacity-90 text-lg font-cat-medium flex items-center w-full">
                            <div className="lg:w-14 3xl:w-16 flex flex-nowrap">
                                <p>
                                    Tools
                                </p>
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
            </div>
        </div >
    )
}

export default Resume