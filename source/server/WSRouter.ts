import WebSocket from 'ws';
import { IWSQuery, IWSResult, WSResult, WSStr } from '../xcore/WSQuery';

//import { ProjectsTable } from '../xcore/dbase/ProjectsTable';
import { SessionsTable } from '../xcore/dbase/Sessions';
import { UserTable } from '../xcore/dbase/Users';

export async function WSRoute(_ws: WebSocket, q: IWSQuery) {
    // начало - создание ответа
    var wsres: IWSResult = new WSResult(q.cmd);

    var sess_code;
    var data;


    // обработка данных
    switch (q.cmd) {

        case 'get_UserBySessionCode': {
            var st = new SessionsTable(q.args);
            var ut = new UserTable(q.args);
            var code = await st.selectSessCode();
            data = await ut.selectUserBySessCode();

            if (code[0] == undefined) {
                wsres.error = "Данного кода сессии не существует";
            }
            else {
                sess_code = code[0].sess_code;
                wsres.code = sess_code;
                wsres.data = data;
            }
        } break;

        case 'get_UserByAuth': {
            var ut = new UserTable(q.args);
            var st = new SessionsTable(q.args);
            // Авторизация по логину и паролю
            sess_code = await st.insertSess();
            //Генерация кода сессии, запись в бд
            data = await ut.selectUser();

            if (sess_code === '' && data[0] === undefined) { wsres.error = "Пользователя не существует или введены не верные данные"; }
            else {
                wsres.code = sess_code;
                wsres.data = data;
            }
        } break;


        default: {
            wsres.error = `Команда "${q.cmd}" не распознана`;
        } break;

    }

    // финал - отправка ответа
    _ws.send(WSStr(wsres));
}



