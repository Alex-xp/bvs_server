"use strict";
exports.__esModule = true;
exports.WSResult = exports.WSQuery = exports.WSStr = void 0;
function objToString(obj) {
    var sstr = "{";
    var first = true;
    for (var k in obj) {
        if (first) {
            first = false;
        }
        else {
            sstr += ',';
        }
        if (obj[k] === null) {
            sstr += '"' + k + '":null';
        }
        else if ('object' == typeof obj[k]) {
            sstr += '"' + k + '":' + objToString(obj[k]);
        }
        else if ('undefined' == typeof obj[k]) {
        }
        else if ('string' == typeof obj[k]) {
            sstr += '"' + k + '":"' + obj[k].replaceAll('"', '\\"') + '"';
        }
        else {
            sstr += '"' + k + '":' + obj[k];
        }
    }
    sstr += "}";
    return sstr;
}
function WSStr(obj) {
    return objToString(obj);
}
exports.WSStr = WSStr;
var WSQuery = (function () {
    function WSQuery(_cmd) {
        this.cmd = '';
        this.cmd = _cmd || '';
    }
    return WSQuery;
}());
exports.WSQuery = WSQuery;
var WSResult = (function () {
    function WSResult(_cmd) {
        this.cmd = '';
        this.error = null;
        this.data = null;
        this.cmd = _cmd || '';
        this.data = new Array();
    }
    return WSResult;
}());
exports.WSResult = WSResult;
//# sourceMappingURL=WSQuery.js.map