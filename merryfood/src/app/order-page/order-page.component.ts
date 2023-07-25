import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent  implements OnInit{
  pid: any
  order: any={}
  date: any

  constructor(private rout:Router,private ar:ActivatedRoute,private ds:DataService){}

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      // console.log(data.id);
      this.pid = data.id
      // console.log(this.pid);

    })

    this.ds.getorder(this.pid).subscribe((result: any) => {
      // console.log(result);
      this.order = result
      console.log(this.order);


    })

    this.date=new Date()
    console.log(this.date);
    
  }
  orderpayment(){
    alert("Order Successfully")
  }
  logout(){
    localStorage.removeItem('currentAcno')
    localStorage.removeItem('currentUser')
    localStorage.removeItem('token')
    alert('You are Logout')
    this.rout.navigateByUrl('product')

  }
}
