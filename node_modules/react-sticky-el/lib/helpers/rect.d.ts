export type Rect = {
    top: number;
    left: number;
    bottom: number;
    height: number;
    width: number;
    right: number;
};
export declare const infiniteRect: Rect;
export declare function getRect(el: Element | Window | Document): Rect;
export declare function isIntersecting(r1: Rect, r2: Rect, topOffset: number, bottomOffset: number): boolean;
