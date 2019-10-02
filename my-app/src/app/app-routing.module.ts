import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BasicComponent } from './basic/basic.component';
import { LoginComponent } from './login/login.component';
import { ConversionComponent } from './conversion/conversion.component';


const routes: Routes = [
  { path: 'welcome',  component: WelcomeComponent },  
  {  path: '',  redirectTo: '/welcome',  pathMatch: 'full'}, 
  { path: 'basic',  component: BasicComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'conversion',  component: ConversionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
