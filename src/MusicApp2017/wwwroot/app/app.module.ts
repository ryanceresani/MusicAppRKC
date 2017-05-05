import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent, SearchPipe } from './app.component';
import { NavMenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { AlbumListComponent } from './albums/albumList.component';
import { AlbumComponent } from './albums/album.component';
import { AddAlbumComponent } from './albums/addalbum.component';
import { EditAlbumComponent } from './albums/editalbum.component';
import { DeleteAlbumComponent } from './albums/deletealbum.component';


@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, FormsModule, RouterModule.forRoot([
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'album', component: AlbumListComponent },
        { path: 'album/:id', component: AlbumComponent },
        { path: '**', redirectTo: 'home' }
    ])],
    declarations: [AppComponent, HomeComponent, NavMenuComponent, AlbumListComponent, AlbumComponent, AddAlbumComponent, EditAlbumComponent, DeleteAlbumComponent, SearchPipe], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
