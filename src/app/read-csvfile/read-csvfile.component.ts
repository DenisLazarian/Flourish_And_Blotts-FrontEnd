import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FileService} from "../service/browser/file.service";

@Component({
  selector: 'app-read-csvfile',
  templateUrl: './read-csvfile.component.html',
  styleUrls: ['./read-csvfile.component.css']
})
export class ReadCSVFileComponent {
  userTypeImport: string = "1";

  submitFile: FormGroup = new FormGroup<any>({
    file: new FormControl('')
  });

  constructor(private fileService: FileService ) {
  }
  uploadClient(event: any): void {
    const file = event.target.files[0];
    if(file){
      const formData = new FormData();
      formData.append("file", file);
      formData.append("type-user", this.userTypeImport)

      this.fileService.uploadFile(formData)
        .subscribe((response:any):void => {
        })
    }
  }

  public putUserType(event: any):void{
    console.log(this.userTypeImport);
  }
}
