const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Helper function to read the authors file
const readAuthorsFile = (callback) => {
  fs.readFile("authors.json", "utf8", (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, JSON.parse(data));
    }
  });
};

// Helper function to write to the authors file
const writeAuthorsFile = (data, callback) => {
  fs.writeFile("authors.json", JSON.stringify(data, null, 2), (err) => {
    callback(err);
  });
};

// GET all authors
app.get("/authors", (req, res) => {
  readAuthorsFile((err, authors) => {
    if (err) {
      res.status(500).send("Error reading authors file");
    } else {
      res.send(authors);
    }
  });
});

// GET a single author by ID
app.get("/authors/:id", (req, res) => {
  const authorId = req.params.id;
  readAuthorsFile((err, authors) => {
    if (err) {
      res.status(500).send("Error reading authors file");
    } else {
      const author = authors.find((a) => a.id === authorId);
      if (!author) {
        res.status(404).send("Author not found");
      } else {
        res.send(author);
      }
    }
  });
});

app.get("/authors/:id/books", (req, res) => {
  const authorId = req.params.id;
  readAuthorsFile((err, authors) => {
    if (err) {
      res.status(500).send("Error reading authors file");
    } else {
      const author = authors.find((a) => a.id === authorId);
      if (!author) {
        res.status(404).send("Author not found");
      } else {
        res.send(author.books.map((b) => ({ ...b, author })));
      }
    }
  });
});

// PUT update author by ID
app.put("/authors/:id", (req, res) => {
  const authorId = req.params.id;
  const updatedAuthor = req.body;

  readAuthorsFile((err, authors) => {
    if (err) {
      res.status(500).send("Error reading authors file");
    } else {
      const index = authors.findIndex((author) => author.id === authorId);
      if (index === -1) {
        res.status(404).send("Author not found");
      } else {
        authors[index] = updatedAuthor;
        writeAuthorsFile(authors, (err) => {
          if (err) {
            res.status(500).send("Error writing authors file");
          } else {
            res.send(updatedAuthor);
          }
        });
      }
    }
  });
});

// GET all books
app.get("/books", (req, res) => {
  readAuthorsFile((err, authors) => {
    if (err) {
      res.status(500).send("Error reading authors file");
    } else {
      const books = authors.flatMap((author) =>
        author.books.map((book) => ({ ...book, author }))
      );
      res.send(books);
    }
  });
});

// GET a single book by ID
app.get("/books/:id", (req, res) => {
  const bookId = req.params.id;
  readAuthorsFile((err, authors) => {
    if (err) {
      res.status(500).send("Error reading authors file");
    } else {
      const book = authors
        .flatMap((author) => author.books.map((book) => ({ ...book, author })))
        .find((book) => book.id === bookId);
      if (!book) {
        res.status(404).send("Book not found");
      } else {
        res.send(book);
      }
    }
  });
});

// PUT update book by ID
app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const updatedBook = req.body;

  readAuthorsFile((err, authors) => {
    if (err) {
      res.status(500).send("Error reading authors file");
    } else {
      let bookUpdated = false;
      for (let author of authors) {
        const index = author.books.findIndex((book) => book.id === bookId);
        if (index !== -1) {
          author.books[index] = updatedBook;
          bookUpdated = true;
          break;
        }
      }

      if (!bookUpdated) {
        res.status(404).send("Book not found");
      } else {
        writeAuthorsFile(authors, (err) => {
          if (err) {
            res.status(500).send("Error writing authors file");
          } else {
            res.send(updatedBook);
          }
        });
      }
    }
  });
});

// GET all chapters
app.get("/chapters", (req, res) => {
  readAuthorsFile((err, authors) => {
    if (err) {
      res.status(500).send("Error reading authors file");
    } else {
      const chapters = authors.flatMap((author) =>
        author.books.flatMap((book) =>
          book.chapters.map((chapter) => ({
            ...chapter,
            book: { ...book, author },
          }))
        )
      );
      res.send(chapters);
    }
  });
});

// GET a single chapter by ID
app.get("/chapters/:id", (req, res) => {
  const chapterId = req.params.id;
  readAuthorsFile((err, authors) => {
    if (err) {
      res.status(500).send("Error reading authors file");
    } else {
      const chapter = authors
        .flatMap((author) =>
          author.books.flatMap((book) =>
            book.chapters.map((chapter) => ({
              ...chapter,
              book: { ...book, author },
            }))
          )
        )
        .find((chapter) => chapter.id === chapterId);
      if (!chapter) {
        res.status(404).send("Chapter not found");
      } else {
        res.send(chapter);
      }
    }
  });
});

// PUT update chapter by ID
app.put("/chapters/:id", (req, res) => {
  const chapterId = req.params.id;
  const updatedChapter = req.body;

  readAuthorsFile((err, authors) => {
    if (err) {
      res.status(500).send("Error reading authors file");
    } else {
      let chapterUpdated = false;
      for (let author of authors) {
        for (let book of author.books) {
          const index = book.chapters.findIndex(
            (chapter) => chapter.id === chapterId
          );
          if (index !== -1) {
            book.chapters[index] = updatedChapter;
            chapterUpdated = true;
            break;
          }
        }
      }

      if (!chapterUpdated) {
        res.status(404).send("Chapter not found");
      } else {
        writeAuthorsFile(authors, (err) => {
          if (err) {
            res.status(500).send("Error writing authors file");
          } else {
            res.send(updatedChapter);
          }
        });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
