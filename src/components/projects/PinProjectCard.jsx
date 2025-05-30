import React from 'react'
import Card from './Card';
import pinProjectData from '../../data/PinProjectData';

const PinProjectCard = () => {
  const handleCardAction = (link) => {
    window.open(link, "_blank")
  };

  return (
    <div className="p-6">
      <div className="flex flex-wrap gap-6 justify-center">
        {pinProjectData.map((pin) => (
          <Card
            key={pin.id}
            image={pin.image}
            title={pin.title}
            hackathon={pin.hackathon}
            description={pin.description}
            buttonText={pin.buttonText}
            onButtonClick={() => handleCardAction(pin.githubLink)}
          />
        ))}
      </div>
    </div>
  )
}

export default PinProjectCard
