import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  deleteOrder(data)
  {
    return this.http.post('http://localhost:3000/purchase/order/delete',{"data":data});
  }
  updateOrder(data)
  {
    return this.http.post('http://localhost:3000/purchase/order/update',data)
  }
}
