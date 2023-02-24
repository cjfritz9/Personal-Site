// Medium API

export interface TopArticlesResponse {
  data: {
    top_articles: string[];
  };
}

export interface ArticleResponseData {
  url: string;
  image_url: string;
  title: string;
  subtitle: string;
}

export interface ArticleResponse {
  data: ArticleResponseData;
}
