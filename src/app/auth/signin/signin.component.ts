import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      // le password doit contenir au moins 6 caracteres
    });
  }

  onSubmit(form: NgForm) {
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;
    this.authService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/books']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
    console.log(form.value);
  }

}
