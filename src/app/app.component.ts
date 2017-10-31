import { Component,OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'YOUR SHOPPING BAG';
  cartData:any[];
  cartLength:number;
  private totalPrice:number;
  private totalQuantity:number;
  constructor(private appService: AppService) {
    //this.totalPrice= this.getTotal(this.cartData);
    //this.cartData.forEach(s => this.totalQuantity += s.p_quantity );
   }
  ngOnInit() {
    this.appService.getData();
    this.appService.getData().subscribe(result => {
      this.cartData = result;
      this.cartLength = this.cartData.length;
    });
    
  }
  getTotalPrice() {
    //return this.cartData.forEach(s => this.totalPrice += (s.p_price*s.p_quantity) )
    if(typeof this.cartData !== 'undefined') {
      return this.cartData.reduce((total, item) => {
          return total + (item.p_price*item.p_quantity);
      }, 0); 
    }
    return 0;
  }
}
