import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberModel } from '../../models/member.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  member: MemberModel;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    // construction d'un membre
    this.member = new MemberModel(
      1,
      form.value.firstname,
      form.value.lastname,
      form.value.email,
      form.value.password,
      form.value.tel,
      form.value.vehicule,
      form.value.role);

    console.log('form.value: ');
    console.log(form.value);
    console.log('member: ');
    console.log(this.member);
  }


}
