import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'deletealbum',
    templateUrl: './deletealbum.component.html'
})

export class DeleteAlbumComponent {

    postResponse: Object;
    showButton = false;
    public id: number;

    constructor(private http: Http, route: ActivatedRoute) {
        this.id = route.snapshot.params['id'];
    }

   deleteAlbum (route: ActivatedRoute) {
        let headers = new Headers();
        this.http.delete('/api/albums/' + this.id, { headers: headers }).subscribe(res => this.postResponse = res.json());
        this.showButton = !this.showButton;
        window.location.href = '/album';
    }

    toggleButton() {
        this.showButton = !this.showButton;
    }
}