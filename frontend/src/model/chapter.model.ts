import { Book } from './book.model';

export interface Chapter {
  id: string;
  title: string;
  book?: Book;
}
