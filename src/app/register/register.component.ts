import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname="";
  acno="";
  pswd="";

  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) { }

    //registration model
    registerForm=this.fb.group({//group
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],//array
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
    })

    //control pass to ts to html file
  ngOnInit(): void {
  }
  register(){

    console.log(this.registerForm); //value   
    
    var username=this.registerForm.value.uname;
    var password=this.registerForm.value.pswd;
    var acno=this.registerForm.value.acno;
    if(this.registerForm.valid){

    //console.log(this.registerForm.get('uname')?.errors); //valid or not
    this.ds.register(acno,username,password)
    .subscribe((result:any)=>{
      alert(result.message);
      this.router.navigateByUrl('')
    },
    result=>{
      alert(result.error.message)
    })
  }
}}

