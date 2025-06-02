import { testimonials } from "../Content/Data";
import quote from "../assets/Images/Testimonials/Quotes.png";

const Testimonials = () => {
    return (
        <div>
            <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center text-neutral-200">Testimonials</h1>
                <hr className="text-neutral-700 my-3 mx-auto w-3/4 sm:w-1/2 lg:1/4" />
                <p className="text-center mt-10 text-neutral-400">What Our Customer Saying...</p>
            </div>

            <div className="flex justify-center flex-col lg:flex-row gap-10 px-5 sm:px-10 lg:px-20 py-5">
                {testimonials.map((item, index) => (
                    <div key={index} className="border-2 border-neutral-700 rounded-xl bg-neutral-950 w-full lg:w-1/2 flex flex-col justify-evenly px-5 py-3 gap-5 items-start">

                        <img src={quote} alt="Quote" className="w-10 -scale-x-100" />

                        <p className="text-justify indent-15 text-neutral-400 tracking-wide italic  ">{item.review}</p>

                        <div className="flex gap-4 items-center">
                            <img src={item.profileImg} alt={item.name} className="w-15 border-2 border-neutral-500 rounded-full" />
                            <div className="space-y-1">
                                <h2 className="text-xl text-orange-500">{item.name}</h2>
                                <h3 className="text-[14px] text-neutral-400">{item.address}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Testimonials