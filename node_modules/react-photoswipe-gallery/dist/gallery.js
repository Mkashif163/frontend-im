var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import PhotoSwipe from 'photoswipe';
import React, { useRef, useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import sortNodes from "./helpers/sort-nodes.js";
import objectToHash from "./helpers/object-to-hash.js";
import hashToObject from "./helpers/hash-to-object.js";
import getHashWithoutGidAndPid from "./helpers/get-hash-without-gid-and-pid.js";
import getHashValue from "./helpers/get-hash-value.js";
import getBaseUrl from "./helpers/get-base-url.js";
import hashIncludesNavigationQueryParams from "./helpers/hash-includes-navigation-query-params.js";
import getInitialActiveSlideIndex from "./helpers/get-initial-active-slide-index.js";
import { Context } from "./context.js";
import PhotoSwipeLightboxStub from "./lightbox-stub.js";
/**
 * This variable stores the PhotoSwipe instance object
 * It aims to check whether does the PhotoSwipe opened at the moment
 * (analog of window.pswp in 'photoswipe/lightbox')
 */
let pswp = null;
/**
 * Gallery component providing photoswipe context
 */
export const Gallery = ({
  children,
  options,
  plugins,
  uiElements,
  id: galleryUID,
  onBeforeOpen,
  onOpen,
  withCaption,
  withDownloadButton
}) => {
  const [contentPortal, setContentPortal] = useState(null);
  const items = useRef(new Map());
  /**
   * Store PID from hash if there are no items yet,
   * but we need to open photoswipe if items appear in the next render
   */
  const openWhenReadyPid = useRef(null);
  const open = useCallback((targetRef, targetId, itemIndex, e) => {
    // only one photoswipe instance could be opened at once
    // so if photoswipe is already open, function should do nothing
    if (pswp) {
      return;
    }
    let index = itemIndex || null;
    const normalized = [];
    const entries = Array.from(items.current);
    const prepare = (entry, i) => {
      const [ref, _a] = entry,
        {
          width,
          height,
          original,
          originalSrcset,
          thumbnail,
          cropped,
          content,
          id: pid
        } = _a,
        rest = __rest(_a, ["width", "height", "original", "originalSrcset", "thumbnail", "cropped", "content", "id"]);
      if (targetRef === ref || pid !== undefined && String(pid) === targetId) {
        index = i;
      }
      normalized.push(Object.assign(Object.assign(Object.assign({
        w: Number(width),
        h: Number(height),
        src: original,
        srcset: originalSrcset,
        msrc: thumbnail,
        element: ref.current,
        thumbCropped: cropped,
        content
      }, content !== undefined ? {
        type: 'html'
      } : {}), pid !== undefined ? {
        pid
      } : {}), rest));
    };
    if (items.current.size > 1) {
      entries.sort(([{
        current: a
      }], [{
        current: b
      }]) => sortNodes(a, b)).forEach(prepare);
    } else {
      entries.forEach(prepare);
    }
    const initialPoint = e && e.clientX !== undefined && e.clientY !== undefined ? {
      x: e.clientX,
      y: e.clientY
    } : null;
    const instance = new PhotoSwipe(Object.assign({
      dataSource: normalized,
      index: getInitialActiveSlideIndex(index, targetId),
      initialPointerPos: initialPoint
    }, options || {}));
    pswp = instance;
    instance.on('contentActivate', ({
      content: slideContent
    }) => {
      if (slideContent.data.content) {
        setContentPortal(createPortal(slideContent.data.content, slideContent.element));
      } else {
        setContentPortal(null);
      }
    });
    instance.on('close', () => {
      setContentPortal(null);
    });
    if (withDownloadButton) {
      instance.on('uiRegister', () => {
        var _a;
        (_a = instance.ui) === null || _a === void 0 ? void 0 : _a.registerElement({
          name: 'download-button',
          ariaLabel: 'Download',
          order: 8,
          isButton: true,
          tagName: 'a',
          appendTo: 'bar',
          html: {
            isCustomSVG: true,
            inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
            outlineID: 'pswp__icn-download'
          },
          // can't test onInit callback correctly
          onInit: /* istanbul ignore next */(el, pswpInstance) => {
            el.setAttribute('download', '');
            el.setAttribute('target', '_blank');
            el.setAttribute('rel', 'noopener');
            instance.on('change', () => {
              var _a;
              if (!((_a = pswpInstance.currSlide) === null || _a === void 0 ? void 0 : _a.data.src)) {
                return;
              }
              const downloadButton = el;
              downloadButton.href = pswpInstance.currSlide.data.src;
            });
          }
        });
      });
    }
    if (withCaption) {
      instance.on('uiRegister', () => {
        var _a;
        (_a = instance.ui) === null || _a === void 0 ? void 0 : _a.registerElement({
          name: 'default-caption',
          order: 9,
          isButton: false,
          appendTo: 'root',
          // can't test onInit callback correctly
          onInit: /* istanbul ignore next */(el, pswpInstance) => {
            /* eslint-disable no-param-reassign */
            el.style.position = 'absolute';
            el.style.bottom = '15px';
            el.style.left = '0';
            el.style.right = '0';
            el.style.padding = '0 20px';
            el.style.color = 'var(--pswp-icon-color)';
            el.style.textAlign = 'center';
            el.style.fontSize = '14px';
            el.style.lineHeight = '1.5';
            el.style.textShadow = '1px 1px 3px var(--pswp-icon-color-secondary)';
            /* eslint-enable no-param-reassign */
            instance.on('change', () => {
              if (!pswpInstance.currSlide) {
                return;
              }
              const {
                caption,
                alt
              } = pswpInstance.currSlide.data;
              // eslint-disable-next-line no-param-reassign
              el.innerHTML = caption || alt || '';
            });
          }
        });
      });
    }
    if (Array.isArray(uiElements)) {
      uiElements.forEach(uiElement => {
        instance.on('uiRegister', () => {
          var _a;
          (_a = instance.ui) === null || _a === void 0 ? void 0 : _a.registerElement(uiElement);
        });
      });
    }
    if (typeof plugins === 'function') {
      plugins(new PhotoSwipeLightboxStub(instance));
    }
    if (typeof onBeforeOpen === 'function') {
      onBeforeOpen(instance);
    }
    const getHistoryState = () => {
      return {
        gallery: {
          galleryUID
        }
      };
    };
    instance.on('beforeOpen', () => {
      var _a;
      if (galleryUID === undefined) {
        return;
      }
      const hashIncludesGidAndPid = hashIncludesNavigationQueryParams(getHashValue());
      // was openned by react-photoswipe-gallery's open() method call (click on thumbnail, for example)
      // we need to create new history record to store hash navigation state
      if (!hashIncludesGidAndPid) {
        window.history.pushState(getHistoryState(), document.title);
        return;
      }
      const hasGalleryStateInHistory = Boolean((_a = window.history.state) === null || _a === void 0 ? void 0 : _a.gallery);
      // was openned by history.forward()
      // we do not need to create new history record for hash navigation
      // because we already have one
      if (hasGalleryStateInHistory) {
        return;
      }
      // was openned by link with gid and pid
      const baseUrl = getBaseUrl();
      const currentHash = getHashValue();
      const hashWithoutGidAndPid = getHashWithoutGidAndPid(currentHash);
      const urlWithoutOpenedSlide = `${baseUrl}${hashWithoutGidAndPid ? `#${hashWithoutGidAndPid}` : ''}`;
      const urlWithOpenedSlide = `${baseUrl}#${currentHash}`;
      // firstly, we need to modify current history record - set url without gid and pid
      // we will return to this state after photoswipe closing
      window.history.replaceState(window.history.state, document.title, urlWithoutOpenedSlide);
      // then we need to create new history record to store hash navigation state
      window.history.pushState(getHistoryState(), document.title, urlWithOpenedSlide);
    });
    instance.on('change', () => {
      var _a;
      if (galleryUID === undefined) {
        return;
      }
      const pid = ((_a = instance.currSlide) === null || _a === void 0 ? void 0 : _a.data.pid) || instance.currIndex + 1;
      const baseUrl = getBaseUrl();
      const baseHash = getHashWithoutGidAndPid(getHashValue());
      const gidAndPidHash = objectToHash({
        gid: galleryUID,
        pid
      });
      const urlWithOpenedSlide = `${baseUrl}#${baseHash}&${gidAndPidHash}`;
      // updates in current history record hash value with actual pid
      window.history.replaceState(getHistoryState(), document.title, urlWithOpenedSlide);
    });
    const closeGalleryOnHistoryPopState = () => {
      if (galleryUID === undefined) {
        return;
      }
      if (pswp !== null) {
        pswp.close();
      }
    };
    window.addEventListener('popstate', closeGalleryOnHistoryPopState);
    instance.on('destroy', () => {
      if (galleryUID !== undefined) {
        window.removeEventListener('popstate', closeGalleryOnHistoryPopState);
        // if hash includes gid and pid => this destroy was called with ordinary instance.close() call
        // if not => destroy was called by history.back (browser's back button) => history has been already returned to previous state
        if (hashIncludesNavigationQueryParams(getHashValue())) {
          window.history.back();
        }
      }
      pswp = null;
    });
    instance.init();
    if (typeof onOpen === 'function') {
      onOpen(instance);
    }
  }, [options, plugins, uiElements, galleryUID, onBeforeOpen, onOpen, withCaption, withDownloadButton]);
  useEffect(() => {
    return () => {
      if (pswp) {
        pswp.close();
      }
    };
  }, []);
  const openGalleryBasedOnUrlHash = useCallback(() => {
    if (galleryUID === undefined) {
      return;
    }
    if (pswp !== null) {
      return;
    }
    const hash = getHashValue();
    if (hash.length < 5) {
      return;
    }
    const params = hashToObject(hash);
    const {
      pid,
      gid
    } = params;
    if (!pid || !gid) {
      return;
    }
    if (items.current.size === 0) {
      // no items currently, save PID from hash for future use
      openWhenReadyPid.current = pid;
      return;
    }
    if (pid && gid === String(galleryUID)) {
      open(null, pid);
    }
  }, [open, galleryUID]);
  useEffect(() => {
    openGalleryBasedOnUrlHash();
    // needed for case when gallery was firstly opened, then was closed and user clicked on browser's forward button
    window.addEventListener('popstate', openGalleryBasedOnUrlHash);
    return () => {
      window.removeEventListener('popstate', openGalleryBasedOnUrlHash);
    };
  }, [openGalleryBasedOnUrlHash]);
  const remove = useCallback(ref => {
    items.current.delete(ref);
  }, []);
  const set = useCallback((ref, data) => {
    const {
      id
    } = data;
    items.current.set(ref, data);
    if (openWhenReadyPid.current === null) {
      return;
    }
    if (id === openWhenReadyPid.current) {
      // user provided `id` prop of Item component
      open(ref);
      openWhenReadyPid.current = null;
      return;
    }
    if (!id) {
      // in this case we using index of item as PID
      const index = parseInt(openWhenReadyPid.current, 10) - 1;
      const refToOpen = Array.from(items.current.keys())[index];
      if (refToOpen) {
        open(refToOpen);
        openWhenReadyPid.current = null;
      }
    }
  }, [open]);
  const openAt = useCallback(index => {
    open(null, null, index);
  }, [open]);
  const contextValue = useMemo(() => ({
    remove,
    set,
    handleClick: open,
    open: openAt
  }), [remove, set, open, openAt]);
  return React.createElement(Context.Provider, {
    value: contextValue
  }, children, contentPortal);
};
Gallery.propTypes = {
  children: PropTypes.any,
  options: PropTypes.object,
  plugins: PropTypes.func,
  uiElements: PropTypes.array,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onBeforeOpen: PropTypes.func,
  onOpen: PropTypes.func,
  withCaption: PropTypes.bool,
  withDownloadButton: PropTypes.bool
};