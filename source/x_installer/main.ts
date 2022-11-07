
import { DBase, endDB, getDB } from '../xcore/dbase/DBase';
import { dateTimeToStr } from '../xcore/dbase/DateStr';

import { users_table, insert_admin } from './sql/users';

async function run(){
    var db:DBase = getDB();

    var dt = await db.NOW();
    console.log("START INSTALLER", dateTimeToStr(dt));

    /////
    await db.query(users_table.sql, users_table.args);
    await db.query(insert_admin.sql, insert_admin.args);

    endDB();
    console.log("END INSTALLER");
}

run();
