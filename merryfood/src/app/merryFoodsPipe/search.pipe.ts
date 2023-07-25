import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productArray:any,searchString:string,prodName:string): any{
    
    const result:any=[]

    if(!productArray || searchString=="" || prodName==""){
      return productArray
    }
    else{
      productArray.forEach((item:any)=>{
        if(item[prodName].trim().toLowerCase().includes(searchString.trim().toLowerCase())){
          result.push(item)
        }
      })
      return result
    }
  }

}
