import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  medicines;
  len;
  pages=1;
  imageWidth: number =200;
  imageHeight: number =250;
  urlId:number;
  start;
  end;
  
  
  pageData;
  constructor(private store:StoreService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>{
      this.urlId=parseInt(data.get('id'));
      console.log(this.urlId)
      this.start=(this.urlId-1)*9;
      this.end=(this.urlId*9)-1;
    
    this.store.getMedicines().subscribe(data=>{this.medicines=JSON.parse(JSON.stringify(data));this.arrLength();this.numPages();this.singlePage();})
  });
  }

  singlePage()
  {
    console.log("HW");
    console.log(this.start);
    console.log(this.end);
    this.pageData=this.medicines.filter((item,index)=>index>=this.start && index<=this.end);
    console.log(this.pageData);
    
  }

  arrLength()
  {
    this.len=this.medicines.length;
  }
  numPages()
  {
    if(this.len % 9 === 0)
    {
    var count=(this.len / 9 | 0);
    this.pages=count;
    console.log(this.pages);
    }
    else{
      var count=(this.len / 9 | 0) + 1;
      this.pages=count;
      console.log(this.pages);
    }
  }
dataNew=[];
  onKey(event:any)
  {
    var len=event.target.value.length;
    var data=event.target.value.toUpperCase(); 
    this.dataNew=this.medicines.filter(i=>i.medicineName.slice(0,len).toUpperCase()===data);
    if(len===0)
    {
      this.dataNew=[];
    }
  }
  lessDisable()
  {
    if(this.urlId-1<=0)
    {
      return false;
    }
    else{
      return true;
    }
  }
  greatDisable()
  {
    if(this.urlId >= this.pages)
    {
      return false;
    }
    else{
      return true;
    }
  }
      
}
