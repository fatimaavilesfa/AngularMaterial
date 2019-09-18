import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  profileForm = new FormGroup({
    name: new FormControl(''),
    title: new FormControl(''),
  });

  constructor(  ) {
  }

  ngOnInit() {

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);

  }

}
