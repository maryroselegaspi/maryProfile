import React from "react";
import "./Resume.css";


function Resume() {

  const school=[
    ['Education Centre Australia', 'Professional Year','2020-2021',[],],
    [
      'Queensland University of Technology', 
      'Masters of Information Technology (Computer Science)',
      '2017-2019',
      [
        'GPA of 6.5 in a 7 point scale',
        'Dean\’s List Awards (2017, 2019)', 
        'International Merit Scholarship Award'
      ]
    ],
    [
      'New Era University', 
      'Bachelor of Nursing', 
      '2003-2007',
      [
        'Cum Laude',
        'Dean\’s List (2003-2007)', 
        'President\’s List', 
        'With Highest Honours Award (Bachelor of Science in Nursing)', 
        'Literacy Training Service Leadership Award',
      ]
    ]
  ];

  const skills =[
    ['Languages',
      ['C#', 'JavaScript', 'Python', 'HTML', 'CSS',]
    ],
    ['Databases',
      ['SQL', 'Microsoft SQL Server', 'MongoDB']
    ],
    ['Tools/Other skills',
      ['.Net Core Framework', 'LINQ', 'Entity Framework', 'ASP .Net MVC', 'API','Data Analytics', ]
    ],
    ['Web Development',
      ['React.js', 'Material-UI', "Semantic-UI"]
    ]
  ];
  console.log(skills)

  
  console.log(school)
  return (
    <div className="resume">
      <div className="resume__header">
        <div className="content-wrap">
          <h1>Mary Rose Legaspi</h1>
          <h2>Junior Developer</h2>
          <p className='resume__headerDetails'>
            {" "}
            A focused and fast-learning software developer
            who loves developing web applications and
            solving problems. I am a hardworking, reliable,
            and responsible nurse and individual who is
            seeking opportunities to further my skills and
            knowledge as a software and web developer. I
            am highly adaptable to a new challenging
            environment.
          </p>
        </div>
      </div>

      {/* <!-- // Education --> */}
      <section className="education">
        <div className="content-wrap">
          <h2>Education</h2>
          
          <div>
            {school.map(items =>(
              <div className='education__section'>
                <div className='education__sectionLeft'>
                  <h3>{items[0]}</h3>
                  <h4>{items[1]}</h4>
                  {items[3].length >0
                    ?<div>
                        <h5 className='education__achievementsTitle'>Achievements:</h5>
                        {items[3].map(achievments =><li className='bulletpoints'>{achievments}</li>)}
                    </div>
                   :<div></div>
                  }                 
                </div>
                <div className='education__sectionRight'>
                  <h4>{items[2]}</h4>
                </div>         
              </div>             
            ))}
          </div>

        
        </div>
      </section>

      {/* <!-- // Technical Expertise --> */}
      <section className="technical-expertise">
        <div className="content-wrap">
          <h2> Technical Expertise</h2>
          {skills.map( skills =>
           <div>
             <h3>{skills[0]}</h3>
             {skills[1].map(skill =>(<li className='bulletpoints'>{skill}</li>))}
           </div>
            )}
        </div>
      </section>
      {/* <!--//University Projects --> */}
      <section className="university-projects">
        <div className="content-wrap">
          <h2>University Projects</h2>
          <h3> Semester 1 -2019</h3>
          <ul>
            <li>
              <p>
                Implemented modified agile-scrum technique to undertake a
                mini-research regarding machine learning by tensor base model
                approach to infer missing links in the YAGO knowledge graph.
              </p>
            </li>
            <ul>
              <li>
                <p>
                  Used python in big data pre-processing (converting text-based
                  knowledge graph triple data into unique id based) and
                  post-processing five-fold cross validation and visualization
                  of results)
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <p>
                  Used MATLAB in the tensor modeling technique (creating tensor
                  object, applying tensor factorization algorithm, and
                  reconstruction)
                </p>
              </li>
            </ul>
            <li>
              <p>
                Developed different machine learning models for data mining
                projects such as decision tree, regression, neural network,
                ensemble model, clustering, association-, text-, and web mining.
              </p>
            </li>
            <ul>
              <li>
                <p>
                  Applied various data pre-processing techniques such as
                  removal, imputation, interpolation, flagging and correction.{" "}
                </p>
              </li>
              <li>
                <p>Largely used Jupyter notebook. </p>
              </li>
            </ul>
          </ul>
          {/* <!-- Other Uni projects --> */}
          <h3> Semester 2 - 2018</h3>
          <ul>
            <li>
              <p>
                In an agile management, developed a predictive analytics
                platform using Apache Spark’s Machine learning library.
              </p>
              <ul>
                <li>
                  <p>
                    The project is written in python and used MongoDB as the
                    database.
                  </p>
                </li>
                <li>
                  <p>Implemented in a virtual machine</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      {/* <!-- //Work Experience --> */}
      <section className="work">
        <div className="content-wrap">
          <h2> Work Experience (Prior to IT Degree)</h2>
          <h3> Primicias Pharmacy-Philippines - 2012-2017</h3>
          <h4> Assistant IT Administrator</h4>
          <ul>
            <li>Monitoring and maintaining computer systems and networks. </li>
            <li>
              Troubleshooting of Point of Sales machine related issues and other
              computer problem.{" "}
            </li>
            <li>Upgrading and installing of hardware and software. </li>
          </ul>
          <h3> Various Companies - 2007-2017</h3>
          <h4> Non-IT roles</h4>
          <ul>
            <li>Health, administrative, business and management roles. </li>
            <li>
              Combination of full-time, part-time, and consultancy jobs in a
              10-year period.
              {/* <!--<a href="http://maryroselegaspi.com">See more. </a> --> */}
            </li>
          </ul>
        </div>
      </section>

      {/* <!-- // Referees --> */}
      <section className="referees">
        <div className="content-wrap">
          <h2>Referees</h2>

          {/* <!-- referees --> */}
          <h3>Monir Moniruzzaman</h3>
          <ul>
            <li>Project Supervisor, QUT Sessional Academic Data Science</li>
            <li>
              <a href="mailto: a.moniruzzaman@qut.edu.au">
                {" "}
                a.moniruzzaman@qut.edu.au
              </a>
            </li>
          </ul>
          {/* <h3>Joel Binfield </h3>
          <ul>
            <li>
              {" "}
              QUT Manager-International Student Engagement /Sessional Academic
            </li>
            <li>
              <a href="mailto: ">
                {" "}
                name here
              </a>
            </li>
          </ul> */}
          {/* <h5>
            Get{" "}
            <a
              className="cv"
              href="https://drive.google.com/file/d/1As1A_9mlZZNd-UDcAELNdoDraBshhdkj/view?usp=sharing"
            >
              CV{" "}
            </a>{" "}
            to call referees
          </h5> */}
        </div>
      </section>
    </div>
  );
}

export default Resume;
