import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StoreService {



  constructor(private http:HttpClient) { }

  getMedicines()
{
  return <any>this.http.get("http://localhost:3000/store")
}  
getMedicine(id)
{
  return <any>this.http.get("http://localhost:3000/store/"+id)
}
getMedicinesFive()
{
  return <any>this.http.get("http://localhost:3000/store/five")
}  


}
