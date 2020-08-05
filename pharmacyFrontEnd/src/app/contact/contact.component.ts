import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactModel } from './contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router:Router,private contactus:ContactService) { }
  contact=<any>{};
  // contact:ContactModel;
  ngOnInit(): void {
  }
  send()
  {
    
    this.contactus.contactSubmit(this.contact).subscribe(res=>{console.log(res)});
    this.router.navigate(['home']).then(()=>location.reload());
  }

}
