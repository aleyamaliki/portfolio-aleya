import React from 'react'

const Card = ({ image, title, hackathon, description, buttonText, onButtonClick, githubLink }) => {
  return (
    <div className="w-80 max-80 overflow-hidden rounded-lg bg-white shadow-lg shadow-[#304254]/40 text-center hover:outline-2 hover:outline-offset-4 hover:transition-all hover:duration-100 hover:outline-[#99CAFF]">
      <img 
        className="mx-auto mt-4 h-30 w-30 rounded-[5px]" 
        src={image} 
        alt={title}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
        }}
      />
      <div className="h-max w-full rounded px-3 py-2">
        <h6 className="text-base font-bold  antialiased md:text-lg lg:text-lg text-[#343434]">
          {title}
        </h6>
        <p className="italic my-1 text-sm text-slate-600 py-2 antialiased">
          {hackathon}
        </p>
        <p className="my-1 text-sm text-slate-600 antialiased">
          {description}
        </p>
      </div>
      <div className="w-full rounded px-3 pb-3 pt-1.5">
          <button 
            onClick={onButtonClick}
            className="inline-flex rounded-md border-2 border-[#99CAFF] bg-white text-[#343434] hover:border-white hover:bg-[#99CAFF] px-4 py-2 text-center font-bold text-sm hover:text-white transition-all duration-300 ease-in hover:outline-2 hover:outline-offset-2 hover:transition-all hover:duration-300 hover:outline-[#99CAFF] disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
          >
            {buttonText}
          </button>
      </div>
    </div>
  )
}

export default Card