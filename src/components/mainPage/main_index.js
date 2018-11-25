import React, { Component } from 'react';

const API_KEY = '5ba6a00bd79541d99b4b764e056a7453';
const news_url = `https://newsapi.org/v2/everything?q=apple&from=2018-11-21&sortBy=popularity&apiKey=${API_KEY}`;

import NewsList from './news_list';

class MainIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
    this.getNews(news_url);
  }

  getNews(url) {
    fetch(url)
      .then(response => response.json())
      .then(articles => this.setState({ articles: articles.articles }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className= "news-list" >
      <NewsList articles={ this.state.articles } />
        < /div>
    );
  }

}

export default MainIndex;
