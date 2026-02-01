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
            I’m a software developer with a strong focus on building clean, scalable, and user-friendly web applications.
            <br/>
            <br/>
            I enjoy turning complex problems into simple, maintainable solutions, especially on the frontend where performance and user experience matter most. I work primarily with TypeScript, React, and modern web tooling, and I care a lot about writing strongly typed, readable code that’s easy to understand and extend. I believe good code isn’t just about making things work. It’s about making them work well for the next person who touches it (often future me).
            <br/>
            <br/>
            I enjoy collaborating with teams, learning new technologies, and continuously improving my craft. Whether it’s refining UI interactions, optimizing performance, or structuring a codebase for long-term maintainability, I’m always looking for ways to build better software.
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
