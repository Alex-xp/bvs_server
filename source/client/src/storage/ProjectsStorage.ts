import { observable, action, computed, makeAutoObservable} from 'mobx';
import { WSocket } from './WSocket';

import { IWSQuery, WSQuery } from '../../../xcore/WSQuery';


export class ProjectsStorage{
    constructor(){
        makeAutoObservable(this);
    }

    async getProjects(){
        var sock = await WSocket.get();
        var q:IWSQuery = new WSQuery('get_all_projects');
        sock.send(q);
    }
}
