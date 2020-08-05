import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../purchase.service';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-order-display',
  templateUrl: './admin-order-display.component.html',
  styleUrls: ['./admin-order-display.component.css']
})
export class AdminOrderDisplayComponent implements OnInit {

  constructor(private purchase:PurchaseService,private admin:AdminService,private router:Router) { }
  purchaseOrder;
  ngOnInit(): void {

    this.purchase.getfullOrderDiplay().subscribe((res)=>{this.purchaseOrder=res,console.log(this.purchaseOrder)});
    
  }
  adminLogout()
  {
    localStorage.removeItem('admin');
    this.router.navigate(['/adminlogin'])
  }

}
