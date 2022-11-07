/**
 * Преобразование объекта в строку
 * @param obj преобразуемый объект
 * @returns 
 */
function objToString (obj:any){
    var sstr = "{";

    var first = true;
    for(var k in obj){

        if(first){
            first = false;
        }else{
            sstr += ',';
        }

        if(obj[k] === null){
            sstr += '"'+k+'":null'
        } else if('object' == typeof obj[k]){
            sstr += '"'+k+'":' + objToString(obj[k])
        }else if('undefined'== typeof obj[k]){
            //
        }else if('string'== typeof obj[k]){
            sstr += '"'+k+'":"' + obj[k].replaceAll('"', '\\"') + '"'
        }else{
            sstr += '"'+k+'":' + obj[k]
        }
    }
    sstr += "}"
    return sstr;
}

/**
 * Преобразование объекта типов WSQuery или WSResult в строку перед отправкой посредствам сокетов
 * @param obj 
 * @returns 
 */
export function WSStr(obj: IWSQuery|IWSResult):string{
    return objToString(obj);
}





/**
 * Описание типа запроса на сервер (WebSocket)
 */
export interface IWSQuery {
    cmd:string
}

/**
 * Класс запроса на сервер (WebSocket)
 */
export class WSQuery implements IWSQuery{
    cmd = '';
    constructor(_cmd?:string){
        this.cmd = _cmd || '';
    }
}





/**
 * Описание типа ответа с сервера (WebSocket)
 */
export interface IWSResult {
    cmd:string,
    error:string,
    data: any[]
}

/**
 * Класс ответа с сервера (WebSocket)
 */
export class WSResult implements IWSResult{
    cmd:string = '';
    error:string = null;
    data:any[] = null;
    constructor(_cmd?:string){
        this.cmd = _cmd || '';
        this.data = new Array();
    }
}



