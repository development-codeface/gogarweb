webpackJsonp(["login.module"],{

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center align-items-center w-100 h-100 login-container\">\r\n    <div class=\"col-xl-4 col-md-6 col-10\">\r\n        <div class=\"card border-0 box-shadow rounded-0\">\r\n            <div class=\"card-header d-flex justify-content-center align-items-center border-0 box-shadow\">\r\n                <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\r\n            </div>\r\n          \r\n                \r\n                    \r\n                \r\n                                     \r\n                          <p class=\"loader-text\">GO<span>GARS</span></p>              \r\n               \r\n                  \r\n           \r\n             \r\n            <div class=\"card-body text-center pb-1\">\r\n                <h2>Admin login</h2>\r\n                <small class=\"text-danger\" *ngIf=\"invalidusername\">Incorrect username or password</small>\r\n\r\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"text-left mt-4\">\r\n                    <div class=\"form-group\">\r\n                        <input [formControl]=\"email\" class=\"form-control validation-field\" placeholder=\"Email\" type=\"text\">\r\n                        <small class=\"text-danger\" *ngIf=\"form.get('email').touched && form.get('email').hasError('required')\">Email\r\n                            is required</small>\r\n                        <small class=\"text-danger\" *ngIf=\"form.get('email').touched && form.get('email').hasError('email')\">Invalid\r\n                            email address</small>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input [formControl]=\"password\" class=\"form-control validation-field\" placeholder=\"Password\" type=\"password\">\r\n                        <small class=\"text-danger\" *ngIf=\"form.get('password').touched && form.get('password').hasError('required')\">Password\r\n                            is required</small>\r\n                        <small class=\"text-danger\" *ngIf=\"form.get('password').touched && form.get('password').hasError('minlength')\">Password\r\n                            isn't long enough, minimum of 6 characters</small>\r\n                    </div>\r\n                    <div class=\"form-group d-flex justify-content-between\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"login-checkbox\">\r\n                            <label class=\"custom-control-label\" for=\"login-checkbox\">Keep me signed in.</label>\r\n                        </div>\r\n                        <a class=\"transition pull-right\" href=\"javascript:void(0);\">Forgot password?</a>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button [disabled]=\"!form.valid\" class=\"btn btn-block\" type=\"submit\">Sign in</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <!-- <div class=\"card-footer text-center bg-transparent\">\r\n                <ul class=\"list-inline mb-0\">\r\n                    <li class=\"list-inline-item\">\r\n                        <span class=\"fa-stack fa-lg\">\r\n                            <i class=\"fa fa-square-o fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-facebook fa-stack-1x\"></i>\r\n                        </span>\r\n                    </li>\r\n                    <li class=\"list-inline-item\">\r\n                        <span class=\"fa-stack fa-lg\">\r\n                            <i class=\"fa fa-square-o fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-twitter fa-stack-1x\"></i>\r\n                        </span>\r\n                    </li>\r\n                    <li class=\"list-inline-item\">\r\n                        <span class=\"fa-stack fa-lg\">\r\n                            <i class=\"fa fa-square-o fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-google fa-stack-1x\"></i>\r\n                        </span>\r\n                    </li>\r\n                </ul>\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-container {\n  position: absolute; }\n  .login-container .card .card-header {\n    width: 80px;\n    height: 80px;\n    margin: 0 auto;\n    margin-top: -40px;\n    border-radius: 50%;\n    font-size: 36px; }\n  .loader-text {\n  font-family: \"MoonHouse\";\n  margin: auto;\n  font-size: 20px; }\n  .loader-text span {\n    color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__("../../../../../src/app/pages/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, fb, loginservice) {
        this.loginservice = loginservice;
        this.invalidusername = false;
        this.admindata = [];
        this.router = router;
        this.form = fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].email])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)])]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }
    LoginComponent.prototype.onSubmit = function (values) {
        var _this = this;
        this.invalidusername = false;
        if (this.form.valid) {
            this.loginservice.loginadmin(values).then(function (result) {
                _this.admindata = result;
                if (_this.admindata.result == true) {
                    localStorage.setItem('userdata', JSON.stringify(_this.admindata.details));
                    _this.router.navigateByUrl('/');
                }
                else {
                    _this.invalidusername = true;
                }
            }, function (err) {
                _this.invalidusername = true;
            });
            ;
        }
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        document.getElementById('preloader').classList.add('hide');
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */], pathMatch: 'full' }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
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


var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.url = "api/users";
        this.baseurl = "http://codefacetech.com/demo/gogars/Apis/index.php/";
    }
    LoginService.prototype.loginadmin = function (data) {
        var _this = this;
        console.log(data);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseurl + 'Adminlogin', JSON.stringify(data))
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
    LoginService.prototype.login = function (data) {
        return this.http.get(this.url);
    };
    LoginService.prototype.getUsers = function () {
        return this.http.get(this.url);
    };
    LoginService.prototype.addUser = function (user) {
        return this.http.post(this.url, user);
    };
    LoginService.prototype.updateUser = function (user) {
        return this.http.put(this.url, user);
    };
    LoginService.prototype.deleteUser = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], LoginService);
    return LoginService;
}());



/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map