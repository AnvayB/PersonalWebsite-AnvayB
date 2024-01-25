import './Intro.scss';
import Face from '../../images/face.png';
import down from '../../images/down.png'
import { init } from 'ityped';
import { useEffect, useRef } from 'react';


export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: [
        "Software Engineer",
        "Web Developer",
        "ReactJS Developer",
        "Amateur Photographer",
        "Avid Music Lover",
        "Cinephile",
        "Food and Travel Enthusiast"
      ],
    })
  }, [])
  

//  [ Disable Right-Click on website:
// https://javascript.plainenglish.io/how-to-disable-the-right-click-menu-in-react-f600a79f133b 
//     useEffect(() => {
//       // define a custom handler function
//       // for the contextmenu event
//       const handleContextMenu = (e) => {
//         // prevent the right-click menu from appearing
//         e.preventDefault()
//       }
  
//       // attach the event listener to 
//       // the document object
//       document.addEventListener("contextmenu", handleContextMenu)
  
//       // clean up the event listener when 
//       // the component unmounts
//       return () => {
//         document.removeEventListener("contextmenu", handleContextMenu)
//       }
//     }, [])
//   ]

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="wrapper">
          <h2>Hi, my name is</h2>
          <h1>Anvay Bhanap</h1>
          <h3>| <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src={down} alt=""/>
        </a>
      </div>

      <div className="right">
      <div className="imgContainer">
        <img src={Face} alt="" className="face" />
        {/* <p className="shh">Don't look, <br /> I'm loading!</p> */}
        </div>
      </div>
    </div>
  )
}
