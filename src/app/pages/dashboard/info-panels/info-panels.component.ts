import { Component, OnInit,Input,ViewEncapsulation } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Dashboardservice } from '../dashboard.service'
import { Settings } from '../../../app.settings.model';
import { dashboarddata } from '../dashboard.data';

@Component({
  selector: 'app-info-panels',
  templateUrl: './info-panels.component.html',
  encapsulation: ViewEncapsulation.None
})
export class InfoPanelsComponent implements OnInit{
  @Input('ordercount') public ordercount:String;
  @Input('countcount') public countcount:String
  @Input('productcount') public productcount:String

  public sales = [{ name:'Total Order', value:this.ordercount}];
  public data:any = [];
  public salesBgColor = { domain: ['#2F3E9E'] };
  public likes = [{ name:'Total Product', value:this.productcount}];
  public likesBgColor = { domain: ['#D22E2E'] };

  public downloads = [{ name:'Total User', value:this.countcount }];
  public downloadsBgColor = { domain: ['#378D3B'] };

  public pendingorder = [{ name:'Pending Order', value:this.countcount }];
  public pendingorderBgColor = { domain: ['#FE9700'] };

  public infoLabelFormat(c): string {
    switch(c.data.name) {
      case 'Pending Order':
        return `<i class="fa fa-shopping-cart mr-2"></i>${c.label}`;
      case 'profit':
        return `<i class="fa fa-thumbs-o-up mr-2"></i>${c.label}`;
      case 'members':
        return `<i class="fa fa-download mr-2"></i>${c.label}`;
      case 'Total Order':
        return `<i class="fa fa-money mr-2"></i>${c.label}`;
      case 'Total Product':
        return `<i class="fa fa-comment-o mr-2"></i>${c.label}`;
      case 'Total User':
        return `<i class="fa fa-user mr-2"></i>${c.label}`;
      default:
        return c.label;
    }
  }

  ngOnInit() {     
  }

  public infoValueFormat(c): string {
    switch(c.data.extra ? c.data.extra.format : '') {
      case 'currency':
        return `\$${Math.round(c.value).toLocaleString()}`;
      case 'percent':
        return `${Math.round(c.value * 100)}%`;
      default:
        return c.value.toLocaleString();
    }
  }

  public previousShowMenuOption:boolean;
  public previousMenuOption:string;
  public previousMenuTypeOption:string;
  public settings: Settings;
  constructor(public appSettings:AppSettings,public dashservice:Dashboardservice) {    
    this.settings = this.appSettings.settings;
    this.initPreviousSettings();
    this.dashservice.getOrderCount().then( users => {console.log(users);
      this.data =users;
      this.sales = [{ name:'Total Order', value:this.data.details.oredercount}];
      this.downloads = [{ name:'Total User', value:this.data.details.usercount }];
      this.likes = [{ name:'Total Product', value:this.data.details.productcount }];
      this.pendingorder = [{ name:'Pending Order', value:this.data.details.pendingorder }];
    }); 
  }

  public onSelect(event) {
    console.log(event);
  }



  public ngDoCheck() {
    if(this.checkAppSettingsChanges()) {
      setTimeout(() => this.sales = [...this.sales] ); 
      setTimeout(() => this.likes = [...this.likes] ); 
      setTimeout(() => this.downloads = [...this.downloads] ); 
      //setTimeout(() => this.profit = [...this.profit] ); 
      //setTimeout(() => this.messages = [...this.messages] ); 
      //setTimeout(() => this.members = [...this.members] ); 
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
