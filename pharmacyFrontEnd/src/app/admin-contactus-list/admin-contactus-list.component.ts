import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-contactus-list',
  templateUrl: './admin-contactus-list.component.html',
  styleUrls: ['./admin-contactus-list.component.css']
})
export class AdminContactusListComponent implements OnInit {
contactusData=[];
  constructor(private contactus:ContactService,private router:Router) { }

  ngOnInit(): void {

    this.contactus.getContact().subscribe(res=>{this.contactusData=JSON.parse(JSON.stringify(res))});
  }
  adminLogout()
  {
    localStorage.removeItem('admin');
    this.router.navigate(['/adminlogin'])
  }

}
