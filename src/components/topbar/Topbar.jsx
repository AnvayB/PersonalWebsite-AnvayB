import './Topbar.scss'
import {
  Instagram, LinkedIn, GitHub, PlayCircleOutline
} from '@material-ui/icons';
import Spotify from '../../images/Spotify.png'


export default function Topbar() {
  return (
    <div className={'topbar active'}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">AnvayB</a>

          {/* <a target="_blank" href="https://www.instagram.com/anvayzing/"> */}
            <div className="itemContainer">
            <Instagram className='icon'/>
          </div>
          {/* </a> */}

          {/* <a target="_blank" href="https://www.linkedin.com/in/anvayb/"> */}
            <div className="itemContainer">
          <LinkedIn className='icon'/>
          </div>
          {/* </a> */}

          {/* <a target="_blank" href="https://github.com/AnvayB"> */}
            <div className="itemContainer">
          <GitHub className='icon'/>
          </div>
          {/* </a> */}

          {/* <a target="_blank" href="https://open.spotify.com/user/22yytji6kwymjgjkrxficzvay?si=ef7d34a5c9f84f3c"> */}
            <div className="itemContainer">
          <PlayCircleOutline className="icon" />
            {/* <img src={Spotify} alt="" className="icon" width={'18px'}/> */}
          </div>
          {/* </a> */}
   
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
