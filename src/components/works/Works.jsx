import './Works.scss'
import mobile from "../../images/mobile.png"

export default function Works() {
  return (
    <div className='works' id='works'>
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={mobile} alt="" />
                </div>
                <h2>Title</h2>
                <p> "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">

            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}
