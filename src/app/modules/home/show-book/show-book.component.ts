import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookService} from "../book.service";

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent {

  constructor(
    private bookService: BookService
  ) {}

  getBook(id:number):void{
    this.bookService.showBook(id).subscribe(data =>{
      console.log(data);
    });
  }


}
