import { Book } from '../models/book';

export const BOOKS: Book[] = [
  {
    id: randomId(),
    title: 'Stranger in a strange land',
    author: 'robert heinlein',
    year: 2011,
    pages: 533
  },
  {
    id: randomId(),
    title: 'where the red fern grows',
    author: 'wilson rawls',
    year: 1961,
    pages: 833
  },
  {
    id: randomId(),
    title: 'a fire upon the deep',
    author: 'vernor vinge',
    year: 1992,
    pages: 5330
  },
  {
    id: randomId(),
    title: 'a game of thrones',
    author: 'george r  martin',
    year: 1996,
    pages: 3330
  },
];

function randomId() {
  return Math.round(Math.random() * 1000);
}
