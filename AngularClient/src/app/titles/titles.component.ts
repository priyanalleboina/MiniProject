import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit {
  titelsData:any
  byIdTilteData: Object;
  disp: boolean;
  constructor(private formBuilder:FormBuilder ,private mainService:MainService) { }
  titleForm = this.formBuilder.group({
    title_name:['']
  });
  byIdTitleForm = this.formBuilder.group({
    title_id:['']
  })
  ngOnInit() {
    this.getTitlesData();
  }
  addTitles(){
    this.mainService.addTitles(this.titleForm.value).subscribe(resp=>{
      console.log(resp);
      this.titleForm.reset();
      this.getTitlesData();
    })
  };
  getTitlesData() {
    this.mainService.getTitles().subscribe(resp => {
      this.titelsData = resp;
    })
  };
  titleByIdForm() {
    const id: number = this.byIdTitleForm.controls.title_id.value;
    this.mainService.byTitleId(id).subscribe(resp => {
     this.byIdTilteData =resp;
     this.disp =true;
    })
  };

}
