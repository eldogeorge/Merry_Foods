import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-resigter',
  templateUrl: './resigter.component.html',
  styleUrls: ['./resigter.component.css']
})
export class ResigterComponent implements OnInit{

  pswCheck:boolean=false
  constructor(private rout:Router,private http:HttpClient,private ds:DataService,private fb:FormBuilder ){}

  ngOnInit(): void {
    
  }

  //reactive model for resgister
  registerForm=this.fb.group({
    mno:['',[Validators.required,Validators.pattern('^(\s+\S+\s*)*(?!\s).*')]],
    uname:['',[Validators.required,Validators.pattern('^(\s+\S+\s*)*(?!\s).*')]],
    address:['',[Validators.required,Validators.pattern('^(\s+\S+\s*)*(?!\s).*')]],
    email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]],//google for more
    cpsw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })



  signup(){
    //ngmodel method
    // var acno=this.ano
    // var uname=this.uname
    // var psw=this.ps
    // var cpsw=this.cps

    var path=this.registerForm.value
    var mno=path.mno//var acno=this.resgisterForm.value
    var uname=path.uname
    var address=path.address
    var email=path.email
    var psw=path.psw
    var cpsw=path.cpsw
    if(this.registerForm.valid){
      if(psw==cpsw){
        this.ds.register(mno,uname,address,email,psw).subscribe((result:any)=>{
          alert(result.message)
          this.rout.navigateByUrl('loginPage')//Redirection  In Angular  
        },
          result =>{
            alert(result.error.message)
          }
        )  
      }
      else{
        this.pswCheck=true
        // alert('password doesnt match')
      }
    }
    else{
      alert('Invalid Form')
    }
  }
}  

