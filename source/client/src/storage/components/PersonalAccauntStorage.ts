import { observable, action, computed, makeAutoObservable } from 'mobx';

import { IWSQuery, WSQuery, IWSResult } from '../../../../xcore/WSQuery';
import { WSocket } from '../WSocket';

export class PersonalAccauntStorage{

    @observable PersonalAccaunt: boolean = false; 

    @observable change_Sname:string = '';
    @observable change_Name:string = '';
    @observable change_Pname:string = '';
    // APP_STORAGE.auth_form.user.family
    
    constructor(){
        makeAutoObservable(this);
    }

    @action setPersonalAccaunt(val:boolean){ this.PersonalAccaunt = val; } 
    @computed getPersonalAccaunt():boolean{ return this.PersonalAccaunt; } 

    @action setСhangeSurname(val:string){ this.change_Sname = val; }
    @computed getСhangeSurname():string{ return this.change_Sname; } 

    @action setChangeName(val:string){ this.change_Name = val; }
    @computed getСhangeName():string{ return this.change_Name; } 

    @action setChangePName(val:string){ this.change_Pname = val; }
    @computed getСhangePName():string{ return this.change_Pname; } 

    async change_Surnameh(){
        var q:IWSQuery = new WSQuery("Change_Personal_Fields");
        q.args = { change_Sname: this.getСhangeSurname(), change_Name:this.getСhangeName(), change_Pname:this.getСhangePName() };
        (await WSocket.get()).send(q);
    }

}
