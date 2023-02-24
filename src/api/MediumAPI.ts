import axios from 'axios';
import { ArticleResponse, TopArticlesResponse } from '../models/API';

const topPostOptions = {
  method: 'GET',
  url: 'https://medium2.p.rapidapi.com/user/259cd59bbad1/top_articles',
  headers: {
    'X-RapidAPI-Key': '5566c55eb1msh4307ddc83e03110p18a3b5jsn522d24bf8b18',
    'X-RapidAPI-Host': 'medium2.p.rapidapi.com'
  }
};

export const fetchTopArticles = (setFunction: Function) => {
  axios
    .request(topPostOptions)
    .then((response: TopArticlesResponse) =>
      setFunction(response.data.top_articles)
    )
    .catch(function (error: any) {
      console.error(error);
    });
};

export const fetchArticleById = (id: string, setFunction: Function) => {
  console.log(id);

  const articleContentOptions = {
    method: 'GET',
    url: `https://medium2.p.rapidapi.com/article/${id}`,
    headers: {
      'X-RapidAPI-Key': '5566c55eb1msh4307ddc83e03110p18a3b5jsn522d24bf8b18',
      'X-RapidAPI-Host': 'medium2.p.rapidapi.com'
    }
  };
  axios
    .request(articleContentOptions)
    .then((response: ArticleResponse) => {
      setFunction(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
