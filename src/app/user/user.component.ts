import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userForm = this.fb.group({
    username: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      zipCode: [''],
    }),  
    credentials: this.fb.group({
      email: [''],
      password: [''],
    }),
});
constructor(private fb: FormBuilder) {}

onSubmit() {
  console.log(this.userForm.value);
}

  ngOnInit(): void {
  }

}
