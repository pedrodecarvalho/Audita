import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { ValueComponent } from './value/value.component';
import { SiteComponent } from './site/site.component';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      SiteComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
