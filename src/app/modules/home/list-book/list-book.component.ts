import { Component } from '@angular/core';
import {BookService} from "../../../shared/services/book.service";
import {Book} from "../../../core/models/book";
declare var $: any;

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent {
  books:Book[] = [];

  dummyImage:string = 'https://dummyimage.com/273x273/000/fff&text=book+thumbnail';

  constructor(private bookService: BookService) {
  }

  ngOnInit():void{
    this.bookList();
  }

  bookList(): void{
    this.bookService.listBooks().subscribe((data) =>{
      console.log(data);
      let book: any = data.response;
      for(let i = 0; i< book.length; i++){
        let authors:string[] = [];
        let categories:string[] = [];

        for (let y:number = 0; y<book[i].authors.length; y++)
          authors.push(book[i].authors[y].name);

        for (let x:number = 0; x<book[i].categories.length; x++)
          categories.push(book[i].categories[x].name);

        this.books[i] = new Book(book[i].id, book[i].title, book[i].subtitle, book[i].pageNumber, book[i].description, book[i].thumbnail, book[i].language.name, book[i].editorial.name, categories,authors, book[i].datePublisher, book[i].isbn_13);
      }


    })
  }
}
