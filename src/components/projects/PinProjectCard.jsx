import React from 'react'
import Card from './Card';
import pinProjectData from '../../data/PinProjectData';

const PinProjectCard = () => {
  const handleCardAction = (cardId, title) => {
    alert(`Button clicked for: ${title} (ID: ${cardId})`);
  };

  return (
    <div className="p-6 bg-[#FFD0C7] ">
      <div className="flex flex-wrap gap-6 justify-center">
        {pinProjectData.map((pin) => (
          <Card
            key={pin.id}
            image={pin.image}
            title={pin.title}
            description={pin.description}
            buttonText={pin.buttonText}
            onButtonClick={() => handleCardAction(pin.id, pin.title)}
          />
        ))}
      </div>
    </div>
  )
}

export default PinProjectCard
