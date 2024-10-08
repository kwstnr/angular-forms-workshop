export var authors: Author[] = [
  {
    id: '1',
    firstname: 'J.K.',
    lastname: 'Rowling',
    birthdate: new Date('1965-07-31'),
    books: [
      {
        id: '1.1',
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: new Date('1997-06-26'),
        pages: 223,
        isbn: '0-7475-3269-9',
        price: 9.99,
        chapters: [{ id: '1.1.1', title: 'chapter 1' }],
      },
      {
        id: '1.2',
        title: 'Harry Potter and the Chamber of Secrets',
        publicationDate: new Date('1998-07-02'),
        pages: 251,
        isbn: '0-7475-3269-9',
        price: 9.99,
        chapters: [{ title: 'chapter 1', id: '1.2.1' }],
      },
      {
        id: '1.3',
        title: 'Harry Potter and the Prisoner of Azkaban',
        publicationDate: new Date('1999-07-08'),
        pages: 317,
        isbn: '0-7475-3269-9',
        price: 9.99,
        chapters: [{ title: 'chapter 1', id: '1.3.1' }],
      },
      {
        id: '1.4',
        title: 'Harry Potter and the Goblet of Fire',
        publicationDate: new Date('2000-07-08'),
        pages: 636,
        isbn: '0-7475-3269-9',
        price: 9.99,
        chapters: [{ title: 'chapter 1', id: '1.4.1' }],
      },
      {
        id: '1.5',
        title: 'Harry Potter and the Order of the Phoenix',
        publicationDate: new Date('2003-06-21'),
        pages: 766,
        isbn: '0-7475-3269-9',
        price: 9.99,
        chapters: [{ title: 'chapter 1', id: '1.5.1' }],
      },
      {
        id: '1.6',
        title: 'Harry Potter and the Half-Blood Prince',
        publicationDate: new Date('2005-07-16'),
        pages: 607,
        isbn: '0-7475-3269-9',
        price: 9.99,
        chapters: [{ title: 'chapter 1', id: '1.6.1' }],
      },
      {
        id: '1.7',
        title: 'Harry Potter and the Deathly Hallows',
        publicationDate: new Date('2007-07-21'),
        pages: 607,
        isbn: '0-7475-3269-9',
        price: 9.99,
        chapters: [{ title: 'chapter 1', id: '1.7.1' }],
      },
    ],
  },
  {
    id: '2',
    firstname: 'George R. R.',
    lastname: 'Martin',
    birthdate: new Date('1948-09-20'),
    books: [
      {
        id: '2.1',
        title: 'A Game of Thrones',
        publicationDate: new Date('1996-08-06'),
        pages: 694,
        isbn: '0-7475-3269-9',
        price: 9.99,
        chapters: [{ title: 'chapter 1', id: '2.1.1' }],
      },
      {
        id: '2.2',
        title: 'A Clash of Kings',
        publicationDate: new Date('1998-11-16'),
        pages: 761,
        isbn: '0-7475-3269-9',
        price: 9.99,
        chapters: [{ title: 'chapter 1', id: '2.2.1' }],
      },
      {
        id: '2.3',
        title: 'A Storm of Swords',
        publicationDate: new Date('2000-10-31'),
        pages: 973,
        isbn: '0-7475-3269-9',
        price: 9.99,
        chapters: [{ title: 'chapter 1', id: '2.3.1' }],
      },
      {
        id: '2.4',
        title: 'A Feast for Crows',
        publicationDate: new Date('2005-11-08'),
        pages: 753,
        isbn: '0-7475-3269-9',
        price: 9.99,
        chapters: [{ title: 'chapter 1', id: '2.4.1' }],
      },
      {
        id: '2.5',
        title: 'A Dance with Dragons',
        publicationDate: new Date('2011-07-12'),
        pages: 1016,
        isbn: '0-7475-3269-9',
        price: 9.99,
        chapters: [{ title: 'chapter 1', id: '2.5.1' }],
      },
    ],
  },
];
