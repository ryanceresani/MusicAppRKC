"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var EditAlbumComponent = (function () {
    function EditAlbumComponent(http, route) {
        var _this = this;
        this.http = http;
        this.showForm = false;
        http.get('/api/genres').subscribe(function (result) {
            _this.genres = result.json();
        });
        http.get('/api/artists').subscribe(function (result) {
            _this.artists = result.json();
        });
        this.id = route.snapshot.params['id'];
        http.get('/api/albums/' + this.id).subscribe(function (result) {
            _this.model = result.json();
        });
    }
    EditAlbumComponent.prototype.onSubmit = function (form, route) {
        var _this = this;
        var headers = new http_1.Headers();
        var id = route.snapshot.params['id'];
        headers.append('Content-Type', 'application/json');
        this.http.put('/api/albums/' + id, JSON.stringify(this.model), { headers: headers }).subscribe(function (res) { return _this.postResponse = res.json(); });
        form.reset();
        this.showForm = !this.showForm;
    };
    EditAlbumComponent.prototype.toggleForm = function () {
        this.showForm = !this.showForm;
    };
    return EditAlbumComponent;
}());
EditAlbumComponent = __decorate([
    core_1.Component({
        selector: 'editalbum',
        templateUrl: './editalbum.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute])
], EditAlbumComponent);
exports.EditAlbumComponent = EditAlbumComponent;
var Album = (function () {
    function Album(albumID, title, artistID, genreID, avgRating) {
        if (albumID === void 0) { albumID = 0; }
        if (title === void 0) { title = null; }
        if (artistID === void 0) { artistID = 0; }
        if (genreID === void 0) { genreID = 0; }
        if (avgRating === void 0) { avgRating = 0; }
        this.albumID = albumID;
        this.title = title;
        this.artistID = artistID;
        this.genreID = genreID;
        this.avgRating = avgRating;
    }
    return Album;
}());
//# sourceMappingURL=editalbum.component.js.map