/**
 * The purpose of this class is to emulate the behavior of the PhotoSwipeLightbox
 * to provide the ability to use plugins
 */
export default class PhotoSwipeLightboxStub {
  constructor(pswp) {
    this.pswp = pswp;
    this.on = pswp.on.bind(pswp);
    this.off = pswp.off.bind(pswp);
    this.dispatch = pswp.dispatch.bind(pswp);
  }
}