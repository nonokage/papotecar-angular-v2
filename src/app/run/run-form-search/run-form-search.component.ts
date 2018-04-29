import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-run-form-search',
  templateUrl: './run-form-search.component.html',
  styleUrls: ['./run-form-search.component.scss']
})
export class RunFormSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);

  }
}
