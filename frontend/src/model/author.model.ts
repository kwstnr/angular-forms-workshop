import { Book } from './book.model';

export interface Author {
  id: string;
  firstname: string;
  lastname: string;
  birthdate: string;
  books: Book[];
}
