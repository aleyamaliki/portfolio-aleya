import React from 'react'
import Card from './Card';
import schoolData from '../data/SchoolData'

const SchoolCardGrid = () => {
  const handleCardAction = (cardId, title) => {
    alert(`Button clicked for: ${title} (ID: ${cardId})`);
  };

  return (
    <div className="p-6">
      <div className="flex flex-wrap gap-6 justify-center">
        {schoolData.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            onButtonClick={() => handleCardAction(card.id, card.title)}
          />
        ))}
      </div>
    </div>
  )
}

export default SchoolCardGrid
