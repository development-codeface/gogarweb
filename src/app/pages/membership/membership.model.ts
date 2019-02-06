export class User {
  id: number;
  username: string;
  password: string;
  profile: UserProfile;
  work: UserWork;
  contacts: UserContacts;
  social: UserSocial;
  settings: UserSettings;
  menuIds: number[];//  =>   for create ngModel multiselect
}
export class category {
  Executive: categorydetails;
  Representative: categorydetails;
  Wholesaler: categorydetails;
  Semisales: categorydetails;

}
export class UserProfile {
  name: string;
  surname: string;
  image: string;
}

export class UserWork {
  company: string;
  position: string;
  Representative: number;
  Executive: number;
  Wholesaler: number;
  Semiwholesaler: number;
  salary: number;
}

export class UserContacts {
  email: string;
  phone: string;
  address: string;
}

export class UserSocial {
  facebook: string;
  twitter: string;
  google: string;
}

export class UserSettings {
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
  joinedDate: Date;
}

export class categorydetails {
  userId: number;
  firstname: string;
  lastname: string;
}
export class userRole{
  id:number;
  rolename:string;
}
