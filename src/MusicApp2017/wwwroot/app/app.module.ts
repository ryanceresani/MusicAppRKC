import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { AlbumListComponent } from './albums/albumList.component';
import { AlbumComponent } from './albums/album.component';
import { AddAlbumComponent } from './albums/addalbum.component';


@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, FormsModule, RouterModule.forRoot([
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'albums', component: AlbumListComponent },
        { path: 'albums/:id', component: AlbumComponent },
        { path: '**', redirectTo: 'home' }
    ])],
    declarations: [AppComponent, HomeComponent, NavMenuComponent, AlbumListComponent, AlbumComponent, AddAlbumComponent], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
