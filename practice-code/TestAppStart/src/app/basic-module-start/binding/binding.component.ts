import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  title = '2 - 022 Data Binding';
  interpolationVar = 'interpolating!';
  inputValue = 'Hello';
  twoWayProp = 'Hi!';
  interpolationText = `{{ interpolationVar }}`;
  interpolationComment = `//interpolationVar = 'interpolating!'`;
  propertyBindingText = `<input [value]="inputValue" />`;
  propertyBindingComment = ``;
  eventBindingText = `<button (click)="showAlert()"></button>`;
  eventBindingComment =
`/*
  showAlert() {
    alert('Hello');
  }
/*`;
  twoWayBindingText = `<input [(ngModel)]="twoWayProp" /> {{ twoWayProp }}`;
  twoWayBindingComment = `//initial value of twoWayProp = 'Hi!'`;
  constructor() { }

  ngOnInit() {
  }

  showAlert() {
    alert('Hello');
  }

}
