import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StoreService } from '../store.service';
import { StoreModel } from './store.model';
import { CartModel } from './cart.model';

@Component({
  selector: 'app-store-single',
  templateUrl: './store-single.component.html',
  styleUrls: ['./store-single.component.css']
})
export class StoreSingleComponent implements OnInit {
medicine:StoreModel;
// cartItems:[];
val=1;
cartItem
  
  urlId;
  imageWidth: number =400;
  imageHeight: number =400;
  
  constructor(private route:ActivatedRoute, private store:StoreService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>{
      this.urlId=data.get('id');
      console.log(this.urlId);
      this.store.getMedicine(this.urlId).subscribe(data=>{this.medicine=JSON.parse(JSON.stringify(data));})
    })

  }
  cart()
  {

    var totalPrice;
    totalPrice=parseInt(((this.medicine.price / this.medicine.pricePerQuantity) * this.val).toFixed());
    console.log(totalPrice);
    this.cartItem= {
        _id: this.medicine._id,
        medicineName: this.medicine.medicineName,
        price: this.medicine.price,
        pricePerQuantity: this.medicine.pricePerQuantity,
        total: totalPrice,
        value: this.val,
        stock: this.medicine.stock,
        imgUrl: this.medicine.imgUrl,
        des: this.medicine.des
      
      };
      var data=this.cartItem;
     
      var cartItems=[];
      

      if(localStorage.getItem('cart'))
      {
          var temp;
          temp=JSON.parse(localStorage.getItem('cart'));
          temp.push(data);
          localStorage.setItem('cart',JSON.stringify(temp));

      }
      else
      {
      cartItems.push(data);
      localStorage.setItem('cart', JSON.stringify(cartItems) );
    }
    console.log(localStorage.getItem('cart'));
    

  
    
      
                                      

  }

}
