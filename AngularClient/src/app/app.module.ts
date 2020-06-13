import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AlbumCreationComponent } from './album-creation/album-creation.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MainService } from './main.service';
import { ArtistComponent } from './artist/artist.component';
import { TitlesComponent } from './titles/titles.component';
import { GenreComponent } from './genre/genre.component';
import { AlbumsComponent } from './albums/albums.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    AlbumCreationComponent,
    ArtistComponent,
    TitlesComponent,
    GenreComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
