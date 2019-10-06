import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  // You can define this as an html element in another .html file! See product-list.component.html
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  // The @Input() decorator indicates that the property value passes in from the component's parent, the product list component.
  @Input() product;
  // This allows the product alert component to emit an event when the value of the notify property changes.
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}