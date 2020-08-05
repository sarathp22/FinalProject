import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PurchaseService } from '../purchase.service';
import { UserService } from '../user.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-your-orders',
  templateUrl: './your-orders.component.html',
  styleUrls: ['./your-orders.component.css']
})
export class YourOrdersComponent implements OnInit, AfterViewInit {
userDetails=<any>[];
purchaseItems=<any>[];
dispatched=<any>[];
grandTotal=0;
len;
imageWidth=100;
imageHeight=100;
purchaseFlag:boolean;
dispatchFlag:boolean;
  constructor(private purchase:PurchaseService , private user:UserService ,private order:OrderService) { }


  ngOnInit(): void {
    var id=localStorage.getItem('token');
    console.log(id);
    // console.log("your orders");
   this.user.getUser(id).subscribe((out)=>{this.userDetails=JSON.parse(JSON.stringify(out))});
   this.purchase.getOrder(id).subscribe((res)=>{this.purchaseItems=JSON.parse(JSON.stringify(res)),this.len=this.purchaseItems.length-1,this.test2(),this.grand()});
    this.purchase.getPurchasedItems(id).subscribe((data)=>{this.dispatched=JSON.parse(JSON.stringify(data)),this.test1()});
   // this.grand();
    // console.log(this.purchaseItems);
  }

  grand()
  { this.grandTotal=0;
    for(var i=0;i<this.purchaseItems.length;i++)
    {
      this.grandTotal=this.grandTotal + parseInt(this.purchaseItems[i].total);
    }
    // console.log(this.purchaseItems);
    // console.log(this.grandTotal);
  }
  updateOrder()
  {
    // console.log(this.purchaseItems);
    this.order.updateOrder(this.purchaseItems).subscribe((data2)=>{console.log(data2)})
    location.reload();
  }
  cancelOrder()
  {
    console.log(this.purchaseItems[this.len].date)
    this.order.deleteOrder(this.purchaseItems[this.len].date).subscribe((data1)=>console.log(data1));
    location.reload();
  }
  test1()
  {
    
    if(this.dispatched.length===0)
    {
      this.dispatchFlag=false;
    }
    else
    {
      this.dispatchFlag=true;
    }
    
    console.log(this.dispatchFlag);
  }
  test2()
  {
    if(this.purchaseItems.length===0)
    {
      this.purchaseFlag=false;
    }
    else
    {
      this.purchaseFlag=true;
    }
    console.log(this.purchaseFlag);
  }
  ngAfterViewInit(){
 
  }


}
