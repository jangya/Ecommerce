import { Injectable } from '@angular/core';
import { Http,Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { config } from './config';

@Injectable()
export class AppService {

  constructor(private http: Http) {}
  getData(): Observable<any[]> {
    return this.http.get(config.baseUrl+'assets/cart.json')
        .map((response: Response) => response.json().productsInCart);

  }

}
