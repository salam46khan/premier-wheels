import React, { useEffect, useRef } from 'react';
import './Hero.css'
import heroImg from '../../assets/pic/hero-car-1.png'
import LocomotiveScroll from 'locomotive-scroll';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
    useEffect(() => {
        scroll = new LocomotiveScroll({
            smooth: true,
        })

    }, [])

    const content = useRef()

    useGSAP(() => {
        gsap.to('.car', {
            scale: 1.8,
            
            y:10,
            duration: 2,
            scrollTrigger: {
                trigger: '.car',
                start: 'top 20%',
                
                scrub: 2,
                // markers: true,
            },
        },{ scope: content })
            gsap.to('.hero-title', {
                scale: 0.5,
                duration: 1,
                opacity:0,
                y:200,
                fontSize: '40px',
                scrollTrigger: {
                    trigger: '.hero-title',
                    start: 'top 10%',
                    end: 'top 0%',
                    scrub: 1.5,
                    // markers: true,
                },
            }, { scope: content })
    })
    return (
        <div className='h-screen w-full overflow-x-hidden' id='hero' data-scroll-container>
            <div className="container p-3" ref={content}>
                <div className='flex justify-center items-center md:pt-[6%] pt-[35%]'>
                    <h1 className='text-6xl w-full max-w-6xl titleFont md:text-8xl text-center font-extrabold hero-title' data-scroll data-scroll-speed="-0.2">Find Your Dream Car <br /> Today</h1>
                </div>
                <div className='absolute left-1/2 w-full max-w-2xl -translate-x-1/2 -bottom-10 '>
                    <img className='w-full car' src={heroImg} alt="" data-scroll data-scroll-speed="0.01" />
                </div>
            </div>
        </div>
    );
};

export default Hero;