webpackJsonp(["blank.module"],{

/***/ "../../../../../src/app/pages/blank/blank.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row mb-4 mt-4\">\r\n\r\n\r\n\r\n\r\n    <div class=\"col-md-2\">\r\n        \r\n         \r\n            <div class=\"input-group-append\">\r\n                <span (click)=\"backClicked()\" class=\"btn btn-success  \"><i class=\"fa fa-chevron-circle-left\"></i> Back</span>\r\n                \r\n            </div>\r\n         \r\n    </div>\r\n    <div class=\"col-md-2\">\r\n        \r\n         \r\n        <div class=\"input-group-append\">\r\n            <span (click)=\"openModal(modalContent, null)\" class=\"btn btn-success  \"><i class=\"fa fa-plus-circle\"></i> Upload Designs</span>\r\n          \r\n        </div>\r\n     \r\n</div>\r\n    <div class=\"col-md-2\"> <h2>{{cat_datafull.Productname}}</h2> </div>  \r\n    <div class=\"col-md-6\">\r\n            <div class=\"input-group mb-3 box-shadow\"> \r\n                <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text border-top-0 border-left-0 border-bottom-0\"><i class=\"fa fa-search\"></i></span>\r\n                </div>                   \r\n                <input type=\"text\" [(ngModel)]=\"searchText\"  placeholder=\"Search Product by any...\" class=\"form-control border-0\">\r\n                <div class=\"input-group-append\">\r\n                    \r\n                    <span (click)=\"toggle('grid')\" class=\"input-group-text border-top-0 border-right-0 border-bottom-0\"><i class=\"fa fa-th\"></i></span>\r\n                    <span (click)=\"toggle('list')\" class=\"input-group-text border-top-0 border-right-0 border-bottom-0\"><i class=\"fa fa-list\"></i></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n</div>\r\n\r\n<div *ngIf=\"type=='grid'\" class=\"row\">\r\n     <div *ngFor=\"let user of users | filter : searchText | paginate: { itemsPerPage: 6, currentPage: p }; let i = index;\" class=\"col-xl-4 col-lg-6 mb-4\">\r\n    <!-- <div *ngFor=\"let user of users; let i = index;\" class=\"col-xl-4 col-lg-6 mb-4\"> -->\r\n      \r\n        <div class=\"flip productflip\">\r\n            <div class=\"content\">\r\n                <div class=\"front\">\r\n                    <div class=\"card border-0 box-shadow rounded-0\">\r\n                        <div class=\"card-header border-0 rounded-0 text-muted\">\r\n                            <h5 class=\"mb-0\">\r\n                                <i *ngIf=\"!user.settings.isDeleted\" class=\"fa fa-user mr-2\" [ngClass]=\"{ 'text-success': user.settings.isActive, \r\n                                                                        'text-inverse': !user.settings.isActive}\" placement=\"bottom\" [ngbTooltip]=\"(user.settings.isActive) ? 'active' : 'passive'\"></i>\r\n                                <i *ngIf=\"user.settings.isDeleted\" class=\"fa fa-user mr-2 text-danger\" placement=\"bottom\" [ngbTooltip]=\"'deleted'\"></i>\r\n                                {{user.Productname}} \r\n                            </h5>\r\n                            <div class=\"widget-controls\"> \r\n                                \r\n                                <a (click)=\"openMenuAssign($event)\" href=\"javascript:void(0);\" class=\"transition\"><i class=\"fa fa-bars\"></i></a> \r\n                                <a (click)=\"openModal(modalContent, user)\" href=\"javascript:void(0);\" class=\"transition\"><i class=\"fa fa-pencil\"></i></a>             \r\n                                <a (click)=\"deleteUser(user)\" href=\"javascript:void(0);\" class=\"transition\"><i class=\"fa fa-trash\"></i></a> \r\n                            </div>        \r\n                        </div>\r\n                         <div class=\"card-body pt-3\">\r\n                            \r\n                          <div class=\"media\">\r\n                                           <div class=\"d-flex flex-column justify-content-center\">\r\n                                    <img *ngIf=\"user.image\" class=\"IMG-DIV\" [src]=\"user.image\" width=\"80\">\r\n                                    <img *ngIf=\"!user.image\" class=\"IMG-DIV\" src=\"assets/img/users/default-user.jpg\" width=\"80\">\r\n                                  \r\n                                </div>                 \r\n                                <div class=\"media-body ml-3\">\r\n                                    <div class=\"row\">  \r\n                                        <div class=\"col-6 text-gray text-right pr-0 text-truncate\">Product name:</div>\r\n                                        <div class=\"col-6 pl-2 text-truncate\">{{user.Productname}}</div>                          \r\n                                        <div class=\"col-6 text-gray text-right pr-0 text-truncate\">Price:</div>\r\n                                        <div class=\"col-6 pl-2 text-truncate\">{{user.price}}</div>\r\n                                     \r\n                                        <div class=\"col-6 text-gray text-right pr-0 text-truncate\">Category:</div>\r\n                                        <div class=\"col-6 pl-2 text-truncate fs-12 pt-2p\">{{user.category}}</div>\r\n                                    </div>\r\n                                    <div class=\"view-div\">\r\n                                            <button  type=\"button\"\r\n                                            class=\"btn btn-warning2 btn-sm view-btn pull-left\"\r\n                                            (click)=\"openModal(modalContent2, user)\"\r\n                                           \r\n                                          >  Move\r\n                                          </button>\r\n                                    </div>\r\n                                    <div class=\"view-div\">\r\n                                            <button  type=\"button\"\r\n                                            class=\"btn btn-warning btn-sm view-btn pull-right\"\r\n                                            (click)=\"goviewpage(user.id)\"\r\n                                           \r\n                                          > <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View\r\n                                          </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"back\">\r\n                    <div class=\"card border-0 box-shadow rounded-0\">\r\n                        <div class=\"card-header border-0 rounded-0 text-muted\">\r\n                            <h5 class=\"mb-0\">\r\n                                <i *ngIf=\"!user.settings.isDeleted\" class=\"fa fa-user mr-2\" [ngClass]=\"{ 'text-success': user.settings.isActive, \r\n                                                                        'text-inverse': !user.settings.isActive}\" placement=\"bottom\" [ngbTooltip]=\"(user.settings.isActive) ? 'active' : 'passive'\"></i>\r\n                                <i *ngIf=\"user.settings.isDeleted\" class=\"fa fa-user mr-2 text-danger\" placement=\"bottom\" [ngbTooltip]=\"'deleted'\"></i>\r\n                                {{user.Productname}}\r\n                            </h5>\r\n                            <div class=\"widget-controls\"> \r\n                                <a (click)=\"closeMenuAssign($event)\" href=\"javascript:void(0);\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                            </div>        \r\n                        </div>\r\n                        <div class=\"card-body pt-3\">            \r\n                            <ss-multiselect-dropdown id=\"menuSelect{{user.id}}\" class=\"custom-multiselect\"\r\n                                [options]=\"menuSelectOptions\" \r\n                                [texts]=\"menuSelectTexts\" \r\n                                (ngModelChange)=\"onchangeAssignee($event,user.id);\"\r\n                                [settings]=\"menuSelectSettings\"\r\n                                [(ngModel)]=\"user.assignee\">\r\n                            </ss-multiselect-dropdown>\r\n                            <div class=\"w-100 text-center pt-3\">\r\n                                <!-- <button class=\"btn btn-success\" (click)=\"assignMenuItemsToUser(user)\"> Multiple select Assign </button> -->\r\n                                <p class=\"text-gray fs-13 mt-2\">Logout and login to see result.</p>\r\n                            </div>                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"type=='list'\" class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"table-responsive bg-white box-shadow\">\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr> \r\n                        <th></th>\r\n                        <th>Product Name</th> \r\n                        <th>Product Id</th>                      \r\n                        <th>Price</th>                        \r\n                        <!-- <th>Username</th>\r\n                        <th>Email</th> -->\r\n                        <th>Size</th>\r\n                         <th>Category</th>                     \r\n                        <th>Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let user of users | productbycategory : cat_datafull.maincat | subcategorybycategory : cat_datafull.maincat | stagesearch : cat_datafull.stage |   filter : searchText | paginate: { itemsPerPage: 6, currentPage: p }\">                        \r\n                    <!-- <tr *ngFor=\"let user of users\">                         -->\r\n                       \r\n                        <td class=\"align-middle\">\r\n                            <img *ngIf=\"user.image\" class=\"IMG-DIV\" [src]=\"user.image\" width=\"40\">\r\n                            <img *ngIf=\"!user.image\" class=\"IMG-DIV\" src=\"assets/img/users/default-user.jpg\" width=\"40\">\r\n                        </td>\r\n                        <td class=\"align-middle text-truncate\">{{user.Productname}} </td>\r\n                        <td class=\"align-middle text-truncate\">{{user.productId}}</td>\r\n                        <td class=\"align-middle text-truncate\">{{user.price}}</td>                        \r\n                        <!-- <td class=\"align-middle text-truncate\">{{user.username}}</td>\r\n                        <td class=\"align-middle text-truncate\">{{user.contacts.email}}</td> -->\r\n                        <td class=\"align-middle\">\r\n                            <i *ngIf=\"!user.settings.isDeleted\" class=\"fa fa-user mr-2\" [ngClass]=\"{ 'text-success': user.settings.isActive, \r\n                                                                                                     'text-inverse': !user.settings.isActive}\" placement=\"bottom\" [ngbTooltip]=\"(user.settings.isActive) ? 'active' : 'passive'\"></i>\r\n                            <i *ngIf=\"user.settings.isDeleted\" class=\"fa fa-user mr-2 text-danger\" placement=\"bottom\" [ngbTooltip]=\"'deleted'\"></i>\r\n                        </td>\r\n                        <td class=\"align-middle text-truncate\">{{user.category}}</td>\r\n                        <td class=\"align-middle\">\r\n                            <div class=\"btn-group\" role=\"group\">\r\n                                <button class=\"btn btn-secondary btn-sm\" (click)=\"openModal(modalContent, user)\"><i class=\"fa fa-pencil\"></i></button>\r\n                                <button class=\"btn btn-secondary btn-sm\" (click)=\"deleteUser(user)\"><i class=\"fa fa-trash\"></i></button>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"bg-white text-center\">\r\n            <pagination-controls autoHide=\"true\" (pageChange)=\"p = $event\" maxSize=\"3\"></pagination-controls>\r\n        </div>        \r\n    </div>\r\n</div>\r\n\r\n<ng-template #modalContent>\r\n    <div class=\"modal-body bg-gray modal-lg\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 vertical-tabs\">                \r\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"row px-3\">\r\n                    <ul class=\"nav flex-column left col-3 border-0 rounded-0 mr-0 bg-light\">                    \r\n                        <img *ngIf=\"user.image\" class=\"w-100\" [src]=\"user.image\">\r\n                        <img *ngIf=\"!user.image\" class=\"w-100\" src=\"assets/img/users/default-user.jpg\">                \r\n                        <li class=\"nav-item bg-light\">\r\n                            <a class=\"nav-link active\" href=\"#basic\" data-toggle=\"tab\">Basic</a>\r\n                        </li>\r\n                     \r\n                        <li class=\"nav-item bg-light\">\r\n                            <a class=\"nav-link\" href=\"#settings\" data-toggle=\"tab\">Settings</a>\r\n                        </li>                 \r\n                    </ul>                    \r\n                    <div class=\"tab-content col-9 border-0\">\r\n                        <div class=\"tab-pane active\" id=\"basic\">                                                \r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Productname</label>\r\n                                <input formControlName=\"Productname\" class=\"form-control validation-field\" type=\"text\">\r\n                                <small class=\"text-danger\" *ngIf=\"form.controls.Productname.touched && form.controls.Productname.errors?.required\">Productname is required</small>                              \r\n                                \r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">ProductId</label>\r\n                                <input formControlName=\"productId\" class=\"form-control validation-field\" type=\"text\">\r\n                                <small class=\"text-danger\" *ngIf=\"form.controls.productId.touched && form.controls.productId.errors?.required\">ProductId is required</small>                              \r\n                                \r\n                            </div>        \r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Price</label>\r\n                                <input formControlName=\"price\" maxlength=\"7\" oninput=\"this.value = this.value.replace(/[^0-9+]/g, '').replace(/(\\..*)\\./g, '$1');\" class=\"form-control validation-field\" type=\"text\">\r\n                                <small class=\"text-danger\" *ngIf=\"form.controls.price.touched && form.controls.price.errors?.required\">Price is required</small>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Size</label>\r\n                                <input formControlName=\"size\" class=\"form-control validation-field\" type=\"text\">\r\n                                <small class=\"text-danger\" *ngIf=\"form.controls.size.touched && form.controls.size.errors?.required\">Size is required</small>                              \r\n                                \r\n                            </div>    \r\n                            <!-- <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Discount Name</label>\r\n                                <input formControlName=\"DiscountName\" class=\"form-control validation-field\" type=\"text\">\r\n                                   \r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Discount Amount</label>\r\n                                <input formControlName=\"DiscountAmount\" oninput=\"this.value = this.value.replace(/[^0-9+]/g, '').replace(/(\\..*)\\./g, '$1');\" class=\"form-control validation-field\" type=\"text\">\r\n                                \r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Color</label>\r\n                                <input formControlName=\"color\"  class=\"form-control validation-field\" type=\"text\">\r\n                                <small class=\"text-danger\" *ngIf=\"form.controls.color.touched && form.controls.color.errors?.required\">Color is required</small>                              \r\n                                \r\n                            </div> -->\r\n                            <!-- <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Category</label>\r\n                           \r\n                                <select formControlName=\"category\"  class=\"form-control\" type=\"text\">\r\n\r\n                                    <option [value]=\"cat_datafull.Productname\" selected>{{cat_datafull.Productname}}</option>\r\n                                 \r\n                            </select>\r\n                                <small class=\"text-danger\" *ngIf=\"form.controls.category.touched && form.controls.category.errors?.required\">Category is required</small>                              \r\n                                \r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Sub Category</label>\r\n                                <input formControlName=\"subcategory\"  class=\"form-control validation-field\" type=\"text\">\r\n                                <small class=\"text-danger\" *ngIf=\"form.controls.subcategory.touched && form.controls.subcategory.errors?.required\">Sub Category is required</small>                              \r\n                                \r\n                            </div> -->\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Stage</label>\r\n                             \r\n                                <select formControlName=\"stage\"  class=\"form-control\" type=\"text\">\r\n                                    <option *ngFor=\"let stage of cat_datafull.stagelist\" value='{{stage.stageid}}'>{{stage.stagename}}</option>\r\n                                    <!--<option value='Stage1' >Stage 1</option>\r\n                                    <option value='Stage2' >Stage 2</option>\r\n                                    <option value='Stage3' >Stage 3</option>-->\r\n                                 \r\n                            </select>\r\n                                <small class=\"text-danger\" *ngIf=\"form.controls.stage.touched && form.controls.stage.errors?.required\">Stage is required</small>                              \r\n                                \r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Description</label>\r\n                                <textarea formControlName=\"highlights\" class=\"form-control validation-field\" type=\"text\"></textarea>\r\n                                <small class=\"text-danger\" *ngIf=\"form.controls.highlights.touched && form.controls.highlights.errors?.required\">Highlights is required</small>                              \r\n                                \r\n                            </div>    \r\n                            <div class=\"form-group\">\r\n                                    <ngfFormData\r\n                                   \r\n                                    [files]      = \"files\"\r\n                                    postName     = \"file[]\"\r\n                                    [(FormData)] = \"sendableFormData\"\r\n                                  ></ngfFormData>\r\n                                  <ngfUploadStatus\r\n          [(percent)] = \"progress\"\r\n          [httpEvent] = \"httpEvent\"\r\n        ></ngfUploadStatus>\r\n                                <label class=\"text-gray\">Images</label>\r\n                                <div\r\n      ngfDrop\r\n      multiple         = \"1\"\r\n      selectable       = \"1\"\r\n      [(validDrag)]    = \"validComboDrag\"\r\n      [(files)]        = \"files\"\r\n      accept           = \"image/*\"\r\n      [maxSize]        = \"maxSize\"\r\n      [(lastInvalids)] = \"lastInvalids\"\r\n      [(dragFiles)]    = \"dragFiles\"\r\n      class            = \"well my-drop-zone\"\r\n      [class.invalid-drag] = \"validComboDrag===false\"\r\n      [class.valid-drag]   = \"validComboDrag\"\r\n      (filesChange) = \"lastFileAt=getDate()\"\r\n      \r\n    >\r\n       drop/select <strong>image</strong> only \r\n    </div>\r\n                                 <input  ngfSelect\r\n                               \r\n                                type      = \"hidden\"\r\n                               \r\n                                 formControlName=\"Images\"   class=\"form-control validation-field\"  (change)=\"onSelectFile($event)\" multiple> \r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.Images.touched && form.controls.Images.errors?.required\">Image is required</small>                              \r\n                                \r\n                            </div>\r\n                            <div class=\"uploadImage-div\" *ngFor=\"let item of files;let i=index\">\r\n                                   \r\n                                    <div class=\"previewIcon uploadImage\" [ngfBackground]=\"item\"></div>\r\n                                <i (click)=\"files.splice(i,1)\" class=\"fa fa-close closeicon\"></i>\r\n                            </div>\r\n                            <div class=\"uploadImage-div\" *ngFor=\"let item of user.Images;let i=index\">\r\n                                   \r\n                                    <img class=\"previewIcon uploadImage\" [src]=\"imgurl+item\"/>\r\n                                <i (click)=\"user.Images.splice(i,1)\" class=\"fa fa-close closeicon\"></i>\r\n                            </div>\r\n                            <div>\r\n\r\n                            </div>\r\n                            \r\n\r\n                               \r\n\r\n                        </div>                  \r\n                        \r\n                        <div class=\"tab-pane\" id=\"settings\" formGroupName=\"settings\">\r\n                            <div class=\"custom-control custom-checkbox\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"checkboxActive\" formControlName=\"isActive\" [value]=\"isActive\">\r\n                                <label class=\"custom-control-label\" for=\"checkboxActive\">Active</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-checkbox\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"checkboxDeleted\" formControlName=\"isDeleted\" [value]=\"isDeleted\">\r\n                                <label class=\"custom-control-label\" for=\"checkboxDeleted\">Deleted</label>\r\n                            </div>\r\n                            <label *ngIf=\"user.id\"><span class=\"text-gray\">Registration date:</span> <i>{{user.settings.registrationDate | date:\"dd MMMM, yyyy 'at' HH:mm\" }}</i></label> \r\n                            <label *ngIf=\"user.id\"><span class=\"text-gray\">Last joined date:</span> <i>{{user.settings.joinedDate | date:\"dd MMMM, yyyy 'at' HH:mm\" }}</i> </label>     \r\n                        </div>           \r\n                    </div>\r\n                    <div class=\"col-12 bg-white text-center py-1\">\r\n                        <button [disabled]=\"!form.valid || !(files.length || user.Images.length)\" class=\"btn btn-success\" type=\"submit\"><span *ngIf=\"!user.id\">Add</span><span *ngIf=\"user.id\">Update</span></button>\r\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeModal()\">Cancel</button>\r\n                    </div> \r\n                </form> \r\n            </div>\r\n        </div>    \r\n    </div>\r\n</ng-template>\r\n<ng-template #modalContent2>\r\n        <div class=\"modal-body bg-gray modal-lg\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 vertical-tabs\">                \r\n                    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"row px-3\">\r\n                           \r\n                                         \r\n                        <div class=\"tab-content col-12 border-0\">\r\n                            <div class=\"tab-pane active\" id=\"basic\">                                                \r\n                                \r\n                               \r\n                                <div class=\"form-group\">\r\n                                    <label class=\"text-gray\">Move To</label>\r\n                                 \r\n                                    <select formControlName=\"stage\"  class=\"form-control\" type=\"text\">\r\n                                       <option *ngFor=\"let stage of cat_datafull.stagelist\" value='{{stage.stageid}}'>{{stage.stagename}}</option>\r\n                                </select>\r\n                           \r\n                                </div>\r\n                                <div>\r\n    \r\n                                </div>\r\n                                \r\n    \r\n                                   \r\n    \r\n                            </div>                  \r\n                            \r\n                            <div class=\"tab-pane\" id=\"settings\" formGroupName=\"settings\">\r\n                                <div class=\"custom-control custom-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"checkboxActive\" formControlName=\"isActive\" [value]=\"isActive\">\r\n                                    <label class=\"custom-control-label\" for=\"checkboxActive\">Active</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"checkboxDeleted\" formControlName=\"isDeleted\" [value]=\"isDeleted\">\r\n                                    <label class=\"custom-control-label\" for=\"checkboxDeleted\">Deleted</label>\r\n                                </div>\r\n                                <label *ngIf=\"user.id\"><span class=\"text-gray\">Registration date:</span> <i>{{user.settings.registrationDate | date:\"dd MMMM, yyyy 'at' HH:mm\" }}</i></label> \r\n                                <label *ngIf=\"user.id\"><span class=\"text-gray\">Last joined date:</span> <i>{{user.settings.joinedDate | date:\"dd MMMM, yyyy 'at' HH:mm\" }}</i> </label>     \r\n                            </div>           \r\n                        </div>\r\n                        <div class=\"col-12 bg-white text-center py-1\">\r\n                            <button [disabled]=\"!form.valid || !(files.length || user.Images.length)\" class=\"btn btn-success\" type=\"submit\"><span *ngIf=\"!user.id\">Add</span><span *ngIf=\"user.id\">Move</span></button>\r\n                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeModal()\">Cancel</button>\r\n                        </div> \r\n                    </form> \r\n                </div>\r\n            </div>    \r\n        </div>\r\n    </ng-template>\r\n<ng-template #modalContent1>\r\n    <div class=\"modal-body bg-gray modal-lg\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 vertical-tabs\">                \r\n                <form [formGroup]=\"catform\" (ngSubmit)=\"onSubmit1(catform.value)\" class=\"row px-3\">\r\n                                    \r\n                    <div class=\"tab-content col-9 border-0\">\r\n                        <div class=\"tab-pane active\" id=\"basic\">                                                \r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Category name</label>\r\n                                <input formControlName=\"Productname\" class=\"form-control validation-field\" type=\"text\">\r\n                                <small class=\"text-danger\" *ngIf=\"catform.controls.Productname.touched && catform.controls.Productname.errors?.required\">Productname is required</small>                              \r\n                                \r\n                            </div>\r\n                              \r\n                            <div class=\"form-group\">\r\n                                    <ngfFormData\r\n                                   \r\n                                    [files]      = \"files\"\r\n                                    postName     = \"file[]\"\r\n                                    [(FormData)] = \"sendableFormData\"\r\n                                  ></ngfFormData>\r\n                                  <ngfUploadStatus\r\n          [(percent)] = \"progress\"\r\n          [httpEvent] = \"httpEvent\"\r\n        ></ngfUploadStatus>\r\n                                <label class=\"text-gray\">Images</label>\r\n                                <div\r\n      ngfDrop\r\n      multiple         = \"1\"\r\n      selectable       = \"1\"\r\n      [(validDrag)]    = \"validComboDrag\"\r\n      [(files)]        = \"files\"\r\n      accept           = \"image/*\"\r\n      [maxSize]        = \"maxSize\"\r\n      [(lastInvalids)] = \"lastInvalids\"\r\n      [(dragFiles)]    = \"dragFiles\"\r\n      class            = \"well my-drop-zone\"\r\n      [class.invalid-drag] = \"validComboDrag===false\"\r\n      [class.valid-drag]   = \"validComboDrag\"\r\n      (filesChange) = \"lastFileAt=getDate()\"\r\n      \r\n    >\r\n       drop/select <strong>image</strong> only \r\n    </div>\r\n                                 <input  ngfSelect\r\n                               \r\n                                type      = \"hidden\"\r\n                               \r\n                                 formControlName=\"Images\"   class=\"form-control validation-field\"  (change)=\"onSelectFile($event)\" multiple> \r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.Images.touched && form.controls.Images.errors?.required\">Image is required</small>                              \r\n                                \r\n                            </div>\r\n                            <div class=\"uploadImage-div\" *ngFor=\"let item of files;let i=index\">\r\n                                   \r\n                                    <div class=\"previewIcon uploadImage\" [ngfBackground]=\"item\"></div>\r\n                                <i (click)=\"files.splice(i,1)\" class=\"fa fa-close closeicon\"></i>\r\n                            </div>\r\n                            <div class=\"uploadImage-div\" *ngFor=\"let item of cat.Images;let i=index\">\r\n                                   \r\n                                    <img class=\"previewIcon uploadImage\" [src]=\"imgurl+item\"/>\r\n                                <i (click)=\"cat.Images.splice(i,1)\" class=\"fa fa-close closeicon\"></i>\r\n                            </div>\r\n                            <div>\r\n\r\n                            </div>\r\n                            \r\n\r\n                               \r\n\r\n                        </div>                  \r\n                                \r\n                    </div>\r\n                    <div class=\"col-12 bg-white text-center py-1\">\r\n                        <button [disabled]=\"!catform.valid || !(files.length || cat.Images.length)\" class=\"btn btn-success\" type=\"submit\"><span *ngIf=\"!cat.Id\">Add</span><span *ngIf=\"cat.Id\">Update</span></button>\r\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeModal()\">Cancel</button>\r\n                    </div> \r\n                </form> \r\n            </div>\r\n        </div>    \r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/blank/blank.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".uploadImage {\n  margin-top: 10px;\n  width: 100%; }\n\n.uploadImage-div {\n  position: relative; }\n\n.view-div {\n  width: 100%; }\n\n.productflip .btn-warning {\n  width: 48% !important; }\n\n.productflip .btn-warning2 {\n  color: #fff !important;\n  width: 48% !important;\n  background-color: #4BAE4F !important;\n  border-color: #4BAE4F !important; }\n\n.view-btn {\n  margin: auto;\n  margin: auto;\n  width: 50%;\n  margin-top: 10px; }\n\n.my-drop-zone {\n  border: dotted 3px lightgray;\n  padding: 20px; }\n\n/* Default class applied to drop zones on over */\n\n.invalid-drag {\n  border: dotted 3px red; }\n\n.valid-drag {\n  border: dotted 3px green; }\n\nhtml, body {\n  height: 100%; }\n\n.previewIcon {\n  width: 100%;\n  height: 100px;\n  background-size: cover;\n  background-repeat: no-repeat; }\n\n.IMG-DIV {\n  height: 100px;\n  width: 80px; }\n\n.inline-block {\n  display: inline-block;\n  margin: .2em; }\n\n.closeicon {\n  position: absolute;\n  top: 6px;\n  z-index: 9999;\n  display: block;\n  background: #fff;\n  right: 4px;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  font-size: 20px;\n  border-radius: 10px; }\n\n.flip {\n  width: 100%;\n  height: 180px;\n  position: relative;\n  -webkit-perspective: 800px;\n  -o-perspective: 800px;\n  perspective: 800px; }\n\n.flip .content {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    -webkit-transition: -webkit-transform 0.6s;\n    transition: -webkit-transform 0.6s;\n    transition: transform 0.6s;\n    transition: transform 0.6s, -webkit-transform 0.6s;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d; }\n\n.flip .content div.front, .flip .content div.back {\n      height: 100%;\n      width: 100%;\n      position: absolute;\n      z-index: 0;\n      -webkit-backface-visibility: hidden;\n      backface-visibility: hidden; }\n\n.flip .content div.front .card, .flip .content div.back .card {\n        height: 180px; }\n\n.flip .content div.back {\n      z-index: 1;\n      -webkit-transform: rotateY(180deg);\n      transform: rotateY(180deg); }\n\n.flip .content div.back .dropdown {\n        width: 100%; }\n\n.flip .content div.back .dropdown .dropdown-menu {\n          width: 100%;\n          margin-top: -1px; }\n\n.flip .content div.back .dropdown .dropdown-menu a {\n            color: #666; }\n\n.flip .content div.back .dropdown .dropdown-menu a .fa-check {\n              color: #378D3B; }\n\n.flip .content div.back .dropdown .dropdown-menu a .fa-times {\n              color: #D22E2E; }\n\n.flip .content.flipped {\n      -webkit-transform: rotateY(180deg);\n      transform: rotateY(180deg); }\n\n.z-index-1 {\n  z-index: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/blank/blank.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blank_model__ = __webpack_require__("../../../../../src/app/pages/blank/blank.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blank_service__ = __webpack_require__("../../../../../src/app/pages/blank/blank.service.ts");
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
var BlankComponent = /** @class */ (function () {
    function BlankComponent(fb, router, route, toastrService, membershipService, menuService, _location, modalService, http, HttpClient) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.toastrService = toastrService;
        this.membershipService = membershipService;
        this.menuService = menuService;
        this._location = _location;
        this.modalService = modalService;
        this.http = http;
        this.HttpClient = HttpClient;
        this.accept = '*';
        this.files = [];
        this.url = 'https://evening-anchorage-3159.herokuapp.com/api/';
        this.imgurl = 'http://codefacetech.com/demo/gogars/Apis/Images/';
        this.imagearr = '';
        this.urls = [];
        this.userdata = [];
        this.productList = new __WEBPACK_IMPORTED_MODULE_5__blank_model__["b" /* ProductAssignee */]();
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
        this.menuSelectOptions = [];
    }
    BlankComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    BlankComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    BlankComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            console.log(params);
            // Defaults to 0 if no query param provided.
            _this.cat_datafull = JSON.parse(params['users']);
            _this.catid = _this.cat_datafull.catid;
            _this.subcatId = _this.cat_datafull.subcatId;
            _this.stageId = _this.cat_datafull.stageid;
            console.log(_this.cat_datafull);
        });
        this.form = this.fb.group({
            id: null,
            Productname: null,
            productId: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            price: [null],
            size: [null],
            category: [this.cat_datafull.maincat, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            subcategory: [this.cat_datafull.subcat, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            stage: [this.cat_datafull.stageid],
            highlights: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            image: null,
            Images: null,
            DiscountName: null,
            assignee: [null],
            color: [null],
            DiscountAmount: null,
            settings: this.fb.group({
                isActive: null,
                isDeleted: null,
                registrationDate: null,
                joinedDate: null
            }),
        });
        this.catform = this.fb.group({
            Productname: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            image: null,
            Images: null,
        });
        this.getUsers();
        this.getproductcategory();
        this.getUserRole();
    };
    BlankComponent.prototype.backClicked = function () {
        this._location.back();
    };
    BlankComponent.prototype.cancel = function () {
        this.progress = 0;
        if (this.httpEmitter) {
            console.log('cancelled');
            this.httpEmitter.unsubscribe();
        }
    };
    BlankComponent.prototype.uploadFiles = function (files, images) {
        console.log(images.join());
    };
    BlankComponent.prototype.goviewpage = function (Item) {
        this.router.navigate(['/pages/ui/components'], { queryParams: { usersid: Item } });
    };
    BlankComponent.prototype.getDate = function () {
        console.log(this.files);
        return new Date();
    };
    BlankComponent.prototype.onSelectFile = function (event) {
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
    BlankComponent.prototype.getItems = function (ev) {
        console.log(ev);
        var val = ev.target.value;
        if (!val || !val.trim()) {
        }
        this.users = this.membershipService.query({
            name: val
        });
        console.log(this.users);
    };
    BlankComponent.prototype.removeimage = function (i) {
        this.urls.splice(i, 1);
    };
    BlankComponent.prototype.onUpload = function () {
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
    BlankComponent.prototype.getUsers = function () {
        var _this = this;
        this.membershipService.getStageProduct(this.stageId).then(function (users) {
            console.log(users);
            _this.userdatafull = users;
            for (var i = 0; i < _this.userdatafull.details.length; i++) {
                var roles = (_this.userdatafull.details[i].assignee != null) ? _this.userdatafull.details[i].assignee.split(",") : [];
                _this.userdatafull.details[i].assignee = roles;
            }
            console.log(users);
            _this.users = _this.userdatafull.details;
        });
    };
    BlankComponent.prototype.getproductcategory = function () {
        var _this = this;
        this.membershipService.getproductcat().subscribe(function (users) {
            console.log(users);
            _this.productcatefull = users;
            _this.productcate = _this.productcatefull.details;
        });
    };
    BlankComponent.prototype.getUserRole = function () {
        var _this = this;
        this.membershipService.getUserRoles().then(function (result) {
            _this.userdata = result;
            if (_this.userdata.result == true) {
                _this.userRole = _this.userdata.details;
                for (var i = 0; i < _this.userRole.length; i++) {
                    _this.menuSelectOptions.push({ id: _this.userRole[i].id, name: _this.userRole[i].rolename });
                }
            }
            else {
            }
        }, function (err) {
        });
    };
    BlankComponent.prototype.onchangeAssignee = function (event, userid) {
        this.productList.productid = userid;
        var rolelist = "";
        for (var i = 0; i < event.length; i++)
            rolelist += event[i] + "-";
        this.productList.role = rolelist.replace(/-\s*$/, "");
        this.assigneProduct(this.productList);
    };
    BlankComponent.prototype.assigneProduct = function (productAss) {
        var _this = this;
        this.membershipService.productAssign(productAss).then(function (result) {
            _this.userdata = result;
            if (_this.userdata.result == true) {
                console.log("<<<< assigned success fully");
            }
            else {
            }
        }, function (err) {
        });
    };
    BlankComponent.prototype.addUser = function (user) {
        var _this = this;
        if (this.files.length != 0) {
            this.membershipService.uploadimage(this.sendableFormData).subscribe(function (result) {
                console.log(result);
                _this.imagearr = result;
                user.Images = _this.imagearr;
                user.catid = _this.catid;
                user.subcatid = _this.subcatId;
                console.log(user.Images);
                _this.membershipService.addUser(user).then(function (user) {
                    _this.userdata = user;
                    if (_this.userdata.result == true) {
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
                    _this.getUsers();
                }
                else {
                }
            });
        }
    };
    BlankComponent.prototype.addcat = function (cat) {
        var _this = this;
        if (this.files.length != 0) {
            this.membershipService.uploadimage(this.sendableFormData).subscribe(function (result) {
                console.log(result);
                _this.imagearr = result;
                cat.Images = _this.imagearr;
                console.log(cat.Images);
                _this.membershipService.addcat(cat).then(function (user) {
                    _this.userdata = user;
                    if (_this.userdata.result == true) {
                        _this.getUsers();
                    }
                    else {
                    }
                });
            }, function (err) {
            });
        }
        else {
            this.membershipService.addcat(cat).then(function (user) {
                _this.userdata = user;
                if (_this.userdata.result == true) {
                    _this.getUsers();
                }
                else {
                }
            });
        }
    };
    BlankComponent.prototype.updatecat = function (user, userimages) {
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
                _this.membershipService.updatecat(user).then(function (user) {
                    _this.getUsers();
                });
            }, function (err) {
            });
        }
        else {
            this.imagearr = userimages.join();
            user.Images = this.imagearr;
            this.membershipService.updatecat(user).then(function (user) {
                _this.getUsers();
            }, function (err) {
            });
        }
    };
    BlankComponent.prototype.updateUser = function (user, userimages) {
        var _this = this;
        user.subcatid = this.subcatId;
        user.catid = this.catid;
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
    BlankComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.membershipService.deleteUser(user.id).subscribe(function (result) {
            return _this.getUsers();
        });
    };
    BlankComponent.prototype.toggle = function (type) {
        this.type = type;
    };
    BlankComponent.prototype.openMenuAssign = function (event) {
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
    BlankComponent.prototype.closeMenuAssign = function (event) {
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
    BlankComponent.prototype.assignMenuItemsToUser = function (user) {
        this.updateUser(user, user);
        sessionStorage.setItem('userMenuItems', JSON.stringify(user.menuIds));
        this.toastrService.success('Please, logout and login to see result.', 'Successfully assigned !');
    };
    BlankComponent.prototype.openModal = function (modalContent, user) {
        var _this = this;
        console.log(user);
        this.files = [];
        if (user) {
            console.log("<<<< edit produuct");
            this.user = user;
            this.form.setValue(user);
            //this.files=user.Images;
            console.log(this.files);
        }
        else {
            this.user = new __WEBPACK_IMPORTED_MODULE_5__blank_model__["c" /* User */]();
            console.log("<<<< new produuct");
            console.log(this.user);
            this.files = [];
            this.user.Images = [];
            this.user.settings = new __WEBPACK_IMPORTED_MODULE_5__blank_model__["d" /* UserSettings */]();
        }
        this.modalRef = this.modalService.open(modalContent, { container: '.app' });
        this.modalRef.result.then(function (result) {
            _this.form.reset();
        }, function (reason) {
            _this.form.reset();
        });
    };
    BlankComponent.prototype.openModal1 = function (modalContent, user) {
        var _this = this;
        console.log(user);
        if (user) {
            this.cat = user;
            this.catform.setValue(user);
            // this.files=user.Images;
            console.log(this.files);
        }
        else {
            this.cat = new __WEBPACK_IMPORTED_MODULE_5__blank_model__["a" /* Getproductcategory */]();
            console.log(this.cat);
        }
        this.modalRef = this.modalService.open(modalContent, { container: '.app' });
        this.modalRef.result.then(function (result) {
            _this.catform.reset();
        }, function (reason) {
            _this.catform.reset();
        });
    };
    BlankComponent.prototype.closeModal = function () {
        this.modalRef.close();
    };
    BlankComponent.prototype.openModal2 = function (modalContent, user) {
        var _this = this;
        console.log(user);
        if (user) {
            this.cat = user;
            this.catform.setValue(user);
            // this.files=user.Images;
            console.log(this.files);
        }
        else {
            this.cat = new __WEBPACK_IMPORTED_MODULE_5__blank_model__["a" /* Getproductcategory */]();
            console.log(this.cat);
        }
        this.modalRef = this.modalService.open(modalContent, { container: '.app' });
        this.modalRef.result.then(function (result) {
            _this.catform.reset();
        }, function (reason) {
            _this.catform.reset();
        });
    };
    BlankComponent.prototype.onSubmit = function (user) {
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
    BlankComponent.prototype.onSubmit1 = function (cat) {
        if (this.catform.valid) {
            if (cat.Id) {
                this.updatecat(cat, cat.Images);
            }
            else {
                this.addcat(cat);
            }
            this.modalRef.close();
        }
    };
    BlankComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blank',
            template: __webpack_require__("../../../../../src/app/pages/blank/blank.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/blank/blank.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_6__blank_service__["a" /* BlankService */], __WEBPACK_IMPORTED_MODULE_7__theme_components_menu_menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__blank_service__["a" /* BlankService */],
            __WEBPACK_IMPORTED_MODULE_7__theme_components_menu_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_9__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClient */]])
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/blank/blank.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankData; });
var BlankData = /** @class */ (function () {
    function BlankData() {
    }
    BlankData.prototype.createDb = function () {
        var users = [
            {
                id: 1,
                username: "pretty",
                password: "pretty123",
                profile: {
                    name: "Ashley",
                    surname: "Ahlberg",
                    birthday: { day: 29, month: 3, year: 1981 },
                    gender: "female",
                    image: "assets/img/app/midi.jpg"
                },
                work: {
                    company: "Midi",
                    position: "Product designer",
                    salary: 5000
                },
                contacts: {
                    email: "ashley@gmail.com",
                    phone: "(202) 756-9756",
                    address: "Washington"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2012-10-13T12:20:40.511Z",
                    joinedDate: "2017-04-21T18:25:43.511Z"
                },
                menuIds: []
            },
            {
                id: 2,
                username: "bruno.V",
                password: "bruno123",
                profile: {
                    name: "Bruno",
                    surname: "Vespa",
                    birthday: { day: 20, month: 11, year: 1992 },
                    gender: "male",
                    image: "assets/img/app/saree.jpg"
                },
                work: {
                    company: "Dell EMC",
                    position: "Sale manager",
                    salary: 17000
                },
                contacts: {
                    email: "bruno@dell.com",
                    phone: "(415) 231-0332",
                    address: "San Francisco"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: false,
                    registrationDate: "2011-01-05T08:45:23.511Z",
                    joinedDate: "2017-05-20T18:25:43.511Z"
                },
                menuIds: []
            },
            {
                id: 3,
                username: "andy.79",
                password: "andy123",
                profile: {
                    name: "Andy",
                    surname: "Warhol",
                    birthday: { day: 21, month: 10, year: 1979 },
                    gender: "male",
                    image: "assets/img/app/churidar.jpg"
                },
                work: {
                    company: "Adecco",
                    position: "Product manager",
                    salary: 13000
                },
                contacts: {
                    email: "andy@adecco.com",
                    phone: "(212) 457-2308",
                    address: "New York"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: true,
                    registrationDate: "2014-11-01T19:35:43.511Z",
                    joinedDate: "2017-06-28T15:25:43.511Z"
                },
                menuIds: []
            },
            {
                id: 4,
                username: "julia.a",
                password: "julia123",
                profile: {
                    name: "Julia",
                    surname: "Aniston",
                    birthday: { day: 18, month: 6, year: 1982 },
                    gender: "female",
                    image: "assets/img/app/midi.jpg"
                },
                work: {
                    company: "Apple",
                    position: "Sales manager",
                    salary: 18000
                },
                contacts: {
                    email: "julia@apple.com",
                    phone: "(224) 267-1346",
                    address: "Illinois, Chicago"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2015-12-06T11:10:20.511Z",
                    joinedDate: "2017-06-29T15:15:40.511Z"
                },
                menuIds: []
            },
            {
                id: 5,
                username: "lusia.m",
                password: "lusia123",
                profile: {
                    name: "Lusia",
                    surname: "Manuel",
                    birthday: { day: 2, month: 12, year: 1992 },
                    gender: "female",
                    image: "assets/img/app/churidar.jpg"
                },
                work: {
                    company: "Alphabet",
                    position: "Office manager",
                    salary: 10000
                },
                contacts: {
                    email: "lusia@alphabet.com",
                    phone: "(224) 267-1346",
                    address: "California, Los Angeles"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2014-01-10T10:20:20.511Z",
                    joinedDate: "2017-06-28T12:20:40.511Z"
                },
                menuIds: []
            },
            {
                id: 6,
                username: "adam.82",
                password: "adam123",
                profile: {
                    name: "Adam",
                    surname: "Sandler",
                    birthday: { day: 24, month: 12, year: 1987 },
                    gender: "male",
                    image: "assets/img/app/midi.jpg"
                },
                work: {
                    company: "General Electric",
                    position: "Product manager",
                    salary: 21000
                },
                contacts: {
                    email: "adam@gen-el.com",
                    phone: "(224) 267-1346",
                    address: "Texas, Houston"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: false,
                    registrationDate: "2016-11-16T12:20:20.511Z",
                    joinedDate: "2017-06-27T14:20:40.511Z"
                },
                menuIds: []
            },
            {
                id: 7,
                username: "tereza.s",
                password: "tereza123",
                profile: {
                    name: "Tereza",
                    surname: "Stiles",
                    birthday: { day: 9, month: 7, year: 1979 },
                    gender: "female",
                    image: "assets/img/app/saree.jpg"
                },
                work: {
                    company: "Southwest Airlines",
                    position: "Sale manager",
                    salary: 31000
                },
                contacts: {
                    email: "tereza@airlines.com",
                    phone: "(214) 617-2614",
                    address: "Texas, Dallas"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2010-10-12T16:20:20.511Z",
                    joinedDate: "2017-06-29T15:20:40.511Z"
                },
                menuIds: []
            },
            {
                id: 8,
                username: "michael.b",
                password: "michael123",
                profile: {
                    name: "Michael",
                    surname: "Blair",
                    birthday: { day: 15, month: 11, year: 1978 },
                    gender: "male",
                    image: "assets/img/app/midi.jpg"
                },
                work: {
                    company: "Microsoft",
                    position: "Software developer",
                    salary: 50000
                },
                contacts: {
                    email: "michael@microsoft.com",
                    phone: "(267) 388-1637",
                    address: "Pennsylvania, Philadelphia"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2009-08-12T16:20:20.511Z",
                    joinedDate: "2017-06-30T11:30:40.511Z"
                },
                menuIds: []
            },
            {
                id: 9,
                username: "michelle.81",
                password: "michelle123",
                profile: {
                    name: "Michelle",
                    surname: "Ormond",
                    birthday: { day: 18, month: 11, year: 1981 },
                    gender: "female",
                    image: "assets/img/app/saree.jpg"
                },
                work: {
                    company: "Starbucks",
                    position: "Sale manager",
                    salary: 15000
                },
                contacts: {
                    email: "michelle@starbucks.com",
                    phone: "(267) 388-1637",
                    address: "Washington, Seattle"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: true,
                    registrationDate: "2012-11-10T18:20:20.511Z",
                    joinedDate: "2015-03-29T17:20:40.511Z"
                },
                menuIds: []
            }
        ];
        return { users: users };
    };
    return BlankData;
}());



/***/ }),

/***/ "../../../../../src/app/pages/blank/blank.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return User; });
/* unused harmony export uploaddata */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Getproductcategory; });
/* unused harmony export UserProfile */
/* unused harmony export UserWork */
/* unused harmony export UserContacts */
/* unused harmony export UserSocial */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UserSettings; });
/* unused harmony export userRole */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProductAssignee; });
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

var userRole = /** @class */ (function () {
    function userRole() {
    }
    return userRole;
}());

var ProductAssignee = /** @class */ (function () {
    function ProductAssignee() {
    }
    return ProductAssignee;
}());

// let date = new Date(),
//     day = date.getDate(),
//     month = date.getMonth(),
//     year = date.getFullYear(),
//     hour = date.getHours(),
//     minute = date.getMinutes();
// export const users: User[] = [
//   {
//     id: 1,
//     username: "pretty",
//     password: "pretty123",
//     profile: {
//       name: "Ashley",
//       surname: "Ahlberg",
//       birthday: { day: 29, month: 3, year: 1981 },
//       gender: "female",
//       image: "assets/img/profile/ashley.jpg"
//     },
//     work: {
//       company: "Google",
//       position: "Product designer",
//       salary: 5000
//     },
//     contacts:{
//       email: "ashley@gmail.com",
//       phone: "(202) 756-9756",
//       address: "Washington"
//     },
//     social: {
//       facebook:"",
//       twitter:"",
//       google:""
//     },
//     settings:{
//       isActive: true,
//       isDeleted: false,
//       registrationDate: new Date(year-1, month, day-2, hour, minute),
//       joinedDate: new Date(year, month, day-1, hour, minute)
//     } 
//   },
//   {
//     id: 2,
//     username: "bruno.V",
//     password: "bruno123",
//     profile: {
//       name: "Bruno",
//       surname: "Vespa",
//       birthday: { day: 20, month: 11, year: 1992 },
//       gender: "male",
//       image: "assets/img/profile/bruno.jpg"
//     },
//     work: {
//       company: "Dell EMC",
//       position: "Sale manager",
//       salary: 17000
//     },
//     contacts:{
//       email: "bruno@dell.com",
//       phone: "(415) 231-0332",
//       address: "San Francisco"
//     },
//     social: {
//       facebook:"",
//       twitter:"",
//       google:""
//     },
//     settings:{
//       isActive: false,
//       isDeleted: false,
//       registrationDate:  new Date(year-3, month-2, day-8, hour, minute),
//       joinedDate:  new Date(year, month, day, hour-2, minute)
//     } 
//   },
//   {
//     id: 3,
//     username: "andy.79",
//     password: "andy123",
//     profile: {
//       name: "Andy",
//       surname: "Warhol",
//       birthday: { day: 21, month: 10, year: 1979 },
//       gender: "male",
//       image: "assets/img/avatars/avatar-3.png"
//     },
//     work: {
//       company: "Adecco",
//       position: "Product manager",
//       salary: 13000
//     },
//     contacts:{
//       email: "andy@adecco.com",
//       phone: "(212) 457-2308",
//       address: "New York"
//     },
//     social: {
//       facebook:"",
//       twitter:"",
//       google:""
//     },
//     settings:{
//       isActive: true,
//       isDeleted: true,
//       registrationDate:  new Date(year-4, month-2, day-3, hour, minute),
//       joinedDate:  new Date(year, month, day, hour-6, minute)
//     } 
//   }
// ]


/***/ }),

/***/ "../../../../../src/app/pages/blank/blank.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankModule", function() { return BlankModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__theme_pipes_pipes_module__ = __webpack_require__("../../../../../src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__blank_component__ = __webpack_require__("../../../../../src/app/pages/blank/blank.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__blank_data__ = __webpack_require__("../../../../../src/app/pages/blank/blank.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_file__ = __webpack_require__("../../../../angular-file/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_file___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular_file__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__blank_component__["a" /* BlankComponent */], pathMatch: 'full' }
];
var BlankModule = /** @class */ (function () {
    function BlankModule() {
    }
    BlankModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__blank_data__["a" /* BlankData */], { delay: 0 }),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular_file__["ngfModule"],
                __WEBPACK_IMPORTED_MODULE_6_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_8__theme_pipes_pipes_module__["a" /* PipesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__blank_component__["a" /* BlankComponent */]
            ]
        })
    ], BlankModule);
    return BlankModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/blank/blank.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankService; });
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


var BlankService = /** @class */ (function () {
    function BlankService(http) {
        this.http = http;
        this.url = "http://codefacetech.com/demo/gogars/Apis/index.php/";
        this.userdata = [];
        this.userdatafull = [];
    }
    BlankService.prototype.getUsers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + 'Getproducts')
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
    BlankService.prototype.getStageProduct = function (stageId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + 'Getstageproduct/' + stageId)
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
    BlankService.prototype.getproductcat = function () {
        return this.http.get(this.url + 'Getproductcategory');
    };
    BlankService.prototype.getUserRoles = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + '/getroles', "")
                .subscribe(function (val) {
                console.log("get call successful value returned in body", val);
                resolve(val);
            }, function (response) {
                console.log("get call in error", response);
                reject(response);
            }, function () {
                console.log("The get observable is now completed.");
            });
        });
    };
    BlankService.prototype.productAssign = function (productAssign) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + '/assignproduct', JSON.stringify(productAssign))
                .subscribe(function (val) {
                console.log("get call successful value returned in body", val);
                resolve(val);
            }, function (response) {
                console.log("get call in error", response);
                reject(response);
            }, function () {
                console.log("The get observable is now completed.");
            });
        });
    };
    BlankService.prototype.addUser = function (user) {
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
    BlankService.prototype.addcat = function (cat) {
        var _this = this;
        console.log(cat);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + 'addproductcategory', JSON.stringify(cat))
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
    BlankService.prototype.updateUser = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + 'Editproduct', JSON.stringify(user))
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
    BlankService.prototype.updatecat = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + 'Editproduct', JSON.stringify(user))
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
    BlankService.prototype.deleteUser = function (id) {
        return this.http.post(this.url + 'Deleteproduct', JSON.stringify({ id: id }));
    };
    BlankService.prototype.uploadimage = function (val) {
        console.log(val);
        return this.http.post("http://codefacetech.com/demo/gogars/Apis/upload.php", val, {
            reportProgress: true //, responseType: 'text'
        });
    };
    BlankService.prototype.onUpload = function (files) {
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
    BlankService.prototype.query = function (params) {
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
    BlankService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], BlankService);
    return BlankService;
}());



/***/ })

});
//# sourceMappingURL=blank.module.chunk.js.map