import {Component, ElementRef, HostListener} from '@angular/core';
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {UserService} from "./service/user/user.service";
import {HttpClient} from "@angular/common/http";
import {FileService} from "./service/browser/file.service";

class Timer {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Flourish_And_Blotts';
  maxContentHeight: string = "";
  intervalKey: Timer = 0;
  functionExecution: number = 0;

  data:any[] = [];
  dataFile:any[] = [];

  constructor(private userService: UserService,
              private httpClient: HttpClient,
              private fileService: FileService) {
  }

  ngOnInit(): void {
    this.establishHeightSidebar();
    this.establishAMaxHeightContent();
    this.provideDataApi();
  }



  private provideDataApi():void {
    this.userService.getData().subscribe((data)=>{
      this.data = data;
      console.log(data);
    })
  }

  // uploadClient(event: any): void {
  //   const file = event.target.files[0];
  //   console.log(file);
  //   if(file){
  //     const formData = new FormData();
  //     formData.append("file", file);
  //     formData.append("type-user", this.userTypeImport)
  //
  //     this.fileService.uploadFile(formData)
  //       .subscribe((response:any):void => {
  //           console.log("response", response);
  //       })
  //   }
  // }

  establishHeightSidebar():void{

    let contentLogo= document.getElementById("container-logo");
    let contentProfile = document.getElementById("perfil");
    let sidebar = document.getElementById("sidebar");
    let listOpt = document.getElementById("list-opt");

    if(contentLogo == null || contentProfile == null || sidebar == null || listOpt == null) return ;

    sidebar.style.maxHeight = String(-contentLogo.offsetHeight - contentProfile.offsetHeight + sidebar.offsetHeight)+"px";
    listOpt.style.maxHeight = String( sidebar.offsetHeight - contentProfile.offsetHeight-contentLogo.offsetHeight)+"px";
    listOpt.style.overflowY = "auto";
  }


  @HostListener('window:resize', ['$event'])
  onWindowResize(event:Event){
    this.establishAMaxHeightContent();
    this.establishHeightSidebar();
  }

  establishAMaxHeightContent():void{

    let contentContainer = document.getElementById("content");
    let navbarContainer = document.getElementById("navbar");

    let sideBar = document.getElementById("sidebar");
    if(sideBar == null || contentContainer == null || navbarContainer == null ) return ;

    // this.maxContentHeight = String(sideBar.offsetHeight - navbarContainer.offsetHeight)+"px";
    contentContainer.style.maxHeight = String(sideBar.offsetHeight - navbarContainer.offsetHeight)+"px";
    contentContainer.style.overflow = "auto";
    contentContainer.style.maxHeight = String(parseFloat(contentContainer.style.maxHeight) - 25)+"px";

    // console.log(String(sideBar.offsetHeight - navbarContainer.offsetHeight));
    this.establishMaxHeightHeader();

  }



  onSubmit(form: NgForm):void{
    console.log(form.value);
    const userService = new UserService(this.httpClient);

    userService.submitCSVFile(form.value.file).subscribe((data)=>{
      this.dataFile=data;
      console.log(this.dataFile);
    });
  }

  establishMaxHeightHeader():void{
    let imgContainer = document.getElementById("container-logo");
    let img = document.getElementById("logo");

    let navbarContainer = document.getElementById("navbar");

    if(imgContainer == null || navbarContainer == null || img == null) return ;
    navbarContainer.style.height = imgContainer.offsetHeight+"px";

    if(this.functionExecution<=0)
      this.resizeHeader();
    else{ // @ts-ignore
      clearTimeout(this.intervalKey);
    }
    this.functionExecution++;
  }

  resizeHeader(){
    this.intervalKey = setTimeout(()=>{
      this.establishMaxHeightHeader();
    }, 50);
  }



}
