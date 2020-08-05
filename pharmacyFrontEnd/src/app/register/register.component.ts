import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './register.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errData;
user=new RegisterModel(null,null,null,null,null,null,null);
  constructor(private signup:UserService,private router:Router) { }
  registerUser()
  {
    this.signup.signup(this.user).subscribe(data =>{
      this.router.navigate(['login'])
      console.log(data)},
      err=>{
        console.log(err.error.error);
        
        this.errData=err.error.error}
      )
  }
  ngOnInit(): void {
  }

}
