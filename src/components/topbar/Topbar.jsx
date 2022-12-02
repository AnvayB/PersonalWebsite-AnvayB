import './Topbar.scss'
import {
  Instagram, LinkedIn, GitHub,
  // PlayCircleOutline
} from '@material-ui/icons';
// import Spotify from '../../images/Spotify.png'


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">AnvayB</a>

          <div className="socials">
            <a target="_blank" rel='noopener noreferrer' href="https://www.instagram.com/anvayzing/">
              <div className="itemContainer">
                <Instagram className='icon' />
                {/* <span>@anvayzing</span> */}
              </div>
            </a>

            <a target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/anvayb/">
              <div className="itemContainer">
                <LinkedIn className='icon' />
                {/* <span>anvayb</span> */}
              </div>
            </a>

            <a target="_blank" rel='noopener noreferrer' href="https://github.com/AnvayB">
              <div className="itemContainer">
                <GitHub className='icon' />
                {/* <span>AnvayB</span> */}
              </div>
            </a>

            {/* <a target="_blank" rel='noopener noreferrer' href="https://open.spotify.com/user/22yytji6kwymjgjkrxficzvay?si=ef7d34a5c9f84f3c">
              <div className="itemContainer">
                <PlayCircleOutline className="icon" />
                <img src={Spotify} alt="" className="icon" width={'18px'} />
              </div>
            </a> */}
          </div>

        </div>
        <div className="right">
          <div className="hamburger" onClick={() => {
            setMenuOpen(!menuOpen)
          }}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
