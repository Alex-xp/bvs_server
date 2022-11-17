import { observable, action, computed, makeAutoObservable } from 'mobx';

import { IWSQuery, WSQuery, IWSResult } from '../../../../xcore/WSQuery';
import { WSocket } from '../WSocket'; 

export class PersonalAccauntStorage{

  
    @observable PersonalAccaunt: boolean = false; 

    @observable family:string = '';
    @observable name:string = '';
    @observable father:string = '';
    @observable telephone:string = null;
    @observable old_password:string = null;
    @observable new_password:string=null;
    @observable email:string=null;
    @observable info:string=null;
    
    constructor(){
        makeAutoObservable(this);
    }

   
    @action setPersonalAccaunt(val:boolean){ this.PersonalAccaunt = val; } 
    @computed getPersonalAccaunt():boolean{ return this.PersonalAccaunt; } 

    @action setFamily(val:string){ this.family = val; }
    @computed getFamily():string{ return this.family; } 

    @action setName(val:string){ this.name = val; }
    @computed getName():string{ return this.name; } 

    @action setFather(val:string){ this.father = val; }
    @computed getFather():string{ return this.father; } 

    @action setTelephone(val:string){ this.telephone = val; }
    @computed getTelephone():string{ return this.telephone; }

    @action setOld_Pass(val:string){ this.old_password = val; }
    @computed getOld_Pass():string{ return this.old_password; }
     
    @action setNew_Pass(val:string){ this.new_password = val; }
    @computed getNew_Pass():string{ return this.new_password; }

    @action setEmail(val:string){ this.email = val; }
    @computed getEmail():string{ return this.email; }

    @action setInfo(val:string){ this.info = val; }
    @computed getInfo():string{ return this.info; }


    async set_CUserData(){
        var q:IWSQuery = new WSQuery("set_CUserData");
        q.args = { family: this.getFamily(), 
                    name:this.getName(), 
                    father:this.getFather(),
                    telephone:this.getTelephone(),
                    old_password:this.getOld_Pass(),
                    new_password:this.getNew_Pass(),
                    email:this.getEmail(),
                    info:this.getInfo()
                 };
        (await WSocket.get()).send(q);
    }
 
}
