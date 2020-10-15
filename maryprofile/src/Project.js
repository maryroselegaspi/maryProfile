import React, { useState } from "react";
import "./Project.css";
import Row from "./Row";
import netflix from "./images/netflix.png";
import instagram from "./images/instagram.png";
import amazon from "./images/amazon.png";
import airbnb from "./images/airbnb.png";
import AliceCarousel, { slideNext } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const project = [
  {
    id: 1,
    title: "Netflix Clone",
    imageUrl: 'https://drive.google.com/file/d/1dDkLlKWwvoaVHPQd2Mpop0tvS-fLGbh-/view?usp=sharing',
    web: "https://netflix-clone-f909a.web.app/",
    github: "https://github.com/maryroselegaspi/netflix-clone.git",
    skills: ["JavaScript", "React.js"],
  },
  {
    id: 2,
    title: "Amazon Clone",
    imageUrl:'https://drive.google.com/file/d/13ohsX3TniEJa_3ImEjZ4ZlrvdzfCAv1B/view?usp=sharingzon',
    web: "https://clone-9cc5f.web.app/",
    github: "https://github.com/maryroselegaspi/amazon-clone-mary.git",
    skills: ["JavaScript", "React.js"],
  },
  {
    id: 3,
    title: "Airbnb Clone",
    imageUrl: 'https://drive.google.com/file/d/1Ix8xlD1DAo1RD38Yf3xosVcNFaSsdYWl/view?usp=sharing',
    web: "https://airbnb-clone-18e3e.web.app/",
    github: "https://github.com/maryroselegaspi/airbnb-clone-mary.git",
    skills: ["JavaScript", "React.js"],
  },
  {
    id: 4,
    title: "Instagram Clone",
    imageUrl: 'https://drive.google.com/file/d/1rcnO7KYAx9otoyviGShL-7vBe4xNBCHF/view?usp=sharing',
    web: "https://instagram-clone-da3b0.web.app/",
    github: "https://github.com/maryroselegaspi/instagram-clone.git",
    skills: ["JavaScript", "React.js"],
  },
];
function Project() {
  //   const [galleryItems, setGalleryItems] = useState([]);
  //   const img = project.map((i) => <img src={i.imageUrl} alt={i.title} />);
  //   setGalleryItems(img);

  //   console.log(galleryItems);
  const handleClick = () => {};
  return (
    <div className="project">
      <h1 className="project__title">Projects</h1>
      {/* Carousel type */}
      <AliceCarousel
        // items={img}
        autoPlay={false}
        // autoPlayInterval={3000}
        // touchTrackingEnabled={true}
        buttonsDisabled={true}
        className="home__carousel"
        dotsDisabled={false}
        // mouseTracking={true}
      >
        {project.map((project) => (
          <div className="project__carousel">
            <a href={project.web} target="_blank">
              <img
                className="home__image"
                key={project.id}
                src={project.imageUrl}
                alt=""
                // onDragStart={handleOnDragStart}
              />
            </a>

            <div className="project__info">
              <h2 className="project__infoTitle">{project.title}</h2>
              <div>
                <p className="project__text">Languages | Tools | Library</p>
                <ul>
                  {project.skills.map((i, index) => (
                    <li key={index}>{i}</li>
                  ))}
                </ul>
              </div>

              <div className="project__links">
                <Button
                  variant="contained"
                  color="primary"
                  className="project__button"
                  href={project.github}
                  target="_blank"
                  size="small"
                >
                  See Source Code
                </Button>
              </div>
            </div>
          </div>
        ))}
      </AliceCarousel>
    </div>
  );
}

export default Project;
