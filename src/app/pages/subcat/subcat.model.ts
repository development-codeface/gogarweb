import { Settings } from "../../app.settings.model";

export class User {
  id: number;
  Productname: string;
  productId: string;  
  price: string;
  size: string;
  category: string;
  highlights: string;
  image:string;
  Images: object;
  DiscountName:string;
  DiscountAmount:string;
  color:string;
  settings:UserSettings;
}
export class uploaddata{
  name:object;
}
export class Getproductcategory{
  Id:number;
  Productname:string; 
  CatId:number
}
export class UserProfile {  
  name: string;
  surname: string;  
  birthday: Object;
  gender: string;
  image: string;
}

export class UserWork {
  company: string;
  position: string;
  salary: number;
}

export class UserContacts{
  email: string;
  phone: string;
  address: string;  
}

export class UserSocial {
  facebook: string;
  twitter: string;
  google: string;
}

export class UserSettings{
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
  joinedDate: Date;
}


