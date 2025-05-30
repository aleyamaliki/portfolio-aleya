import React from 'react'
import InterestCardGrid from './InterestCardGrid'

const Interest = () => {
  return (
    <div className="py-10">
        <h1 className="text-center font-bold text-3xl text-[#89A6C5] text-shadow-white text-shadow-md">Hobby & Interest</h1>

        <div>
            <InterestCardGrid />
        </div>
    </div>
  )
}

export default Interest