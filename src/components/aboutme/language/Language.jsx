import React from 'react'
import LanguageList from './LanguageList'

const Language = () => {
  return (
    <div className="py-10">
        <h1 className="text-center font-bold text-3xl text-[#89A6C5] text-shadow-white text-shadow-md">Language</h1>

        <div>
            <LanguageList />
        </div>
    </div>
  )
}

export default Language