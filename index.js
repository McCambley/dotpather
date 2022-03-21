"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dotpath(str) {
    let parts = str.split(".");
    let len = parts.length;
    return function parse(obj) {
        let testKey;
        for (let i = 0; i < len; ++i) {
            testKey = parts[i];
            if (!obj)
                return;
            obj = obj[testKey];
        }
        return obj;
    };
}
exports.default = dotpath;
