import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }
  getAlbums(){
    return this.http.get('http://localhost:4000/getAlbumsData'); 
  }
  getTitles(){
    return this.http.get('http://localhost:4000/getTitlesData');
  }
  getArtists(){
    return this.http.get('http://localhost:4000/getArtistsData');
  }
  getGenre(){
    return this.http.get('http://localhost:4000/getGenreData');
  }
  musicAlbumsDataCreate(data) {
    return this.http.post('http://localhost:4000/musicalbumsDataCreate',data);
  }
  addAlbum(data){
    return this.http.post('http://localhost:4000/albumsCreate',data)
  }
  addArtist(data){
    return this.http.post('http://localhost:4000/artistsCreate',data)
  }
  addTitles(data){
    return this.http.post('http://localhost:4000/titleCreate',data)
  }
  addGenre(data){
    return this.http.post('http://localhost:4000/genreCreate',data)
  }
  byalbumId(data){
    return this.http.get('http://localhost:4000/getByAlbumId?album_id='+data)
  }
  byartistId(data){
    return this.http.get('http://localhost:4000/getByArtistId?artist_id='+data)
  }
  byTitleId(data){
    return this.http.get('http://localhost:4000/getByTitleId?title_id='+data)
  }
  byGenreId(data){
    return this.http.get('http://localhost:4000/getByGenreId?genre_id='+data)
  }
}
