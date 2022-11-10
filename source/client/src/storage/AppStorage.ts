import { observable, action, computed, makeAutoObservable } from 'mobx';
import { IWSQuery, IWSResult, WSQuery } from '../../../xcore/WSQuery';
import { PageStorage } from './PageStorage';
import { AuthFormStorage } from './components/AuthFormStorage';
import { WSocket } from './WSocket';


/// КУКИ

function getCookie(name: string) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name: string, value: any, options?: Map<string, any>) {

    options.set("path", '/');

    if (options.get("expires") instanceof Date) {
        options.set("expires", options.get("expires").toUTCString());
    } else {
        options.set("expires", new Date(Date.now() + (3600 * 24 * 1000) * 30).toUTCString());
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options.get(optionKey);
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

function deleteCookie(name: string) {
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent('') + ';max-age=-1;';
}



// ********************************************************************************************************************************************************
// ХРАНИЛИЩЕ

class AppStorage {
    @observable main: PageStorage = null;
    @observable auth_form: AuthFormStorage = null;

    

    constructor() {
        this.main = new PageStorage();
        this.auth_form = new AuthFormStorage();

        makeAutoObservable(this);

        // WSocket.get();
    }

    @action async onWSData(dt: IWSResult) {
        console.log("SOCKET RESULT", dt);
        switch (dt.cmd) {
            case ('get_all_projects'): {
                //
            } break;
            default: { } break;
        }
    }

    async get_UserBySessionCode(){
        var ss_code = getCookie('sess_id');
        if(ss_code === undefined) return;

        var q:IWSQuery = new WSQuery('get_UserBySessionCode', { code: ss_code });
        (await WSocket.get()).send(q);

        console.log(q);
    }

};

export const APP_STORAGE: AppStorage = new AppStorage();

