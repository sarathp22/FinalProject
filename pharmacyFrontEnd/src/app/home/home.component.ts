import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store:StoreService) { }
  sample=[];
  ngOnInit(): void {
    this.store.getMedicinesFive().subscribe((res)=>{this.sample=res});
  }

}
