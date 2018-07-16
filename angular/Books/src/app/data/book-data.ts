import { Book } from '../models/book';

export const BOOKS: Book[] = [
  {
    id: randomId(),
    title: 'return home',
    author: 'stanly gibson',
    publisher: 'orbitz',
    year: 2011,
    pages: 533
  }
];

function randomId() {
  return Math.round(Math.random() * 1000);
}
