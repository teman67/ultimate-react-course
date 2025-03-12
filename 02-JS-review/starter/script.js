const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const books = getBook(2);
books;
const book = getBook(3);
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
// const title = books.title;
// const author = books.author;
console.log(author, title, genres);
// title;
// author;

// console.log(title);
// console.log(author);

// const { title, author } = getBook(2);
// title;
// author;

// console.log(author, title);

const [primary, secondary, ...other] = genres;
console.log(primary, secondary, other);

const newGenres = [
  ...genres,
  "fantasy",
  "high-fantasy",
  "adventure",
  "fiction",
  "novels",
  "literature",
];

console.log(newGenres);

const summary = `${title}, ${pages} pages is a book`;
summary;

const pagesRange = pages > 1000 ? "over thousend" : "below thousend";
pagesRange;
console.log(`the book has ${pagesRange} pages`);

// function getYear(str) {
//   return str.split("-")[0];
// }

// console.log(getYear(publicationDate));

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

console.log(true && "Some string");
console.log(false && "Some string");

console.log(true || "Some string");
console.log(false || "Some string");

console.log(!true);
console.log(!false);

const book2 = getBook(2); // The Cyberiad

const count = book2.reviews.librarything.reviewsCount || "No reviews";
console.log(count);

const count2 = book2.reviews.librarything.reviewsCount ?? "No reviews";
console.log(count2);

function getTotalReviews(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviews(book2));

const x = [1, 2, 3, 4, 5].map((num) => num * 2);
console.log(x);

const titles = data.map((book) => book.title);
console.log(titles);

// const essentialInfo = books.map((book) => ({
//   tiitle: book.title,
//   author: book.author,
//   reviewsCount: getTotalReviews(book),
// }));

// console.log(essentialInfo);

const longBooks = data.filter((book) => book.pages > 500);
console.log(longBooks);
longBooks;

// const longBooks2 = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);

const pagesAllBooks = data.reduce((acc, book) => acc + book.pages, 0);
console.log(pagesAllBooks);

const y = [1, 6, 3, 2, 5];
const stored = y.slice().sort((a, b) => a - b);
console.log(stored);
console.log(y);

const sortedByPages = data.slice().sort((a, b) => a.pages - b.pages);
console.log(sortedByPages);

fetch("https://jsonplaceholder.typicode.com/todo");
console.log(fetch("https://jsonplaceholder.typicode.com/todo"));

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("jonas");

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}

getTodos();
