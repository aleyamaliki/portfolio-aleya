import React from 'react'
import SkillCard from './SkillCard';
import skillData from '../../../data/SkillData';

const SkillCardGrid = () => {

  return (
    <div className="p-6 bg-[#FFD0C7] ">
      <div className="flex flex-wrap gap-6 justify-center">
        {skillData.map((skill) => (
          <SkillCard
            key={skill.id}
            image={skill.image}
            title={skill.title}
          />
        ))}
      </div>
    </div>
  )
}

export default SkillCardGrid
