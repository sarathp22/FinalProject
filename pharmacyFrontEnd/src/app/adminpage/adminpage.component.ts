import { Component, OnInit } from '@angular/core';
import { MedicineModel } from './medicine.model';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { StoreService } from '../store.service';


@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  medicineData=new MedicineModel(null,null,null,null,null,null,null);
  constructor(private admin:AdminService,private router:Router,private store:StoreService) { }
  medicines=[];
  adminSubmit()
  {
    // console.log("Hai admin");
    this.admin.adminSubmit(this.medicineData)
    .subscribe(res=>{console.log(res)})
    this.reloadpage();

  }
  reloadpage()
  {
    location.reload();
  }
  adminLogout()
  {
    localStorage.removeItem('admin');
    this.router.navigate(['adminlogin'])
  }

  ngOnInit(): void {

    this.store.getMedicines().subscribe(data=>{this.medicines=JSON.parse(JSON.stringify(data));console.log(this.medicines)})
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

}
