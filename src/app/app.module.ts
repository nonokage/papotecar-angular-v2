import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
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
import { RunService } from './services/run.service';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'papotecar', component: PapoteViewComponent },
  { path: '', component: PapoteViewComponent },
  { path: 'run/form', component: RunFormPutComponent},
  { path: 'runs', component: RunListViewComponent },
  { path: 'run/new', component: RunFormPutComponent },
  { path: 'run/search', component: RunFormSearchComponent },
  { path: 'run/view/:id', component: RunViewComponent },
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
  providers: [RunService],
  bootstrap: [AppComponent]
})
export class AppModule { }
