
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useInView } from 'react-intersection-observer';
export default function Demo({t}) {
    // const []
  return (
    <div className='bg-white grid grid-cols-1 gap-10'>
        <div className=" order-1 relative w-full flex flex-col gap-7">
            <div>
                <h2 className="text-3xl text-black font-display mb-5 font-extrabold">{t('demoSection.first.title')}</h2>
                <p className="text-justify text-lg text-accent">
                    {t('demoSection.first.description')}
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
        <div className="order-4">
            <Carousel preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50} showArrows autoPlay infiniteLoop interval={5000}>
                <img src="jobAgancy1.png" alt="Job Agancy" />
                <img src="jobAgancy2.png" alt="OnlineShop main page" />
                <img src="jobAgancy3.png" alt="OnlineShop product page" />
                <img src="jobAgancy4.png" alt="OnlineShop cart section" />
            </Carousel>
        </div> 
        <div className="order-3 relative py-12 w-full flex flex-col gap-7">
            <div>
                <h3 className="text-2xl text-black font-display mb-5 font-bold">{t('demoSection.second.title')}</h3>
                <p className="text-justify text-lg text-accent">
                {t('demoSection.second.description')}
                </p>
            </div>
        </div>

    </div>
    
  );
}