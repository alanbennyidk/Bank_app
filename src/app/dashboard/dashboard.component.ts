import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //deposiit properties
  acno = "";
  pswd = "";
  amount = "";

  //withdraw properties
  acno1 = "";
  pswd1 = "";
  amount1 = "";

  //currentuser properties
  user = "";

  //system date
  //sdate:any;

  //deposit model
  depositForm = this.fb.group({//group

    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],//array
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  })

  //withdraw model
  withdrawForm = this.fb.group({//group

    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],//array
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  })

  //control pass to ts to html file        
  constructor(private ds: DataService, private fb: FormBuilder,private router:Router) {
    if(localStorage.getItem('currentUser')){
      this.user = JSON.parse(localStorage.getItem('currentUser')||'');
    }
    //this.sdate=new Date()
  }

  ngOnInit(): void {
    if(!localStorage.getItem('currentUser')){
      alert('Please login first')
      this.router.navigateByUrl('');
    }
    // this.user=JSON.parse(localStorage.getItem('currentUser')||'');
    // console.log(this.user);
  }

  deposit() {
    // alert('clicked')
    var acno = this.depositForm.value.acno;
    var pswd = this.depositForm.value.pswd;
    var amount = this.depositForm.value.amount;
    if(this.depositForm.valid){
    this.ds.deposit(acno, pswd, amount)
    .subscribe((result:any)=>{
    alert(result.message) 
    },
    result=>{
    alert(result.error.message)
    })
  }}

  withdraw() {
    //alert('clicked')
    var acno = this.withdrawForm.value.acno;
    var pswd = this.withdrawForm.value.pswd;
    var amount = this.withdrawForm.value.amount;

    if(this.depositForm.valid){
      this.ds.withdraw(acno, pswd, amount)
      .subscribe((result:any)=>{
      alert(result.message) 
      },
      result=>{
      alert(result.error.message)
      })
  }
  }

  logout(){
    //alert('clicked');
    //remove currentAcno and currentUser from localstorage
    localStorage.removeItem('currentAcno')
    localStorage.removeItem('currentUser')
    localStorage.removeItem('token')
    this.router.navigateByUrl('')
  }
  delete(){
    //alert('clicked');
    this.acno=JSON.parse(localStorage.getItem('currentAcno') || '');
  }
  onCancel(){
    this.acno="";
  }
  onDelete(event:any){
    //alert(event)//1000
    this.ds.deleteAcc(event)
    .subscribe((result:any)=>{
      alert(result.message)
      //this.router.navigateByUrl('');
      this.logout();
    },
    result=>{
      alert(result.error.message)
    }
    )
    }
    }
