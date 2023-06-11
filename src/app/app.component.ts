import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
    });
  }

  saveTheReactiveFormData(formData) {
    console.log(formData);
  }

  formGroup: FormGroup;

  name = 'Angular';
  today = new Date();
  text = 'hello world';
  lowerCaseText = 'HELLO WORLD';
  person = {
    name: 'John doe',
    age: 12,
    email: 'john@gmail.com',
  };

  saveData(userdata) {
    console.log(userdata);
  }

  saveUserData(userData) {
    console.log(userData);
  }

  saveFormdata(formData) {
    console.log(formData);
  }
}
