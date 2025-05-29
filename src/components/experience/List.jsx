import React from 'react'
import { FaFan } from 'react-icons/fa'

const List = ({ jobtitle, jobplace, period, description}) => {
  return (
    <div className="w-200 max-80 overflow-hidden rounded-lg border border-[#F1E7E7] bg-[#F1E7E7] shadow-lg shadow-slate-950/5 text-center">
      <div className="h-max w-full rounded px-3 py-2">
        <h6 className="text-base font-bold text-current my-2 antialiased md:text-lg lg:text-lg">
          {jobtitle}
        </h6>
        <div className="flex gap-2 items-center">
          <p className="my-1 text-sm antialiased">
            {jobplace}
          </p>
          <span className="text-slate-400">|</span>
          <p className="my-1 text-sm text-slate-600 italic antialiased">
            {period}
          </p>
        </div>
        <p className="flex items-center gap-2 my-4 text-sm text-left antialiased">
          <FaFan size={20}/> {description}
        </p>
      </div>
    </div>
  )
}

export default List