import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  year: number;
  albumData:any;
  byIdAlbumData:any;
  disp: boolean;
  constructor(private formBuilder: FormBuilder, private mainService: MainService) { }
  albumForm = this.formBuilder.group({
    album_name: [''],
    year: ['']
  });
  byIdAlbumForm = this.formBuilder.group({
    album_id: ['']
  })
  ngOnInit() {
    this.getAlbumsData();
  }
  addAlbum() {
    this.mainService.addAlbum(this.albumForm.value).subscribe(resp => {
      console.log(resp);
      this.albumForm.reset();
      this.getAlbumsData();
    })
  };
  getAlbumsData() {
    this.mainService.getAlbums().subscribe(resp => {
      this.albumData = resp;
    })
  };
  albumByIdForm() {
    const id: number = this.byIdAlbumForm.controls.album_id.value;
    this.mainService.byalbumId(id).subscribe(resp => {
     this.byIdAlbumData =resp;
     this.disp =true;
    })
  }
}
