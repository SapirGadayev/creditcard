import { ClassifyService } from './../../classify.service';
import { DataService } from '../../shared/data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { DatePipe } from '@angular/common';
import { delay } from 'rxjs';



@Component({
  selector: 'check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  birthdate:Date=new Date;
  employdate:Date=new Date;
  customerList: Customer[] = [];
  
  customerObj: Customer = {
    id: '',
    customer_id: '',
    full_name: '',
    email: '',
    mobile: '',
    gender: '',
    own_car: false,
    own_realty: false,
    birthdate: new Date,
    employdate: new Date,
    cnt_children: '',
    income_total: 0,
    education_type: '',
    family_status: '',
    housing_type: '',
    days_birth: 0,
    days_employed: 0,
    mobil: false,
    work_phone: false,
    flag_phone: false,
    flag_email: false,
    job: '',
    begin_months: 0,
    status: '',
    target: '',
    own_car_string: '',
    own_realty_string: '',
    mobil_string: '',
    work_phone_string: '',
    flag_phone_string: '',
    flag_email_string: '',
    gender_code:''
  };
  customer_id: string='';
  id: string = '';
  full_name: string = '';
  email: string = '';
  mobile: string = '';
  gender:string= '';
  own_car:boolean= false;
  own_realty:boolean= false;
  cnt_children:string="choose"
  income_total:number= 0;
  education_type:string= 'choose';
  family_status:string= 'choose';
  housing_type:string= 'choose';
  days_birth:number=0;
  days_employed:number=0;
  mobil:boolean=false;
  work_phone:boolean=false;
  flag_phone:boolean=false;
  flag_email:boolean=false;
  job:string= 'choose';
  begin_months:number=0;
  status:string= 'choose';
  target:string='';

  

  constructor(private auth: AuthenticationService, private data: DataService, private classifyService:ClassifyService) { }

  ngOnInit(): void {
    
  }

  // register(){
  //   this.auth.logout();
  // } 

  resetForm() {
    this.id = '';
    this.full_name = '';
    this.email = '';
    this.mobile = '';
    this.customer_id='';
    this.gender='';
    this.own_car=false;
    this.own_realty=false;
    this.cnt_children="choose";
    this.education_type="choose";
    this.income_total=0;
    this.family_status="choose";
    this.housing_type="choose";
    this.birthdate=new Date();
    this.employdate=new Date();
    this.mobil=false;
    this.work_phone=false;
    this.flag_phone=false;
    this.flag_email=false;
    this.job="choose";
    this.status="choose";
  }
  
  onChangebirth(newValue:any) {
    this.birthdate = newValue; 
  }

  onChangeemploy(newValue:any) {
    this.employdate = newValue; 
  }

  calculateDiff(bdate:Date){
    let currentDate= new Date;
    let bday=new Date(bdate)
    let days = Math.floor(( bday.getTime()-currentDate.getTime()) /(1000 * 3600 * 24));
    return days;
  }
  addCustomer() {
    if (this.full_name == "" || this.customer_id=="" || this.gender=="" || this.cnt_children == "choose" || this.education_type == "choose" ||
     this.family_status == "choose" || this.housing_type == "choose" || this.job == "choose" || this.status
      == "choose") {
      alert('Fill all required input fields');
      return;
    }

    this.customerObj.id = '';
    this.customerObj.customer_id=this.customer_id;
    this.customerObj.email = this.email;
    this.customerObj.full_name = this.full_name;
    this.customerObj.mobile = this.mobile;
    this.customerObj.gender=this.gender;
    this.customerObj.own_car=this.own_car;
    this.customerObj.own_realty=this.own_realty;
    this.customerObj.cnt_children=this.cnt_children;
    this.customerObj.income_total=this.income_total;
    this.customerObj.education_type=this.education_type;
    this.customerObj.family_status=this.family_status;
    this.customerObj.housing_type=this.housing_type;   
    this.customerObj.days_birth=this.calculateDiff(this.birthdate);
    this.customerObj.birthdate=this.birthdate;
    this.customerObj.days_employed=this.calculateDiff(this.employdate);
    this.customerObj.employdate=this.employdate;    
    this.customerObj.mobil=this.mobil;
    this.customerObj.work_phone=this.work_phone;
    this.customerObj.flag_phone=this.flag_phone;
    this.customerObj.flag_email=this.flag_email;
    this.customerObj.job=this.job;
    this.customerObj.status=this.status;

   
    //changeForModel

  switch(this.customerObj.cnt_children) { 
      case '1 children':{ 
        this.customerObj.cnt_children='0'; 
         break; 
      } 
      case '2+ children': { 
        this.customerObj.cnt_children='1'; 
         break; 
      } 
      case 'No children': { 
        this.customerObj.cnt_children='2'; 
         break; 
      } 
   } 

  switch(this.customerObj.gender) { 
    case 'F':{ 
      this.customerObj.gender_code='0'; 
       break; 
    } 
    case 'M': { 
      this.customerObj.gender_code='1'; 
       break; 
    } 
   } 

 switch(this.customerObj.own_car) { 
  case false:{ 
    this.customerObj.own_car_string='0'; 
     break; 
  } 
  case true: { 
    this.customerObj.own_car_string='1'; 
     break; 
  } 
  } 

switch(this.customerObj.own_realty) { 
  case false:{ 
    this.customerObj.own_realty_string='0'; 
     break; 
  } 
  case true: { 
    this.customerObj.own_realty_string='1'; 
     break; 
  } 
} 

switch(this.customerObj.own_realty) { 
  case false:{ 
    this.customerObj.own_realty_string='0'; 
     break; 
  } 
  case true: { 
    this.customerObj.own_realty_string='1'; 
     break; 
  } 
} 

switch(this.customerObj.education_type) { 
  case 'Academic degree':{ 
    this.customerObj.education_type='0'; 
     break; 
  } 
  case 'Higher education': { 
    this.customerObj.education_type='1'; 
     break; 
  } 
  case 'Incomplete higher': { 
    this.customerObj.education_type='2'; 
     break; 
  } 
  case 'Lower secondary': { 
    this.customerObj.education_type='3'; 
     break; 
  } 
  case 'Secondary / secondary special': { 
    this.customerObj.education_type='4'; 
     break; 
  } 
} 

 switch(this.customerObj.family_status) { 
  case 'Civil marriage':{ 
    this.customerObj.family_status='0'; 
     break; 
  } 
  case 'Married': { 
    this.customerObj.family_status='1'; 
     break; 
  } 
  case 'Separated': { 
    this.customerObj.family_status='2'; 
     break; 
  } 
  case 'Single / not married': { 
    this.customerObj.family_status='3'; 
     break; 
  } 
  case 'Widow': { 
    this.customerObj.family_status='4'; 
     break; 
  } 
} 


switch(this.customerObj.housing_type) { 
  case 'Co-op apartment':{ 
    this.customerObj.housing_type='0'; 
     break; 
  } 
  case 'House / apartment': { 
    this.customerObj.housing_type='1'; 
     break; 
  } 
  case 'Municipal apartment': { 
    this.customerObj.housing_type='2'; 
     break; 
  } 
  case 'Office apartment': { 
    this.customerObj.housing_type='3'; 
     break; 
  } 
  case 'Rented apartment': { 
    this.customerObj.housing_type='4'; 
     break; 
  } 
  case 'With parents': { 
    this.customerObj.housing_type='5'; 
     break; 
  } 
} 

switch(this.customerObj.mobil) { 
  case false:{ 
    this.customerObj.mobil_string='1'; 
     break; 
  } 
  case true: { 
    this.customerObj.mobil_string='0'; 
     break; 
  } 
} 

switch(this.customerObj.work_phone) { 
  case false:{ 
    this.customerObj.work_phone_string='0'; 
     break; 
  } 
  case true: { 
    this.customerObj.work_phone_string='1'; 
     break; 
  } 
} 

switch(this.customerObj.flag_phone) { 
  case false:{ 
    this.customerObj.flag_phone_string='0'; 
     break; 
  } 
  case true: { 
    this.customerObj.flag_phone_string='1'; 
     break; 
  } 
}

switch(this.customerObj.flag_email) { 
  case false:{ 
    this.customerObj.flag_email_string='0'; 
     break; 
  } 
  case true: { 
    this.customerObj.flag_email_string='1'; 
     break; 
  } 
}

switch(this.customerObj.job) { 
  case 'Accountants':{ 
    this.customerObj.job='0'; 
     break; 
  } 
  case 'Cleaning staff': { 
    this.customerObj.job='1'; 
     break; 
  } 
  case 'Cooking staff': { 
    this.customerObj.job='2'; 
     break; 
  } 
  case 'Core staff': { 
    this.customerObj.job='3'; 
     break; 
  } 
  case 'Drivers': { 
    this.customerObj.job='4'; 
     break; 
  } 
  case 'HR staff': { 
    this.customerObj.job='5'; 
     break; 
  } 
  case 'High skill tech staff': { 
    this.customerObj.job='6'; 
     break; 
  } 
  case 'IT staff': { 
    this.customerObj.job='7'; 
     break; 
  } 
  case 'Laborers': { 
    this.customerObj.job='8'; 
     break; 
  } 
  case 'Low-skill Laborers': { 
    this.customerObj.job='9'; 
     break; 
  } 
  case 'Managers': { 
    this.customerObj.job='10'; 
     break; 
  } 
  case 'Medicine staff': { 
    this.customerObj.job='11'; 
     break; 
  } 
  case 'Private service staff': { 
    this.customerObj.job='12'; 
     break; 
  } 
  case 'Realty agents': { 
    this.customerObj.job='13'; 
     break; 
  } 
  case 'Sales staff': { 
    this.customerObj.job='14'; 
     break; 
  } 
  case 'Secretaries': { 
    this.customerObj.job='15'; 
     break; 
  } 
  case 'Security staff': { 
    this.customerObj.job='16'; 
     break; 
  } 
  case 'Waiters/barmen staff': { 
    this.customerObj.job='17'; 
     break; 
  } 
} 
switch(this.customerObj.status) { 
  case '0':{ 
    this.customerObj.status='0'; 
     break; 
  } 
  case '1': { 
    this.customerObj.status='1'; 
     break; 
  } 
  case '2': { 
    this.customerObj.status='2'; 
     break; 
  } 
  case '5': { 
    this.customerObj.status='3'; 
     break; 
  } 
  case 'C': { 
    this.customerObj.status='4'; 
     break; 
  } 
  case 'X': { 
    this.customerObj.status='5'; 
     break; 
  } 
} 
this.check();


  
  }

  check(){
    this.classifyService.classify(this.customerObj).subscribe(
      res=>{
              
        if (res=='0')
          this.customerObj.target='Approve';
        else
          this.customerObj.target='Not Approve';
        
      this.data.addCustomer(this.customerObj);
      this.resetForm();
      }
    )
    
  }



  
}
