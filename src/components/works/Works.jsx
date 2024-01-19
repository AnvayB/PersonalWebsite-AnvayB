import './Works.scss'
// import desktop from "../../images/desktop.png"
// import arrow from '../../images/arrow.png'
import isky from './projectImages/isky.png'
import CC from './projectImages/codecocktails.png'
import weather from './projectImages/weather.png'
// import github from './projectImages/github.png'
import React, { useState } from 'react';
import down from '../../images/down.png'

export default function Works() {

  const [selectedCard, setSelectedCard] = useState(null);
  const data = [
    {
      id: "1",
      // icon: desktop,
      title: "Winter",
      desc:
        "Winter has so much to offer - creative activities",
      img: isky,
      link: "https://github.com/Group22-Senior-Project/iSky"
    },
    {
      id: "2",
      // icon: desktop,
      title: "Digital Technology",
      desc:
        "Gets better every day - stay tuned",
      img: CC,
      link: "https://pixie-sticks2.github.io/Code-Cocktails/"
    },
    {
      id: "3",
      // icon: desktop,
      title: "Globalization",
      desc:
        "Help people all over the world",
      img: weather,
      link: "https://clim8.netlify.app/"
    },
    {
      id: "4",
      // icon: desktop,
      title: "New technologies",
      desc:
        "Space engineering becomes more and more advanced",
      img: weather,
      link: "https://clim8.netlify.app/"
    },
  ];
  // const handleClick = (way) => {
  //   way === "left" ? setCurrentSlide(currentSlide < 0 ? currentSlide - 1 : 2) :
  //     setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  //   console.log(currentSlide)
  // }

  return (
    <div className='works' id='works'>
      <h1>Websites</h1>
      <div className="wrapper">
        <div className="container">
          {data.map((card) => (
            <React.Fragment key={card.id}>
              <input
                type="radio"
                name="slide"
                id={`c${card.id}`}
                checked={selectedCard === card.id}
                onChange={() => setSelectedCard(card.id)}
              />
              <label htmlFor={`c${card.id}`} className='card'>
                <div className="row">
                  <div className="icon">{card.id}</div>
                  <div className="description">
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                </div>
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>
      <a href="#testimonials" className='arrow'>
        <img src={down} alt="" />
      </a>
    </div>
    // <div className='works' id='works'>
    //   <h1>Websites</h1>
    //   <div className="wrapper">
    //     <div className="container">
    //       <input type="radio" name="slide" id="c1" />
    //       <label htmlFor="c1" className='card'>
    //         <div className="row">
    //           <div className="icon">1</div>
    //           <div className="description">
    //             <h4>Winter</h4>
    //             <p>Winter has so much to offer - creative activities</p>
    //           </div>
    //         </div>
    //       </label>
    //       <input type="radio" name="slide" id="c2" />
    //       <label htmlFor="c2" className='card'>
    //         <div className="row">
    //           <div className="icon">2</div>
    //           <div className="description">
    //             <h4>Digital Technology</h4>
    //             <p>Gets better everyday - stay tuned</p>
    //           </div>
    //         </div>
    //       </label>
    //       <input type="radio" name="slide" id="c3" />
    //       <label htmlFor="c3" className='card'>
    //         <div className="row">
    //           <div className="icon">3</div>
    //           <div className="description">
    //             <h4>Globalization</h4>
    //             <p>help people all over the world</p>
    //           </div>
    //         </div>
    //       </label>
    //       <input type="radio" name="slide" id="c4" />
    //       <label htmlFor="c4" className='card'>
    //         <div className="row">
    //           <div className="icon">4</div>
    //           <div className="description">
    //             <h4>New Technologies</h4>
    //             <p>Space engineering becomes more and more advanced</p>
    //           </div>
    //         </div>
    //       </label>
    //     </div>
    //   </div>
      

      

  )
}
