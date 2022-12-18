import './Testimonials.scss'
import rArrow from '../../images/right-arrow.png';
import linkedin from "../../images/linkedin.png";
import down from '../../images/down.png'

export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "Diego Fierst Garcia",
      title: "Campus Operations Manager",
      company: "RippleMatch",
      img:
        "https://media-exp1.licdn.com/dms/image/C4E03AQGmzq3jFPXJqg/profile-displayphoto-shrink_200_200/0/1614100631832?e=1675296000&v=beta&t=sQZ0qymlkIi1xsaalsyXK6XFiXdlH5JYj4lmFSpYiUo",
      icon: linkedin,
      link: "https://www.linkedin.com/in/diego-fierst-garcia/",
      desc:
        "Anvay was on my team for about 3 months, and it was a very pleasant experience. Anvay always came to our meetings prepared and ready to go, which is important to foster a positive",
    },
    {
      id: 2,
      name: "Sambprasad Kuvalekar",
      title: "Founder and Managing Director",
      company: "Prismatic Softwares Pvt. Ltd.",
      img:
        "https://media.licdn.com/dms/image/D4D03AQGUc6g4iEw4jg/profile-displayphoto-shrink_800_800/0/1668430554172?e=1676505600&v=beta&t=4DT_p0Kx2NTZK4GRwYIIp6mESeRIXswQ6I5rPRM4bSY",
      icon: linkedin,
      link: "https://www.linkedin.com/in/sambprasad/",
      desc:
        "Anvay is a very sincere and smart programmer. His disciplined approach and never say die attitude will help him grow exponentially in his career. All the best Anvay !",
    },
  ];

  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
        {data.map(d => (
          <div className="card">
            {/* {d.featured ? "card featured" : "card"} */}
            <div className="top">

              <img src={rArrow} className="left" alt="" />
              <img src={d.img} className='user' alt="" />
              <a target="_blank" rel='noopener noreferrer' href={d.link}><img src={linkedin} className="right" alt="" /></a>

            </div>
            <div className="center">
              {d.desc}...
              <br />
              <a target="_blank" rel='noopener noreferrer' className='recoLink' href="https://www.linkedin.com/in/anvayb/details/recommendations/">Read More</a>
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
              <h5>{d.company}</h5>
            </div>
          </div>
        ))}

      </div>
      <a href="#contact" className='arrow'>
        <img src={down} alt="" />
      </a>
    </div>
  )
}
