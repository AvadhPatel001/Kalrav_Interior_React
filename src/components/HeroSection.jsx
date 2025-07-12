import { useState, useEffect } from "react";
import { imgSrc } from "../Content/Data";
import { ArrowLeftCircle } from "lucide-react";
import { ArrowRightCircle } from "lucide-react";

const HeroSection = () => {

    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImg(currentImg =>
                currentImg === imgSrc.length - 1 ? 0 : currentImg + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const incrementImg = () => {
        if (currentImg == imgSrc.length - 1) {
            setCurrentImg(0);
        }
        else {
            setCurrentImg(currentImg + 1);
        }
    }
    const decrementImg = () => {
        if (currentImg == 0) {
            setCurrentImg(imgSrc.length - 1);
        }
        else {
            setCurrentImg(currentImg - 1);
        }
    }
    return (
        <div id="home" className="mt-10 lg:mt-10 lg:flex lg:space-x-10">

{/* Images */}
            <div className="flex relative overflow-hidden rounded-md w-full lg:w-2/3 h-110"  >
                {
                    imgSrc.map((item, index)=>(
                        <img key={index} src={item.src} alt={item.alt} className="w-full h-full rounded-md object-cover object-center transition-transform ease-in-out duration-500" style={{transform : `translateX(-${currentImg * 100}%)`}} />
                    ))
                }

{/* Left and Right Btn */}
                <div className="flex justify-between px-5 absolute items-center inset-0">
                    <button onClick={() => decrementImg()}>
                        <ArrowLeftCircle className="hover:opacity-80 h-10 w-10 lg:w-15 lg:h-15 opacity-50 active:scale-95" />
                    </button>
                    <button onClick={() => incrementImg()}>
                        <ArrowRightCircle className="hover:opacity-80 h-10 w-10 lg:w-15 lg:h-15 opacity-50 active:scale-95" />
                    </button>
                </div>

{/* Image position indicator */}
                <div className="flex absolute top-100 items-center justify-center w-full gap-1 opacity-50">
                    {imgSrc.map((_, index) => (
                        <div key={index} className={(index === currentImg) ? "h-3.5 w-3.5 border rounded-full bg-white" : "h-2.5 w-2.5 border rounded-full"} ></div>
                    ))}
                </div>
            </div>



            <div className="w-full lg:w-4/12 mt-10 lg:mt-20 text-center flex flex-col gap-5 justify-evenly items-center">
                <h1 className="text-3xl sm:text-4xl lg:text-4xl font-semibold lg:text-left">Transforming spaces into <span className="font-bold bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text text-4xl sm:text-5xl lg:text-6xl">soulful sanctuaries.</span>
                </h1>
                <p className="text-md lg:text-left text-neutral-300">&quot;Goog design is obvious, Great design is transparent.&quot;</p>

                <a href="#contact">
                    <button className="mt-10 px-15 py-2 rounded-xl border-2 border-neutral-500 active:scale-98 hover:bg-neutral-600  transition-all">Contact Us</button>
                </a>

            </div>
        </div>
    )
}

export default HeroSection