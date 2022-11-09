"use strict";
exports.__esModule = true;
exports.sessions_table = void 0;
exports.sessions_table = {
    sql: "\n    DROP TABLE IF EXISTS sessions;\n    CREATE TABLE sessions (\n        id          BIGSERIAL NOT NULL PRIMARY KEY,\n        uid          BIGINT DEFAULT(0),\n        expires       TIMESTAMP NULL,\n        created_at       TIMESTAMP DEFAULT(CURRENT_TIMESTAMP),\n        sess_code       VARCHAR(250) DEFAULT('')\n        sess_data       JSON DEFAULT({\"data:[]\"})\n    );\n\n    COMMENT ON TABLE sessions IS '\u0421\u0435\u0441\u0441\u0438\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439';\n    COMMENT ON COLUMN sessions.uid IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F';\n    COMMENT ON COLUMN sessions.expires IS '\u041A\u043E\u043D\u0435\u0447\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0436\u0438\u0437\u043D\u0438 \u0441\u0435\u0441\u0441\u0438\u0438 ';\n    COMMENT ON COLUMN sessions.created_at IS '\u0412\u0440\u0435\u043C\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0437\u0430\u043F\u0438\u0441\u0438';\n    COMMENT ON COLUMN sessions.sess_code IS '\u041A\u043E\u0434 \u0441\u0435\u0441\u0441\u0438\u0438';\n    COMMENT ON COLUMN sessions.sess_data IS '\u0414\u0430\u043D\u043D\u044B\u0435 \u0441\u0435\u0441\u0441\u0438\u0438 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 json \u0442\u0438\u043F\u0430 \u043A\u043B\u044E\u0447 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435';\n    ",
    args: new Array()
};
//# sourceMappingURL=sessins.js.map