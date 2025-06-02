const OwnerSection = () => {
  return (
    <div className="flex flex-wrap justify-evenly gap-10">
      <div className="space-y-5">
        <img
          src="./src/assets/Images/Asit.jpg"
          alt="Asit Savaliya"
          className="rounded-xl border-2 border-neutral-700 w-50 sm:w-60 lg:w-70" />

        <div className="space-y-2">
          <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-300 text-center">Asit Savaliya</h2>
          <p className="text-sm sm:text-md lg:text-xl font-thin text-neutral-400 text-center">Founder & <br />Interior Designer</p>
        </div>
      </div>

      <div className="space-y-5">
        <img
          src="./src/assets/Images/pratik.jpg"
          alt="Pratik Savaliya"
          className="rounded-xl border-2 border-neutral-700 w-50 sm:w-60 lg:w-70" />

        <div className="space-y-2">
          <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-300 text-center">Pratik Savaliya</h2>
          <p className="text-sm sm:text-md lg:text-xl font-thin text-neutral-400 text-center">CEO & <br />Business Associate</p>
        </div>
      </div>
    </div>
  )
}

export default OwnerSection