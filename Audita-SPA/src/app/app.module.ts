import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { AuthService } from './_services/auth.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AccesslogComponent } from './accesslog/accesslog.component';
import { appRoutes } from './routes';
import { SiteComponent } from './site/site.component';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { FilterToolPanelComponent } from './filterToolPanel/filterToolPanel.component';
import { EditSiteComponent } from './editSite/editSite.component';
import { ButtonPanelComponent } from './buttonPanel/buttonPanel.component';
import { ContactUsComponent } from './contactUs/contactUs.component';
import { CarousalComponent } from './carousal/carousal.component';



@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      UserComponent,
      SidebarComponent,
      HomeComponent,
      RegisterComponent,
      AccesslogComponent,
      SiteComponent,
      FilterToolPanelComponent,
      EditSiteComponent,
      ButtonPanelComponent,
      ContactUsComponent,
      CarousalComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      AgGridModule.withComponents([FilterToolPanelComponent])
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
