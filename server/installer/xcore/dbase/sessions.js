"use strict";
exports.__esModule = true;
exports.SessionsEntity = void 0;
var SessionsEntity = (function () {
    function SessionsEntity() {
        this.id = 0;
        this.uid = 0;
        this.expires = null;
        this.created_at = new Date(Date.now());
        this.sess_code = '';
        this.sess_data = { "data": [] };
    }
    return SessionsEntity;
}());
exports.SessionsEntity = SessionsEntity;
//# sourceMappingURL=sessions.js.map