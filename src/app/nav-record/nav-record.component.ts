import { Component, OnInit } from '@angular/core';
import { CUSTOMER } from '../MockRecord';

@Component({
  selector: 'app-nav-record',
  templateUrl: './nav-record.component.html',
  styleUrls: ['./nav-record.component.css']
})
export class NavRecordComponent implements OnInit {

  customer = CUSTOMER;
  
  constructor() { }

  ngOnInit() {
  }

}
