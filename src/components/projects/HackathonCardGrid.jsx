import React from 'react'
import Card from './Card';
import hackathonData from '../../data/HackathonData'

const HackathonCardGrid = () => {
  const handleCardAction = (link) => {
    window.open(link, "_blank")
  };

  return (
    <div className="p-6">
      <div className="flex flex-wrap gap-6 justify-center">
        {hackathonData.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            hackathon={card.hackathon}
            description={card.description}
            buttonText={card.buttonText}
            onButtonClick={() => handleCardAction(card.githubLink)}
          />
        ))}
      </div>
    </div>
  )
}

export default HackathonCardGrid
