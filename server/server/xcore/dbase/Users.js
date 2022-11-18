"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.UserTable = exports.UsersEntity = void 0;
var DBase_1 = require("./DBase");
var crypto_1 = __importDefault(require("crypto"));
var config_1 = require("../../xcore/config");
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
var UserTable = (function () {
    function UserTable(_args, _sess_code) {
        this.db = (0, DBase_1.getDB)();
        this.args = _args;
        this.sess_code = _sess_code;
    }
    UserTable.prototype.selectUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db_res, result, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.db.query("SELECT * FROM SelectUser ('" + this.args.login + "', '" + crypto_1["default"].createHmac('sha256', config_1.CONFIG.key_code).update(this.args.password).digest('hex') + "')")];
                    case 1:
                        db_res = _a.sent();
                        result = new Array();
                        for (r in db_res.rows) {
                            result.push(db_res.rows[r]);
                        }
                        return [2, result];
                }
            });
        });
    };
    UserTable.prototype.selectUserBySessCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db_res, result, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.db.query("SELECT * FROM SelectUserBySessCode ('" + this.args.code + "')")];
                    case 1:
                        db_res = _a.sent();
                        result = new Array();
                        for (r in db_res.rows) {
                            result.push(db_res.rows[r]);
                        }
                        return [2, result];
                }
            });
        });
    };
    UserTable.prototype.updateUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db_res, result, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.db.query("SELECT * FROM UpdateUser('" + this.sess_code + "', '" + this.args.login + "','" +
                            this.args.family + "','" + this.args.name + "','" + this.args.father + "','" + this.args.telephone + "','" + this.args.email + "','" + this.args.info + "')")];
                    case 1:
                        db_res = _a.sent();
                        result = new Array();
                        for (r in db_res.rows) {
                            result.push(db_res.rows[r]);
                        }
                        return [2, result];
                }
            });
        });
    };
    return UserTable;
}());
exports.UserTable = UserTable;
//# sourceMappingURL=Users.js.map