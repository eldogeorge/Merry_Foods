import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private rout:Router,private ds:DataService,private fb:FormBuilder){}//Dependency Injection

  ngOnInit():void{
    // this.serviceData=this.ds.sdata
    // console.log(this.serviceData);
    // this.ds.smethod()
    
  }
  loginForm=this.fb.group({
    mno:['',[Validators.required,Validators.pattern('^(\s+\S+\s*)*(?!\s).*')]],
    psw:['',[Validators.required,Validators.pattern('^(\s+\S+\s*)*(?!\s).*')]],//google for more
  })
  login(){
    // console.log(a.value);    
    // alert('login clicked')

    // console.log(this.acno);
    // console.log(this.psw);
    //var path=this.loginForm.value
    var mno=this.loginForm.value.mno
    var psw=this.loginForm.value.psw
    if(this.loginForm.valid){
      this.ds.login(mno,psw).subscribe((result:any)=>{
        //to display/store in localStorage
        localStorage.setItem('currentUser',result.currentUser)
        localStorage.setItem('currentAcno',result.currentAcno)
        // localStorage.setItem('token',JSON.stringify(result.token))//token is mix data

        alert(result.message)
        console.log(result.message);
        
        this.rout.navigateByUrl('product')//Redirection  In Angular
  
      },
        result=>{
          alert(result.error.message)
        }
      )
    }
    else{
      alert("Invalid Form")
    }
   }

   logout(){
    localStorage.removeItem('currentAcno')
    localStorage.removeItem('currentUser')
    localStorage.removeItem('token')
    this.rout.navigateByUrl("")

  }
}
