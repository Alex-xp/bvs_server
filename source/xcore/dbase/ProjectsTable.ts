import { DBase, getDB } from "./DBase";

export class CFlags{
    flags:any[] = new Array();

    constructor(){}
}

export class ProjectEntity{
    id:number = 0;
    name:string = '';
    c_flags:CFlags = new CFlags();
    compiller:string = '';
    info:string = '';

    constructor(){}
}

export class ProjectsTable{
    constructor(){}

    async selectAll():Promise<ProjectEntity[]>{
        var db:DBase = getDB();
        var db_res = await db.query("SELECT * FROM projects ORDER BY name");

        var result:ProjectEntity[] = new Array();
        for(var p in db_res.rows){ result.push(db_res.rows[p]); }
        return result;
    }
    
}


