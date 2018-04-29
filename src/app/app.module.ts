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
import { RunFormSearchComponent } from './run/run-form-search/run-form-search.component';
import { RunFormPutComponent } from './run/run-form-put/run-form-put.component';
import { RunListViewComponent } from './run-list-view/run-list-view.component';
import { RunViewComponent } from './run/run-view/run-view.component';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'papotecar', component: PapoteViewComponent },
  { path: '', component: PapoteViewComponent },
  { path: 'run/form', component: RunFormPutComponent},
  { path: 'runs', canActivate: [AuthGuardService], component: RunListViewComponent },
  { path: 'runs/new', canActivate: [AuthGuardService], component: RunFormPutComponent },
  { path: 'runs/search', canActivate: [AuthGuardService], component: RunFormSearchComponent },
  { path: 'runs/view/:id', canActivate: [AuthGuardService], component: RunViewComponent },
  { path: '', redirectTo: 'papotecar', pathMatch: 'full' },
  { path: '**', redirectTo: 'papotecar' }
];


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    NavbarComponent,
    PapoteViewComponent,
    FooterComponent,
    RunFormSearchComponent,
    RunFormPutComponent,
    RunListViewComponent,
    RunViewComponent
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
