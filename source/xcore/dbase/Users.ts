import { DBase, getDB } from "./DBase";
import crypto from 'crypto';
import { CONFIG } from '../../xcore/config';

import { SessionsTable } from '../dbase/Sessions';


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

    _sess_code:string='';

    constructor(){}
}

export class UserTable{
    db:DBase;
    args:any;
    constructor(_args:any){
        this.db = getDB();
        this.args = _args;
    }

    async selectUser():Promise<UsersEntity[]>{
        var db_res = await this.db.query("SELECT * FROM SelectUser ('"+this.args.login+"', '"+crypto.createHmac('sha256', CONFIG.key_code).update(this.args.password).digest('hex')+"')");
        var result:UsersEntity[] = new Array();
        for(var r in db_res.rows)
        {
            result.push(db_res.rows[r]);
        }
        return result; 
    }
}