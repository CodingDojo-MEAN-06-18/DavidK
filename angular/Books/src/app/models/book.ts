export class Book {
  id: number;
  title: string;
  author: string;
  pages: number;
  year: number;


  constructor(createId = true) {
    if (createId) {
      this.id = Math.round(Math.random() * 1000);
    }
  }
}
