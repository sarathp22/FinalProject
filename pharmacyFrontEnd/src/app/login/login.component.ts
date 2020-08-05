import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errData;
  login={email:"",password:""};
  constructor(private user:UserService, private router:Router) { }

  loginUsers()
  {
    console.log("Hai");
    this.user.loginUser(this.login).subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('token',res.token);
        this.router.navigate(['store/1'])
                },
      err=>{
        console.log(err.error.error);
        
        this.errData=err.error.error}
    )
  }
  ngOnInit(): void {
  }

}
