import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  user="";
  password="";
  msg="";
  constructor(private router:Router) { }

  login()
{
  if(this.user==="Admin109" && this.password === "24680")
  {
    localStorage.setItem('admin',"admin");
    this.router.navigate(['adminpage']);
    console.log("Ok")
  }
  else{
    console.log("Error");
    this.msg="You have no authorization to access admin page";
  }
}

  ngOnInit(): void {
  }

}
