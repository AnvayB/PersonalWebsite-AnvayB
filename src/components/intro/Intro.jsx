import './Intro.scss';
import Face from '../../images/face.png';
import down from '../../images/down.png'
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

//switch left and right classes later so that face is on right side

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: [
        "Software Engineer",
        "Web Developer",
        "React.js Developer",
        "Photographer",
        "Avid Music Lover",
        "Cinephile",
        "Food and Travel Enthusiast"
      ],
    })
    

  }, [])
  

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="wrapper">
          <h2>Hi, my name is</h2>
          <h1>Anvay Bhanap</h1>
          <h3>| <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src={down} alt="" />
        </a>
      </div>

      <div className="right">
      <div className="imgContainer">
          <img src={Face} alt="" className="face" />
        </div>
      </div>
    </div>
  )
}
 