import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//tstep5
//overloaded header
// const options={
//   headers:new HttpHeaders()
// }

@Injectable({
  providedIn: 'root'
})


export class DataService {
  //create behavior
  search = new BehaviorSubject("")

  constructor(private http: HttpClient) { }
  // getHeader(){//tstep3

  //   //to create header
  //   let headers=new HttpHeaders()

  //   //to add token using append
  //   let token=JSON.parse(localStorage.getItem("token") || "")//to avoid error || empty string
  //   //store the header in option object as header keys value(to achive overloading)
  //   options.headers=headers.append("access_token",token)//tstep 6 option.....

  //   //return header
  //   return options
  // }

  //api to server register
  register(mno: any, uname: any, address: any, email: any, psw: any) {//:. asynchronous
    const bodyData = {
      mno,
      uname,
      address,
      email,
      psw
    }
    return this.http.post('http://localhost:3002/register', bodyData)//asynchronous 
  }


  //API TO SERVER LOGIN
  login(mno: any, psw: any) {
    const bodyData = {
      mno,
      psw
    }
    return this.http.post('http://localhost:3002/login', bodyData)
  }

  //api to get all product
  getAllproduct() {//step5
    return this.http.get('http://localhost:3000/product')
  }

  //API to get single product
  getSproduct(pid: any) {// step11
    return this.http.get('http://localhost:3000/product/' + pid)//as params
  }

  getadminSproduct(pid: any) {// step11
    return this.http.get('http://localhost:3000/product/' + pid)//as params
  }
  //API for add new product
  addProduct(productObject: any) {//formstep5
    return this.http.post('http://localhost:3000/product', productObject)//as object
  }

  // API for updated and display in db of product
  updateProduct(pid: any, productObject: any) {//editstep5 to access edited data
    return this.http.put('http://localhost:3000/product/' + pid, productObject)//as pid and productObject as params
  }

  //API for delete the product
  deleteProduct(pid: any) {
    return this.http.delete('http://localhost:3000/product/' + pid)
  }

  //api of order
  getorder(pid: any) {// step11
    return this.http.get('http://localhost:3000/product/' + pid)//as params
  }

  //api of wish list
  getfav(pid: any) {// step11
    return this.http.get('http://localhost:3000/product/' + pid)//as params
  }



}
