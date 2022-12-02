import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="your perfect banking partner"
  account="Enter Account Number"

  
  acno=''
  pswd=''


  constructor(private ds:DataService,private router:Router) { }

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
    var userDetails=this.ds.userDetails;

    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        alert('Login successful')
        this.router.navigateByUrl('dashboard')
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
