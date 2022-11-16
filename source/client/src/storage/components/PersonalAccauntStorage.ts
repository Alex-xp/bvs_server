import { observable, action, computed, makeAutoObservable } from 'mobx';


export class PersonalAccauntStorage{

    @observable PersonalAccaunt: boolean = false; //observable определяет отслеживаемое поле, в котором хранится состояние.

    constructor(){
        makeAutoObservable(this);
    }

    @action setPersonalAccaunt(val:boolean){ this.PersonalAccaunt = val; } //устанавливает значение поля - Логин
    @computed getPersonalAccaunt():boolean{ return this.PersonalAccaunt; } //возвращает значение поля - Логин (отмечает геттер)

}
