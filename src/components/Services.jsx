import { services } from "../Content/Data"

const Services = () => {
    return (
        <div id="services" className="flex flex-wrap justify-center items-center gap-4">
            {services.map((item, index) => (
                <div key={index} className="border-2 border-neutral-700 rounded-md bg-neutral-950 h-50 w-70 flex flex-col justify-between py-2 pb-4 px-4">
                    <div className="flex items-center gap-2">
                        <img src={item.icon} alt="Kalrav Interior" className="w-20 h-20 brightness-120" />
                        <h2 className="text-xl text-neutral-300">{item.title}</h2>
                    </div>
                    <p className="text-neutral-400 indent-10 leading-5 tracking-wide text-justify">{item.description}</p>
                </div>

            ))}
        </div>
    )
}

export default Services