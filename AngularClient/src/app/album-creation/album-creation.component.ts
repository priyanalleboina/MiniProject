import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-album-creation',
  templateUrl: './album-creation.component.html',
  styleUrls: ['./album-creation.component.css']
})
export class AlbumCreationComponent implements OnInit {
  albumData: any;
  genreData: any;
  titelsData: any;
  artistsData: any;
  totalData:any;
  constructor(private formBuilder: FormBuilder, private mainservice: MainService) { }
  musicAlbumForm = this.formBuilder.group({
    album_id: [''],
    artist_id: [''],
    title_id: [''],
    genre_id: ['']
  })
  ngOnInit() {
    this.getAlbumsData();
    this.getArtistsData();
    this.getTitlesData();
    this.getGenreData();
  }

  getAlbumsData() {
    this.mainservice.getAlbums().subscribe(resp => {
      this.albumData = resp;
    })
  };
  getArtistsData() {
    this.mainservice.getArtists().subscribe(resp => {
      this.artistsData = resp;
    })
  };
  getTitlesData() {
    this.mainservice.getTitles().subscribe(resp => {
      this.titelsData = resp;
    })
  };
  getGenreData() {
    this.mainservice.getGenre().subscribe(resp => {
      this.genreData = resp;
    })
  };
  addAlbumMusic() {
    this.mainservice.musicAlbumsDataCreate(this.musicAlbumForm.value).subscribe(resp => {
      console.log(resp);
    })
  }
}
