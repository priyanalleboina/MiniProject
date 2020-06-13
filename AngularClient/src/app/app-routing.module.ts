import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistComponent } from './artist/artist.component';
import { TitlesComponent } from './titles/titles.component';
import { GenreComponent } from './genre/genre.component';
import { AlbumCreationComponent } from './album-creation/album-creation.component';

const routes: Routes = [
  { path: 'album', component: AlbumsComponent },
  { path: 'artists', component: ArtistComponent},
  { path: 'titles', component: TitlesComponent },
  { path: 'genre', component: GenreComponent },
  { path: 'muiscAlbums', component:AlbumCreationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }