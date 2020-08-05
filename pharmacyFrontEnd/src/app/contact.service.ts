import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  contactSubmit(data)
  {
    return this.http.post('http://localhost:3000/contact',data);
  }
  getContact()
  {
    return this.http.get('http://localhost:3000/contact');
  }

}
