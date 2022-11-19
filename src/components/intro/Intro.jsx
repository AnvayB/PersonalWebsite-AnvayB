import './Intro.scss';
import Face from '../../images/face.png';

//switch left and right classes later so that face is on right side

export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="wrapper">
          <h2>Hi, my name is</h2>
          <h1>Anvay Bhanap</h1>
        </div>
      </div>

      <div className="right">
      <div className="imgContainer">
          <img src={Face} alt="" className="face" />
        </div>
      </div>
    </div>
  )
}
 