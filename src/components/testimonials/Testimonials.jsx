import './Testimonials.scss'
import rArrow from '../../images/right-arrow.png';
import linkedin from "../../images/linkedin.png";

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
        "Anvay was on my team for about 3 months, and it was a very pleasant experience. Anvay always came to our meetings prepared and ready to go, which is important to foster a positive and productive team environment. He is communicative in his approach, which I appreciate as I believe that any professional should be a clear and transparent communicator. He is also feedback-driven and constantly wants to progress. ",
    },
    {
      id: 2,
      name: "Sambprasad Kuvalekar",
      title: "Founder and Managing Director",
      company: "Prismatic Softwares Pvt. Ltd.",
      img:
        "https://media-exp1.licdn.com/dms/image/D4D35AQE3h9PEl4zzhw/profile-framedphoto-shrink_200_200/0/1668430556706?e=1670274000&v=beta&t=V3qafbxluKm_WbaHbY4ku0Lu9CdFdI254gjKbYEwz_s",
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
          <div className={d.featured ? "card featured" : "card"}>
          <div className="top">

            <img src={rArrow} className="left" alt="" />
            <img src={d.img} className='user' alt="" />
            <a target="_blank" rel='noopener noreferrer' href={d.link}><img src={linkedin} className="right" alt="" /></a>

          </div>
          <div className="center">
            {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
            <h5>{d.company}</h5>
          </div>
        </div>
        ))}
        
      </div>
    </div>
  )
}
