"use strict";
// @flow strict
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIntersecting = exports.getRect = exports.infiniteRect = void 0;
exports.infiniteRect = { top: -Infinity, bottom: Infinity, height: Infinity, left: -Infinity, right: Infinity, width: Infinity };
function getRect(el) {
    if (el && ('getBoundingClientRect' in el) && typeof (el.getBoundingClientRect) === 'function') {
        return el.getBoundingClientRect();
    }
    if (el === window || el === document) {
        return {
            top: 0,
            left: 0,
            bottom: window.innerHeight,
            height: window.innerHeight,
            width: window.innerWidth,
            right: window.innerWidth
        };
    }
    return { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 };
}
exports.getRect = getRect;
function isIntersecting(r1, r2, topOffset, bottomOffset) {
    const r1Top = r1.top + topOffset, r1Bottom = r1.bottom + bottomOffset;
    return (r1Top >= r2.top && r1Top <= r2.bottom)
        || (r1Bottom >= r2.top && r1Bottom <= r2.bottom)
        || (r1Bottom >= r2.bottom && r1Top <= r2.top);
}
exports.isIntersecting = isIntersecting;
