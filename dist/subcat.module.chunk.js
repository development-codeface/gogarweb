webpackJsonp(["subcat.module"],{

/***/ "../../../../../src/app/pages/subcat/subcat.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row mb-4 mt-4\">\n\n    <div class=\"col-md-2\">             \n        <div class=\"input-group-append\">\n            <span (click)=\"backClicked()\" class=\"btn btn-success  \"><i class=\"fa fa-chevron-circle-left\"></i> Back</span>      \n        </div>\n    </div>\n  <div class=\"col-md-4\"> \n          <div class=\"input-group-append\">\n              <span (click)=\"openModal1(modalContent1, null)\" class=\"btn btn-success  \"><i class=\"fa fa-plus-circle\"></i> Add Sub Category</span>   \n          </div>\n  </div>\n  <!-- <div class=\"col-md-2\">\n      \n       \n      <div class=\"input-group-append\">\n          <span (click)=\"openModal(modalContent, null)\" class=\"btn btn-success  \"><i class=\"fa fa-plus-circle\"></i> Add Designs</span>\n          \n      </div>\n   \n</div> -->\n  <div class=\"col-md-\"></div>  \n  <div class=\"col-md-6\">\n          <div class=\"input-group mb-3 box-shadow\"> \n              <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text border-top-0 border-left-0 border-bottom-0\"><i class=\"fa fa-search\"></i></span>\n              </div>                   \n              <input type=\"text\" [(ngModel)]=\"searchText\"  placeholder=\"Search Product by any...\" class=\"form-control border-0\">\n              <div class=\"input-group-append\">\n                  \n                  <span (click)=\"toggle('grid')\" class=\"input-group-text border-top-0 border-right-0 border-bottom-0\"><i class=\"fa fa-th\"></i></span>\n                  <span (click)=\"toggle('list')\" class=\"input-group-text border-top-0 border-right-0 border-bottom-0\"><i class=\"fa fa-list\"></i></span>\n              </div>\n          </div>\n      </div>\n</div>\n\n<div *ngIf=\"type=='grid'\" class=\"row\">\n   <div *ngFor=\"let user of users | filter : searchText | paginate: { itemsPerPage: 6, currentPage: p }; let i = index;\" class=\"col-xl-4 col-lg-6 mb-4\">\n  <!-- <div *ngFor=\"let user of users; let i = index;\" class=\"col-xl-4 col-lg-6 mb-4\"> -->\n    \n      <div class=\"flip\">\n          <div class=\"content\">\n              <div class=\"front\">\n                  <div class=\"card border-0 box-shadow rounded-0\">\n                      <div class=\"card-header border-0 rounded-0 text-muted\">\n                          <h5 class=\"mb-0\">\n                            \n                              {{user.Productname}} \n                          </h5>\n                          <div class=\"widget-controls\"> \n                             <!--<a (click)=\"openMenuAssign($event)\" href=\"javascript:void(0);\" class=\"transition\"><i class=\"fa fa-bars\"></i></a> -->\n                              <a (click)=\"openModal1(modalContent1, user)\" href=\"javascript:void(0);\" class=\"transition\"><i class=\"fa fa-pencil\"></i></a>             \n                              <a (click)=\"deletecat(user)\" href=\"javascript:void(0);\" class=\"transition\"><i class=\"fa fa-trash\"></i></a> \n                          </div>        \n                      </div>\n                       <div class=\"card-body pt-3\">\n                          \n                        <div class=\"media\">\n                                         <!-- <div class=\"d-flex flex-column justify-content-center\">\n                                  <img *ngIf=\"user.image\" class=\"IMG-DIV\" [src]=\"user.image\" width=\"80\">\n                                  <img *ngIf=\"!user.image\" class=\"IMG-DIV\" src=\"assets/img/users/default-user.jpg\" width=\"80\">\n                                \n                              </div>                  -->\n                              <div class=\"media-body ml-3\">\n                                  <div class=\"row\">  \n                                      <div class=\"col-4 text-gray text-right pr-0 font-italic text-truncate\"></div>\n                                      <!--<div class=\"col-8 pl-2 text-truncate\">{{user.Productname}}</div> -->                          \n                                     \n                                    \n                                  </div>\n                                  <div class=\"  view-div1\">\n                                          <button  type=\"button\"\n                                          class=\"btn btn-warning btn-sm view-btn1 pull-right\"\n                                          (click)=\"goviewpage(user)\"\n                                         \n                                        > <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View\n                                        </button>\n                                  </div>\n                              </div>\n                          </div>\n\n                      </div>\n                  </div>\n              </div>\n              <!--<div class=\"back\">\n                  <div class=\"card border-0 box-shadow rounded-0\">\n                      <div class=\"card-header border-0 rounded-0 text-muted\">\n                          <h5 class=\"mb-0\">\n                             \n                              {{user.Productname}}\n                          </h5>\n                          <div class=\"widget-controls\"> \n                              <a (click)=\"closeMenuAssign($event)\" href=\"javascript:void(0);\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                          </div>        \n                      </div>\n                      <div class=\"card-body pt-3\">            \n                          <ss-multiselect-dropdown id=\"menuSelect{{user.Id}}\" class=\"custom-multiselect\"\n                              [options]=\"menuSelectOptions\" \n                              [texts]=\"menuSelectTexts\" \n                              [settings]=\"menuSelectSettings\"\n                              [(ngModel)]=\"user.menuIds\">\n                          </ss-multiselect-dropdown>\n                          <div class=\"w-100 text-center pt-3\">\n                              <button class=\"btn btn-success\" (click)=\"assignMenuItemsToUser(user)\"> Multiple select Assign </button> \n                              <p class=\"text-gray fs-13 mt-2\">Logout and login to see result.</p>\n                          </div>                            \n                      </div>\n                  </div>\n              </div> -->\n          </div>\n      </div>\n  </div>\n</div>\n\n<div *ngIf=\"type=='list'\" class=\"row\">\n  <div class=\"col-12\">\n      <div class=\"table-responsive bg-white box-shadow\">\n          <table class=\"table table-hover\">\n              <thead>\n                  <tr> \n                      <th></th>\n                      <th>Product Name</th> \n                                      \n                      <!-- <th>Username</th>\n                      <th>Email</th> -->\n                      <th>Size</th>\n                                          \n                      <th>Action</th>\n                  </tr>\n              </thead>\n              <tbody>\n                  <tr *ngFor=\"let user of users | filter : searchText | paginate: { itemsPerPage: 6, currentPage: p }\">                        \n                  <!-- <tr *ngFor=\"let user of users\">                         -->\n                     \n                      <td class=\"align-middle\">\n                          <img *ngIf=\"user.image\" class=\"IMG-DIV\" [src]=\"user.image\" width=\"40\">\n                          <img *ngIf=\"!user.image\" class=\"IMG-DIV\" src=\"assets/img/users/default-user.jpg\" width=\"40\">\n                      </td>\n                      <td class=\"align-middle text-truncate\">{{user.Productname}} </td>\n                                      \n                      <!-- <td class=\"align-middle text-truncate\">{{user.username}}</td>\n                      <td class=\"align-middle text-truncate\">{{user.contacts.email}}</td> -->\n                      <td class=\"align-middle\">\n                      \n                      </td>\n                   \n                      <td class=\"align-middle\">\n                          <div class=\"btn-group\" role=\"group\">\n                              <button class=\"btn btn-secondary btn-sm\" (click)=\"openModal1(modalContent1, user)\"><i class=\"fa fa-pencil\"></i></button>\n                              <button class=\"btn btn-secondary btn-sm\" (click)=\"deletecat(user)\"><i class=\"fa fa-trash\"></i></button>\n                          </div>\n                      </td>\n                  </tr>\n              </tbody>\n          </table>\n      </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-12\">\n      <div class=\"bg-white text-center\">\n           <pagination-controls autoHide=\"true\" (pageChange)=\"p = $event\" maxSize=\"3\"></pagination-controls> \n      </div>        \n  </div>\n</div>\n\n<ng-template #modalContent>\n  <div class=\"modal-body bg-gray modal-lg\">\n      <div class=\"row\">\n          <div class=\"col-12 vertical-tabs\">                \n              <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"row px-3\">\n                  <ul class=\"nav flex-column left col-3 border-0 rounded-0 mr-0 bg-light\">                    \n                      <img *ngIf=\"user.image\" class=\"w-100\" [src]=\"user.image\">\n                      <img *ngIf=\"!user.image\" class=\"w-100\" src=\"assets/img/users/default-user.jpg\">                \n                      <li class=\"nav-item bg-light\">\n                          <a class=\"nav-link active\" href=\"#basic\" data-toggle=\"tab\">Basic</a>\n                      </li>\n                   \n                      <li class=\"nav-item bg-light\">\n                          <a class=\"nav-link\" href=\"#settings\" data-toggle=\"tab\">Settings</a>\n                      </li>                 \n                  </ul>                    \n                  <div class=\"tab-content col-9 border-0\">\n                      <div class=\"tab-pane active\" id=\"basic\">                                                \n                          <div class=\"form-group\">\n                              <label class=\"text-gray\">Productname</label>\n                              <input formControlName=\"Productname\" class=\"form-control validation-field\" type=\"text\">\n                              <small class=\"text-danger\" *ngIf=\"form.controls.Productname.touched && form.controls.Productname.errors?.required\">Productname is required</small>                              \n                              \n                          </div>\n                          <div class=\"form-group\">\n                              <label class=\"text-gray\">ProductId</label>\n                              <input formControlName=\"productId\" class=\"form-control validation-field\" type=\"text\">\n                              <small class=\"text-danger\" *ngIf=\"form.controls.productId.touched && form.controls.productId.errors?.required\">ProductId is required</small>                              \n                              \n                          </div>        \n                          <div class=\"form-group\">\n                              <label class=\"text-gray\">Price</label>\n                              <input formControlName=\"price\" maxlength=\"7\" oninput=\"this.value = this.value.replace(/[^0-9+]/g, '').replace(/(\\..*)\\./g, '$1');\" class=\"form-control validation-field\" type=\"text\">\n                              <small class=\"text-danger\" *ngIf=\"form.controls.price.touched && form.controls.price.errors?.required\">Price is required</small>\n                          </div>\n                          <div class=\"form-group\">\n                              <label class=\"text-gray\">Size</label>\n                              <input formControlName=\"size\" class=\"form-control validation-field\" type=\"text\">\n                              <small class=\"text-danger\" *ngIf=\"form.controls.size.touched && form.controls.size.errors?.required\">Size is required</small>                              \n                              \n                          </div>    \n                          <div class=\"form-group\">\n                              <label class=\"text-gray\">Discount Name</label>\n                              <input formControlName=\"DiscountName\" class=\"form-control validation-field\" type=\"text\">\n                                 \n                          </div>\n                          <div class=\"form-group\">\n                              <label class=\"text-gray\">Discount Amount</label>\n                              <input formControlName=\"DiscountAmount\" oninput=\"this.value = this.value.replace(/[^0-9+]/g, '').replace(/(\\..*)\\./g, '$1');\" class=\"form-control validation-field\" type=\"text\">\n                              \n                          </div>\n                          <div class=\"form-group\">\n                              <label class=\"text-gray\">Color</label>\n                              <input formControlName=\"color\"  class=\"form-control validation-field\" type=\"text\">\n                              <small class=\"text-danger\" *ngIf=\"form.controls.color.touched && form.controls.color.errors?.required\">Color is required</small>                              \n                              \n                          </div>\n                          <div class=\"form-group\">\n                              <label class=\"text-gray\">Category</label>\n                              <!-- <input formControlName=\"category\" class=\"form-control validation-field\" type=\"text\"> -->\n                              <select formControlName=\"category\"  class=\"form-control\" type=\"text\">\n\n                                  <option [value]=\"item.Productname\" *ngFor=\"let item of productcate\">{{item.Productname}}</option>\n                               \n                          </select>\n                              <small class=\"text-danger\" *ngIf=\"form.controls.category.touched && form.controls.category.errors?.required\">Category is required</small>                              \n                              \n                          </div>\n                          <div class=\"form-group\">\n                              <label class=\"text-gray\">Highlights</label>\n                              <textarea formControlName=\"highlights\" class=\"form-control validation-field\" type=\"text\"></textarea>\n                              <small class=\"text-danger\" *ngIf=\"form.controls.highlights.touched && form.controls.highlights.errors?.required\">Highlights is required</small>                              \n                              \n                          </div>    \n                          <div class=\"form-group\">\n                                  <ngfFormData\n                                 \n                                  [files]      = \"files\"\n                                  postName     = \"file[]\"\n                                  [(FormData)] = \"sendableFormData\"\n                                ></ngfFormData>\n                                <ngfUploadStatus\n        [(percent)] = \"progress\"\n        [httpEvent] = \"httpEvent\"\n      ></ngfUploadStatus>\n                              <label class=\"text-gray\">Images</label>\n                              <div\n    ngfDrop\n    multiple         = \"1\"\n    selectable       = \"1\"\n    [(validDrag)]    = \"validComboDrag\"\n    [(files)]        = \"files\"\n    accept           = \"image/*\"\n    [maxSize]        = \"maxSize\"\n    [(lastInvalids)] = \"lastInvalids\"\n    [(dragFiles)]    = \"dragFiles\"\n    class            = \"well my-drop-zone\"\n    [class.invalid-drag] = \"validComboDrag===false\"\n    [class.valid-drag]   = \"validComboDrag\"\n    (filesChange) = \"lastFileAt=getDate()\"\n    \n  >\n     drop/select <strong>image</strong> only \n  </div>\n                               <input  ngfSelect\n                             \n                              type      = \"hidden\"\n                             \n                               formControlName=\"Images\"   class=\"form-control validation-field\"  (change)=\"onSelectFile($event)\" multiple> \n                          <small class=\"text-danger\" *ngIf=\"form.controls.Images.touched && form.controls.Images.errors?.required\">Image is required</small>                              \n                              \n                          </div>\n                          <div class=\"uploadImage-div\" *ngFor=\"let item of files;let i=index\">\n                                 \n                                  <div class=\"previewIcon uploadImage\" [ngfBackground]=\"item\"></div>\n                              <i (click)=\"files.splice(i,1)\" class=\"fa fa-close closeicon\"></i>\n                          </div>\n                          <div class=\"uploadImage-div\" *ngFor=\"let item of user.Images;let i=index\">\n                                 \n                                  <img class=\"previewIcon uploadImage\" [src]=\"imgurl+item\"/>\n                              <i (click)=\"user.Images.splice(i,1)\" class=\"fa fa-close closeicon\"></i>\n                          </div>\n                          <div>\n\n                          </div>\n                          \n\n                             \n\n                      </div>                  \n                      \n                      <div class=\"tab-pane\" id=\"settings\" formGroupName=\"settings\">\n                          <div class=\"custom-control custom-checkbox\">\n                              <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"checkboxActive\" formControlName=\"isActive\" [value]=\"isActive\">\n                              <label class=\"custom-control-label\" for=\"checkboxActive\">Active</label>\n                          </div>\n                          <div class=\"custom-control custom-checkbox\">\n                              <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"checkboxDeleted\" formControlName=\"isDeleted\" [value]=\"isDeleted\">\n                              <label class=\"custom-control-label\" for=\"checkboxDeleted\">Deleted</label>\n                          </div>\n                          <label *ngIf=\"user.Id\"><span class=\"text-gray\">Registration date:</span> <i>{{user.settings.registrationDate | date:\"dd MMMM, yyyy 'at' HH:mm\" }}</i></label> \n                          <label *ngIf=\"user.id\"><span class=\"text-gray\">Last joined date:</span> <i>{{user.settings.joinedDate | date:\"dd MMMM, yyyy 'at' HH:mm\" }}</i> </label>     \n                      </div>           \n                  </div>\n                  <div class=\"col-12 bg-white text-center py-1\">\n                      <button [disabled]=\"!form.valid || (!files.length && !user.Images.length)\" class=\"btn btn-success\" type=\"submit\"><span *ngIf=\"!user.id\">Add</span><span *ngIf=\"user.id\">Update</span></button>\n                      <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeModal()\">Cancel</button>\n                  </div> \n              </form> \n          </div>\n      </div>    \n  </div>\n</ng-template>\n<ng-template #modalContent1>\n  <div class=\"modal-body bg-gray modal-lg\">\n      <div class=\"row\">\n          <div class=\"col-12 vertical-tabs\">                \n              <form [formGroup]=\"catform\" (ngSubmit)=\"onSubmit1(catform.value)\" class=\"row px-3\">\n                <!-- <ul class=\"nav flex-column left col-3 border-0 rounded-0 mr-0 bg-light\">                    \n                    <img *ngIf=\"cat.image\" class=\"w-100\" [src]=\"cat.image\">\n                    <img *ngIf=\"!cat.image\" class=\"w-100\" src=\"assets/img/users/default-user.jpg\">                \n                                 \n                </ul>                 -->\n                  <div class=\"tab-content col-12 border-0\">\n                      <div class=\"tab-pane active\" id=\"basic\">                                                \n                          <div class=\"form-group\">\n                              <label class=\"text-gray\">Sub Category name</label>\n                              <input formControlName=\"Productname\" class=\"form-control validation-field\" type=\"text\">\n                              <small class=\"text-danger\" *ngIf=\"catform.controls.Productname.touched && catform.controls.Productname.errors?.required\">Productname is required</small>                              \n                              \n                          </div>\n                            \n                          <!-- <div class=\"form-group\">\n                                  <ngfFormData\n                                 \n                                  [files]      = \"files\"\n                                  postName     = \"file[]\"\n                                  [(FormData)] = \"sendableFormData\"\n                                ></ngfFormData>\n                                <ngfUploadStatus\n        [(percent)] = \"progress\"\n        [httpEvent] = \"httpEvent\"\n      ></ngfUploadStatus>\n                              <label class=\"text-gray\">Images</label>\n                              <div\n    ngfDrop\n    multiple         = \"1\"\n    selectable       = \"1\"\n    [(validDrag)]    = \"validComboDrag\"\n    [(files)]        = \"files\"\n    accept           = \"image/*\"\n    [maxSize]        = \"maxSize\"\n    [(lastInvalids)] = \"lastInvalids\"\n    [(dragFiles)]    = \"dragFiles\"\n    class            = \"well my-drop-zone\"\n    [class.invalid-drag] = \"validComboDrag===false\"\n    [class.valid-drag]   = \"validComboDrag\"\n    (filesChange) = \"lastFileAt=getDate()\"\n    \n  >\n     drop/select <strong>image</strong> only \n  </div>\n                               <input  ngfSelect\n                             \n                              type      = \"hidden\"\n                             \n                               formControlName=\"Images\"   class=\"form-control validation-field\"  (change)=\"onSelectFile($event)\" multiple> \n                          <small class=\"text-danger\" *ngIf=\"form.controls.Images.touched && form.controls.Images.errors?.required\">Image is required</small>                              \n                              \n                          </div> -->\n                          <!-- <div class=\"uploadImage-div\" *ngFor=\"let item of files;let i=index\">\n                                 \n                                  <div class=\"previewIcon uploadImage\" [ngfBackground]=\"item\"></div>\n                              <i (click)=\"files.splice(i,1)\" class=\"fa fa-close closeicon\"></i>\n                          </div>\n                          <div class=\"uploadImage-div\" *ngFor=\"let item of cat.Images;let i=index\">\n                                 \n                                  <img class=\"previewIcon uploadImage\" [src]=\"imgurl+item\"/>\n                              <i (click)=\"cat.Images.splice(i,1)\" class=\"fa fa-close closeicon\"></i>\n                          </div> -->\n                          <div>\n\n                          </div>\n                          \n\n                             \n\n                      </div>                  \n                              \n                  </div>\n                  <div class=\"col-12 bg-white text-center py-1\">\n                      <button [disabled]=\"!catform.valid\" class=\"btn btn-success\" type=\"submit\"><span *ngIf=\"!cat.Id\">Add</span><span *ngIf=\"cat.Id\">Update</span></button>\n                      <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeModal()\">Cancel</button>\n                  </div> \n              </form> \n          </div>\n      </div>    \n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/pages/subcat/subcat.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".uploadImage {\n  margin-top: 10px;\n  width: 100%; }\n\n.uploadImage-div {\n  position: relative; }\n\n.view-div1 {\n  width: 100%;\n  margin-top: 35px; }\n\n.view-btn1 {\n  margin: auto;\n  margin: auto;\n  width: 100%;\n  margin-top: 10px; }\n\n.my-drop-zone {\n  border: dotted 3px lightgray; }\n\n/* Default class applied to drop zones on over */\n\n.invalid-drag {\n  border: dotted 3px red; }\n\n.valid-drag {\n  border: dotted 3px green; }\n\nhtml, body {\n  height: 100%; }\n\n.previewIcon {\n  width: 100%;\n  height: 100px;\n  background-size: cover;\n  background-repeat: no-repeat; }\n\n.IMG-DIV {\n  height: 100px;\n  width: 80px; }\n\n.inline-block {\n  display: inline-block;\n  margin: .2em; }\n\n.closeicon {\n  position: absolute;\n  top: 6px;\n  z-index: 9999;\n  display: block;\n  background: #fff;\n  right: 4px;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  font-size: 20px;\n  border-radius: 10px; }\n\n.flip {\n  width: 100%;\n  height: 180px;\n  position: relative;\n  -webkit-perspective: 800px;\n  -o-perspective: 800px;\n  perspective: 800px; }\n\n.flip .content {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    -webkit-transition: -webkit-transform 0.6s;\n    transition: -webkit-transform 0.6s;\n    transition: transform 0.6s;\n    transition: transform 0.6s, -webkit-transform 0.6s;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d; }\n\n.flip .content div.front, .flip .content div.back {\n      height: 100%;\n      width: 100%;\n      position: absolute;\n      z-index: 0;\n      -webkit-backface-visibility: hidden;\n      backface-visibility: hidden; }\n\n.flip .content div.front .card, .flip .content div.back .card {\n        height: 180px; }\n\n.flip .content div.back {\n      z-index: 1;\n      -webkit-transform: rotateY(180deg);\n      transform: rotateY(180deg); }\n\n.flip .content div.back .dropdown {\n        width: 100%; }\n\n.flip .content div.back .dropdown .dropdown-menu {\n          width: 100%;\n          margin-top: -1px; }\n\n.flip .content div.back .dropdown .dropdown-menu a {\n            color: #666; }\n\n.flip .content div.back .dropdown .dropdown-menu a .fa-check {\n              color: #378D3B; }\n\n.flip .content div.back .dropdown .dropdown-menu a .fa-times {\n              color: #D22E2E; }\n\n.flip .content.flipped {\n      -webkit-transform: rotateY(180deg);\n      transform: rotateY(180deg); }\n\n.z-index-1 {\n  z-index: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/subcat/subcat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__subcat_model__ = __webpack_require__("../../../../../src/app/pages/subcat/subcat.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__subcat_service__ = __webpack_require__("../../../../../src/app/pages/subcat/subcat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme_components_menu_menu_service__ = __webpack_require__("../../../../../src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var URL = "http://codefacetech.com/demo/gogars/Apis/index.php/upload/.php";
var SubcatComponent = /** @class */ (function () {
    function SubcatComponent(fb, router, toastrService, membershipService, menuService, route, _location, modalService, http, HttpClient) {
        this.fb = fb;
        this.router = router;
        this.toastrService = toastrService;
        this.membershipService = membershipService;
        this.menuService = menuService;
        this.route = route;
        this._location = _location;
        this.modalService = modalService;
        this.http = http;
        this.HttpClient = HttpClient;
        this.accept = '*';
        this.files = [];
        this.imgurl = 'http://codefacetech.com/demo/gogars/Apis/Images/';
        this.imagearr = '';
        this.urls = [];
        this.userdata = [];
        this.editableimages = '';
        this.userdatafull = [];
        this.cat_datafull = [];
        this.productcatefull = [];
        this.type = 'grid';
        this.uploader = new __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__["FileUploader"]({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.imagedata = [];
        this.menuSelectSettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-secondary btn-block',
            dynamicTitleMaxItems: 0,
            displayAllSelectedText: true,
            showCheckAll: true,
            showUncheckAll: true
        };
        this.menuSelectTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'menu item selected',
            checkedPlural: 'menu items selected',
            searchPlaceholder: 'Find User type...',
            defaultTitle: 'Multiple select Assign',
            allSelected: 'All selected',
        };
        this.menuSelectOptions = [];
        this.menuSelectOptions = [{
                id: 1,
                name: 'Sales Executive'
            },
            {
                id: 2,
                name: 'Sales Representative'
            },
            {
                id: 3,
                name: 'Wholesaler'
            },
            {
                id: 4,
                name: 'Semi Wholesaler'
            },
            {
                id: 5,
                name: 'Buyer'
            }];
    }
    SubcatComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    SubcatComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    SubcatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            console.log("query param ::::" + params);
            // Defaults to 0 if no query param provided.
            _this.cat_datafull = JSON.parse(params['users']);
            console.log(_this.cat_datafull);
        });
        this.form = this.fb.group({
            id: null,
            Productname: null,
            productId: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            price: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            size: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            category: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            highlights: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            image: null,
            Images: null,
            DiscountName: null,
            color: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            DiscountAmount: null,
            settings: this.fb.group({
                isActive: null,
                isDeleted: null,
                registrationDate: null,
                joinedDate: null
            }),
        });
        this.catform = this.fb.group({
            Id: null,
            Productname: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            CatId: this.cat_datafull.Id,
            stages: null
        });
        this.getUsers();
        this.getproductcategory();
    };
    SubcatComponent.prototype.cancel = function () {
        this.progress = 0;
        if (this.httpEmitter) {
            console.log('cancelled');
            this.httpEmitter.unsubscribe();
        }
    };
    SubcatComponent.prototype.uploadFiles = function (files, images) {
        console.log(images.join());
    };
    SubcatComponent.prototype.goviewpage = function (Item) {
        console.log(Item);
        var goitem = {
            Id: Item.Id,
            Productname: Item.Productname,
            CatId: Item.CatId,
            Catname: this.cat_datafull.Productname,
            stage: Item.stages
        };
        this.router.navigate(['/pages/Stage'], { queryParams: { users: JSON.stringify(goitem) } });
    };
    SubcatComponent.prototype.getDate = function () {
        console.log(this.files);
        return new Date();
    };
    SubcatComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        console.log(event);
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            for (var i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    _this.imagedata = event.target;
                    _this.urls.push(_this.imagedata.result);
                };
                reader.readAsDataURL(event.target.files[i]);
            }
        }
    };
    SubcatComponent.prototype.backClicked = function () {
        this._location.back();
    };
    SubcatComponent.prototype.getItems = function (ev) {
        console.log(ev);
        var val = ev.target.value;
        if (!val || !val.trim()) {
        }
        this.users = this.membershipService.query({
            name: val
        });
        console.log(this.users);
    };
    SubcatComponent.prototype.removeimage = function (i) {
        this.urls.splice(i, 1);
    };
    SubcatComponent.prototype.onUpload = function () {
        var formData = new FormData();
        console.log(this.urls);
        //  const files23: Array<File> = files;
        formData.append('files', this.urls, this.urls);
        this.http.post('http://codefacetech.com/demo/gogars/Apis/upload.php', formData, {
            reportProgress: true,
            observe: 'events'
        })
            .subscribe(function (event) {
            console.log(event); // handle event here
        });
    };
    SubcatComponent.prototype.getUsers = function () {
        var _this = this;
        this.membershipService.getUsers(this.cat_datafull.Id).then(function (users) {
            _this.userdatafull = users;
            _this.users = _this.userdatafull.details;
            console.log(_this.users);
        });
    };
    SubcatComponent.prototype.getproductcategory = function () {
        var _this = this;
        this.membershipService.getproductcat().subscribe(function (users) {
            console.log(users);
            _this.productcatefull = users;
            _this.productcate = _this.productcatefull.details;
        });
    };
    SubcatComponent.prototype.addUser = function (user) {
        var _this = this;
        if (this.files.length != 0) {
            this.membershipService.uploadimage(this.sendableFormData).subscribe(function (result) {
                console.log(result);
                _this.imagearr = result;
                user.Images = _this.imagearr;
                console.log(user.Images);
                _this.membershipService.addUser(user).then(function (user) {
                    _this.userdata = user;
                    if (_this.userdata.result == true) {
                        _this.files = [];
                        _this.getUsers();
                    }
                    else {
                    }
                });
            }, function (err) {
            });
        }
        else {
            this.membershipService.addUser(user).then(function (user) {
                _this.userdata = user;
                if (_this.userdata.result == true) {
                    _this.files = [];
                    _this.getUsers();
                }
                else {
                }
            });
        }
    };
    SubcatComponent.prototype.addcat = function (cat) {
        var _this = this;
        this.membershipService.addcat(cat).then(function (user) {
            _this.userdata = user;
            if (_this.userdata.result == true) {
                _this.files = [];
                _this.getUsers();
            }
            else {
            }
        });
    };
    SubcatComponent.prototype.updatecat = function (user, userimages) {
        var _this = this;
        console.log(this.files);
        this.membershipService.updatecat(user).then(function (user) {
            _this.getUsers();
        }, function (err) {
        });
    };
    SubcatComponent.prototype.updateUser = function (user, userimages) {
        var _this = this;
        console.log(this.files);
        if (this.files.length != 0) {
            this.membershipService.uploadimage(this.sendableFormData).subscribe(function (result) {
                console.log(result);
                if (userimages != '') {
                    _this.imagearr = userimages.join() + ',' + result;
                }
                else {
                    _this.imagearr = result;
                }
                console.log(_this.imagearr);
                _this.form.controls['Images'].setValue(_this.imagearr);
                user.Images = _this.imagearr;
                console.log(user);
                _this.membershipService.updateUser(user).then(function (user) {
                    _this.getUsers();
                });
            }, function (err) {
            });
        }
        else {
            this.imagearr = userimages.join();
            user.Images = this.imagearr;
            this.membershipService.updateUser(user).then(function (user) {
                _this.getUsers();
            }, function (err) {
            });
        }
    };
    SubcatComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.membershipService.deleteUser(user.id).subscribe(function (result) {
            return _this.getUsers();
        });
    };
    SubcatComponent.prototype.deletecat = function (cat) {
        var _this = this;
        this.membershipService.deletecat(cat.Id).subscribe(function (result) {
            return _this.getUsers();
        });
    };
    SubcatComponent.prototype.toggle = function (type) {
        this.type = type;
    };
    SubcatComponent.prototype.openMenuAssign = function (event) {
        var parent = event.target.parentNode;
        while (parent) {
            parent = parent.parentNode;
            if (parent.classList.contains('content')) {
                parent.classList.add('flipped');
                parent.parentNode.parentNode.classList.add('z-index-1');
                break;
            }
        }
    };
    SubcatComponent.prototype.closeMenuAssign = function (event) {
        var parent = event.target.parentNode;
        while (parent) {
            parent = parent.parentNode;
            if (parent.classList.contains('content')) {
                parent.classList.remove('flipped');
                parent.parentNode.parentNode.classList.remove('z-index-1');
                break;
            }
        }
    };
    SubcatComponent.prototype.assignMenuItemsToUser = function (user) {
        this.updateUser(user, user);
        sessionStorage.setItem('userMenuItems', JSON.stringify(user.menuIds));
        this.toastrService.success('Please, logout and login to see result.', 'Successfully assigned !');
    };
    SubcatComponent.prototype.openModal = function (modalContent, user) {
        var _this = this;
        console.log(user);
        if (user) {
            this.user = user;
            this.form.setValue(user);
            // this.files=user.Images;
            console.log(this.files);
        }
        else {
            this.user = new __WEBPACK_IMPORTED_MODULE_5__subcat_model__["b" /* User */]();
            console.log(this.user);
            this.user.settings = new __WEBPACK_IMPORTED_MODULE_5__subcat_model__["c" /* UserSettings */]();
        }
        this.modalRef = this.modalService.open(modalContent, { container: '.app' });
        this.modalRef.result.then(function (result) {
            _this.form.reset();
        }, function (reason) {
            _this.form.reset();
        });
    };
    SubcatComponent.prototype.openModal1 = function (modalContent, user) {
        var _this = this;
        console.log(user);
        if (user) {
            this.cat = user;
            this.catform.setValue(user);
            // this.files=user.Images;
            console.log(this.files);
        }
        else {
            this.cat = new __WEBPACK_IMPORTED_MODULE_5__subcat_model__["a" /* Getproductcategory */]();
            console.log(this.cat);
        }
        this.modalRef = this.modalService.open(modalContent, { container: '.app' });
        this.modalRef.result.then(function (result) {
            _this.catform.reset();
        }, function (reason) {
            _this.catform.reset();
        });
    };
    SubcatComponent.prototype.closeModal = function () {
        this.modalRef.close();
    };
    SubcatComponent.prototype.onSubmit = function (user) {
        if (this.form.valid) {
            if (user.id) {
                this.updateUser(user, user.Images);
            }
            else {
                this.addUser(user);
            }
            this.modalRef.close();
        }
    };
    SubcatComponent.prototype.onSubmit1 = function (cat) {
        if (this.catform.valid) {
            if (cat.Id) {
                this.updatecat(cat, null);
            }
            else {
                this.addcat(cat);
            }
            this.modalRef.close();
        }
    };
    SubcatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subcat',
            template: __webpack_require__("../../../../../src/app/pages/subcat/subcat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/subcat/subcat.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_6__subcat_service__["a" /* SubCategoryService */], __WEBPACK_IMPORTED_MODULE_7__theme_components_menu_menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__subcat_service__["a" /* SubCategoryService */],
            __WEBPACK_IMPORTED_MODULE_7__theme_components_menu_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_9__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClient */]])
    ], SubcatComponent);
    return SubcatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/subcat/subcat.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
/* unused harmony export uploaddata */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Getproductcategory; });
/* unused harmony export UserProfile */
/* unused harmony export UserWork */
/* unused harmony export UserContacts */
/* unused harmony export UserSocial */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UserSettings; });
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



/***/ }),

/***/ "../../../../../src/app/pages/subcat/subcat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcatModule", function() { return SubcatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme_pipes_pipes_module__ = __webpack_require__("../../../../../src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__subcat_component__ = __webpack_require__("../../../../../src/app/pages/subcat/subcat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_file__ = __webpack_require__("../../../../angular-file/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_file___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular_file__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__subcat_component__["a" /* SubcatComponent */], pathMatch: 'full' }
];
var SubcatModule = /** @class */ (function () {
    function SubcatModule() {
    }
    SubcatModule = __decorate([
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
                __WEBPACK_IMPORTED_MODULE_8__subcat_component__["a" /* SubcatComponent */]
            ]
        })
    ], SubcatModule);
    return SubcatModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/subcat/subcat.service.ts":
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
        // this.http is the injected HttpClient
        var formData = new FormData();
        //  const files23: Array<File> = files;
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
            //  return null;
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
//# sourceMappingURL=subcat.module.chunk.js.map