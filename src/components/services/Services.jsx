import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.png';
import Image3 from '../../assets/service-3.svg';
// import WordpressLight from '../../assets/wp-light.png';
// import { useTheme } from '../../context/theme';

const Services = () => {
	// const { isDarkMode } = useTheme();
	const data = [
		{
			id: 2,
			image: Image2,
			title: 'Data Analysis',
			description: 'I analyze structured and unstructured datasets to uncover trends, patterns, and insights that help businesses make informed decisions. I use tools like Python, R, and SQL to clean, process, and visualize data, turning raw information into actionable intelligence that drives growth and innovation.',
		},
		{
			id: 1,
			image: Image3,
			title: 'Machine Learning',
			description: 'I build predictive models using machine learning techniques to forecast outcomes, detect anomalies, and improve operational efficiency. I have experience with algorithms like regression, classification, and clustering, and I use libraries such as scikit-learn, TensorFlow, and PyTorch to develop and deploy machine learning solutions that solve real-world problems.',
		},
		{
			id: 3,
			image: Image1,
			title: 'Data Visualization',
			description: "I transform complex datasets into clear dashboards and visual reports using tools like Tableau, Power BI, and Python libraries. I create interactive visualizations that help stakeholders understand data insights at a glance, enabling them to make informed decisions and communicate findings effectively across teams and audiences.",
		},
		// {
		//   id: 4,
		//   image: Image1,
		//   title: 'UI/UX design',
		//   description:
		//     'Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.',
		// },
		// {
		//   id: 5,
		//   image: Image2,
		//   title: 'Web Development',
		//   description:
		//     'Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.',
		// },
		// {
		//   id: 6,
		//   image: Image3,
		//   title: 'Photography',
		//   description:
		//     'Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.',
		// },
	];

	return (
		<section className="services container section" id="services">
			<h2 className="section__title">Services</h2>
			<div className="services__container grid">
				{data.map((service) => (
					<div className="services__card" key={service.id}>
						<img src={service.image} alt="" className="services__img" />
						<h3 className="services__title">{service.title}</h3>
						<p className="services__description">{service.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
