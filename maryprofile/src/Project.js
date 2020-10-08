import React from "react";
import "./Project.css";
import Row from "./Row";
import netflix from "./images/netflix.png";
import instagram from "./images/instagram.png";
import amazon from "./images/amazon.png";
import airbnb from "./images/airbnb.png";

const project = [
  {
    title: "Netflix Clone",
    imageUrl: netflix,
    web: "https://netflix-clone-f909a.web.app/",
    github: "https://github.com/maryroselegaspi/netflix-clone.git",
  },
  {
    title: "Amazon Clone",
    imageUrl: amazon,
    web: "https://clone-9cc5f.web.app/",
    github: "https://github.com/maryroselegaspi/amazon-clone-mary.git",
  },
  {
    title: "Airbnb Clone",
    imageUrl: airbnb,
    web: "https://airbnb-clone-18e3e.web.app/",
    github: "https://github.com/maryroselegaspi/airbnb-clone-mary.git",
  },
  {
    title: "Instagram Clone",
    imageUrl: instagram,
    web: "https://instagram-clone-da3b0.web.app/",
    github: "https://github.com/maryroselegaspi/instagram-clone.git",
  },
];
function Project() {
  return (
    <div className="project">
      <div className="project__1">
        {/* <h1 className="project__title">Personal Projects</h1> */}
        <div className="project__row">
          <Row
            title={project[0].title}
            imageUrl={project[0].imageUrl}
            web={project[0].web}
            github={project[0].github}
          />
        </div>
        <div className="project__row">
          <Row
            title={project[1].title}
            imageUrl={project[1].imageUrl}
            web={project[1].web}
            github={project[1].github}
          />
          {/* </div> */}
          {/* <div className="project__row"> */}
          <Row
            title={project[2].title}
            imageUrl={project[2].imageUrl}
            web={project[2].web}
            github={project[2].github}
          />
          <Row
            title={project[3].title}
            imageUrl={project[3].imageUrl}
            web={project[3].web}
            github={project[3].github}
          />
        </div>
        {/* <div className="project__1">
          <h1 className="project__title">MVP Studio Internship projects</h1>
          <div className="project__row">
            <Row
              title={project[2].title}
              imageUrl={project[2].imageUrl}
              web={project[2].web}
              github={project[2].github}
            />
            <Row
              title={project[3].title}
              imageUrl={project[3].imageUrl}
              web={project[3].web}
              github={project[3].github}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Project;
