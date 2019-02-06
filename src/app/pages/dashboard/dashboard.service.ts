import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApproveOrder} from './dashboard.model';


@Injectable()
export class Dashboardservice {
    public url = "http://codefacetech.com/demo/gogars/Apis/index.php/";
    constructor(public http:HttpClient) { }
    public userdata:any=[];
    public userCount:String="0";
    public orderCount:String="0";
    public userdatafull:any=[];
    getUsers() {
        return new Promise((resolve, reject) => {
         
        this.http.get(this.url+'dashboard')
        .subscribe(
          (val) => {
            this.userdatafull=val;
            this.userdata=this.userdatafull.details;
            this.orderCount = this.userdatafull.ordercount;
            this.userCount = this.userdatafull.usercount;
              console.log("POST call successful value returned in body",
                          val);
                          resolve(val);
                                  },
          response => {
              console.log("POST call in error", response);
              reject(response);
          },
          () => {
              console.log("The POST observable is now completed.");
          });
        });
    }
    getOrderCount() {
        return new Promise((resolve, reject) => {
         
        this.http.get(this.url+'alldashboarcount')
        .subscribe(
          (val) => {
            resolve(val);
                                  },
          response => {
              console.log("POST call in error", response);
              reject(response);
          },
          () => {
              console.log("The POST observable is now completed.");
          });
        });
    }
    gettrent() {
        return new Promise((resolve, reject) => {
         
        this.http.get(this.url+'ordertrend')
        .subscribe(
          (val) => {
            resolve(val);
                                  },
          response => {
              console.log("POST call in error", response);
              reject(response);
          },
          () => {
              console.log("The POST observable is now completed.");
          });
        });
    }
    approveOrder(cat:ApproveOrder){
        console.log(cat);
      return new Promise((resolve, reject) => {
          this.http.post(this.url+'approveorder',JSON.stringify(cat))
        .subscribe(
          (val) => {
              console.log("POST call successful value returned in body",
                          val);
                          resolve(val);
                                  },
          response => {
              console.log("POST call in error", response);
              reject(response);
          },
          () => {
              console.log("The POST observable is now completed.");
          });
        });
    }

  
} 