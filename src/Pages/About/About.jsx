import React from 'react';

import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import about1 from '../../assets/pic/about-4.png'
import about3 from '../../assets/pic/about-3.png'

const About = () => {


    useEffect(() => {
        scroll = new LocomotiveScroll({
            smooth: true,
            lerp: 0.01,
        });
    }, [])

    return (
        <div className=' bg-GreenColor overflow-hidden py-10 md:py-20' data-scroll-section data-scroll data-scroll-speed="-0.06">
            <div className="container p-3" data-scroll-container>
                <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 '>
                    <div className='w-full md:w-1/2 py-20'>
                        <h2 className='titleFont font-bold text-lime-400 text-3xl md:text-5xl' data-scroll data-scroll-speed="0.2">About Us</h2>
                        <h2 className='titleFont font-thin text-2xl md:text-5xl' data-scroll data-scroll-speed="0.2">Who We Are</h2>
                        <p className='text-2xl  text-gray-200' data-scroll data-scroll-speed="0.22">
                            With over 5 years of experience in the automotive industry, <span className='text-lime-400'>Premier Wheels</span> has built a reputation for excellence. We offer a carefully curated selection of the latest models from top brands, as well as certified pre-owned vehicles that are meticulously inspected and maintained.
                        </p>
                    </div>
                    <div className='w-full md:w-1/2 flex justify-center items-center'>
                        <img className='w-full' src={about3} alt="" data-scroll data-scroll-speed="-0.1" />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row-reverse justify-center items-center gap-4 md:gap-10 pt-10'>


                    <div className='w-full md:w-1/2 py-20'>

                        <h2 className='titleFont font-thin text-2xl md:text-5xl' data-scroll data-scroll-speed="0.24">Who We Are</h2>
                        <p className='text-2xl text-gray-200' data-scroll data-scroll-speed="0.28">
                            Our mission is to provide an unmatched car-buying experience that goes beyond just selling vehicles. We pride ourselves on offering exceptional customer service, expert advice, and tailored solutions that make your car-buying journey smooth and enjoyable. From the moment you step into our showroom to long after you've driven off, we're here to support you.
                        </p>
                    </div>

                    <div className='w-full md:w-1/2 flex justify-center items-center'>
                        <img className='w-full' src={about1} alt="" data-scroll data-scroll-speed="-0.1" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;