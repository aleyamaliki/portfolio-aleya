import React from 'react'
import MyPic from '../../assets/mypicture.jpg'

const AboutDesc = () => {
  return (
    <div className="bg-[url(./src/assets/bg/bg-hero.png)] bg-cover bg-center">
      <div className="py-10 px-4 sm:px-10">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#89A6C5] text-shadow-white text-shadow-md">
          About Me
        </h1>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 py-10">
          <img
            src={MyPic}
            alt="mypicture"
            className="w-40 sm:w-52 rounded-2xl  outline-2 outline-offset-4 outline-[#99CAFF]"
          />

          <p className="text-sm sm:text-base text-justify max-w-xl leading-relaxed">
            👋 I'm Intan Nur Aleya Maliki, a front-end developer who loves bringing ideas to life through clean code and creative design. <br /><br />
            In the heat of hackathons — which I have not just joined but won 🎉 — I have developed innovative solutions under tight deadlines, proving that creativity and teamwork can solve anything! <br /><br />
            At the heart of my work is a simple goal: to create seamless, responsive experiences that make technology feel effortless and enjoyable.
          </p>
        </div>

        <p className="italic text-center font-bold text-sm sm:text-base">
          Let's create something amazing together!
        </p>
      </div>
    </div>
  )
}

export default AboutDesc
