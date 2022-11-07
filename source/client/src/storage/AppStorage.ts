import { observable, action, computed, makeAutoObservable} from 'mobx';
import { IWSResult } from '../../../xcore/WSQuery';
import { PageStorage } from './PageStorage';
import { ProjectsStorage } from './ProjectsStorage';
import { WSocket } from './WSocket';


class AppStorage {
    @observable main:PageStorage = null;
    @observable projects:ProjectsStorage = null;

    constructor(){
        this.main = new PageStorage();
        this.projects = new ProjectsStorage();

        makeAutoObservable(this);

        //WSocket.get();
    }

    @action async onWSData(dt:IWSResult){
        console.log("SOCKET RESULT", dt);
        switch(dt.cmd){
            case('get_all_projects'):{
                this.projects.projects = dt.data;
            }break;
            default: {} break;
        }
    }

};

export const APP_STORAGE:AppStorage = new AppStorage();

