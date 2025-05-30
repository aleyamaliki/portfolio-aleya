import React from 'react'

const SkillCard = ({ image, title, imageSize }) => {
  return (
    <div className="relative w-40 h-40 overflow-hidden rounded-lg border-2 border-[#99CAFF] bg-white shadow-lg shadow-slate-950/5 text-center hover:outline-2 hover:outline-offset-4 hover:transition-all hover:duration-100 hover:outline-[#99CAFF]">
        <img 
            className={`mx-auto mt-10 w-10 rounded-[5px] ${imageSize}`} 
            src={image} 
            alt={title}
            onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
            }}
        />
        <div className="absolute bottom-0 w-full px-3 py-2">
            <h6 className="text-base font-bold text-current antialiased md:text-lg lg:text-lg">
              {title}
            </h6>
          </div>
    </div>
  )
}

export default SkillCard