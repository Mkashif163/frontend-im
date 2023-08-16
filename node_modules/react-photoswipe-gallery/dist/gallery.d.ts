import PhotoSwipe from 'photoswipe';
import type { PhotoSwipeOptions, UIElementData } from 'photoswipe';
import { FC, ReactNode } from 'react';
import PhotoSwipeLightboxStub from './lightbox-stub';
export interface GalleryProps {
    children?: ReactNode;
    /**
     * PhotoSwipe options
     *
     * https://photoswipe.com/options/
     */
    options?: PhotoSwipeOptions;
    /**
     * Function for registering PhotoSwipe plugins
     *
     * You should pass `photoswipeLightbox` to each plugin constructor
     */
    plugins?: (photoswipeLightbox: PhotoSwipeLightboxStub) => void;
    /**
     * Array of configuration objects for custom UI elements
     *
     * Use it for adding custom UI elements
     *
     * https://photoswipe.com/adding-ui-elements
     */
    uiElements?: UIElementData[];
    /**
     * Gallery ID, for hash navigation
     */
    id?: string | number;
    /**
     * Triggers before PhotoSwipe.init() call
     *
     * Use it for accessing PhotoSwipe API
     *
     * https://photoswipe.com/events/
     * https://photoswipe.com/filters/
     * https://photoswipe.com/methods/
     */
    onBeforeOpen?: (photoswipe: PhotoSwipe) => void;
    /**
     * Triggers after PhotoSwipe.init() call
     *
     * Use it for accessing PhotoSwipe API
     *
     * https://photoswipe.com/events/
     * https://photoswipe.com/filters/
     * https://photoswipe.com/methods/
     */
    onOpen?: (photoswipe: PhotoSwipe) => void;
    /**
     * Enables built-in caption display
     *
     * Use the `caption` prop of the Item component to control caption text
     *
     * https://photoswipe.com/caption/
     */
    withCaption?: boolean;
    /**
     * Adds UI control for downloading the original image of the current slide
     *
     * https://photoswipe.com/adding-ui-elements/#adding-download-button
     */
    withDownloadButton?: boolean;
}
/**
 * Gallery component providing photoswipe context
 */
export declare const Gallery: FC<GalleryProps>;
