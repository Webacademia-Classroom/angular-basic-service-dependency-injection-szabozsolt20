import { Component, inject, OnInit } from '@angular/core';
import { CustomerStore } from '../../store/CustomerStore';
import { CommonModule, JsonPipe } from '@angular/common';
import { Customer } from '../../model/customer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  standalone: true,
  imports: [
    JsonPipe,
    CommonModule,
    RouterModule,
  ],
})
export class CustomersComponent {

}
