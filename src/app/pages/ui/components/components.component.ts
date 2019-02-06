import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../membership/membership.model';
import { HttpClient } from '@angular/common/http';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import {Location} from '@angular/common';
@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComponentsComponent implements OnInit {
public userdatafull:any=[];
public response:any=[];
id:any='';

products:any=[];
public data = [];
public confirmOrder = [];
public settings = {
  selectMode: 'single',  //single|multi
  hideHeader: false,
  hideSubHeader: false,
  actions: {
    columnTitle: 'Actions',
    add: false,
    edit: false,
    delete: false,
    custom: [],
    position: 'right' // left|right
  },
  add: {     
    addButtonContent: '<h4 class="mb-1"><i class="fa fa-plus ml-3 text-success"></i></h4>',
    createButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
    cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
  },
  edit: {
    editButtonContent: '<i class="fa fa-pencil mr-3 text-primary"></i>',
    saveButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
    cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
  },
  delete: {
    deleteButtonContent: '<i class="fa fa-trash-o text-danger"></i>',
    confirmDelete: true
  },
  noDataMessage: 'No data found',
  columns: {     
    Id: {
      title: 'ID',
      editable: false,
      width: '60px',
      type: 'html',
      valuePrepareFunction: (value) => { return '<div class="text-center">' + value + '</div>'; }       
    },
    username: {
      title: 'User Name',
      type: 'string',
      filter: true
    },
    email: {
      title: 'email',
      type: 'string'
    },
    position: {
      title: 'User Role',
      type: 'string'
    },
    category: {
      title: 'Product Category',
      type: 'string'
    },
    price: {
      title: 'Price',
      type: 'number'
    },
    Productname: {
      title: 'Product Name',
      type: 'number'
    },
    size: {
      title: 'Size',
      type: 'number'
    },
    Quantity: {
      title: 'Qty',
      type: 'number'
    },
    approvedstatus :{
      title : "Order Status",
      type: 'html',
      valuePrepareFunction: (value) => { 
        var status = "Approved";
        if(value == "")
           status = "Pending";
        else if(value == "false")
           status = "Declined"
         return '<div class="text-center '+status+'">' + status + '</div>';} 
    }

  },
  pager: {
    display: true,
    perPage: 10
  }
};
public thirdControlModel: number[];
public thirdControlSettings: IMultiSelectSettings = {
  enableSearch: true,
  checkedStyle: 'checkboxes',
  buttonClasses: 'btn btn-secondary btn-block',
  dynamicTitleMaxItems: 3,
  displayAllSelectedText: true
};
public thirdControlTexts: IMultiSelectTexts = {
  checkAll: 'Select all',
  uncheckAll: 'Unselect all',
  checked: 'item selected',
  checkedPlural: 'items selected',
  searchPlaceholder: 'Find...',
  defaultTitle: 'Select countries using search filter',
  allSelected: 'All selected',
};
public thirdControlOptions: IMultiSelectOption[] = [
  { id: 1, name: 'Sweden'},
  { id: 2, name: 'Norway' },
  { id: 3, name: 'Canada' },
  { id: 4, name: 'USA' }
];
public url = "http://codefacetech.com/demo/gogars/Apis/index.php/";
imgurl= "http://codefacetech.com/demo/gogars/Apis/Images/";
constructor(private route: ActivatedRoute,public http:HttpClient,public _location:Location) { 
  /*this.getData((data) => {
    this.data = data;
  });*/
}
ngOnInit(): void {
    jQuery('.tt').tooltip();
    jQuery('.pp').popover();
  //   this.route.snapshot.paramMap.get('item');
  this.route
    .queryParams
    .subscribe(params => {
      console.log(params)
      this.getuserdetails(params['usersid']);
    });
}
backClicked() {
    this._location.back();
}
public getuserdetails(id){
  this.getUsers(id).subscribe( users => {
    this.response =users;
    this.userdatafull = this.response.details[0];
    this.data = this.userdatafull.orderlist; 
    this.confirmOrder = this.userdatafull.confirmlist
    }
  );
}
public getUsers(id){
  return this.http.get(this.url+'Getusersdetalis/'+id);
}

public getData(data) {
  const req = new XMLHttpRequest();
  req.open('GET', 'assets/data/users.json');
  req.onload = () => {
    data(JSON.parse(req.response));
  };
  req.send();
}

  public onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  public onRowSelect(event){
   // console.log(event);
  }

  public onUserRowSelect(event){
    //console.log(event);   //this select return only one page rows
  }

  public onRowHover(event){
    //console.log(event);
  }

}
