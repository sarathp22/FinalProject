import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  adminSubmit(data)
  {
   return this.http.post<any>('http://localhost:3000/admin',data)
  }
  adminLoggedIn()
  {
    return !!localStorage.getItem('admin');
  }
  editSubmit(data)
  {
    return this.http.post<any>('http://localhost:3000/admin/edit',data)
  }
}
