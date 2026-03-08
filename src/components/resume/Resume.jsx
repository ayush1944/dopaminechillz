import React from 'react';
import './Resume.css';
import Card from './Card';

const expData = [
	{
		id: 1,
		category: 'education',
		icon: 'icon-graduation',
		year: '2021 - 2025',
		title: 'B.Tech in Electronics and Communication Engineering',
		desc: (
			<span>
				JSS Academy of Technical Education, Noida (A.K.T.U.)  <br /> GPA - 6.8/10.0 <br /> 
			</span>
		),
	},
	{
		id: 2,
		category: 'education',
		icon: 'icon-graduation',
		year: '2019–2020',
		title: 'CBSE Class XII',
		desc: (
			<span>
				Kendriya Vidyalaya, Moradabad <br /> Aggregate: 84.4
			</span>
		),
	},
	{
		id: 3,
		category: 'education',
		icon: 'icon-graduation',
		year: '2017–2018',
		title: 'CBSE Class X',
		desc: (
			<span>
				Kendriya Vidyalaya, Moradabad <br /> Aggregate: 94.4
			</span>
		),
	},
	{
		id: 4,
		category: 'experience',
		icon: 'icon-briefcase',
		year: '2025 Sept - Present',
		title: 'AI Transformation Consultant',
		desc: 'I have a role of an AI transformation consultant at Tata iQ, specializing in data-driven decision-making for financial services. I work within a larger data analytics team, collaborating with business leaders to develop AI-powered solutions. Performed EDA on customer data and carried out risk assessment based on given datasets.',
	},

	// {
	// 	id: 5,
	// 	category: 'experience',
	// 	icon: 'icon-briefcase',
	// 	year: '2024 Jun - 2024 Dec',
	// 	title: 'SE Intern @ Verdentra',
	// 	desc: 'Experienced in developing and optimizing web applications, system workflows, and database migrations using modern technologies, with a strong focus on user experience, efficiency, and collaboration.',
	// },
	// {
	// 	id: 6,
	// 	category: 'experience',
	// 	icon: 'icon-briefcase',
	// 	year: '2023 - 2024',
	// 	title: 'Web Designer @ Find X (lk)',
	// 	desc: 'Designed and built user-friendly websites, and landing pages using WordPress and Elementor.',
	// },
];

const Resume = () => {
	return (
		<section className="resume container section" id="resume">
			<h2 className="section__title">Experience</h2>

			<div className="resume__container grid">
				<div className="timeline grid">{expData.map((exp, index) => exp.category === 'education' && <Card key={index} icon={exp.icon} title={exp.title} year={exp.year} desc={exp.desc} />)}</div>

				<div className="timeline grid">{expData.map((exp, index) => exp.category === 'experience' && <Card key={index} icon={exp.icon} title={exp.title} year={exp.year} desc={exp.desc} />)}</div>
			</div>
		</section>
	);
};

export default Resume;
