"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.users_roles = exports.insert_admin = exports.users_table = void 0;
var crypto_1 = __importDefault(require("crypto"));
var config_1 = require("../../xcore/config");
exports.users_table = {
    sql: "\n    DROP TABLE IF EXISTS users;\n    CREATE TABLE users (\n        id          BIGSERIAL NOT NULL PRIMARY KEY,\n        login       VARCHAR(250) NOT NULL DEFAULT(''),\n        password    VARCHAR(250) NOT NULL DEFAULT(''),\n        info        TEXT NOT NULL DEFAULT('')\n    );\n    \n    COMMENT ON TABLE users IS '\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u044B';\n    COMMENT ON COLUMN users.id IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F';\n    COMMENT ON COLUMN users.login IS '\u041B\u043E\u0433\u0438\u043D \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F';\n    COMMENT ON COLUMN users.password IS '\u041F\u0430\u0440\u043E\u043B\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F';\n    COMMENT ON COLUMN users.info IS '\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F';\n    ",
    args: new Array()
};
exports.insert_admin = {
    sql: "INSERT INTO users(\"login\", \"password\", \"info\") VALUES ($1, $2, $3)",
    args: ['admin', crypto_1["default"].createHmac('sha256', config_1.CONFIG.key_code).update('admin').digest('hex'), 'admin']
};
exports.users_roles = {
    sql: "\n    DROP TABLE IF EXISTS users_roles;\n    ",
    args: new Array()
};
//# sourceMappingURL=users.js.map