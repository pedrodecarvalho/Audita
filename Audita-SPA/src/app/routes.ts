import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SiteComponent } from './site/site.component';
import { AccesslogComponent } from './accesslog/accesslog.component';
import { UserComponent } from './user/user.component';
import { ContactUsComponent } from './contactUs/contactUs.component';


export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'site', component: SiteComponent },
    { path: 'accesslog', component: AccesslogComponent },
    { path: 'user', component: UserComponent },
    { path: 'contactUs', component: ContactUsComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }

];
