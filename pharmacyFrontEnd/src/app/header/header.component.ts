import { Component, OnInit,OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges {

  constructor(private router:Router,public user:UserService,public admin:AdminService) { }

  len;

  logout()
  {
    localStorage.removeItem('token');
    this.router.navigate(['home']);
  }

  ngOnInit(): void {
    if(localStorage.getItem('cart'))
  {
    this.len=(JSON.parse(localStorage.getItem('cart')).length);
    
  }
  }
  ngOnChanges(): void 
  {
    if(localStorage.getItem('cart'))
    {
      this.len=(JSON.parse(localStorage.getItem('cart')).length);
      
    }
  }

}
