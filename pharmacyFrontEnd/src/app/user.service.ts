import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  signup(data)
  {
  return this.http.post<any>('http://localhost:3000/signup',data);
  }
  loginUser(data)
  {
    return this.http.post<any>('http://localhost:3000/login',data)
  }
  getUser(id)
  {
    return this.http.get('http://localhost:3000/signup/'+id);
  }
  loggedIn()
  {
    return !!localStorage.getItem('token');
  }

}
