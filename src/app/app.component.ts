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
  constructor(private appService: AppService) { }
  ngOnInit() {
    this.appService.getData();
    this.appService.getData().subscribe(result => {
      this.cartData = result;
      this.cartLength = this.cartData.length;
    });
    
  }
}
