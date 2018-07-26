export class Product {
  constructor(
    public id: number = Math.floor(Math.random() * 999) + 1,
    public title: string = '',
    public price: number = 0,
    public imageUrl: string = null
  ) { }
}
