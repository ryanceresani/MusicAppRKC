import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';

@Component({
    selector: 'addalbum',
    templateUrl: './addalbum.component.html'
})

export class AddAlbumComponent {

    model: Album = new Album();
    postResponse: Object;
    showForm = false;
    public genres:  Genre[];
    public artists:  Artist[];

    constructor(private http: Http) {
        http.get('/api/genres').subscribe(result => {
            this.genres = result.json();
        });
        http.get('/api/artists').subscribe(result => {
            this.artists = result.json();
        });
    }

    onSubmit(form: NgForm) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('/api/albums', JSON.stringify(this.model), { headers: headers }).subscribe(res => this.postResponse = res.json());
        form.reset();
        this.showForm = !this.showForm;
    }

    toggleForm() {
        this.showForm = !this.showForm;
    }

}

interface Artist{
    artistID: number;
    name: string;
}

interface Genre {
    genreID: number;
    name: string;
}

class Album {
    constructor(private albumID: number = 0,
        public title: string = null,
        public artistID: number = 0,
        public artist: Artist = null,
        public genreID: number = 0,
        public genre: Genre = null,
        public avgRating: number = 0,
    ) { }
}