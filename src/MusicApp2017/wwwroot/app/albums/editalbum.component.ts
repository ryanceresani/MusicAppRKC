import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'editalbum',
    templateUrl: './editalbum.component.html'
})

export class EditAlbumComponent {

    public model: Album;
    postResponse: Object;
    showForm = false;
    public genres: Genre[];
    public artists: Artist[];
    public id: number;

    constructor(private http: Http, route: ActivatedRoute) {
        http.get('/api/genres').subscribe(result => {
            this.genres = result.json();
        });
        http.get('/api/artists').subscribe(result => {
            this.artists = result.json();
        });
        this.id = route.snapshot.params['id'];
        http.get('/api/albums/' + this.id).subscribe(result => {
              this.model = result.json();
         });
    }

    onSubmit(form: NgForm, route: ActivatedRoute) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.put('/api/albums/' + this.id, JSON.stringify(this.model), { headers: headers }).subscribe(res => this.postResponse= res.json());
        form.reset();
        this.showForm = !this.showForm;
    }

    toggleForm() {
        this.showForm = !this.showForm;
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

class Album {
    constructor(private albumID: number = 0,
        public title: string = null,
        public artistID: number = 0,
        public genreID: number = 0,
        public avgRating: number = 0,
    ) { }
}