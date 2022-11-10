import WebSocket from 'ws';
import { IWSQuery, IWSResult, WSResult, WSStr } from '../xcore/WSQuery';

//import { ProjectsTable } from '../xcore/dbase/ProjectsTable';
import { SessionsTable } from '../xcore/dbase/Sessions';
import { UserTable } from '../xcore/dbase/Users';

export async function WSRoute(_ws:WebSocket, q:IWSQuery){
    // начало - создание ответа
    var wsres:IWSResult = new WSResult(q.cmd);

    console.log(q);

    // обработка данных
    switch(q.cmd){
       
        case 'get_UserBySessionCode':{
            var st = new SessionsTable(q.args.data);
            wsres.data = await st.selectSess();
        }
        break;

        case 'get_UserByAuth':{
            var ut = new UserTable(q.args);
            var st = new SessionsTable(q.args);
            // Авторизация по логину и паролю
            wsres.code = await st.insertSess();
            //Генерация кода сессии, запись в бд
            wsres.data = await ut.selectUser();
        }
        break;

        default:{
            wsres.error = `Команда "${q.cmd}" не распознана`;
        }break;

    }

    // финал - отправка ответа
    _ws.send(WSStr(wsres));
}



