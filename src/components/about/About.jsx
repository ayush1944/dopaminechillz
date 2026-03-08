import React from "react";
import "./About.css";
import logo from "../../assets/me.jpeg";
import AboutBox from "./AboutBox";

// const skillsList = [
//   {
//     id: 1,
//     name: "Development",
//     class: "development",
//     number: "90%",
//   },
//   { id: 2, name: "UI/UX design", class: "ui__design", number: "70%" },
//   { id: 3, name: "Wordpress", class: "wordpress", number: "80%" },
// ];

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <div className="about__image__Wrapper">
          <img src={logo} alt="" className="about__img" />
          <a
            href="https://drive.google.com/file/d/11Cae3xde6iWV-6R_uUIMH3esIJRELCAG/view?usp=sharing"
            download="resume"
            className="btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ verticalAlign: "middle", marginRight: "15px" }}
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hi! I'm Priyansh Pal, a Data Scientist and Data Analyst passionate
              about transforming raw data into meaningful insights.
            </p>

            <p className="about__description">
              I specialize in exploring datasets, building predictive models,
              and visualizing complex information in ways that support better
              decision-making. My work focuses on using data to uncover
              patterns, optimize processes, and guide strategy. I enjoy working
              with Python, SQL, and modern analytics tools to analyze large
              datasets and extract actionable insights. From data cleaning and
              exploratory analysis to machine learning and visualization, I aim
              to make data understandable and useful. I believe data should not
              only answer questions but also inspire better questions.
            </p>

            <div className="about__expertise">
              <h4 className="about__expertise-title">Expertise Areas</h4>
              <div className="about__expertise-list">
                <span className="expertise-badge">Data Analysis</span>
                <span className="expertise-badge">Machine Learning</span>
                <span className="expertise-badge">Statistical Analysis</span>
                <span className="expertise-badge">
                  Data Visualization
                </span>
                <span className="expertise-badge">Data Cleaning & Preparation</span>
                <span className="expertise-badge">Exploratory Data Analysis (EDA)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
