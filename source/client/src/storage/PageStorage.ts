import { observable, action, computed, makeAutoObservable} from 'mobx';


export class PageStorage{
    @observable title:string = '';

    constructor(){
        this.title = '';

        makeAutoObservable(this);
    }

    @action setTitle(_title:string){ this.title = _title; }
    @computed getTitle():string{ return this.title }
}
