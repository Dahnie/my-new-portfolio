import React, { useEffect } from 'react'
import { gsap } from "gsap"

function NotFound() {

    const tl = gsap.timeline()

    const handleGoHome = function () {
        window.location.replace("/")
    }
    useEffect(() => {
        let zeroEmoji = document.querySelector(".zero-emoji")

        tl
            .from(".number", { duration: 1, opacity: 0, y: -300, ease: "power3.easeOut" })
            .from([".not-found-message-inner", ".go-home"], { duration: .8, opacity: 0, y: 50, stagger: 0.1, ease: "power3.easeOut" })

        setInterval(() => {
            tl
                .to(zeroEmoji, { duration: 1, y: -50 })
                .to(zeroEmoji, { duration: 1, y: 0, ease: "Bounce.easeOut", delay: .2 })
                .to(".go-home-btn", { duration: .5, scale: 1.05, ease: "power2.easeOut" })
                .to(".go-home-btn", { duration: .5, scale: 1, ease: "power2.easeOut" })

        }, 4000)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='not-found bg-primaryBg h-screen overflow-hidden flex items-center justify-center relative'>
            <div className="not-found-inner flex flex-col items-center relative -top-8">
                <div className="number text-white text-10xl font-cat-medium">
                    <span>4</span><span className='zero-emoji text-8xl inline-block'>😶</span><span >4</span>
                </div>

                <div className="not-found-message text-white text-opacity-60 font-cat-light text-lg relative -top-5 h-max overflow-hidden">
                    <p className='not-found-message-inner'>
                        <span>Hey, seems like you got <span className='test-lost'>lost.</span><span className="text-worries font-cat-regular text-white text-opacity-80"> No worries!</span></span>
                    </p>
                </div>

                <div className="go-home">
                    <button onClick={handleGoHome} className='go-home-btn bg-secondaryBg px-16 py-3 text-white text-opacity-80 font-cat-medium'>Go Home</button>
                </div>
            </div>
        </div >
    )
}

export default NotFound