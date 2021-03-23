import React from 'react';
import CardGrid from 'emerald-ui/lib/CardGrid';
import Card from 'emerald-ui/lib/Card';
import Navbar from '../components/Navbar';
import Alert from '../components/Alert';

import './styles/News/News.css';
import './styles/Global/Global.css';
class News extends React.Component {
	// const cardsContainer
	state = {
		articles: [],
		cardsVisible: 3,
		url:
			'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=95d89889601244a6a5754469720098b6',
	};
	handleChange = state => {
		console.log('handle change', state.sectionSelected);
	};
	componentDidMount() {
		this.axiosConection();
	}
	axiosConection = () => {
		const axios = require('axios').default;
		const getApi = () => {
			axios
				.get(
					'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=95d89889601244a6a5754469720098b6'
				)
				.then(res => {
					this.setState({
						articles: res.data.articles,
					});
				})
				.catch(e => {
					console.log(e);
				});
		};
		getApi();
	};

	handleClick = e => {
		if (this.state.articles.length >= this.state.cardsVisible) {
			this.setState({
				cardsVisible: this.state.cardsVisible + 4,
			});
		}
	};

	render() {
		return (
			<div className="news grid-y">
				<Navbar handleChange={this.handleChange} />
				<Alert />
				<div className="grid-y margin-auto">
					<h1 className="news__title">Top News</h1>
					<CardGrid className="news__cards">
						{this.state.articles.map((news, index) => {
							while (index <= this.state.cardsVisible) {
								return (
									<Card key={index}>
										<img
											className="news__card-img"
											style={{ backgroundImage: `url(${news.urlToImage})` }}
											alt=""
										/>
										<h1 className="eui-card-title">{news.title}</h1>
										<p className="truncate">{news.content}</p>
									</Card>
								);
							}
						})}
					</CardGrid>
					<div className="news__button">
						<button className="btn" onClick={this.handleClick}>
							<p className="btn-txt">View more stories</p>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default News;
