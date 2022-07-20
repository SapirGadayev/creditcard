import { DataService } from '../../shared/data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer'

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  customerList: Customer[] = [];

  constructor(private auth: AuthenticationService, private data: DataService) { }

  ngOnInit(): void {
    this.gatAllCustomers();
  }
  gatAllCustomers() {
    this.data.gatAllCustomers().subscribe(res => {
      this.customerList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, err => {
      alert('Error while fetching customer data');
    })
  }
  deleteCustomer(customer: Customer) {
    if (window.confirm('Are you sure you want to delete' + customer.full_name + '?')) {
      this.data.deleteCustomer(customer);
    }
  }  
}
