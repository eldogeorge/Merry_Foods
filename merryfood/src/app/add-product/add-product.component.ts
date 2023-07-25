import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  constructor(private fb:FormBuilder, private ds:DataService, private router:Router){}

  ngOnInit(): void {
    
  }

  // addForm=this.fb.group({
  //   pid:['',[Validators.required,Validators.pattern('^(\s+\S+\s*)*(?!\s).*')]],
  //   pname:['',[Validators.required,Validators.pattern('^(\s+\S+\s*)*(?!\s).*')]],
  //   address:['',[Validators.required,Validators.pattern('^(\s+\S+\s*)*(?!\s).*')]],
  //   email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  //   psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]],//google for more
  //   cpsw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  // })
  
  addForm=this.fb.group({//formstep3
    pid:[''],
    pname:[''],
    pcatid:[''],
    pdes:[''],
    pprice:[''],
    pav:[''],
    pimg:[''],
    preview:['']
  })

  add(){//formstep7 down
    // var path=this.addForm.value
    // var pid=path.pid//var acno=this.resgisterForm.value
    // var pname=path.pname
    // var address=path.address
    // var email=path.email
    // var psw=path.psw
    // var cpsw=path.cpsw
  
    var path=this.addForm.value
    var prodData={
      id: path.pid,
      productName: path.pname,
      categoryId: path.pcatid,
      description: path.pdes,
      price: path.pprice,
      is_avaible: path.pav,
      productImg: path.pimg,
      review: path.preview,
    }
    if(this.addForm.valid){    
      this.ds.addProduct(prodData).subscribe((result:any)=>{//formstep9
      alert("Product Added")
      this.router.navigateByUrl("admin")//formstep11
    })}

  }
}
