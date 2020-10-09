import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume">
      {/* <!-- // Education --> */}
      <section className="education">
        <div className="content-wrap">
          <h2>Education</h2>

          {/* <!-- School details: copy this block to add more schools. --> */}
          <h3>Queensland University of Technology - Brisbane, Australia</h3>
          <h4>Masters of Information Technology, 2017-2019</h4>
          <p>Major in Computer Science</p>
          <p>GPA of 6.5 in a 7 point scale</p>

          <h3>New Era University - Quezon City, Philippines</h3>
          <h4>Bachelor of Science in Nursing, 2003-2007</h4>
          <p>Graduated Cum-Laude.</p>
        </div>
      </section>

      {/* <!-- // Technical Expertise --> */}
      <section className="technical-expertise">
        <div className="content-wrap">
          <h2> Technical Expertise</h2>
          <h3> Languages</h3>
          <ul>
            <li>Python, C#, HTML, CSS</li>
          </ul>
          <h3> Databases</h3>
          <ul>
            <li>SQL, MongoDB</li>
          </ul>
          <h3>Tools, Libraries, Framework</h3>
          <ul>
            <li>Visual Studio 2017, Anaconda, Apache Spark, MATLAB</li>
          </ul>
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
          <h3>Joel Binfield </h3>
          <ul>
            <li>
              {" "}
              QUT Manager-International Student Engagement /Sessional Academic
            </li>
            <li>
              <a href="mailto: joel.binfield@qut.edu.au">
                {" "}
                joel.binfield@qut.edu.au
              </a>
            </li>
          </ul>
          <h5>
            Get{" "}
            <a
              class="cv"
              href="https://drive.google.com/file/d/1As1A_9mlZZNd-UDcAELNdoDraBshhdkj/view?usp=sharing"
            >
              CV{" "}
            </a>{" "}
            to call referees
          </h5>
        </div>
      </section>
    </div>
  );
}

export default Resume;
