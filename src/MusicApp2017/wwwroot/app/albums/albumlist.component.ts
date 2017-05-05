import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { SearchPipe } from '../app.component';

@Component({
    selector: 'albumlist',
    templateUrl: './albumlist.component.html'
})
export class AlbumListComponent {
    public albums: Album[];

    constructor(http: Http) {
        http.get('/api/albums').subscribe(result => {
            this.albums = result.json();
        });
    }
}

interface Artist {
    artistID: number;
    name: string;
}

interface Genre {
    genreID: number;
    name: string;
}
interface Album {
    albumID: number;
    title: string;
    artist: Artist;
    genre: Genre;
    avgRating: number;
}
