import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http:HttpClient) { }
  purchaseAdd(data)
  {
  return this.http.post('http://localhost:3000/purchase',data)
  }
  getOrder(id)
  {
    return this.http.get('http://localhost:3000/purchase/'+id)
  }
  getfullOrder()
  {
    return this.http.get('http://localhost:3000/purchase');
  }
  feed(data)
  {
    return this.http.post('http://localhost:3000/purchase/feed',data)
  }
  getPurchasedItems(id)
  {
    return this.http.get('http://localhost:3000/purchase/order/'+id)
  }
  getfullOrderDiplay()
  {
    return this.http.get('http://localhost:3000/purchase/display');
  }
}
