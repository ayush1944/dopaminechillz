import { useState } from 'react';
import './Portfolio.css';
import spotifyImage from '../../assets/spotify.png'
import coffeeimage from '../../assets/coffee.png'
import cancer from '../../assets/cancer.png'
import uberImage from '../../assets/uber.png'
import sqlImage from '../../assets/sqlImage.png'
import tata from '../../assets/tata.png'


const categories = {
	DATA: 'DATA ANALYSIS',
	ML: 'MACHINE LEARNING',
	DASHBOARD: 'DASHBOARD',
	SQL: 'SQL',
	RESEARCH: 'RESEARCH',
};

const menuItem = [
	{
		id: 1,
		image: cancer,
		title: 'Machine Learning Based Cancer Data Analysis',
		category: categories.ML,
		link: 'https://github.com/dopaminechillzz/EDA-on-Cancer-Data-',
	},

	{
		id: 2,
		image: spotifyImage,
		title: 'Spotify Data Analytics Dashboard',
		category: categories.DASHBOARD,
		link: 'https://github.com/dopaminechillzz/Spotify-Dashboard',
	},

	{
		id: 3,
		image: coffeeimage,
		title: 'Coffee Sales Analytics Dashboard',
		category: categories.DASHBOARD,
		link: 'https://github.com/dopaminechillzz/Coffee-Sales-Dashboard',
	},

	{
		id: 4,
		image: uberImage,
		title: 'Uber Analytics Dashboard',
		category: categories.DASHBOARD,
		link: 'https://github.com/dopaminechillzz/Uber-Analytics-Dashboard',
	},

	{
		id: 5,
		image: sqlImage,
		title: 'Data Preprocessing and Analysis Using SQL',
		category: categories.SQL,
		link: 'https://github.com/priyanshpal/sql-data-analysis',
	},

	{
		id: 6,
		image: tata,
		title: 'AI Transformation Consultant – Tata iQ (Forage)',
		category: categories.RESEARCH,
		link: 'https://www.theforage.com/simulations/tata/data-analytics',
	},
];

const Portfolio = () => {
	const [items, setItems] = useState(menuItem);

	const filterItems = (categoryItem) => {
		const UpdatedItems = menuItem.filter((curElm) => {
			return curElm.category === categoryItem;
		});

		setItems(UpdatedItems);
	};

	return (
		<section className="work container section" id="portfolio">
			<h2 className="section__title">Recent works</h2>
			<div className="work__filters">

				<span className="work__item" onClick={() => setItems(menuItem)}>
					Everything
				</span>

				<span className="work__item" onClick={() => filterItems(categories.DATA)}>
					Data Analysis
				</span>

				<span className="work__item" onClick={() => filterItems(categories.ML)}>
					Machine Learning
				</span>

				<span className="work__item" onClick={() => filterItems(categories.DASHBOARD)}>
					Dashboards
				</span>

				<span className="work__item" onClick={() => filterItems(categories.SQL)}>
					SQL
				</span>

				<span className="work__item" onClick={() => filterItems(categories.RESEARCH)}>
					Research
				</span>

			</div>

			<div className="work__container grid">
				{items.map((item) => {
					const { id, image, title, category } = item;

					return (
						<div className="work__card fadeInUp" key={id}>
							<div className="work__thumbnail">
								<img src={image} alt={title} className="work__img" />
								<div className="work__mask"></div>
							</div>
							<span className="work__category">{category}</span>
							<h3 className="work__title">{title}</h3>
							{/* <a href={item.link} className="work__button" target="_blank">
								<i className="icon-link work__button-icon"></i>
							</a> */}
							<a href={item.link} className="work__button" target="_blank" rel="noreferrer">
								<i className="fab fa-github work__button-icon"></i>
							</a>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
