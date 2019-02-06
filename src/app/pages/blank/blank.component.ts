import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { User, userRole,ProductAssignee,UserProfile, UserWork, UserContacts, UserSocial, UserSettings,uploaddata,Getproductcategory } from './blank.model';
import { BlankService } from './blank.service';
import { MenuService } from '../../theme/components/menu/menu.service';
import { FileUploader } from 'ng2-file-upload';
import {Location} from '@angular/common';
import { ngfModule, ngf } from 'angular-file';
import { HttpClient, HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http'
import { Subscription } from 'rxjs'
const URL= "http://codefacetech.com/demo/gogars/Apis/index.php/upload/.php";
@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ BlankService, MenuService ]
})
export class BlankComponent implements OnInit {
  accept = '*'
  files:File[] = []
  
  url = 'https://evening-anchorage-3159.herokuapp.com/api/'
  imgurl='http://codefacetech.com/demo/gogars/Apis/Images/'
 
  httpEmitter:Subscription
  public httpEvent:HttpEvent<Event>
  lastFileAt:Date
  imagearr:any='';
  sendableFormData:FormData//populated via ngfFormData directive
  public urls = [];
  //myFormData: FormData
  public progress:number
  public catid : string;
  public subcatId : string;
  public stageId:string;
  public useriteration:any;
  public userdata:any=[];
  public productList:ProductAssignee=new ProductAssignee();
  public editableimages:any='';
  public userdatafull:any=[];
  public cat_datafull:any=[];
  public menuItems:Array<any>;  
  public users: User[];
  public user: User;
  public cat:Getproductcategory;
  public productcatefull:any=[];
  public productcate:Getproductcategory[];
  public searchText: string;
  public userRole:userRole[];
  public p:any;
  public type:string = 'grid';
  public modalRef: NgbModalRef;
  public form:FormGroup;    // form for add product
  public catform:FormGroup; // form for add category
  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
  imagedata:any=[];
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
 
  public menuSelectSettings: IMultiSelectSettings = {
      enableSearch: true,
      checkedStyle: 'fontawesome',
      buttonClasses: 'btn btn-secondary btn-block',
      dynamicTitleMaxItems: 0,
      displayAllSelectedText: true,
      showCheckAll: true,
      showUncheckAll: true
  };

  
  public menuSelectTexts: IMultiSelectTexts = {
      checkAll: 'Select all',
      uncheckAll: 'Unselect all',
      checked: 'menu item selected',
      checkedPlural: 'menu items selected',
      searchPlaceholder: 'Find User type...',
      defaultTitle: 'Multiple select Assign',
      allSelected: 'All selected',
  };
  public menuSelectOptions: IMultiSelectOption[] = [];
  
  constructor(public fb:FormBuilder, 
    public router:Router,
    public route:ActivatedRoute,
              public toastrService: ToastrService,
              public membershipService:BlankService,
              public menuService:MenuService, 
              private _location: Location,
              public modalService: NgbModal,public http:HttpClient,public HttpClient:HttpClient) {
                
                this.menuSelectOptions=[];
   
  }

  ngOnInit() {
    this.route
    .queryParams
    .subscribe(params => {
      console.log(params)
      // Defaults to 0 if no query param provided.
      this.cat_datafull = JSON.parse(params['users']);
      this.catid = this.cat_datafull.catid;
      this.subcatId = this.cat_datafull.subcatId;
      this.stageId = this.cat_datafull.stageid;
      console.log(this.cat_datafull)
      
    });
    this.form = this.fb.group({
        id: null,
        Productname:null,
        productId:[null, Validators.compose([Validators.required])],
        price:[null],
        size:[null],
        category: [this.cat_datafull.maincat, Validators.compose([Validators.required])],
        subcategory:[this.cat_datafull.subcat, Validators.compose([Validators.required])],
        stage:[this.cat_datafull.stageid],
        highlights: [null, Validators.compose([Validators.required])],
        image:null,
        Images: null,
        DiscountName:null,
        assignee: [null],
        color: [null],
        DiscountAmount:null,
        settings: this.fb.group({
          isActive: null,
          isDeleted: null,
          registrationDate: null,
          joinedDate: null
        }),
      
    });
    this.catform=this.fb.group({
      Productname:[null, Validators.compose([Validators.required])],
      image:null,
      Images: null,

    })   ;
    this.getUsers(); 
    this.getproductcategory();
    this.getUserRole();
  }
  backClicked() {
    this._location.back();
}
  cancel(){
    this.progress = 0
    if( this.httpEmitter ){
      console.log('cancelled')
      this.httpEmitter.unsubscribe()
    }
  }
 
  uploadFiles(files:File[],images){
    console.log(images.join());   
  
  }
  goviewpage(Item){
    this.router.navigate(['/pages/ui/components'], { queryParams: { usersid: Item } });
  }
  getDate(){
  console.log(this.files);
    return new Date()
  }
  onSelectFile(event) {
    console.log(event);
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event) => {
                this.imagedata = event.target 
                   this.urls.push(this.imagedata.result); 
                }

                reader.readAsDataURL(event.target.files[i]);
        }
    }

  }
  getItems(ev) {
    console.log(ev);
    let val = ev.target.value;
    if (!val || !val.trim()) {

    }
    this.users = this.membershipService.query({
      name: val
    });
    console.log(this.users);
  }
 
  removeimage(i){
    this.urls.splice(i, 1); 
       
  }
  onUpload(){
    const formData: any = new FormData();
    console.log(this.urls);
  //  const files23: Array<File> = files;
    formData.append('files',this.urls , this.urls);
        this.http.post('http://codefacetech.com/demo/gogars/Apis/upload.php', formData,{
          reportProgress: true,
          observe: 'events'
        })
          .subscribe(event => {
            console.log(event); // handle event here
          });
  }
  public getUsers(): void {
    this.membershipService.getStageProduct(this.stageId).then( users => {console.log(users);
      this.userdatafull = users;
      for(var i=0; i<this.userdatafull.details.length; i++){
        var roles = (this.userdatafull.details[i].assignee != null) ? this.userdatafull.details[i].assignee.split(","): [];
        this.userdatafull.details[i].assignee = roles;
      }
      console.log(users);
      this.users = this.userdatafull.details;
    }
      
    );    
  } 
  public getproductcategory(): void {
    this.membershipService.getproductcat().subscribe( users => {console.log(users);
      this.productcatefull =users;
      this.productcate = this.productcatefull.details;}
      
    );    
  }
  public getUserRole():void{
    this.membershipService.getUserRoles().then((result) => {
      this.userdata = result;
      if (this.userdata.result == true) {
        this.userRole = this.userdata.details;
        for(var i=0;i<this.userRole.length;i++){
          this.menuSelectOptions.push({id:this.userRole[i].id,name:this.userRole[i].rolename})
        }
      }
      else {   
      }

  }, (err) => {
     
  });
  }

  public onchangeAssignee(event,userid){
      this.productList.productid = userid;
      var rolelist = "";
      for(var i=0;i<event.length;i++)
        rolelist+= event[i]+"-"
      this.productList.role = rolelist.replace(/-\s*$/, "");
      this.assigneProduct(this.productList);
  }

  public assigneProduct(productAss:ProductAssignee):void{
    this.membershipService.productAssign(productAss).then((result) => {
      this.userdata = result;
      if (this.userdata.result == true) {
        console.log("<<<< assigned success fully");
      }
      else {   
      }

  }, (err) => {
     
  });
  }
 

  public addUser(user:User){
    
    if(this.files.length!=0){
    this.membershipService.uploadimage(this.sendableFormData).subscribe((result) => {
      console.log(result);
      this.imagearr = result; 
      user.Images=this.imagearr;
      user.catid =this.catid;
      user.subcatid = this.subcatId;
      console.log(user.Images);
      this.membershipService.addUser(user).then(user => {
        this.userdata = user;
        if (this.userdata.result == true) {
          this.getUsers();           
          
        }
        else {
            
        }
      });   
     }, (err) => {
     
     });
    }else{
      this.membershipService.addUser(user).then(user => {
        this.userdata = user;
        if (this.userdata.result == true) {
          this.getUsers();           
          
        }
        else {
            
        }
      });
    }
   
  }
  public addcat(cat:Getproductcategory){
    if(this.files.length!=0){
    this.membershipService.uploadimage(this.sendableFormData).subscribe((result) => {
      console.log(result);
      this.imagearr = result; 
      cat.Images=this.imagearr;
      console.log(cat.Images);
      this.membershipService.addcat(cat).then(user => {
      
        this.userdata = user;
        if (this.userdata.result == true) {
          this.getUsers();           
          
        }
        else {
            
        }
      });   
     }, (err) => {
     
     });
    }else{
      this.membershipService.addcat(cat).then(user => {
        this.userdata = user;
        if (this.userdata.result == true) {
          this.getUsers();           
          
        }
        else {
            
        }
      });
    }
   
  }
  
  public updatecat(user:Getproductcategory,userimages){
    console.log(this.files);
if(this.files.length!=0){
    this.membershipService.uploadimage(this.sendableFormData).subscribe((result) => {
      console.log(result);
     if(userimages!=''){
      this.imagearr =userimages.join()+','+result;
     }else{
      this.imagearr = result;
     }
      
      console.log(this.imagearr);
      this.form.controls['Images'].setValue(this.imagearr);
      user.Images=this.imagearr;
      console.log(user);
      this.membershipService.updatecat(user).then(user => {
        this.getUsers();      
      });   
     }, (err) => {
     
     });
  
  }else{
    this.imagearr =userimages.join();
    user.Images=this.imagearr;
    this.membershipService.updatecat(user).then(user => {
      this.getUsers();      
    },  
    (err) => {
   
   });
  }
}
  public updateUser(user:User,userimages){
    user.subcatid = this.subcatId;
    user.catid = this.catid;
    console.log(this.files);
    if(this.files.length!=0){
    this.membershipService.uploadimage(this.sendableFormData).subscribe((result) => {
      console.log(result);
     if(userimages!=''){
      this.imagearr =userimages.join()+','+result;
     }else{
      this.imagearr = result;
     }
      
      console.log(this.imagearr);
      this.form.controls['Images'].setValue(this.imagearr);
      user.Images=this.imagearr;
      console.log(user);
      this.membershipService.updateUser(user).then(user => {
        this.getUsers();      
      });   
     }, (err) => {
     
     });
  
  }else{
    this.imagearr =userimages.join();
    user.Images=this.imagearr;
    this.membershipService.updateUser(user).then(user => {
      this.getUsers();      
    },  
    (err) => {
   
   });
  }
}
  public deleteUser(user:User){
    this.membershipService.deleteUser(user.id).subscribe(result => 
      this.getUsers()
    );
  }

  public toggle(type){
    this.type = type;
  }

  public openMenuAssign(event){
    let parent = event.target.parentNode;
    while (parent){
      parent = parent.parentNode;
      if(parent.classList.contains('content')){
        parent.classList.add('flipped');
        parent.parentNode.parentNode.classList.add('z-index-1');
        break;
      }
    }
  }

  public closeMenuAssign(event){
    let parent = event.target.parentNode;
    while (parent){
      parent = parent.parentNode;
      if(parent.classList.contains('content')){
        parent.classList.remove('flipped');
        parent.parentNode.parentNode.classList.remove('z-index-1');
        break;
      }
    }
  }

  public assignMenuItemsToUser(user){  
    this.updateUser(user,user);
    sessionStorage.setItem('userMenuItems', JSON.stringify(user.menuIds));
    this.toastrService.success('Please, logout and login to see result.', 'Successfully assigned !');
  }

  public openModal(modalContent, user) {
    console.log(user);
    this.files=[];
    if(user){
      console.log("<<<< edit produuct"); 
      this.user = user;
      this.form.setValue(user);    
      //this.files=user.Images;
      console.log(this.files);
    } 
    else{
      this.user = new User(); 
      console.log("<<<< new produuct"); 
      console.log( this.user) 
      this.files=[];
      this.user.Images=[];    
      this.user.settings = new UserSettings();
    }   
    this.modalRef = this.modalService.open(modalContent, { container: '.app' });
    
    this.modalRef.result.then((result) => {
      this.form.reset();
    
    }, (reason) => {
      this.form.reset();
   
    });
  }
  public openModal1(modalContent, user) {
    console.log(user);
    if(user){
      this.cat = user;
      this.catform.setValue(user);    
     // this.files=user.Images;
      console.log(this.files);
    } 
    else{
      this.cat = new Getproductcategory();
      console.log( this.cat)    
     
    }   
    this.modalRef = this.modalService.open(modalContent, { container: '.app' });
    
    this.modalRef.result.then((result) => {
      this.catform.reset();
    
    }, (reason) => {
      this.catform.reset();
   
    });
  }
  public closeModal(){
    this.modalRef.close();
  }
  public openModal2(modalContent, user) {
    console.log(user);
    if(user){
      this.cat = user;
      this.catform.setValue(user);    
     // this.files=user.Images;
      console.log(this.files);
    } 
    else{
      this.cat = new Getproductcategory();
      console.log( this.cat)    
     
    }   
    this.modalRef = this.modalService.open(modalContent, { container: '.app' });
    
    this.modalRef.result.then((result) => {
      this.catform.reset();
    
    }, (reason) => {
      this.catform.reset();
   
    });
  }
  
  public onSubmit(user:User):void {
    if (this.form.valid) {
      if(user.id){
        
        this.updateUser(user,user.Images);
      }
      else{
        this.addUser(user);
      }      
      this.modalRef.close();    
    }
  } 
  public onSubmit1(cat:Getproductcategory):void {
    if (this.catform.valid) {
      if(cat.Id){
        this.updatecat(cat,cat.Images);
      }
      else{
        this.addcat(cat);
      }      
      this.modalRef.close();    
    }
  } 
}
