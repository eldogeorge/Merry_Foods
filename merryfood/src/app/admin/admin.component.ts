import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productsArray: any = []
  categoryArray: any = []//catstep2
  searchString: any = ''//searchstep2
  searchTerm:any=""
  constructor(private ds: DataService) {

  }
  ngOnInit(): void {//step7
    alert("Are you admin")

    this.ds.getAllproduct().subscribe((result: any) => {
      // console.log(result);
      this.productsArray = result
      console.log(this.productsArray);

      this.categoryArray = this.productsArray//catstep4

      //searchStep10
      this.ds.search.subscribe((value: any) => {
        // console.log(value);
        this.searchString = value

      })
    })

  }

  
  //catstep1
  categoryProduct(catId: any) {
    this.categoryArray = this.productsArray.filter((item: any) =>
      item.categoryId == catId || catId == "")
    console.log(this.categoryArray);

  }

  search(event:any){
    // console.log(event.target.value);
    this.searchTerm=event.target.value
    console.log(this.searchTerm);
    
    this.ds.search.next(this.searchTerm)

    
  }
}
