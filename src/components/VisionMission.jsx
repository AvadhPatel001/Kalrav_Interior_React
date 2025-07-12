import { vision, mission } from "../Content/Data"

const VisionMission = () => {
    return (
        <div id="about_us" className="border-2 border-neutral-700 rounded-xl bg-neutral-950 py-8 px-10 sm:px-15 lg:px-25 space-y-15">
            <div className="flex justify-between items-center lg:items-start flex-col lg:flex-row gap-5 lg:gap-10">
                <div className="lg:hidden space-y-2">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-neutral-200 text-center lg:text-left">{vision.title}</h1>
                    <h3 className="text-md sm:text-xl lg:text-2xl text-neutral-300 text-center lg:text-left font-normal">{vision.subtitle}</h3>
                </div>

                <img
                    src={vision.src}
                    alt={vision.alt}
                    className="w-60 sm:w-70 lg:w-80 rounded-md border-2 border-neutral-700" />

                <div className="space-y-2">
                    <div className="hidden lg:block space-y-2">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-neutral-200 text-center lg:text-left">{vision.title}</h1>
                        <h3 className="text-md sm:text-xl lg:text-2xl text-neutral-300 text-center lg:text-left font-normal">{vision.subtitle}</h3>
                    </div>
                    <p className="text-md text-neutral-400 indent-20 text-justify tracking-wide leading-7 lg:mt-8">{vision.description}</p>
                </div>
            </div>




            <div className="flex justify-between items-center lg:items-start flex-col lg:flex-row gap-5 lg:gap-10">
                <div className="lg:hidden space-y-2">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-neutral-200 text-center lg:text-left">{mission.title}</h1>
                    <h3 className="text-md sm:text-xl lg:text-2xl text-neutral-300 text-center lg:text-left font-normal">{mission.subtitle}
                    </h3>
                </div>

                <div className="space-y-2">
                    <div className="hidden lg:block space-y-2">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-neutral-200 text-center lg:text-left">{mission.title}</h1>
                        <h3 className="text-md sm:text-xl lg:text-2xl text-neutral-300 text-center lg:text-left font-normal">{mission.subtitle}
                        </h3>
                    </div>
                    <p className="hidden lg:block text-md text-neutral-400 indent-20 text-justify tracking-wide leading-7 lg:mt-8">{mission.description}</p>
                </div>

                <img
                    src={mission.src}
                    alt={mission.alt}
                    className="-mt-4 w-60 sm:w-70 lg:w-80 rounded-md border-2 border-neutral-700" />

                <p className="lg:hidden text-md text-neutral-400 indent-20 text-justify tracking-wide leading-7 lg:mt-8">{mission.description}</p>
            </div>
        </div>
    )
}

export default VisionMission