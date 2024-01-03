declare module 'imagesloaded' {
    function imagesLoaded(element: Element | NodeList | Array<Element> | string): ImagesLoaded;

    interface ImagesLoaded {
        on(event: string, listener: Function): void;
    }

    export = imagesLoaded;
}