import React from 'react'
import SkillCard from './SkillCard';
import skillData from '../../../data/SkillData';

const SkillCardGrid = () => {

  return (
    <div className="p-6">
      <div className="flex flex-wrap gap-6 justify-center">
        {skillData.map((skill) => (
          <SkillCard
            key={skill.id}
            image={skill.image}
            imageSize={skill.imageSize}
            title={skill.title}
          />
        ))}
      </div>
    </div>
  )
}

export default SkillCardGrid
