import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-product-s',
  templateUrl: './admin-product-s.component.html',
  styleUrls: ['./admin-product-s.component.css']
})
export class AdminProductSComponent implements OnInit {
  pid: any
  productS: any = {}

  constructor(private ar: ActivatedRoute, private ds: DataService, private router: Router) { }

  ngOnInit(): void {//step12
    this.ar.params.subscribe((data: any) => {
      // console.log(data.id);
      this.pid = data.id
      // console.log(this.pid);

    })

    //api call
    this.ds.getadminSproduct(this.pid).subscribe((result: any) => {
      // console.log(result);
      this.productS = result
      console.log(this.productS);


    })
  }
  //delete api request to button
  deleteProduct() {
    this.ds.deleteProduct(this.pid).subscribe((reult: any) => {
      alert("Product has be deleted")
      this.router.navigateByUrl('admin')
    })
  }
}
