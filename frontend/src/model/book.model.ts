import { Author } from './author.model';
import { Chapter } from './chapter.model';

export interface Book {
  id: string;
  title: string;
  isbn: string;
  price: number;
  pages: number;
  publicationDate: Date;
  chapters: Chapter[];
  subtitle?: string;
  abstract?: string;
  author?: Author;
}
