import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  pid: any
  wishlist: any = {}
  date: any

  constructor(private ar: ActivatedRoute, private ds: DataService,private rout:Router) { }
  ngOnInit(): void {

    this.ar.params.subscribe((data: any) => {
      // console.log(data.id);
      this.pid = data.id
      // console.log(this.pid);

    })

    this.ds.getfav(this.pid).subscribe((result: any) => {
      // console.log(result);
      this.wishlist = result
      console.log(this.wishlist);


    })

    this.date = new Date()
    console.log(this.date);

  }
  // backtoorder() {
  //   alert("Payment Successfully")
  // }
  logout() {
    localStorage.removeItem('currentAcno')
    localStorage.removeItem('currentUser')
    localStorage.removeItem('token')
    alert('Logout Successfully')
    this.rout.navigateByUrl('product')
  }
}
