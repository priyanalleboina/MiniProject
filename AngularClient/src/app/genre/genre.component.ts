import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genreData:any;
  byIdGenreData:any;
  disp: boolean;
  constructor(private formBuilder:FormBuilder ,private mainService:MainService) { }
  genreForm = this.formBuilder.group({
    genere_name:['']
  })
  byIdGenreForm = this.formBuilder.group({
    genre_id:['']
  })
  ngOnInit() {
    this.getGenreData();
  }
  addGenre(){
    this.mainService.addGenre(this.genreForm.value).subscribe(resp=>{
      console.log(resp);
      this.genreForm.reset();
      this.getGenreData();
    })
  };
  getGenreData() {
    this.mainService.getGenre().subscribe(resp => {
      this.genreData = resp;
    })
  };
  GenreByIdForm() {
    const id: number = this.byIdGenreForm.controls.genre_id.value;
    this.mainService.byGenreId(id).subscribe(resp => {
     this.byIdGenreData =resp;
     this.disp =true;
    })
  };

}
