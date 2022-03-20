import React, { useRef, useEffect } from 'react'
import LoaderImg from "../assets/img/letter-d.png"
import { gsap } from "gsap"

function Loader() {
    let imgRef = useRef((null))
    let tl = gsap.timeline()

    useEffect(() => {
        tl.to(imgRef, { duration: .5, scale: "2" })
    }, [])
    return (
        <div className='w-full h-screen overflow-hidden bg-primaryBg text-white text-opacity-80 flex justify-center items-center'>
            <img className='w-24 h-24' ref={el => { imgRef = el }} src={LoaderImg} alt="loader-img" />
        </div>
    )
}

export default Loader