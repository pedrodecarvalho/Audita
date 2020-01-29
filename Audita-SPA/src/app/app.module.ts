import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ValueComponent } from './value/value.component';
import { SiteComponent } from './site/site.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { AuthService } from './_services/auth.service';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      SiteComponent,
      NavComponent,
      UserComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
