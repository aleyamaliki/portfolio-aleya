import React from 'react'
import languageData from '../../../data/LanguageData'
import LangList from './LangList';

const LanguageList = () => {
  return (
    <div className="p-6">
      <div className="flex flex-wrap gap-6 justify-center">
        {languageData.map((card) => (
          <LangList
            key={card.id}
            title={card.title}
          />
        ))}
      </div>
    </div>
  )
}

export default LanguageList
