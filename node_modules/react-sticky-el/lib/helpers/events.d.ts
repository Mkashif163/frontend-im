type Callback = (e: Event) => void;
type Listenable = Element | Window | Document;
/**
 * Subscribe cb to events list
 * @param  {HTMLListenable}   el       target element
 * @param  {Array}         events   array of event names
 * @param  {Function} cb   callback that should be called
 */
export declare function listen(el: Listenable, events: string[], cb: Callback): void;
/**
 * Unsubscribe cb from events list
 * @param  {HTMLListenable}   el       target element
 * @param  {Array}         events   array of event names
 * @param  {Function} cb   callback that should be unsubscribed
 */
export declare function unlisten(el: Listenable | Window | Document, events: string[], cb: Callback): void;
export {};
