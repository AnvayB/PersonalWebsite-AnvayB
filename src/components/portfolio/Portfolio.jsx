import './Portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList';
import { useState, useEffect } from 'react';
import {
  featuredPortfolio,
  webPortfolio,
  //mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Education",
    },
    {
      id: "web",
      title: "Work Experience",
    },
    // {
    //   id: "mobile",
    //   title: "Mobile App",
    // },
    {
      id: "design",
      title: "Languages + Tools",
    },
    {
      id: "content",
      title: "Hobbies + Interests",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      // case "mobile":
      //   setData(mobilePortfolio);
      //   break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
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
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
            <h4>{d.dates}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
