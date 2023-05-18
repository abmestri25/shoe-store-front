import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";

const HeroBanner = () => {
  return (
    <div className="w-full mx-auto max-w-[1360px] text-white relative text-[20px]">
      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        autoPlay
        infiniteLoop
        showArrows={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
            <div
                onClick={clickHandler}
                className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[40px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
                <BiArrowBack className="text-sm md:text-lg" />
            </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
            <div
                onClick={clickHandler}
                className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[40px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
                <BiArrowBack className="rotate-180 text-sm md:text-lg" />
            </div>
        )}

      >
        <div>
          <img src="/slide-1.png" alt="slide" />
          <button className="absolute bottom-[10px] md:bottom-[40px] left-0 bg-white text-black  text-xs md:text-2xl p-2 md:p-3 font-oswald cursor-pointer uppercase font-medium">
            Shop Now
          </button>
        </div>
        <div>
          <img src="/slide-2.png" alt="slide" />
          <button className="absolute bottom-[10px] md:bottom-[40px] left-0 bg-white text-black  text-xs md:text-2xl p-2 md:p-3 font-oswald cursor-pointer uppercase font-medium">
            Shop Now
          </button>
        </div>
        <div>
          <img src="/slide-3.png" alt="slide" />
           <button className="absolute bottom-[10px] md:bottom-[40px] left-0 bg-white text-black  text-xs md:text-2xl p-2 md:p-3 font-oswald cursor-pointer uppercase font-medium">
            Shop Now
          </button>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
