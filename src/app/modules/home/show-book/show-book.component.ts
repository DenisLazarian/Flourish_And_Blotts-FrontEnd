import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookService} from "../../../shared/services/book.service";
import {ActivatedRoute} from "@angular/router";
import {Book} from "../../../core/models/book";

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent {

  bookSearched:any = null;
  constructor(
    private bookService: BookService,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void{
    this.getBook();
  }

  getBook():void{
    this.route.paramMap.subscribe(params =>{
      this.bookService.showBook(<string>params.get("id")).subscribe(data => {
        let authors: string[] = [];
        let categories: string[] = [];
        let book: any = data.response;


        for (let y: number = 0; y < book.authors.length; y++)
          authors.push(book.authors[y].name);

        for (let x: number = 0; x < book.categories.length; x++)
          categories.push(book.categories[x].name);


        this.bookSearched = new Book(book.id, book.title, book.subtitle, book.pageNumber, book.description, book.thumbnail, book.language.name, book.editorial.name, categories, authors, book.datePublisher, book.isbn_13);

      });
    });
  }

  putComaAuthors(authors: string[]): string {

    // authors = ["Laura Gallego", "J.R Tolkien", "Arthur Conan Doyle"]
    if(authors.length == 1) {
      return authors[0];
    }else if(authors.length > 1){
      let phrase:string = "";
      for (let i:number = 0; i < authors.length ; i++) {
        if(authors.length-1 == i+1) {
          phrase += authors[i] + " and ";
        }else if(authors.length-1 == i){
          phrase += authors[i];
        }else
          phrase += authors[i] + ", "
      }
      return phrase;
    }
    return "";
  }


}
