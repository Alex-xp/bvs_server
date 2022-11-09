import { DBase, getDB } from "./DBase";


export class UsersEntity{
    id:number = 0;
    login:string = '';
    password:string = '';
    family:string = '';
    name:string = '';
    father:string = '';
    telephone:string  = '';
    email:string='';
    org_id:number = 0;
    job_title_id:number = 0;
    roles_ids:Object = {};
    user_data:Object = {};
    mail_code:string = '';
    act_mail:boolean = false;
    re_password_code:string = '';
    deleted:boolean = false;
    deleted_date:Date = null;
    created_at:Date =  new Date(Date.now());
    info:string = '';

    constructor(){}
}