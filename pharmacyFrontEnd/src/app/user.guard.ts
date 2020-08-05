import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private user:UserService,private router:Router)
  {

  }
  canActivate():boolean
  {
    if(this.user.loggedIn())
    {
      console.log('true');
      return true
    }
    else{
            
            this.router.navigate(['login']);
            return false
    }
  }
 
  
}
