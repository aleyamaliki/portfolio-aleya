import React from 'react'
import SkillCardGrid from './SkillCardGrid'

const Skills = () => {
  return (
    <div className="py-10">
        <h1 className="text-center font-bold text-3xl text-[#89A6C5] text-shadow-white text-shadow-md">Skills</h1>

        <div className="px-30">
          <SkillCardGrid />
        </div>
    </div>
  )
}

export default Skills