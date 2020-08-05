import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {

  constructor(private admin:AdminService,private router:Router)
  {

  }

  canActivate():boolean
  {
    if(this.admin.adminLoggedIn())
    {
      console.log('true');
      return true
    }
    else{
            
            this.router.navigate(['adminlogin']);
            return false
    }
  }
  
}
