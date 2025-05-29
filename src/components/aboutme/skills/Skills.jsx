import React from 'react'
import SkillCardGrid from './SkillCardGrid'

const Skills = () => {
  return (
    <div>
        <h1 className="text-center font-bold text-2xl">Skills</h1>

        <div className="px-30">
          <SkillCardGrid />
        </div>
    </div>
  )
}

export default Skills