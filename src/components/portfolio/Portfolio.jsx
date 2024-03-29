import './Portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList';
import { useState, useEffect } from 'react';
import down from '../../images/down.png'
import {
  educationPortfolio,
  projectPortfolio,
  skillsPortfolio,
  workPortfolio,
  blank
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "work",
      title: "Work Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "skills",
      title: "Languages + Tools",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "work":
        setData(workPortfolio);
        break;
      case "education":
        setData(educationPortfolio);
        break;
      case "skills":
        setData(skillsPortfolio);
        break;
      case "projects":
        setData(projectPortfolio);
        break;
      default:
        setData(blank);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1> 
      <p>Click on a section and</p>
      <p>hover over an icon to see my experience</p> <br />
      <ul>
        {list.map((item) => (
          <PortfolioList
            // className="pList-sections"
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            subheading={item.subheading}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.link} target="_blank" rel="noopener noreferrer">
            <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
            <h5>{d.subheading}</h5>
            <h4>{d.info}</h4>
          </div>
          </a>
        ))}
      </div>
        <a href="#works" className='arrow'>
          <img src={down} alt=""/>
        </a>
    </div>
  );
}