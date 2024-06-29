export class Book {
    id: number;
    name: string;
    price: number;
    img: string
    constructor(id: number, name:string, price:number, img:string ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
    }
};


export const books: Book[] = [
    { id: 1, name: "Book One", price: 15.99 , img: "Test"},
    { id: 2, name: "Book Two",  price: 19.99, img: "Test" },
    { id: 3, name: "Book Three", price: 9.99, img: "Test" }
  ];