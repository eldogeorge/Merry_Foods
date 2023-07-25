import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{

  id:any
  pdata:any={}
  constructor(private router:Router,private ar:ActivatedRoute,private ds:DataService){}

  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      // console.log(data);
      this.id=data.id
      console.log(this.id);   
    })
    this.ds.getSproduct(this.id).subscribe((result:any)=>{
      // console.log(result);
      this.pdata=result
      console.log(this.pdata);    
    })
  }
  editProduct(){
    this.ds.updateProduct(this.id,this.pdata).subscribe((result:any)=>{
      alert('Product has updated')
      // this.router.navigateByUrl('product/:id')
      this.router.navigateByUrl('admin')
    })
  }
}
