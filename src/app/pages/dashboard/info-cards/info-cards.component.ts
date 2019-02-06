import { Component, ViewEncapsulation } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { Dashboardservice } from '../dashboard.service'
import { orders, products, customers, refunds } from '../dashboard.data';

@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  encapsulation: ViewEncapsulation.None
})
export class InfoCardsComponent  {
  public orders: any[] =[];
  public data: any;
  public listChart:any[];
  public products: any[]= [];
  public customers: any[];
  public refunds: any[];

  public colorScheme = {
    domain: ['#FFFFFF']
  }; 
  public autoScale = true;
  
  public previousShowMenuOption:boolean;
  public previousMenuOption:string;
  public previousMenuTypeOption:string;
  public settings: Settings;
  constructor(public appSettings:AppSettings,public dashservice:Dashboardservice) {
    this.settings = this.appSettings.settings;
    this.dashservice.gettrent().then( users => {console.log(users);
      this.data  =  users;
      this.orders =this.buildchart(this.data.details.ordertrent);
    
      //console.log("<<<<< service>>>>>>");
      //console.log(this.orders);
      this.products = this.buildbarchart(this.data.details.usertrent);
      //console.log("<<<<< service >>>>>>");
      //console.log(this.customers);

    }); 
    this.initPreviousSettings(); 
  }

  ngOnInit(){
    //this.orders = orders;
    //this.products = [];
    //this.customers = customers;
    //this.refunds = refunds;
    //this.orders = this.addRandomValue('orders');   
    //console.log("<<<<< >>>>>>");
    //console.log(this.orders);
    //this.customers = this.addRandomValue('customers');
    //console.log("<<<<< >>>>>>");
    //console.log(this.customers);
  }
  
  public onSelect(event) {
    console.log(event);
  }

  public buildchart(datalist){
      for (let i = 1; i < datalist.length; i++) { 
        orders[0].series.push({"name": this.monthName(datalist[i].name), "value": parseInt(datalist[i].value)});
      } 
      return orders;
  }

  public buildbarchart(datalist){
      
      for (let i = 0; i < datalist.length; i++) { 
        products.push({"name": this.monthName(datalist[i].name), "value": parseInt(datalist[i].value)});
      } 
      return products;
  }
  public monthName(monthcount){
    var monthname = "";
    switch(monthcount){
      case "1" : monthname = "Jan";break;
      case "2" : monthname = "Fed";break;
      case "3" : monthname = "Mar";break;
      case "4" : monthname = "Apr";break;
      case "5" : monthname = "May";break;
      case "6" : monthname = "Jun";break;
      case "7" : monthname = "Jul";break;
      case "8" : monthname = "Aug";break;
      case "9" : monthname = "Sep";break;
      case "10" : monthname = "Oct";break;
      case "11" : monthname = "Nov";break;
      case "12" : monthname = "Dec";break;
    }
    return monthname;
  }

  ngOnDestroy(){
    this.orders[0].series.length = 0;
    //this.customers[0].series.length = 0;
  }

  public ngDoCheck() {
    if(this.checkAppSettingsChanges()) {
      setTimeout(() => this.orders = [...orders] ); 
      setTimeout(() => this.products = [...products] ); 
      setTimeout(() => this.customers = [...customers] ); 
      setTimeout(() => this.refunds = [...refunds] ); 
      this.initPreviousSettings();
    }
  }

  public checkAppSettingsChanges(){
    if(this.previousShowMenuOption != this.settings.theme.showMenu ||
      this.previousMenuOption != this.settings.theme.menu ||
      this.previousMenuTypeOption != this.settings.theme.menuType){
      return true;
    }
    return false;
  }

  public initPreviousSettings(){
    this.previousShowMenuOption = this.settings.theme.showMenu;
    this.previousMenuOption = this.settings.theme.menu;
    this.previousMenuTypeOption = this.settings.theme.menuType;
  }

}
