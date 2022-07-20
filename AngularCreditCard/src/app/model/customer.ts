import { NumberFormatStyle } from "@angular/common";

export interface Customer {
    id: string,
    full_name:string,
    email:string,
    mobile:string,
    customer_id:string,
    gender:string;
    gender_code:string;
    own_car:boolean;
    own_car_string:string;
    own_realty:boolean;
    own_realty_string:string;
    cnt_children:string;
    income_total:number;
    education_type:string;
    family_status:string;
    housing_type:string;
    days_birth:number;
    birthdate:Date;
    employdate:Date;
    days_employed:number;
    mobil:boolean;
    mobil_string:string;
    work_phone:boolean;
    work_phone_string:string;
    flag_phone:boolean;
    flag_phone_string:string;
    flag_email:boolean;
    flag_email_string:string;
    job:string;
    begin_months:number;
    status:string;
    target:string;

    


}
