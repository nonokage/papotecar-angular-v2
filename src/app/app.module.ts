import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PapoteViewComponent } from './papote-view/papote-view.component';
import { FooterComponent } from './footer/footer.component';
import { RunFormDetailsComponent } from './run/run-form-details/run-form-details.component';
import { RunFormSimpleComponent } from './run/run-form-simple/run-form-simple.component';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'papotecar', component: PapoteViewComponent },
  { path: '', component: PapoteViewComponent },
  { path: 'run/form', component: RunFormDetailsComponent}
  /*{ path: 'books/new', component: BookFormComponent },
  { path: 'books/view/:id', component: SingleBookComponent }*/

];


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    NavbarComponent,
    PapoteViewComponent,
    FooterComponent,
    RunFormDetailsComponent,
    RunFormSimpleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,
      // <-- debugging purposes only
      { enableTracing: true } )
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
