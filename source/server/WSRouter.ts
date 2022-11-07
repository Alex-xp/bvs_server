import WebSocket from 'ws';
import { IWSQuery, IWSResult, WSResult, WSStr } from '../xcore/WSQuery';

//import { ProjectsTable } from '../xcore/dbase/ProjectsTable';

export async function WSRoute(_ws:WebSocket, q:IWSQuery){
    // начало - создание ответа
    var wsres:IWSResult = new WSResult(q.cmd);

    // обработка данных
    switch(q.cmd){

        case 'get_all_projects':{
            //var pt = new ProjectsTable();
            //wsres.data = await pt.selectAll();
            wsres.error = `Команда "${q.cmd}" !!!`;
        }break;

        default:{
            wsres.error = `Команда "${q.cmd}" не распознана`;
        }break;

    }

    // финал - отправка ответа
    _ws.send(WSStr(wsres));
}



