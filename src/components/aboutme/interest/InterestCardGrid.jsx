import React from 'react'
import InterestCard from './InterestCard';
import interestData from '../../../data/InterestData';

const InterestCardGrid = () => {
  return (
    <div className="p-6">
      <div className="flex flex-wrap gap-6 justify-center">
        {interestData.map((card) => (
          <InterestCard
            key={card.id}
            image={card.image}
            title={card.title}
          />
        ))}
      </div>
    </div>
  )
}

export default InterestCardGrid
