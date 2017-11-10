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
var message_service_1 = require("./message.service");
var http_1 = require("@angular/common/http");
var HeroService = (function () {
    function HeroService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.heroesUrl = 'api/heroes'; // URL to web api
    }
    HeroService.prototype.getHeroes = function () {
        // Todo: send the message _after_ fetching the heroes
        this.messageService.add('HeroService: fetched heroes');
        return this.http.get(this.heroesUrl);
    };
    /** GET hero by id. Will 404 if id not found */
    HeroService.prototype.getHero = function (id) {
        var _this = this;
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url).pipe(tap(function (_) { return _this.log("fetched hero id=" + id); }), catchError(this.handleError("getHero id=" + id)));
    };
    /** Log a HeroService message with the MessageService */
    HeroService.prototype.log = function (message) {
        this.messageService.add('HeroService: ' + message);
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient,
        message_service_1.MessageService])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map