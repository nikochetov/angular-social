import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: '', component: CarouselComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
