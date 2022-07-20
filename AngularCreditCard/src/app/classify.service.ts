
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './model/customer';

@Injectable({
  providedIn: 'root'
})
export class ClassifyService {
  private url="https://vrwn1vd3k0.execute-api.us-east-1.amazonaws.com/beta";


  classify(customer:Customer ){
    let json={
      "AMT_INCOME_TOTAL": customer.income_total.toString(),
      "DAYS_BIRTH": customer.days_birth.toString(),
      "DAYS_EMPLOYED": customer.days_employed.toString(),
      "CODE_GENDER": customer.gender,
      "FLAG_OWN_CAR": customer.own_car_string,
      "FLAG_OWN_REALTY":customer.own_realty_string,
      "CNT_CHILDREN": customer.cnt_children,
      "NAME_EDUCATION_TYPE":customer.education_type,
      "NAME_FAMILY_STATUS": customer.family_status,
      "NAME_HOUSING_TYPE": customer.housing_type,
      "FLAG_MOBIL": customer.mobil_string,
      "FLAG_WORK_PHONE": customer.work_phone_string,
      "FLAG_PHONE": customer.flag_phone_string,
      "FLAG_EMAIL": customer.flag_email_string,
      "JOB":customer.job,
      "STATUS": customer.status

    }
    let body = JSON.stringify(json);
    return this.http.post<any>(this.url,body).pipe(
      map(res => {
        let final=res.body;
        final = final.replace(['"'],'');
        return final;
      })
    )
  }
  constructor(private http:HttpClient) { }
}
