interface Book {
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
