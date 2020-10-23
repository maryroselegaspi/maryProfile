import React, { cloneElement } from 'react';
import './Resume2.css';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Resume2() {
    const skills =[
        'C#', 'JavaScript', 'Python', 'HTML', 'CSS',
        'SQL', 'Microsoft SQL Server', 'MongoDB',
        'Tools/Other skills',
        '.Net Core Framework', 'LINQ', 'Entity Framework', 'ASP .Net MVC', 'API','Data Analytics', 
        'Web Development', 'React.js', 'Material-UI', "Semantic-UI",
      ];
    const memberships=[
        'ACS',
        'Red Cross Australia',
        'Philippine Nurses Association',
        'Registered Nurse (Philippines)'
    ];

    const hobbies=[
        'Reading forex trading strategy books',
        'Trading forex and stocks on a demo account',
    ];
    const contacts=[
        [< PhoneIcon fontSize='small'/>, "+61 466 211 867","Tel: +61 466 211 867",],
        [< EmailIcon fontSize='small'/>,"maryrose.legaspi.bne@gmail.com","mailto:maryrose.legaspi.bne@gmail.com",],
        [< LocationOnIcon fontSize='small'/>,"Gordon Park, QLD, 4031","https://www.google.com/maps/place/Gordon+Park+QLD+4031/@-27.4173707,153.0208357,16z/data=!4m5!3m4!1s0x6b91582da01d65b5:0x74aa0ff4e9c3a226!8m2!3d-27.4176279!4d153.0251058",],
        [< LinkedInIcon fontSize='small'/>,"LinkedIn","https://www.linkedin.com/in/maryroselegaspi2018/",],
        [< GitHubIcon fontSize='small'/>,"Github","https://github.com/maryroselegaspi",],
    ];
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

      const experience =[
          ['Software Developer Intern', 
            'Jun 2020 - Present',
            'MVP Studio | Melbourne',
            [
                ['Building front-end web applications using React.js, Semantic UI and ES6'],
                ['Building back-end web applications using .NET Core, Entity Framework',], 
                ['LINQ, MongoDB, Semantic UI, Microservices Architecture, Restful API',],
                ['Designing SQL database and deploying applications to Microsoft Azure'],
            ],
          ],
          ['Area Supervisor', 
          'Oct 2011 - Feb 2017',
          'Primicias Pharmacy | Philippines',
            [
            'In charged with day-to-day operations of the pharmacy chain including training of new employees and facilitating requirements to ensure efficient delivery of services to customers'
            ],
          ],
      ];

      const projects =[
          [
            'Netflix Clone',
            'https://netflix-clone-f909a.web.app/',
            ' React Hooks, Material UI, Firebase hosting, TMDB API'
          ],
          [
            'Amazon Clone',
            'https://clone-9cc5f.web.app/',
            ' React Hooks,React Router, React-Context API, Firebase(hosting, database & authentication), Stripe payment'
          ],
          [
            'Airbnb Clone',
            'https://airbnb-clone-18e3e.web.app/',
            ' React Hooks, Material UI, React Router, Firebase hosting'
          ],
          [
            'Instagram Clone',
            'https://instagram-clone-da3b0.web.app/',
            ' React Hooks, Material UI, Firebase (hosting, database & authentication)'
          ],       
      ];

      const uniProjects =[
          [
          'Project 2 | QUT',
          'Machine learning by a tensor-based model approach to extend the knowledge in the YAGO knowledge graph by inferring new relations between entities.',
          'Python, MATLAB, Tensor toolbox, YAGO knowledge graph, Panda, Numpy, Sckitlearn',
          '2019',
          ],
          [
            'Project 1 | QUT',
            'Building scalable solution for predicting heart disease using Apache Spark MLlib deployed in standalone cluster mode.',
            'Apache Spark, Spark ML library, MongoDB, Python, Linux virtual machine',
            '2018'
          ],
        ]
   
    return (
        <div className='resume'>
            {/* Header */}
            <div className='resume__header'>
                <div className='header__left'>
                    <p>M<span className='color__green'>/</span>R</p>
                </div>
                <div className='header__right'>
                    <h3 className='color__green'>Mary Rose Legaspi</h3>
                    <h5>_____________________________________________________________________________</h5>
                    <h4>FULL-STACK SOFTWARE DEVELOPER</h4>
                </div>
            </div>

            {/* Resume Details */}
            <div className='resume__details'>
                {/* Left */}
                <div className='resume__left'>
                    {/* contacts */}
                    <div className='resume__leftSection contacts background__gray'>
                        {/* <h3>Contacts</h3> */}
                        
                        {contacts.map(con =>(
                            <div className='contactlist'>
                                <div className='contacts__icon color__green'>
                                    {con[0]}
                                </div>
                       
                                <div className='contacts__details'>
                                    {/* icon */}
                                    {/* Link */}
                                    <a
                                        href={con[2]}
                                        target="_blank"
                                    >
                                        {con[1]}
                                    </a>
                                </div>
                            </div>
                        ))}
                    
                    </div>

                    {/* skilss */}
                    <div className='resume__leftSection skills background__white'>
                        <h3>Skills</h3>
                        {skills.map(skill => (
                            <li className='bulletpoints'>{skill}</li>
                        ))}
                    </div>

                    {/* professional affiliations */}
                    <div className='resume__leftSection membership background__gray' >
                        <h3>Memberships</h3>
                        {memberships.map(mem =>(
                            <li className='bulletpoints'>{mem}</li>
                        ))}
                    </div>

                    {/* hobbies */}
                    <div className='resume__leftSection hobbies background__white'>
                        <h3>Hobbies</h3>
                        {hobbies.map(hob => (
                            <li className='bulletpoints'>{hobbies}</li>
                        ))}
                    </div>

                    {/* referees */}
                    <div className='resume__leftSection referees background__gray'>
                        <h3>Referees</h3>
                        <p>Available upon request</p>
                    </div>
                </div>
                {/* Right */}
                <div className='resume__right'>
                    <div className='resume_rightSection'>
                        <h3>EDUCATION</h3>
                        {/* <div> */}
                            {school.map(items =>(
                                <div className='education__section'>
                                    <div className='education__sectionLeft'>
                                        <h4>{items[0]}</h4>
                                        <h5>{items[1]}</h5>
                                        {items[3].length >0
                                            ?<div>
                                                <h5 className='education__achievementsTitle'>Achievements:</h5>
                                                {/* <p>{items[3]}</p> */}
                                                {items[3].map(achievments =><p className='bulletpoints'>{achievments}</p>)}
                                            </div>
                                        :<div></div>
                                        }                 
                                        </div>
                                        <div className='education__sectionRight'>
                                            <h4>{items[2]}</h4>
                                        </div> 
                                       
                                </div>             
                            ))}
                            {/* </div>
                            <div className='resume_rightSection_-date'></div> */}
                        </div>
                    <div className='resume_rightSection'>
                        <h3>EXPERIENCE</h3>
                        {experience.map(items =>(
                                <div className='education__section'>
                                    <div className='education__sectionLeft'>
                                        <h4>{items[0]}</h4>
                                        <h5>{items[2]}</h5>
                                        {items[3].length >0
                                            ?<div>
                                                {/* <h5 className='education__achievementsTitle'>Achievements:</h5> */}
                                                {/* <p>{items[3]}</p> */}
                                                {items[3].map(achievments =><li className='bulletpoints'>{achievments}</li>)}
                                            </div>
                                        :<div></div>
                                        }                 
                                        </div>
                                        <div className='education__sectionRight'>
                                        <h4>{items[1]}</h4>
                                    </div> 
                                       
                                </div>             
                            ))}
                        
                        <div className='resume_rightSection_-date'></div>
                    </div>
                    <div className='resume_rightSection'>
                        <h3>UNVERSITY PROJECTS</h3>
                        {uniProjects.map(items =>(
                                <div className='education__section'>
                                    <div className='education__sectionLeft'>
                                        <h4>{items[0]}</h4>
                                        <p>{items[1]}</p>
                                        <p ><span className='bold'>Technologies:</span>{items[2]}</p>                                                 
                                    </div> 
                                    <div className='education__sectionRight'>
                                        <h4>{items[3]}</h4>
                                    </div> 
                                 
                             </div>             
                            ))}
                        <div className='rightSection__details'></div>
                        <div className='resume_rightSection_-date'></div>
                    </div>
                       
                    <div className='resume_rightSection'>
                        <h3>PERSONAL PROJECTS</h3>
                        {projects.map(items =>(
                                <div className='education__section'>
                                    <div className='education__sectionLeft'>
                                    <a href={items[1]} target="_blank"> {items[0]}</a>
                                    <p className='text'><span className='bold'>Technologies:</span>{items[2]}</p>                                                 
                                    </div> 
                                       
                                </div>             
                            ))}
                        <div className='rightSection__details'></div>
                        <div className='resume_rightSection_-date'></div>
                    </div>
                </div>
            </div>
            {/* footer color */}
            <div className='resume__footer '></div>
            
        </div>
    )
}

export default Resume2
