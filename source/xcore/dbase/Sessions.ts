import { DBase, getDB } from "./DBase";


export class SessionsEntity{
    id:number = 0;
    uid:number = 0;
    expires:Date = null;
    created_at:Date =  new Date(Date.now());
    sess_code:string = '';
    sess_data:Object = {"data":[]};

    constructor(){}
}
