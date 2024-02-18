import {Roles} from "./roles";


export class User {
  private _id:string | number;
  private _dniNie: string;
  private _password:string;
  private _name:string;
  private _surname1:string;
  private _surname2:string;
  private _mail:string;
  private _status:boolean;
  private _avatarFile:string;
  private _lastModifiedDate:Date;
  private _course:string;
  private _group:string;
  private _penalization: Date;
  private _study: string;
  private _profFamilyName:string;
  private _teacherType: string;
  private _roles: Roles[];

  constructor(id: string | number, dniNie: string, password: string, name: string, surname1: string, surname2: string, mail: string, status: boolean, avatarFile: string, lastModifiedDate: Date, course: string, group: string, penalization: Date, study: string, profFamilyName: string, teacherType: string, roles: Roles[]) {
    this._id = id;
    this._dniNie = dniNie;
    this._password = password;
    this._name = name;
    this._surname1 = surname1;
    this._surname2 = surname2;
    this._mail = mail;
    this._status = status;
    this._avatarFile = avatarFile;
    this._lastModifiedDate = lastModifiedDate;
    this._course = course;
    this._group = group;
    this._penalization = penalization;
    this._study = study;
    this._profFamilyName = profFamilyName;
    this._teacherType = teacherType;
    this._roles = roles;
  }



  get id(): string | number {
    return this._id;
  }

  set id(value: string | number) {
    this._id = value;
  }

  get dniNie(): string {
    return this._dniNie;
  }

  set dniNie(value: string) {
    this._dniNie = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get surname1(): string {
    return this._surname1;
  }

  set surname1(value: string) {
    this._surname1 = value;
  }

  get surname2(): string {
    return this._surname2;
  }

  set surname2(value: string) {
    this._surname2 = value;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

  get status(): boolean {
    return this._status;
  }

  set status(value: boolean) {
    this._status = value;
  }

  get avatarFile(): string {
    return this._avatarFile;
  }

  set avatarFile(value: string) {
    this._avatarFile = value;
  }

  get lastModifiedDate():Date {
    return this._lastModifiedDate;
  }
  set lastModifiedDate(value:Date) {
    this._lastModifiedDate = value;
  }

  get course(): string {
    return this._course;
  }

  set course(value: string) {
    this._course = value;
  }

  get group(): string {
    return this._group;
  }

  set group(value: string) {
    this._group = value;
  }

  get penalization(): Date{
    return this._penalization;
  }
  set penalization(value:Date ) {
    this._penalization = value;
  }

  get study(): string {
    return this._study;
  }

  set study(value: string) {
    this._study = value;
  }

  get profFamilyName(): string {
    return this._profFamilyName;
  }

  set profFamilyName(value: string) {
    this._profFamilyName = value;
  }

  get teacherType(): string {
    return this._teacherType;
  }

  set teacherType(value: string) {
    this._teacherType = value;
  }

  get roles(): Roles[] {
    return this._roles;
  }

  set roles(value: Roles[]) {
    this._roles = value;
  }
}




export interface Credentials{
  mail: string;
  password: string;
}

export interface newPassword{
  password: string;
  newPassword: string;
  confirmPassword: string;
}
