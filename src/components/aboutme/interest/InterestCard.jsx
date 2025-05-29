import React from 'react'

const InterestCard = ({ image, title }) => {
  return (
    <div className="w-50 max-80 overflow-hidden rounded-lg border border-[#F1E7E7] bg-[#F1E7E7] shadow-lg shadow-slate-950/5 text-center">
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
      </div>
    </div>
  )
}

export default InterestCard