import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../purchase.service';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-order-list',
  templateUrl: './admin-order-list.component.html',
  styleUrls: ['./admin-order-list.component.css']
})
export class AdminOrderListComponent implements OnInit {

  purchaseOrder;

  constructor(private purchase:PurchaseService,private admin:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.purchase.getfullOrder().subscribe((res)=>{this.purchaseOrder=res,console.log(this.purchaseOrder)});
  }

  feed(data)
  {
    // console.log(data);
    this.purchase.feed(data).subscribe((res)=>{console.log(res)});
    location.reload();
    
  }
  adminLogout()
  {
    localStorage.removeItem('admin');
    this.router.navigate(['adminlogin'])
  }


}
