import React from 'react'

const Card = ({ image, title, description, buttonText, onButtonClick }) => {
  return (
    <div className="w-80 max-80 overflow-hidden rounded-lg border border-[#F1E7E7] bg-[#F1E7E7] shadow-lg shadow-slate-950/5 text-center">
      <img 
        className="mx-auto mt-4 h-30 w-30 rounded-[5px]" 
        src={image} 
        alt={title}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
        }}
      />
      <div className="h-max w-full rounded px-3 py-2">
        <h6 className="text-base font-bold text-current antialiased md:text-lg lg:text-lg">
          {title}
        </h6>
        <p className="my-1 text-sm text-slate-600 antialiased">
          {description}
        </p>
      </div>
      <div className="w-full rounded px-3 pb-3 pt-1.5">
        <button 
          onClick={onButtonClick}
          className="inline-flex rounded-md border border-slate-800 bg-slate-800 px-4 py-2 text-center font-sans text-sm font-medium text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default Card