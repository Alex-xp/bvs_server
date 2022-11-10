import { observable, action, computed, makeAutoObservable } from 'mobx';
import { IWSQuery, WSQuery } from '../../../../xcore/WSQuery';
import { APP_STORAGE } from '../AppStorage';
import { WSocket } from '../WSocket';


export class AuthFormStorage{

    @observable login: string = '';
    @observable password:string = '';

    constructor(){
        makeAutoObservable(this);
    }

    @action setLogin(val:string){ this.login = val; }
    @computed getLogin(){ return this.login; }

    @action setPassword(val:string){ this.password = val; }
    @computed getPassword(){ return this.password; }

    async get_UserByAuth(){
        var q:IWSQuery = new WSQuery("get_UserByAuth");
        q.args = { login: this.getLogin(), password:this.getPassword() };
        (await WSocket.get()).send(q);
    }
}
