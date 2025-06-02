
const Statistics = () => {
    return (
        <div className="max-w-7/8 mx-auto flex flex-col lg:flex-1/3 lg:flex-row  justify-evenly items-center bg-neutral-950 py-8 px-3 rounded-md border-2 border-neutral-700">
            <div className=" w-4/5 lg:w-1/3 text-center ">
                <h1 className="text-neutral-300 text-xl">Years Of Expertise</h1>
                <h1 className="text-neutral-300 text-3xl font-semibold mt-2">2+</h1>
            </div>

            <hr className="text-neutral-700 w-4/5 my-5 lg:mx-0 lg:rotate-90 lg:w-1/9" />

            <div className="w-4/5 lg:w-1/3 text-center">
                <h1 className="text-neutral-300 text-xl">Projects Done So Far</h1>
                <h1 className="text-neutral-300 text-3xl font-semibold mt-2">10+</h1>
            </div>

            <hr className="text-neutral-700 w-4/5 my-5 lg:mx-0  lg:rotate-90 lg:w-1/9" />

            <div className=" w-4/5 lg:w-1/3 text-center">
                <h1 className="text-neutral-300 text-xl">Work Satisfaction</h1>
                <h1 className="text-neutral-300 text-3xl font-semibold mt-2">100%</h1>
            </div>
        </div>
    )
}

export default Statistics