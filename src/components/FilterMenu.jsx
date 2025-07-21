import { useState } from "react"
import { displayImgs } from "../Content/Data"

const FilterMenu = () => {
  const categories = ["All", "Traditional", "Minimal", "Modern", "3D"];

  const [filteredImgs, setFilteredImgs] = useState(displayImgs);
  const [activeCategory, setActiveCategory] = useState("All");


  const filterItems = (categoryItem) => {
    const updateMenu = displayImgs.filter((curElem) => {
      return curElem.category === categoryItem; 
    });
    setFilteredImgs(updateMenu);
  }

  return (
    <div className="border-2 border-neutral-700 rounded-xl bg-neutral-950 px-3 py-5">
      <div className="flex flex-col justify-evenly items-center sm:flex-wrap sm:flex-row lg:flex-wrap lg:flex-row px-20">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              if (category === "All") {
                setFilteredImgs(displayImgs);
              } else {
                filterItems(category);
              }
              setActiveCategory(category);
            }}
            className={`text-neutral-300 w-99/100 sm:w-4/9 lg:w-1/6 h-10 m-2 border-2 border-neutral-600 rounded 
        ${activeCategory === category ? "bg-neutral-600" : "bg-neutral-900"} 
        active:scale-98 hover:bg-neutral-600 transition-all`}
          >
            {category}
          </button>
        ))}
      </div>


      <hr className="my-5 w-full text-neutral-800" />

      <div className="flex flex-wrap justify-center gap-8  ">
        {filteredImgs.map((item, index) => (
          <div key={index} className="relative hover:scale-102 transition-all">
            <img src={item.src} alt={item.category} className="w-75 h-45 object-cover rounded hover:brightness-75 peer" />
            <h3 className="absolute top-3/4 left-5 text-xl opacity-0 transition-all duration-300 peer-hover:opacity-100">{item.category}</h3>
          </div>

        ))}
      </div>
    </div>
  )
}

export default FilterMenu