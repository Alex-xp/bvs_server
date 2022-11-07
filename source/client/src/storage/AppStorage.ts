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

    async onWSData(dt:IWSResult){
        console.log("SOCKET RESULT", dt);
    }

};

export const APP_STORAGE:AppStorage = new AppStorage();

