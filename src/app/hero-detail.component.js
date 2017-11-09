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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var hero_1 = require("./hero");
var hero_service_1 = require("./hero.service");
var HeroDetailComponent = (function () {
    function HeroDetailComponent(route, heroService, location) {
        this.route = route;
        this.heroService = heroService;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        this.getHero();
    };
    HeroDetailComponent.prototype.getHero = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return HeroDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'hero-detail',
        template: "\n  <div *ngIf=\"hero\">\n    <h2>{{hero.name}} details!</h2>\n    <div><label>id: </label>{{hero.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"hero.name\" placeholder=\"name\">\n    </div>\n  </div>\n  <button (click)=\"goBack()\">go back</button>\n  ",
        styles: ["\n    /* HeroDetailComponent's private CSS styles */\n    label {\n      display: inline-block;\n      width: 3em;\n      margin: .5em 0;\n      color: #607D8B;\n      font-weight: bold;\n    }\n    input {\n      height: 2em;\n      font-size: 1em;\n      padding-left: .4em;\n    }\n    button {\n      margin-top: 20px;\n      font-family: Arial;\n      background-color: #eee;\n      border: none;\n      padding: 5px 10px;\n      border-radius: 4px;\n      cursor: pointer; cursor: hand;\n    }\n    button:hover {\n      background-color: #cfd8dc;\n    }\n    button:disabled {\n      background-color: #eee;\n      color: #ccc;\n      cursor: auto;\n    }\n    "]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        hero_service_1.HeroService,
        common_1.Location])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map