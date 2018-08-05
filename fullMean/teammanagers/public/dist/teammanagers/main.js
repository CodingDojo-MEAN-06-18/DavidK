(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _teammanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teammanager */ "./src/app/teammanager/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: 'players',
        pathMatch: 'full'
    },
    {
        path: 'players',
        component: _teammanager__WEBPACK_IMPORTED_MODULE_2__["TeammanagerComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list'
            },
            {
                path: 'add',
                component: _teammanager__WEBPACK_IMPORTED_MODULE_2__["AddplayerComponent"]
            },
            {
                path: 'list',
                component: _teammanager__WEBPACK_IMPORTED_MODULE_2__["ListplayersComponent"]
            }
        ]
    },
    {
        path: 'games',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '1'
            },
            {
                path: ':id',
                component: _teammanager__WEBPACK_IMPORTED_MODULE_2__["GameComponent"]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\n  margin-top: 20px;\n  padding-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\n  <!-- <p>(From app component root)</p> -->\n  <a [routerLink]=\"['players']\" routerLinkActive=\"active\"> Manage Players </a> |\n  <a [routerLink]=\"['games']\" routerLinkActive=\"active\"> Manage Player Status </a>\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _teammanager_services_team_players_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teammanager/services/team/players.service */ "./src/app/teammanager/services/team/players.service.ts");
/* harmony import */ var _teammanager_teammanager_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./teammanager/teammanager.component */ "./src/app/teammanager/teammanager.component.ts");
/* harmony import */ var _teammanager_games_game_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./teammanager/games/game/game.component */ "./src/app/teammanager/games/game/game.component.ts");
/* harmony import */ var _teammanager_players_addplayer_addplayer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./teammanager/players/addplayer/addplayer.component */ "./src/app/teammanager/players/addplayer/addplayer.component.ts");
/* harmony import */ var _teammanager_players_listplayers_listplayers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./teammanager/players/listplayers/listplayers.component */ "./src/app/teammanager/players/listplayers/listplayers.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _teammanager_teammanager_component__WEBPACK_IMPORTED_MODULE_7__["TeammanagerComponent"],
                _teammanager_games_game_game_component__WEBPACK_IMPORTED_MODULE_8__["GameComponent"],
                _teammanager_players_addplayer_addplayer_component__WEBPACK_IMPORTED_MODULE_9__["AddplayerComponent"],
                _teammanager_players_listplayers_listplayers_component__WEBPACK_IMPORTED_MODULE_10__["ListplayersComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            providers: [_teammanager_services_team_players_service__WEBPACK_IMPORTED_MODULE_6__["PlayersService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/teammanager/games/game/game.component.css":
/*!***********************************************************!*\
  !*** ./src/app/teammanager/games/game/game.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".green {\n  background-color: green;\n}\n\n.yellow {\n  background-color: yellow;\n}\n\n.red {\n  background-color: red;\n}\n\nbutton {\n  margin-left: 10px;\n  margin-right: 10px;\n  color: black;\n}\n\n#gamemanger {\n  margin: 0 auto;\n}\n"

/***/ }),

/***/ "./src/app/teammanager/games/game/game.component.html":
/*!************************************************************!*\
  !*** ./src/app/teammanager/games/game/game.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"gamemanager\">\n\n  <!-- <p>From game component</p> -->\n  <h1> Player Status </h1>\n  <div>\n    <a [routerLink]=\"['../../games', '1']\">Game 1</a> |\n    <a [routerLink]=\"['../../games', '2']\">Game 2</a> |\n    <a [routerLink]=\"['../../games', '3']\">Game 3</a>\n\n    <h5 *ngIf=\"players.length <= 0\">Please add a player</h5>\n\n    <table *ngIf=\"players.length > 0\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr *ngFor=\"let player of players\">\n          <td>{{ player.name }}</td>\n          <td>\n            <div>\n              <button (click)='onClick(player, \"p\")' class=\"btn\" [ngClass]=\"{'green': player.games[game].status === 'p'}\">Playing</button>\n              <button (click)='onClick(player, \"n\")' class=\"btn\" [ngClass]=\"{'red': player.games[game].status === 'n'}\">Not Playing</button>\n              <button (click)='onClick(player, \"u\")' class=\"btn\" [ngClass]=\"{'yellow': player.games[game].status === 'u'}\">Undecided</button>\n            </div>\n          </td>\n        </tr>\n    </table>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/teammanager/games/game/game.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/teammanager/games/game/game.component.ts ***!
  \**********************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_team_players_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/team/players.service */ "./src/app/teammanager/services/team/players.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameComponent = /** @class */ (function () {
    function GameComponent(_activeRoute, _playerService) {
        this._activeRoute = _activeRoute;
        this._playerService = _playerService;
        // tslint:disable-next-line:no-inferrable-types
        this.game = 0;
        this.players = [];
        this._playerService.getPlayers();
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activeRoute.params.subscribe(function () {
            // tslint:disable-next-line:radix
            _this.game = parseInt(_this._activeRoute.snapshot.params.id);
        }, function (error) {
            console.log(error);
        });
        this._playerService.players.subscribe(function (players) { return _this.players = players; }, function (error) { return console.log(error); });
    };
    GameComponent.prototype.onClick = function (player, action) {
        this._playerService.updateGameState(player, this.game, action);
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/teammanager/games/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/teammanager/games/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_team_players_service__WEBPACK_IMPORTED_MODULE_1__["PlayersService"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/teammanager/index.ts":
/*!**************************************!*\
  !*** ./src/app/teammanager/index.ts ***!
  \**************************************/
/*! exports provided: component, GameComponent, ListplayersComponent, AddplayerComponent, TeammanagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return component; });
/* harmony import */ var _games_game_game_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games/game/game.component */ "./src/app/teammanager/games/game/game.component.ts");
/* harmony import */ var _players_addplayer_addplayer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./players/addplayer/addplayer.component */ "./src/app/teammanager/players/addplayer/addplayer.component.ts");
/* harmony import */ var _players_listplayers_listplayers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players/listplayers/listplayers.component */ "./src/app/teammanager/players/listplayers/listplayers.component.ts");
/* harmony import */ var _teammanager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teammanager.component */ "./src/app/teammanager/teammanager.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return _games_game_game_component__WEBPACK_IMPORTED_MODULE_0__["GameComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListplayersComponent", function() { return _players_listplayers_listplayers_component__WEBPACK_IMPORTED_MODULE_2__["ListplayersComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddplayerComponent", function() { return _players_addplayer_addplayer_component__WEBPACK_IMPORTED_MODULE_1__["AddplayerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeammanagerComponent", function() { return _teammanager_component__WEBPACK_IMPORTED_MODULE_3__["TeammanagerComponent"]; });





var component = [
    _games_game_game_component__WEBPACK_IMPORTED_MODULE_0__["GameComponent"],
    _players_addplayer_addplayer_component__WEBPACK_IMPORTED_MODULE_1__["AddplayerComponent"],
    _players_listplayers_listplayers_component__WEBPACK_IMPORTED_MODULE_2__["ListplayersComponent"],
    _teammanager_component__WEBPACK_IMPORTED_MODULE_3__["TeammanagerComponent"]
];






/***/ }),

/***/ "./src/app/teammanager/players/addplayer/addplayer.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/teammanager/players/addplayer/addplayer.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".warning {\n  color: red;\n}\n\n"

/***/ }),

/***/ "./src/app/teammanager/players/addplayer/addplayer.component.html":
/*!************************************************************************!*\
  !*** ./src/app/teammanager/players/addplayer/addplayer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"addmanager\">\n  <!-- <p>(from add player component)</p> -->\n\n  <div class=\"col\">\n    <h4>Add Player</h4>\n    <form (submit)=\"onSubmit($event)\" #form=\"ngForm\">\n      <div>\n        <label for=\"name\">Player Name</label>\n        <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"name\" #playerName=\"ngModel\" minlength=\"3\" required>\n        <div class=\"warning\" *ngIf=\"playerName.dirty && !playerName.valid\">** Name must be longer than 2 characters</div>\n      </div>\n\n      <div>\n        <label for=\"position\">Preferred Position</label>\n        <select name=\"position\" [(ngModel)]=\"position\" #playerPosition=\"ngModel\" required>\n          <option value=\"\"></option>\n          <option *ngFor=\"let position of positions\" value=\"{{ position | lowercase }}\">{{ position }}</option>\n        </select>\n        <div class=\"warning\" *ngIf=\"playerPosition.dirty && !playerPosition.valid\"> ** Please choose a position</div>\n      </div>\n\n      <button type=\"submit\" [disabled]=\"form.invalid\">Add Player</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/teammanager/players/addplayer/addplayer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/teammanager/players/addplayer/addplayer.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddplayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddplayerComponent", function() { return AddplayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_team_players_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/team/players.service */ "./src/app/teammanager/services/team/players.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddplayerComponent = /** @class */ (function () {
    function AddplayerComponent(_playerService, _router) {
        this._playerService = _playerService;
        this._router = _router;
        this.positions = [
            'pg',
            'sg',
            'sf',
            'pf',
            'c'
        ];
        // tslint:disable-next-line:no-inferrable-types
        this.name = '';
        // tslint:disable-next-line:no-inferrable-types
        this.position = '';
    }
    AddplayerComponent.prototype.ngOnInit = function () {
    };
    AddplayerComponent.prototype.onSubmit = function (event) {
        event.preventDefault();
        this._playerService.add(this.name, this.position);
        this._router.navigate(['players']);
    };
    AddplayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addplayer',
            template: __webpack_require__(/*! ./addplayer.component.html */ "./src/app/teammanager/players/addplayer/addplayer.component.html"),
            styles: [__webpack_require__(/*! ./addplayer.component.css */ "./src/app/teammanager/players/addplayer/addplayer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_team_players_service__WEBPACK_IMPORTED_MODULE_1__["PlayersService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddplayerComponent);
    return AddplayerComponent;
}());



/***/ }),

/***/ "./src/app/teammanager/players/listplayers/listplayers.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/teammanager/players/listplayers/listplayers.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/teammanager/players/listplayers/listplayers.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/teammanager/players/listplayers/listplayers.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"listmanager\">\n  <!-- <p>(from listplayers component)</p> -->\n  <h5 *ngIf=\"players.length <= 0\">Please add a player </h5>\n\n  <table *ngIf=\"players.length > 0\">\n\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Position</th>\n        <th>actions</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let player of players\">\n        <td>{{ player.name }}</td>\n        <td>{{ player.position }}</td>\n        <td>\n          <button type=\"button\" (click)=\"deletePlayer(player)\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/teammanager/players/listplayers/listplayers.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/teammanager/players/listplayers/listplayers.component.ts ***!
  \**************************************************************************/
/*! exports provided: ListplayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListplayersComponent", function() { return ListplayersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_team_players_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/team/players.service */ "./src/app/teammanager/services/team/players.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListplayersComponent = /** @class */ (function () {
    function ListplayersComponent(_playerService) {
        this._playerService = _playerService;
        this.players = [];
        this.current = [];
        this._playerService.getPlayers();
    }
    ListplayersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._playerService.players.subscribe(function (players) { return _this.players = players; }, function (error) { return console.log(error); });
    };
    ListplayersComponent.prototype.deletePlayer = function (player) {
        console.log(player);
        this._playerService.deletePlayer(player);
    };
    ListplayersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listplayers',
            template: __webpack_require__(/*! ./listplayers.component.html */ "./src/app/teammanager/players/listplayers/listplayers.component.html"),
            styles: [__webpack_require__(/*! ./listplayers.component.css */ "./src/app/teammanager/players/listplayers/listplayers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_team_players_service__WEBPACK_IMPORTED_MODULE_1__["PlayersService"]])
    ], ListplayersComponent);
    return ListplayersComponent;
}());



/***/ }),

/***/ "./src/app/teammanager/services/team/players.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/teammanager/services/team/players.service.ts ***!
  \**************************************************************/
/*! exports provided: PlayersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersService", function() { return PlayersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayersService = /** @class */ (function () {
    function PlayersService(_http) {
        this._http = _http;
        this.players = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    PlayersService.prototype.add = function (name, position) {
        this._http.post('/api/players', { name: name, position: position }).subscribe(function (data) {
            console.log('player added', data);
        }, function (err) { return console.log(err); });
    };
    PlayersService.prototype.getPlayers = function () {
        var _this = this;
        this._http.get('/api/players').subscribe(function (data) { return _this.players.next(data); }, function (error) { return console.log('error getting players'); });
    };
    PlayersService.prototype.deletePlayer = function (player) {
        var _this = this;
        this._http.delete("/api/players/delete/" + player._id).subscribe(function (data) { return _this.getPlayers(); }, function (error) { return console.log(error); });
    };
    PlayersService.prototype.updateGameState = function (player, game, action) {
        var _this = this;
        this._http.put('/api/games', { player: player, game: game, action: action }).subscribe(function (data) { return _this.getPlayers(); }, function (error) { return console.log(error); });
    };
    PlayersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PlayersService);
    return PlayersService;
}());



/***/ }),

/***/ "./src/app/teammanager/teammanager.component.css":
/*!*******************************************************!*\
  !*** ./src/app/teammanager/teammanager.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/teammanager/teammanager.component.html":
/*!********************************************************!*\
  !*** ./src/app/teammanager/teammanager.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"manager\">\n\n  <!-- <p>(from teammanagers component)</p> -->\n  <a [routerLink]=\"['list']\" routerLinkActive=\"active\"> List Players </a> |\n  <a [routerLink]=\"['add']\" routerLinkActive=\"active\"> Add Players </a>\n  <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "./src/app/teammanager/teammanager.component.ts":
/*!******************************************************!*\
  !*** ./src/app/teammanager/teammanager.component.ts ***!
  \******************************************************/
/*! exports provided: TeammanagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeammanagerComponent", function() { return TeammanagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeammanagerComponent = /** @class */ (function () {
    function TeammanagerComponent() {
    }
    TeammanagerComponent.prototype.ngOnInit = function () {
    };
    TeammanagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teammanager',
            template: __webpack_require__(/*! ./teammanager.component.html */ "./src/app/teammanager/teammanager.component.html"),
            styles: [__webpack_require__(/*! ./teammanager.component.css */ "./src/app/teammanager/teammanager.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeammanagerComponent);
    return TeammanagerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Diddy/Desktop/MeanOne/fullMean/teammanagers/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map