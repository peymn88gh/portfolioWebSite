
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useInView } from 'react-intersection-observer';
export default function Demo({t}) {
    // const []
  return (
    <div className='bg-white py-12 grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className=" order-1 relative py-12 px-10  w-full flex flex-col gap-7">
            <div>
                <h2 className="text-3xl text-black font-display mb-5 font-extrabold">I care about design</h2>
                <p className="text-justify text-lg text-accent">
                    Your former projects have always been a canvas for innovative design solutions. I believe in the power of user-centric interfaces and have consistently incorporated sleek and intuitive designs into my work. I strive to create visually appealing yet functional designs that resonate with the users, ensuring an unforgettable experience.
                </p>
            </div>
        </div>

       <div className=" order-2">
            <Carousel preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50} showArrows autoPlay infiniteLoop interval={5000}>
                <img src="onlineShop1.png" alt="Job Agancy" />
                <img src="onlineShop2.png" alt="OnlineShop main page" />
                <img src="onlineShop3.png" alt="OnlineShop product page" />
                <img src="onlineShop4.png" alt="OnlineShop cart section" />
                <img src="onlineShop5.png" alt="OnlineShop landing page" />
            </Carousel>
        </div> 
        <div className="order-4 md:order-3">
            <Carousel preventMovementUntilSwipeScrollTolerance={true} and swipeScrollTolerance={50} showArrows autoPlay infiniteLoop interval={5000}>
                <img src="jobAgancy1.png" alt="Job Agancy" />
                <img src="jobAgancy2.png" alt="OnlineShop main page" />
                <img src="jobAgancy3.png" alt="OnlineShop product page" />
                <img src="jobAgancy4.png" alt="OnlineShop cart section" />
            </Carousel>
        </div> 
        <div className="order-3 md:order-4 relative py-12 px-10 w-full flex flex-col gap-7">
            <div>
                <h3 className="text-2xl text-black font-display mb-2 font-bold">Innovative Solutions</h3>
                <p className="text-justify text-lg text-accent">
                    My projects stand as a testament to my ability to craft innovative solutions. Leveraging cutting-edge technologies and out-of-the-box thinking, I've tackled complex problems head-on. I take pride in my knack for finding unique and efficient solutions that not only solve immediate challenges but also pave the way for future advancements.
                </p>
            </div>
        </div>

    </div>
    
  );
}