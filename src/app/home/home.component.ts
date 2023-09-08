import { Component } from '@angular/core';
import {BookService} from "../service/book/book.service";
import {Book} from "../core/models/book";
import {JQueryStyleEventEmitter} from "rxjs/internal/observable/fromEvent";
declare var $: any;

// import {BookModule} from "../models/book/book.module";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  books:Book[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit():void{
    this.bookList();
  }

  bookList(): void{

    this.bookService.listBooks().subscribe((data) =>{
      // console.log(data);



    })


  }

}
