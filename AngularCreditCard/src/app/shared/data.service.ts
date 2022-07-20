import { Customer } from '../model/customer';
import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore) { }
  // add customer
  addCustomer(customer:Customer)
{
  customer.id = this.afs.createId();
  return this.afs.collection('/Customers').add(customer)
}    

//get all customers
gatAllCustomers(){
  return this.afs.collection('/Customers').snapshotChanges();
}

//delete customer
deleteCustomer(customer:Customer){
  return this.afs.doc('/Customers/' +customer.id).delete();
}

//update customer
updateCustomer(customer:Customer){
  this.deleteCustomer(customer);
  this.addCustomer(customer);
}
}

