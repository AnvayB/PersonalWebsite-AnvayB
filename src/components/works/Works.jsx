import './Works.scss'
import desktop from "../../images/desktop.png"
import arrow from '../../images/arrow.png'
import isky from './projectImages/isky.png'
import CC from './projectImages/codecocktails.png'
import weather from './projectImages/weather.png'
// import github from './projectImages/github.png'
import { useState } from 'react';

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: desktop,
      title: "iSky",
      desc:
        "A COVID-conscious vacation planner for post-quarantine travelers built using ReactJS and Material UI",
      img: isky,
      link: "https://isky.netlify.app/"
    },
    {
      id: "2",
      icon: desktop,
      title: "Code Cocktails",
      desc:
        "An engaging web application that provides the user with simple cocktail recipes based on certain input criteria built with vanilla JS, HTML, and CSS",
      img: CC,
      link: "https://pixie-sticks2.github.io/Code-Cocktails/"
    },
    {
      id: "3",
      icon: desktop,
      title: "Weather App",
      desc:
        "Simple weather app that informs the user about the current temperature, humidity, and wind speed in the requested location. Built using ReactJS and OpenWeatherMap API",
      img: weather,
      link: "https://github.com/AnvayB/Weatherapp"
    },
    // {
    //   id: "4",
    //   icon: desktop,
    //   title: "Github",
    //   desc:
    //     "",
    //   img:
    //     github,
    //   link: "https://github.com/AnvayB"
    // }
  ];
//when you add another element above here ^^ for the github page, make sure to adjust handleClick to go to 3 instead of 2
  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide < 0 ? currentSlide - 1 : 2) :
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1: 0)
    console.log(currentSlide)
  }

  return (
    <div className='works' id='works'>
      <h1>Projects</h1>
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map(d => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p> {d.desc}
                  </p>
                  <a href={d.link} target="_blank" rel='noopener noreferrer' className='projectLink'><span>Link</span></a>
                </div>
              </div>
              <div className="right">
                <img src={d.img}
                  alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <img src={arrow} className="arrow left" alt="" onClick={() => handleClick("left")}/> */}
      <img src={arrow} className="arrow right" alt="" onClick={() => handleClick()}/>
    </div>
  )
}
