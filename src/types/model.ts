import { Article } from '../redux/types/articles.type';

export interface GetArticleResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}
