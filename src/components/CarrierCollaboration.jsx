import { carrierCollab } from "../Content/Data"

const CarrierCollaboration = () => {
  return (
    <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center text-neutral-200">Carrier <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">Collaboration</span></h1>
        <hr className="text-neutral-700 my-3 mx-auto w-3/4 sm:w-1/2 lg:1/4" />

        <div className="flex gap-20 justify-center mt-10">
            {carrierCollab.map((item, index)=>(
                <img 
                key={index} 
                src={item.src} 
                alt={item.name}
                className="h-15 lg:h-20 " />
            ))}
        </div>
    </div>
  )
}

export default CarrierCollaboration