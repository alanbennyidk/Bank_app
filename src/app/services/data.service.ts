import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  
  userDetails:any={
    1000:{acno:1000,username:"arun",password:123,balance:1000},
    1001:{acno:1001,username:"amal",password:123,balance:1000},
    1002:{acno:1002,username:"anil",password:123,balance:1000},

  }

  register(acno:any,username:any,password:any){
    let userDetails=this.userDetails;

    if(acno in userDetails){
      return false

    }
    else{
      userDetails[acno]={
        acno,
        username,
        password,
        balance:0
      }
      console.log(userDetails);
      return true
    }
  }
}
