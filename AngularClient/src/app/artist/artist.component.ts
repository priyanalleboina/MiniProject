import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artistsData:any;
  byIdArtistData:any;
  disp: boolean;
  constructor(private formBuilder:FormBuilder ,private mainService:MainService) { }
  artistsForm = this.formBuilder.group({
    artist_name:[''],
    profession:['']
  });
  byIdArtistForm = this.formBuilder.group({
    artist_id:['']
  })
  ngOnInit() {
    this.getArtistsData();
  }
  addArtists(){
    this.mainService.addArtist(this.artistsForm.value).subscribe(resp=>{
      console.log(resp);
      this.artistsForm.reset();
      this.getArtistsData();
    })
  };
  getArtistsData() {
    this.mainService.getArtists().subscribe(resp => {
      this.artistsData = resp;
    })
  };
  artistByIdForm() {
    const id: number = this.byIdArtistForm.controls.artist_id.value;
    this.mainService.byartistId(id).subscribe(resp => {
     this.byIdArtistData =resp;
     this.disp =true;
    })
  };

}
