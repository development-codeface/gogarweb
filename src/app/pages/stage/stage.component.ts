import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SubCategoryService } from './subcat.service';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings,uploaddata,Getproductcategory,AddStage } from './subcat.model';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

import {Location} from '@angular/common';
@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ SubCategoryService]
})
export class StageComponent implements OnInit {
public cat_datafull: any = [];
public modalRef: NgbModalRef;
public userdata:any=[];
public form:FormGroup;    // form for add product
public catform:FormGroup; // form for add category
public cat:Getproductcategory;
public stage : AddStage;

constructor(
  public fb:FormBuilder, 
  public route: ActivatedRoute, 
  public router: Router,
  public membershipService:SubCategoryService,
  private _location: Location,
  public modalService: NgbModal) { }
  ngOnInit() {
    this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.cat_datafull = JSON.parse(params['users']);
      this.catform=this.fb.group({
          Id:null,
          stagename:[null, Validators.compose([Validators.required])],
          subCatiId:this.cat_datafull.Id,
          stageid: "",
          catID: this.cat_datafull.Id
      });
      
      console.log(this.cat_datafull);      
    });
  }
  Gostage(val) {
    const Item = {
        stage: val.stagename,
        stageid:val.stageid,
        subcat: this.cat_datafull.Productname,
        maincat: this.cat_datafull.Catname,
        catid : this.cat_datafull.CatId,
        subcatId: this.cat_datafull.Id,
        stagelist : this.cat_datafull.stage
    }
    console.log(Item);
    this.router.navigate(['/pages/blank'], { queryParams: { users: JSON.stringify(Item) } });
  }
  backClicked() {
    this._location.back();
  }
  public openModal1(modalContent, user) {
    console.log(user);
    if(user){
      this.cat = new Getproductcategory();
      this.cat.Id = user.stageid;
      this.cat.Productname = user.stagename;
      this.cat.CatId = this.cat_datafull.Id;  
      this.catform.setValue ({ Id:null,subCatiId : this.cat_datafull.Id, stagename : user.stagename,catID: this.cat_datafull.Id,stageid: user.stageid}); 
    } 
    else{
      this.cat = new Getproductcategory();

      console.log( this.cat)    
    }   
    this.modalRef = this.modalService.open(modalContent, { container: '.app' });
    
    this.modalRef.result.then((result) => {
      this.catform.reset();
      this.catform = this.fb.group({
          Id:null,
          stagename:[null, Validators.compose([Validators.required])],
          subCatiId:this.cat_datafull.Id,
          stageid: "",
          catID: this.cat_datafull.Id
      });
    
    }, (reason) => {
      this.catform.reset();
      this.catform = this.fb.group({
          Id:null,
          stagename:[null, Validators.compose([Validators.required])],
          subCatiId:this.cat_datafull.Id,
          stageid: "",
          catID: this.cat_datafull.Id
      });
   
    });
  }
  public closeModal(){
    this.modalRef.close();
  }

  public onSubmit1(cat:AddStage):void {
    if (this.catform.valid) {
      if(cat.stageid){
        console.log("good to go !!!!");
        this.invokeEditStageName(cat);
      }
      else{
        this.addStage(cat);
      }      
      this.modalRef.close();    
    }
  } 
  public addStage(cat:AddStage){
      
      console.log(cat);
      this.membershipService.addstage(cat).then(user => {
        this.userdata = user;
        if (this.userdata.result == true) {  
          console.log(this.userdata);  
          this.updateStageData();     
        }
        else {
            console.log("<<< Add service got failed");
        }
      });
  }
  public invokeEditStageName(cat:AddStage){
      this.membershipService.editStageName(cat).then(user => {
        this.userdata = user;
        if (this.userdata.result == true) {  
          console.log(this.userdata);  
          this.updateStageData();     
        }
        else {
            console.log("<<< edit service got failed");
        }
      });
  }
  public updateStageData(){
    console.log("<<<update stage data >>>");
    console.log(this.cat_datafull);
     var stageList = [];
     for (let stageEntry of this.userdata.details) {
        var stageItem:AddStage = new AddStage();
        stageItem.stageid  = stageEntry.stageid;
        stageItem.stagename= stageEntry.stagename;
        stageList.push(stageItem);
      }
      this.cat_datafull.stage = stageList;
      console.log(this.cat_datafull);
  }
  public deletestage(user){
      if(user){
        var stage= new AddStage();
        stage.stageid = user.stageid;
        stage.catID   =  this.cat_datafull.Id; 
        this.catform.setValue ({ Id:null,subCatiId : this.cat_datafull.Id, stagename : user.stagename,catID: this.cat_datafull.Id,stageid: user.stageid}); 
        this.invokedeletestage(stage);
      }
  }

  public invokedeletestage(stage:AddStage){
      console.log(stage);
      this.membershipService.deleteStage(stage).then(user => {
        this.userdata = user;
        if (this.userdata.result == true) {  
          console.log(this.userdata);  
          this.updateStageData();     
        }
        else {
            console.log("<<< Add service got failed");
        }
      });
  }

} 
