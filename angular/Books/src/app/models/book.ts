export class Book {
  _id: string;
  title: string;
  author: string;
  pages: number;
  year: number;
  publisher: string;


  constructor(createId = true) {
    // if (createId) {
    //   this.id = Math.round(Math.random() * 1000);
    // }
  }
}
