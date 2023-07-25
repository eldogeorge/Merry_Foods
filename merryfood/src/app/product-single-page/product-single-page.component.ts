import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-single-page',
  templateUrl: './product-single-page.component.html',
  styleUrls: ['./product-single-page.component.css']
})
export class ProductSinglePageComponent implements OnInit {
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
    this.ds.getSproduct(this.pid).subscribe((result: any) => {
      // console.log(result);
      this.productS = result
      console.log(this.productS);


    })
  }
}
