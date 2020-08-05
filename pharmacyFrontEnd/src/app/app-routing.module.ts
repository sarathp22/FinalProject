import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { StoreSingleComponent } from './store-single/store-single.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { YourOrdersComponent } from './your-orders/your-orders.component';
import { AdminOrderListComponent } from './admin-order-list/admin-order-list.component';
import { AdminOrderDisplayComponent } from './admin-order-display/admin-order-display.component'
import { UserGuard } from './user.guard';
import { AdminGuard } from './admin.guard';
import { AdminContactusListComponent } from './admin-contactus-list/admin-contactus-list.component';
import { AdminMedEditComponent } from './admin-med-edit/admin-med-edit.component';

const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},
                        {path:'home',component:HomeComponent},
                        {path:'store/:id',component:StoreComponent},
                        {path:'store-single/:id',component:StoreSingleComponent},
                        {path:'cart',component:CartComponent},
                        {path:'register',component:RegisterComponent},
                        {path:'login',component:LoginComponent},
                        {path:'contact',component:ContactComponent},
                        {path:'about',component:AboutComponent},
                        {path:'adminlogin',component:AdminloginComponent},
                        {path:'adminpage',component:AdminpageComponent,canActivate:[AdminGuard]},
                        {path:'order',component:YourOrdersComponent,canActivate:[UserGuard]},
                        {path:'adminorderlist',component:AdminOrderListComponent,canActivate:[AdminGuard]},
                        {path:'adminorderdisplay',component:AdminOrderDisplayComponent,canActivate:[AdminGuard]},
                        {path:'admincontactuslist',component:AdminContactusListComponent,canActivate:[AdminGuard]},
                        {path:'mededit/:id',component:AdminMedEditComponent,canActivate:[AdminGuard]}
                                                           ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
