import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User,uploaddata,Getproductcategory,AddStage} from './subcat.model';

@Injectable()
export class SubCategoryService {
    public url = "http://codefacetech.com/demo/gogars/Apis/index.php/";
    constructor(public http:HttpClient) { }
    public userdata:any=[];
    public userdatafull:any=[];
   addstage(cat:AddStage){	    
      console.log(cat);
      return new Promise((resolve, reject) => {
          this.http.post(this.url+'addproductstage',JSON.stringify(cat))
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
             // return this.http.post(this.url, user);
    }
    editStageName(cat:AddStage){	    
      console.log(cat);
      return new Promise((resolve, reject) => {
          this.http.post(this.url+'editproductstage ',JSON.stringify(cat))
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
             // return this.http.post(this.url, user);
    }
    deleteStage(cat:AddStage){	    
      console.log(cat);
      return new Promise((resolve, reject) => {
          this.http.post(this.url+'deleteproductstage ',JSON.stringify(cat))
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
             // return this.http.post(this.url, user);
    }
    getUsers(productId) {
        return new Promise((resolve, reject) => {
        this.http.get(this.url+'Getproductsubcategory/'+productId)
        .subscribe(
          (val) => {
            this.userdatafull=val;
            this.userdata=this.userdatafull.details;

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

    getproductcat(): Observable<Getproductcategory[]>{
        return this.http.get<Getproductcategory[]>(this.url+'Getproductsubcategory/'+1);
    }

    addUser(user:User){	    
        console.log(user);
        return new Promise((resolve, reject) => {
            this.http.post(this.url+'AddProduct',JSON.stringify(user))
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
       // return this.http.post(this.url, user);
    }

    addcat(cat:Getproductcategory){	    
      console.log(cat);  
      return new Promise((resolve, reject) => {
          this.http.post(this.url+'addproductsubcategory',JSON.stringify(cat))
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
             // return this.http.post(this.url, user);
    }

    updateUser(user:User){
        return new Promise((resolve, reject) => {
        this.http.post(this.url+'Editproductsubcategory',JSON.stringify(user))
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
    updatecat(user:Getproductcategory){
      return new Promise((resolve, reject) => {
      this.http.post(this.url+'Editproductsubcategory',JSON.stringify(user))
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

    deleteUser(id: number) {  
        return this.http.post(this.url+'Deleteproduct',JSON.stringify({id:id}));
    }
    deletecat(id:number){
        return this.http.post(this.url+'Deleteproductsubcategory',JSON.stringify({id:id}));
    }
    uploadimage(val){
        console.log(val);
        return this.http.post("http://codefacetech.com/demo/gogars/Apis/upload.php",val, {
            reportProgress: true//, responseType: 'text'
          });
    }
    onUpload(files:uploaddata) {
        const formData: any = new FormData();
        formData.append('files',files , files.name);
        this.http.post('http://codefacetech.com/demo/gogars/Apis/upload.php', formData,{
          reportProgress: true,
          observe: 'events'
        })
          .subscribe(event => {
            console.log(event); // handle event here
          });
    }
    query(params?: any) {
        if (!params && params==undefined) {
        return this.userdata;
        }

        return this.userdata.filter((item) => {
            console.log(item)
            for (let key in params) {
                let field = item[key];

                console.log(params[key]);
                if(params[key]==undefined){
                return this.userdata;
                }else{
                    console.log('else');
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    console.log(item)
                    return item;
                } else if (field == params[key]) {
                    console.log(item)
                    return item;
                }
                }
            }
        });
  }

} 