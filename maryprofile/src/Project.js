import React, { useState } from "react";
import "./Project.css";
import Row from "./Row";
import netflix from "./images/netflix.png";
import instagram from "./images/instagram.png";
import amazon from "./images/amazon.png";
import airbnb from "./images/airbnb.png";
import AliceCarousel, { slideNext } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const project = [
  {
    id: 1,
    title: "Netflix Clone",
    imageUrl: netflix,
    web: "https://netflix-clone-f909a.web.app/",
    github: "https://github.com/maryroselegaspi/netflix-clone.git",
    skills: ["JavaScript", "React.js"],
  },
  {
    id: 2,
    title: "Amazon Clone",
    imageUrl: amazon,
    web: "https://clone-9cc5f.web.app/",
    github: "https://github.com/maryroselegaspi/amazon-clone-mary.git",
    skills: ["JavaScript", "React.js"],
  },
  {
    id: 3,
    title: "Airbnb Clone",
    imageUrl: airbnb,
    web: "https://airbnb-clone-18e3e.web.app/",
    github: "https://github.com/maryroselegaspi/airbnb-clone-mary.git",
    skills: ["JavaScript", "React.js"],
  },
  {
    id: 4,
    title: "Instagram Clone",
    imageUrl: instagram,
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
            <img
              key={project.id}
              src={project.imageUrl}
              alt=""
              className="home__image"
              // onDragStart={handleOnDragStart}
            />
            <div className="project__info">
              <h2 className="project__infoTitle">{project.title}</h2>
              <p className="project__text">{project.skills}</p>
              <div className="project__links">
                <a className="project__link" href={project.web} target="_blank">
                  See Web
                </a>
                <a
                  className="project__link"
                  href={project.github}
                  target="_blank"
                >
                  See Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </AliceCarousel>
    </div>
  );
}

export default Project;
