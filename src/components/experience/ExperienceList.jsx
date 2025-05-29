import React from 'react'
import List from './List';
import experinceData from '../../data/ExperienceData'

const ExperienceList = () => {

  return (
    <div className="p-6">
      <div className="flex flex-wrap gap-6 justify-center">
        {experinceData.map((list) => (
          <List
            key={list.id}
            jobtitle={list.jobtitle}
            jobplace={list.jobplace}
            period={list.period}
            description={list.description}
          />
        ))}
      </div>
    </div>
  )
}

export default ExperienceList
