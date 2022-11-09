"use strict";
exports.__esModule = true;
exports.UsersEntity = void 0;
var UsersEntity = (function () {
    function UsersEntity() {
        this.id = 0;
        this.login = '';
        this.password = '';
        this.family = '';
        this.name = '';
        this.father = '';
        this.telephone = '';
        this.email = '';
        this.org_id = 0;
        this.job_title_id = 0;
        this.roles_ids = {};
        this.user_data = {};
        this.mail_code = '';
        this.act_mail = false;
        this.re_password_code = '';
        this.deleted = false;
        this.deleted_date = null;
        this.created_at = new Date(Date.now());
        this.info = '';
    }
    return UsersEntity;
}());
exports.UsersEntity = UsersEntity;
//# sourceMappingURL=Users.js.map