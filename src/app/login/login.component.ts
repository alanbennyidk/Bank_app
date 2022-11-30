import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="your perfect banking partner"
  account="enter your account here"

  
  acno=''
  pswd=''


  userDetails:any={
    1000:{acno:1000,username:"arun",password:123,balance:1000},
    1001:{acno:1001,username:"amal",password:123,balance:1000},
    1002:{acno:1002,username:"anil",password:123,balance:1000},

  }

  constructor() { }

  ngOnInit(): void {
  }

  acnoChange(event:any)
  {
    console.log(event);
    this.acno=event.target.value;
    console.log(this.acno);
    
  }
  pswdChange(event:any)
  {
    console.log(event);
    this.pswd=event.target.value;
    console.log(this.pswd);
    
  }
  // login(a:any,p:any){               //evnt binding using template refference variable
  //   //alert('login clicked')
  //   var acno=a.value;                  //                   ||
  //   var pswd=a.value;                  //                   ||
  //   var userDetails=this.userDetails;

  //   if(acno in userDetails){
  //     if(pswd==userDetails[acno]['password']){
  //       alert('Login successful')
  //     }
  //     else{
  //       alert('Invalid password')
  //     }
  //   }
  //   else{
  //     alert('Invalid userdetails')
  //   }
  // }
  login(){
    //alert('login clicked')
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.userDetails;

    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        alert('Login successful')
      }
      else{
        alert('Invalid password')
      }
    }
    else{
      alert('Invalid userdetails')
    }
  }

}
