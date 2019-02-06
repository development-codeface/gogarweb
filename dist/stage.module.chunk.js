webpackJsonp(["stage.module"],{

/***/ "../../../../../src/app/pages/stage/stage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-4 mt-4\">\n    <div class=\"col-md-2\">\n        <div class=\"input-group-append\">\n            <span (click)=\"backClicked()\" class=\"btn btn-success  \"><i class=\"fa fa-chevron-circle-left\"></i> Back</span>\n        </div>\n    </div>\n    <div class=\"col-md-2\"> \n          <div class=\"input-group-append\">\n              <span (click)=\"openModal1(modalContent1, null)\" class=\"btn btn-success  \"><i class=\"fa fa-plus-circle\"></i> Add Stage</span>   \n          </div>\n    </div>\n</div>\n<div class=\"row mb-4 mt-4\">\n  \n \n\n  <div *ngFor=\"let stage of cat_datafull.stage\" class=\"col-md-4 mb-4\">\n\n        <div class=\"flip\">\n          <div class=\"content\">\n              <div class=\"front\">\n                  <div class=\"card border-0 box-shadow rounded-0\">\n                      <div class=\"card-header border-0 rounded-0 text-muted\">\n                          <h5 class=\"mb-0\">\n                            \n                              {{stage.stagename}} \n                          </h5>\n                          <div class=\"widget-controls\"> \n                              <a (click)=\"openModal1(modalContent1, stage)\" href=\"javascript:void(0);\" class=\"transition\"><i class=\"fa fa-pencil\"></i></a>             \n                              <a (click)=\"deletestage(stage)\" href=\"javascript:void(0);\" class=\"transition\"><i class=\"fa fa-trash\"></i></a> \n                          </div>        \n                      </div>\n                       <div class=\"card-body pt-3\">\n                          \n                        <div class=\"media\">\n                              <div class=\"media-body ml-3\">\n                                  <div class=\"row\">  \n                                      <div class=\"col-4 text-gray text-right pr-0 font-italic text-truncate\"></div>\n                                      <div class=\"col-8 pl-2 text-truncate\">{{stage.stagename}}</div>                          \n                                     \n                                    \n                                  </div>\n                                  <div class=\"  view-div1\">\n                                          <button  type=\"button\"\n                                          class=\"btn btn-warning btn-sm view-btn1 pull-right\"\n                                          (click)=\"Gostage(stage)\"\n                                         \n                                        > <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Products\n                                        </button>\n                                  </div>\n                              </div>\n                          </div>\n\n                      </div>\n                  </div>\n              </div>\n             \n          </div>\n      </div>  \n  </div>\n</div>\n\n<ng-template #modalContent1>\n  <div class=\"modal-body bg-gray modal-lg\">\n      <div class=\"row\">\n          <div class=\"col-12 vertical-tabs\">                \n              <form [formGroup]=\"catform\" (ngSubmit)=\"onSubmit1(catform.value)\" class=\"row px-3\">\n                  <div class=\"tab-content col-12 border-0\">\n                      <div class=\"tab-pane active\" id=\"basic\">                                                \n                          <div class=\"form-group\">\n                              <label class=\"text-gray\">Sub Stage name</label>\n                              <input formControlName=\"stagename\" class=\"form-control validation-field\" type=\"text\">\n                              <small class=\"text-danger\" *ngIf=\"catform.controls.stagename.touched && catform.controls.stagename.errors?.required\">Stagename is required</small>                          \n                          </div>\n                          <div></div>        \n                      </div>                         \n                  </div>\n                  <div class=\"col-12 bg-white text-center py-1\">\n                      <button [disabled]=\"!catform.valid\" class=\"btn btn-success\" type=\"submit\"><span *ngIf=\"!cat.Id\">Add</span><span *ngIf=\"cat.Id\">Update</span></button>\n                      <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeModal()\">Cancel</button>\n                  </div>\n              </form> \n          </div>\n      </div>    \n  </div>\n</ng-template>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/stage/stage.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-stage .btn-success {\n  margin-top: 10px;\n  width: 100%; }\n\napp-stage .stage-1 {\n  height: 100px;\n  line-height: 7;\n  background-color: #2f3e9e !important; }\n\napp-stage .stage-2 {\n  height: 100px;\n  line-height: 7;\n  background-color: #d22e2e !important; }\n\napp-stage .stage-3 {\n  height: 100px;\n  line-height: 7; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/stage/stage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subcat_service__ = __webpack_require__("../../../../../src/app/pages/stage/subcat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subcat_model__ = __webpack_require__("../../../../../src/app/pages/stage/subcat.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StageComponent = /** @class */ (function () {
    function StageComponent(fb, route, router, membershipService, _location, modalService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.membershipService = membershipService;
        this._location = _location;
        this.modalService = modalService;
        this.cat_datafull = [];
        this.userdata = [];
    }
    StageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            // Defaults to 0 if no query param provided.
            _this.cat_datafull = JSON.parse(params['users']);
            _this.catform = _this.fb.group({
                Id: null,
                stagename: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
                subCatiId: _this.cat_datafull.Id,
                stageid: "",
                catID: _this.cat_datafull.Id
            });
            console.log(_this.cat_datafull);
        });
    };
    StageComponent.prototype.Gostage = function (val) {
        var Item = {
            stage: val.stagename,
            stageid: val.stageid,
            subcat: this.cat_datafull.Productname,
            maincat: this.cat_datafull.Catname,
            catid: this.cat_datafull.CatId,
            subcatId: this.cat_datafull.Id,
            stagelist: this.cat_datafull.stage
        };
        console.log(Item);
        this.router.navigate(['/pages/blank'], { queryParams: { users: JSON.stringify(Item) } });
    };
    StageComponent.prototype.backClicked = function () {
        this._location.back();
    };
    StageComponent.prototype.openModal1 = function (modalContent, user) {
        var _this = this;
        console.log(user);
        if (user) {
            this.cat = new __WEBPACK_IMPORTED_MODULE_4__subcat_model__["b" /* Getproductcategory */]();
            this.cat.Id = user.stageid;
            this.cat.Productname = user.stagename;
            this.cat.CatId = this.cat_datafull.Id;
            this.catform.setValue({ Id: null, subCatiId: this.cat_datafull.Id, stagename: user.stagename, catID: this.cat_datafull.Id, stageid: user.stageid });
        }
        else {
            this.cat = new __WEBPACK_IMPORTED_MODULE_4__subcat_model__["b" /* Getproductcategory */]();
            console.log(this.cat);
        }
        this.modalRef = this.modalService.open(modalContent, { container: '.app' });
        this.modalRef.result.then(function (result) {
            _this.catform.reset();
            _this.catform = _this.fb.group({
                Id: null,
                stagename: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
                subCatiId: _this.cat_datafull.Id,
                stageid: "",
                catID: _this.cat_datafull.Id
            });
        }, function (reason) {
            _this.catform.reset();
            _this.catform = _this.fb.group({
                Id: null,
                stagename: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
                subCatiId: _this.cat_datafull.Id,
                stageid: "",
                catID: _this.cat_datafull.Id
            });
        });
    };
    StageComponent.prototype.closeModal = function () {
        this.modalRef.close();
    };
    StageComponent.prototype.onSubmit1 = function (cat) {
        if (this.catform.valid) {
            if (cat.stageid) {
                console.log("good to go !!!!");
                this.invokeEditStageName(cat);
            }
            else {
                this.addStage(cat);
            }
            this.modalRef.close();
        }
    };
    StageComponent.prototype.addStage = function (cat) {
        var _this = this;
        console.log(cat);
        this.membershipService.addstage(cat).then(function (user) {
            _this.userdata = user;
            if (_this.userdata.result == true) {
                console.log(_this.userdata);
                _this.updateStageData();
            }
            else {
                console.log("<<< Add service got failed");
            }
        });
    };
    StageComponent.prototype.invokeEditStageName = function (cat) {
        var _this = this;
        this.membershipService.editStageName(cat).then(function (user) {
            _this.userdata = user;
            if (_this.userdata.result == true) {
                console.log(_this.userdata);
                _this.updateStageData();
            }
            else {
                console.log("<<< edit service got failed");
            }
        });
    };
    StageComponent.prototype.updateStageData = function () {
        console.log("<<<update stage data >>>");
        console.log(this.cat_datafull);
        var stageList = [];
        for (var _i = 0, _a = this.userdata.details; _i < _a.length; _i++) {
            var stageEntry = _a[_i];
            var stageItem = new __WEBPACK_IMPORTED_MODULE_4__subcat_model__["a" /* AddStage */]();
            stageItem.stageid = stageEntry.stageid;
            stageItem.stagename = stageEntry.stagename;
            stageList.push(stageItem);
        }
        this.cat_datafull.stage = stageList;
        console.log(this.cat_datafull);
    };
    StageComponent.prototype.deletestage = function (user) {
        if (user) {
            var stage = new __WEBPACK_IMPORTED_MODULE_4__subcat_model__["a" /* AddStage */]();
            stage.stageid = user.stageid;
            stage.catID = this.cat_datafull.Id;
            this.catform.setValue({ Id: null, subCatiId: this.cat_datafull.Id, stagename: user.stagename, catID: this.cat_datafull.Id, stageid: user.stageid });
            this.invokedeletestage(stage);
        }
    };
    StageComponent.prototype.invokedeletestage = function (stage) {
        var _this = this;
        console.log(stage);
        this.membershipService.deleteStage(stage).then(function (user) {
            _this.userdata = user;
            if (_this.userdata.result == true) {
                console.log(_this.userdata);
                _this.updateStageData();
            }
            else {
                console.log("<<< Add service got failed");
            }
        });
    };
    StageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-stage',
            template: __webpack_require__("../../../../../src/app/pages/stage/stage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/stage/stage.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_3__subcat_service__["a" /* SubCategoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__subcat_service__["a" /* SubCategoryService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]])
    ], StageComponent);
    return StageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/stage/stage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StageModule", function() { return StageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme_pipes_pipes_module__ = __webpack_require__("../../../../../src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stage_component__ = __webpack_require__("../../../../../src/app/pages/stage/stage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_file__ = __webpack_require__("../../../../angular-file/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_file___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular_file__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__stage_component__["a" /* StageComponent */], pathMatch: 'full' }
];
var StageModule = /** @class */ (function () {
    function StageModule() {
    }
    StageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular_file__["ngfModule"],
                __WEBPACK_IMPORTED_MODULE_5_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_7__theme_pipes_pipes_module__["a" /* PipesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__stage_component__["a" /* StageComponent */]
            ]
        })
    ], StageModule);
    return StageModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/stage/subcat.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* unused harmony export uploaddata */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Getproductcategory; });
/* unused harmony export UserProfile */
/* unused harmony export UserWork */
/* unused harmony export UserContacts */
/* unused harmony export UserSocial */
/* unused harmony export UserSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddStage; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var uploaddata = /** @class */ (function () {
    function uploaddata() {
    }
    return uploaddata;
}());

var Getproductcategory = /** @class */ (function () {
    function Getproductcategory() {
    }
    return Getproductcategory;
}());

var UserProfile = /** @class */ (function () {
    function UserProfile() {
    }
    return UserProfile;
}());

var UserWork = /** @class */ (function () {
    function UserWork() {
    }
    return UserWork;
}());

var UserContacts = /** @class */ (function () {
    function UserContacts() {
    }
    return UserContacts;
}());

var UserSocial = /** @class */ (function () {
    function UserSocial() {
    }
    return UserSocial;
}());

var UserSettings = /** @class */ (function () {
    function UserSettings() {
    }
    return UserSettings;
}());

var AddStage = /** @class */ (function () {
    function AddStage() {
    }
    return AddStage;
}());



/***/ }),

/***/ "../../../../../src/app/pages/stage/subcat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubCategoryService = /** @class */ (function () {
    function SubCategoryService(http) {
        this.http = http;
        this.url = "http://codefacetech.com/demo/gogars/Apis/index.php/";
        this.userdata = [];
        this.userdatafull = [];
    }
    SubCategoryService.prototype.addstage = function (cat) {
        var _this = this;
        console.log(cat);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + 'addproductstage', JSON.stringify(cat))
                .subscribe(function (val) {
                console.log("POST call successful value returned in body", val);
                resolve(val);
            }, function (response) {
                console.log("POST call in error", response);
                reject(response);
            }, function () {
                console.log("The POST observable is now completed.");
            });
        });
        // return this.http.post(this.url, user);
    };
    SubCategoryService.prototype.editStageName = function (cat) {
        var _this = this;
        console.log(cat);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + 'editproductstage ', JSON.stringify(cat))
                .subscribe(function (val) {
                console.log("POST call successful value returned in body", val);
                resolve(val);
            }, function (response) {
                console.log("POST call in error", response);
                reject(response);
            }, function () {
                console.log("The POST observable is now completed.");
            });
        });
        // return this.http.post(this.url, user);
    };
    SubCategoryService.prototype.deleteStage = function (cat) {
        var _this = this;
        console.log(cat);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + 'deleteproductstage ', JSON.stringify(cat))
                .subscribe(function (val) {
                console.log("POST call successful value returned in body", val);
                resolve(val);
            }, function (response) {
                console.log("POST call in error", response);
                reject(response);
            }, function () {
                console.log("The POST observable is now completed.");
            });
        });
        // return this.http.post(this.url, user);
    };
    SubCategoryService.prototype.getUsers = function (productId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + 'Getproductsubcategory/' + productId)
                .subscribe(function (val) {
                _this.userdatafull = val;
                _this.userdata = _this.userdatafull.details;
                console.log("POST call successful value returned in body", val);
                resolve(val);
            }, function (response) {
                console.log("POST call in error", response);
                reject(response);
            }, function () {
                console.log("The POST observable is now completed.");
            });
        });
    };
    SubCategoryService.prototype.getproductcat = function () {
        return this.http.get(this.url + 'Getproductsubcategory/' + 1);
    };
    SubCategoryService.prototype.addUser = function (user) {
        var _this = this;
        console.log(user);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + 'AddProduct', JSON.stringify(user))
                .subscribe(function (val) {
                console.log("POST call successful value returned in body", val);
                resolve(val);
            }, function (response) {
                console.log("POST call in error", response);
                reject(response);
            }, function () {
                console.log("The POST observable is now completed.");
            });
        });
        // return this.http.post(this.url, user);
    };
    SubCategoryService.prototype.addcat = function (cat) {
        var _this = this;
        console.log(cat);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + 'addproductsubcategory', JSON.stringify(cat))
                .subscribe(function (val) {
                console.log("POST call successful value returned in body", val);
                resolve(val);
            }, function (response) {
                console.log("POST call in error", response);
                reject(response);
            }, function () {
                console.log("The POST observable is now completed.");
            });
        });
        // return this.http.post(this.url, user);
    };
    SubCategoryService.prototype.updateUser = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + 'Editproductsubcategory', JSON.stringify(user))
                .subscribe(function (val) {
                console.log("POST call successful value returned in body", val);
                resolve(val);
            }, function (response) {
                console.log("POST call in error", response);
                reject(response);
            }, function () {
                console.log("The POST observable is now completed.");
            });
        });
    };
    SubCategoryService.prototype.updatecat = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + 'Editproductsubcategory', JSON.stringify(user))
                .subscribe(function (val) {
                console.log("POST call successful value returned in body", val);
                resolve(val);
            }, function (response) {
                console.log("POST call in error", response);
                reject(response);
            }, function () {
                console.log("The POST observable is now completed.");
            });
        });
    };
    SubCategoryService.prototype.deleteUser = function (id) {
        return this.http.post(this.url + 'Deleteproduct', JSON.stringify({ id: id }));
    };
    SubCategoryService.prototype.deletecat = function (id) {
        return this.http.post(this.url + 'Deleteproductsubcategory', JSON.stringify({ id: id }));
    };
    SubCategoryService.prototype.uploadimage = function (val) {
        console.log(val);
        return this.http.post("http://codefacetech.com/demo/gogars/Apis/upload.php", val, {
            reportProgress: true //, responseType: 'text'
        });
    };
    SubCategoryService.prototype.onUpload = function (files) {
        var formData = new FormData();
        formData.append('files', files, files.name);
        this.http.post('http://codefacetech.com/demo/gogars/Apis/upload.php', formData, {
            reportProgress: true,
            observe: 'events'
        })
            .subscribe(function (event) {
            console.log(event); // handle event here
        });
    };
    SubCategoryService.prototype.query = function (params) {
        var _this = this;
        if (!params && params == undefined) {
            return this.userdata;
        }
        return this.userdata.filter(function (item) {
            console.log(item);
            for (var key in params) {
                var field = item[key];
                console.log(params[key]);
                if (params[key] == undefined) {
                    return _this.userdata;
                }
                else {
                    console.log('else');
                    if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                        console.log(item);
                        return item;
                    }
                    else if (field == params[key]) {
                        console.log(item);
                        return item;
                    }
                }
            }
        });
    };
    SubCategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], SubCategoryService);
    return SubCategoryService;
}());



/***/ })

});
//# sourceMappingURL=stage.module.chunk.js.map