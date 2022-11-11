import { observable, action, computed, makeAutoObservable } from 'mobx';
import { UsersEntity } from '../../../../xcore/dbase/Users';
import { IWSQuery, WSQuery, IWSResult } from '../../../../xcore/WSQuery';
import { APP_STORAGE } from '../AppStorage';
import { WSocket } from '../WSocket';
import {getCookie , setCookie, deleteCookie }  from '../browserCookes';


export class AuthFormStorage{

    @observable login: string = '';
    @observable password:string = '';
    
    @observable user: UsersEntity = null;

    constructor(){
        makeAutoObservable(this);
    }

    @action setLogin(val:string){ this.login = val; }
    @computed getLogin():string{ return this.login; }

    @action setPassword(val:string){ this.password = val; }
    @computed getPassword():string{ return this.password; }

    @action setUser(u:UsersEntity){ this.user = u; }
    @computed getUser():UsersEntity{ return this.user; }

    async get_UserByAuth(){
        var q:IWSQuery = new WSQuery("get_UserByAuth");
        q.args = { login: this.getLogin(), password:this.getPassword() };
        (await WSocket.get()).send(q);
    }


    setUserWS(dt: IWSResult){
        if(dt.error !== null && dt.error.trim() !== ''){}
        var data:UsersEntity[] = new Array();
        for(var key in dt.data) data.push( dt.data[key] );

        if(data.length > 0){
            if(data[0].id > 0){
                // СОХРАНИТЬ ПОЛЬЗОВАТЕЛЯ В ХРАНИЛИЩЕ ДАННЫХ КАК ТЕКУЩЕГО ПОЛЬЗОВАТЕЛЯ СИСТЕМЫ !!!!!!!
                setCookie('sess_id', dt.code);
                this.setUser(data[0]);
            }
        }
    }

    onGetUserByAuth(dt: IWSResult){
        this.setUserWS(dt);
    }


    onGetUserBySessionCode(dt: IWSResult){
        this.setUserWS(dt);
    }


}
