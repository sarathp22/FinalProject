import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StoreService } from '../store.service';
import { AdminService } from '../admin.service';
import { MedicineModel } from '../adminpage/medicine.model';

@Component({
  selector: 'app-admin-med-edit',
  templateUrl: './admin-med-edit.component.html',
  styleUrls: ['./admin-med-edit.component.css']
})
export class AdminMedEditComponent implements OnInit {
  medicineData:MedicineModel;
  urlId;
  constructor(private router:Router,private route:ActivatedRoute,private store:StoreService,private admin:AdminService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(data=>{
      this.urlId=data.get('id');
      // console.log(JSON.parse(JSON.stringify(this.urlId)));
      this.store.getMedicine(this.urlId).subscribe(data=>{this.medicineData=JSON.parse(JSON.stringify(data));console.log(data)})
    })
  }
  editSubmit()
  {
    this.admin.editSubmit(this.medicineData).subscribe(res=>{console.log(res)})
    this.router.navigate(['adminpage']);
  }
  adminLogout()
  {
    localStorage.removeItem('admin');
    this.router.navigate(['/adminlogin'])
  }

}
