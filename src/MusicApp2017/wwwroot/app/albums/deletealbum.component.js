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
var DeleteAlbumComponent = (function () {
    function DeleteAlbumComponent(http, route) {
        this.http = http;
        this.showButton = false;
        this.id = route.snapshot.params['id'];
    }
    DeleteAlbumComponent.prototype.deleteAlbum = function (route) {
        var _this = this;
        var headers = new http_1.Headers();
        this.http.delete('/api/albums/' + this.id, { headers: headers }).subscribe(function (res) { return _this.postResponse = res.json(); });
        this.showButton = !this.showButton;
        window.location.href = '/album';
    };
    DeleteAlbumComponent.prototype.toggleButton = function () {
        this.showButton = !this.showButton;
    };
    return DeleteAlbumComponent;
}());
DeleteAlbumComponent = __decorate([
    core_1.Component({
        selector: 'deletealbum',
        templateUrl: './deletealbum.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute])
], DeleteAlbumComponent);
exports.DeleteAlbumComponent = DeleteAlbumComponent;
//# sourceMappingURL=deletealbum.component.js.map