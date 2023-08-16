"use strict";
// @flow strict
Object.defineProperty(exports, "__esModule", { value: true });
function getClosestTransformedParent(el) {
    do {
        const style = window.getComputedStyle(el);
        if (style.transform !== 'none' || style.webkitTransform !== 'none')
            return el;
        // @ts-expect-error - this is fine we don't need a new variable
        el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
}
exports.default = getClosestTransformedParent;
