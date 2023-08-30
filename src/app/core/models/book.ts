export class Book {

   private _id: string | number;
   private _title: string;
   private _subtitle: string;
   private _pageNumber: number;
   private _description: string;
   private _thumbnail: string;
   private _language: string;
   private _editorial: string;
   private _categories: string[];
   private _authors: string[];
   private _datePublisher: string;
   private _isbn_13: string;




  constructor(id: string | number, title: string, subtitle: string, pageNumber: number, description: string, thumbnail: string, language: string, editorial: string, categories: string[], authors: string[], datePublisher: string, isbn_13: string) {
    this._id = id;
    this._title = title;
    this._subtitle = subtitle;
    this._pageNumber = pageNumber;
    this._description = description;
    this._thumbnail = thumbnail;
    this._language = language;
    this._editorial = editorial;
    this._categories = categories;
    this._authors = authors;
    this._datePublisher = datePublisher;
    this._isbn_13 = isbn_13;
  }

  get datePublisher(): string {
    return this._datePublisher;
  }

  set datePublisher(value: string) {
    this._datePublisher = value;
  }

  get isbn_13(): string {
    return this._isbn_13;
  }

  set isbn_13(value: string) {
    this._isbn_13 = value;
  }

  get id(): string | number {
    return this._id;
  }

  set id(value: string | number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get subtitle(): string {
    return this._subtitle;
  }

  set subtitle(value: string) {
    this._subtitle = value;
  }

  get pageNumber(): number {
    return this._pageNumber;
  }

  set pageNumber(value: number) {
    this._pageNumber = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get thumbnail(): string {
    return this._thumbnail;
  }

  set thumbnail(value: string) {
    this._thumbnail = value;
  }

  get language(): string {
    return this._language;
  }

  set language(value: string) {
    this._language = value;
  }

  get editorial(): string {
    return this._editorial;
  }

  set editorial(value: string) {
    this._editorial = value;
  }

  get categories(): string[] {
    return this._categories;
  }

  set categories(value: string[]) {
    this._categories = value;
  }

  get authors(): string[] {
    return this._authors;
  }

  set authors(value: string[]) {
    this._authors = value;
  }
}
