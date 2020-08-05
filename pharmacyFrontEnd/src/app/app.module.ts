import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { StoreComponent } from './store/store.component';
import { StoreSingleComponent } from './store-single/store-single.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { StoreService } from './store.service';
import { AdminService } from './admin.service';
import { YourOrdersComponent } from './your-orders/your-orders.component';
import { UserService } from './user.service';
import { PurchaseService } from './purchase.service';
import { OrderService } from './order.service';
import { AdminOrderListComponent } from './admin-order-list/admin-order-list.component';
import { AdminOrderDisplayComponent } from './admin-order-display/admin-order-display.component';
import { UserGuard } from './user.guard';
import { AdminGuard } from './admin.guard';
import { ContactService } from './contact.service';
import { AdminContactusListComponent } from './admin-contactus-list/admin-contactus-list.component';
import { AdminMedEditComponent } from './admin-med-edit/admin-med-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    StoreComponent,
    StoreSingleComponent,
    CartComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    AdminloginComponent,
    AdminpageComponent,
    YourOrdersComponent,
    AdminOrderListComponent,
    AdminOrderDisplayComponent,
    AdminContactusListComponent,
    AdminMedEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [StoreService,AdminService,UserService,PurchaseService,OrderService,UserGuard,AdminGuard,ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
