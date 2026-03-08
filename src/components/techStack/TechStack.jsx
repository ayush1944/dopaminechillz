import React from 'react';
import './TechStack.css';
import {
  FaPython,
  FaDatabase,
  FaSnowflake,
  FaRust,
  FaStackExchange,
  FaStackpath,
  FaTable,
  FaFilePowerpoint,
  FaFileExcel,
  FaGit,
  FaGithub,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiMetasploit,
  SiDatabricks,
  SiPlotly,
} from 'react-icons/si';

const TechStack = () => {
  const techItems = [
    { name: 'Python', icon: <FaPython /> },
    { name:  "R", icon: <FaRust/>},
    { name: 'SQL', icon: <SiMysql /> },
    { name: 'Pandas', icon: <SiPandas /> },
    { name: 'NumPY', icon: <SiNumpy /> },
    { name: 'Scikit-learn', icon: <SiScikitlearn /> },
    { name: 'EDA', icon: <FaStackpath /> },
    { name: 'Statistical Analysis', icon: <FaStackExchange /> },
    { name: 'Power BI', icon: <FaFilePowerpoint /> },
    { name: 'Tableau', icon: <FaTable className="csharp-icon" /> },
    { name: 'Excel', icon: <FaFileExcel /> },
    { name: 'Matplotlib', icon: <SiMetasploit /> },
    { name: 'Seaborn', icon: <SiDatabricks /> },
    { name: 'SQL Server', icon: <FaDatabase /> },
    { name: 'Snowflake', icon: <FaSnowflake /> },
    { name: 'Plotly', icon: <SiPlotly /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Git', icon: <FaGit /> },
    { name: 'GitHub', icon: <FaGithub /> },
  ];

  return (
    <section className="tech-stack container section" id="tech-stack">
      <h2 className="section__title">My Tech Stack</h2>

      <div className="tech-stack__container">
        {techItems.map((tech, index) => (
          <div className="tech-stack__item" key={index}>
            <div className="tech-stack__icon">{tech.icon}</div>
            <h3 className="tech-stack__name">{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
