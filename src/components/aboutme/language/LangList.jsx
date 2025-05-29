import React from 'react'

const LangList = ({ title, description}) => {
  return (
    <div className="w-50 max-80 overflow-hidden rounded-lg border border-[#F1E7E7] bg-[#F1E7E7] shadow-lg shadow-slate-950/5 text-center">
      <div className="h-max w-full rounded px-3 py-2">
        <h6 className="text-base font-bold text-current my-2 antialiased md:text-lg lg:text-lg">
          {title}
        </h6>
        <div className="items-center">
          <p className="my-1 text-sm antialiased">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default LangList