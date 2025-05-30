import React from 'react'
import EduList from './EduList';
import educationData from '../../../data/EducationData'

const EduListing = () => {

  return (
    <div className="p-6 px-50">
      <div className="flex flex-wrap gap-6 justify-center">
        {educationData.map((list) => (
          <EduList
            key={list.id}
            course={list.course}
            uniname={list.uniname}
            period={list.period}
          />
        ))}
      </div>
    </div>
  )
}

export default EduListing
