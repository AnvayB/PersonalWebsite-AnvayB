import './Portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList';
import { useState, useEffect } from 'react';
import down from '../../images/down.png'
import {
  featuredPortfolio,
  workPortfolio,
  //mobilePortfolio,
  designPortfolio,
  projectPortfolio,
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
      id: "featured",
      title: "Education",
    },
    {
      id: "design",
      title: "Languages + Tools",
    },
    
  ];

  useEffect(() => {
    switch (selected) {
      case "work":
        setData(workPortfolio);
        break;
      case "featured":
        setData(featuredPortfolio);
        break;
      // case "mobile":
      //   setData(mobilePortfolio);
      //   break;
      case "design":
        setData(designPortfolio);
        break;
      case "projects":
        setData(projectPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1> 
      <p>Hover over an icon to see my experience</p> <br />
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.link} target="_blank" rel="noreferrer noopener">
            <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
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
