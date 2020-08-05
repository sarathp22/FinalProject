import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseService } from '../purchase.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // updatedQuantity=[{}];
  cartItems=[];
  grandTotal=0;
  optionSelected: any="advanced";
  imageWidth: number =200;
  imageHeight: number =150;
  cart:boolean;
  userDetails;

  constructor(private router:Router , private purchase:PurchaseService , private user:UserService) { }

  deleteLocal(data)
  {
    console.log(data);
    this.cartItems.splice(data,1);
    console.log(this.cartItems.length)
    if(this.cartItems.length===0)
    {
      localStorage.removeItem('cart');
      this.grand();
      this.ngOnChanges();
      location.reload();
    }
    else{
    localStorage.removeItem('cart');
    localStorage.setItem('cart',JSON.stringify(this.cartItems));
    this.grand();
  }
  

  }

  updateLocal()
  {
    // console.log(this.updatedQuantity);
    for(var i=0;i<this.cartItems.length;i++)
    {
      var totalPrice=0;
      totalPrice=parseInt(((this.cartItems[i].price / this.cartItems[i].pricePerQuantity) * this.cartItems[i].value).toFixed());
      // console.log(totalPrice);
      this.cartItems[i].total=totalPrice;

      // this.grandTotal=this.grandTotal + parseInt(this.cartItems[i].total);
    }
    console.log("updated");
    localStorage.removeItem('cart');
    localStorage.setItem('cart',JSON.stringify(this.cartItems));
    this.grand();
  }

  ngOnInit(): void {
    
    this.cartItems=JSON.parse(localStorage.getItem('cart'));
    //hiding table
    if(localStorage.getItem('cart'))
    {
      this.cart=true;
    }
    else if(localStorage.getItem('cart')===null)
    {
      this.cart=false;
    }
  
    // this.cartItems.array.forEach(element => {
    //   this.grandTotal=this.grandTotal+element.total;
    // });
    this.grand();
    var data=localStorage.getItem('token');
    this.user.getUser(data).subscribe((out)=>{this.userDetails=JSON.parse(JSON.stringify(out))});
  }

  ngOnChanges(): void 
  {
    if(localStorage.getItem('cart'))
    {
      this.cart=true;
    }
    else if(localStorage.getItem('cart')===null)
    {
      this.cart=false;
    }
  }

  grand()
  { this.grandTotal=0;
    for(var i=0;i<this.cartItems.length;i++)
    {
      this.grandTotal=this.grandTotal + parseInt(this.cartItems[i].total);
    }
    console.log(this.cartItems);
    console.log(this.grandTotal);
  }
  dbInsert()
  {
    //logged in case
    console.log(localStorage.getItem('token'))
    if(localStorage.getItem('token'))
    {
    var d = new Date();
    var user=localStorage.getItem('token');
    var data=JSON.parse(localStorage.getItem('cart'));
    var data1=data.map(({_id,...v})=>v);
     var newData = data1.map(v => ({...v,userName:this.userDetails.firstName,address:this.userDetails.address,pinCode:this.userDetails.pinCode,phoneNumber:this.userDetails.phoneNumber,user: user,feedback:null,date:d,deliveryType:this.optionSelected}))
    console.log(typeof(d));
    this.purchase.purchaseAdd(newData).subscribe(res=>console.log(res));
    localStorage.removeItem('cart');
    this.router.navigate(['store/1']);
    }
    else if(localStorage.getItem('token')===null)
    {
      console.log("hai");
      this.router.navigate(['login']);
    }

    
  }
  onOptionsSelected(event){
    console.log(event); //option value will be sent as event
   }

}
