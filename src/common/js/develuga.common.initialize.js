(() => {
    window.develuga = window.develuga || {};
    window.develuga.common = window.develuga.common || {};

    const ua = navigator.userAgent;
    const isWebkit = (/applewebkit/i).test(ua);
    const isChromeBrowser = (/chrome/i).test(ua);
    const isFireFoxBroser = (/firefox/i).test(ua);
    const isOperaBrowser = (/opr/i).test(ua);
    const isEdgeBroswer = (/edg/i).test(ua);
    const isWhaleBroswer = (/whale/i).test(ua);
    const isSafariBroswer = (/version/i).test(ua);

    const isAos = (/android/i).test(ua);
    const isAosSamsungBrowser = (/samsungbrowser/i).test(ua);
    const isIos = (/ip(ad|hone|od)/i).test(ua);
    const isIosChromeBrowser = (/crios/i).test(ua);
    const isIosFirefoxBrowser = (/fxios/i).test(ua);

    const utils = {
        checkOS: (() => {
            let os = (navigator.appVersion).match(/(mac|win|linux)/i);
            os = os ? os[1].toLowerCase() : '';
            os && document.documentElement.classList.add(os);
        })(),
        isTouchDevice: (function () {
            const checkDevice = ('ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch));
            document.documentElement.classList.add(checkDevice ? 'isTouchDevice' : 'isNotTouchDevice');
            return checkDevice;
        })(),
        isChromeBrowser: (() => {
            isChromeBrowser && !isOperaBrowser && !isEdgeBroswer && !isWhaleBroswer && !isAosSamsungBrowser && document.documentElement.classList.add('chrome');
        })(),
        isFireFoxBroswer: (() => {
            isFireFoxBroser && document.documentElement.classList.add('firefox');
        })(),
        isOperaBroswer: (() => {
            isOperaBrowser && document.documentElement.classList.add('opera');
        })(),
        isEdgeBroswer: (() => {
            isEdgeBroswer && document.documentElement.classList.add('edge');
        })(),
        isWhaleBroswer: (() => {
            isWhaleBroswer && document.documentElement.classList.add('whale');
        })(),
        isSafariBroswer: (() => {
            isSafariBroswer && isWebkit && !isChromeBrowser && document.documentElement.classList.add('safari');
        })(),
        isAosDevice: (() => {
            isAos && document.documentElement.classList.add('android');
        })(),
        isAosSamsungBrowser: (() => {
            isAosSamsungBrowser && document.documentElement.classList.add('samsungbrowser');
        })(),
        isIosDevice: (() => {
            isIos && document.documentElement.classList.add('ios');
        })(),
        isIosChromeBrowser: (() => {
            isIosChromeBrowser && document.documentElement.classList.add('chrome');
        })(),
        isIosFirefoxBrowser: (() => {
            isIosFirefoxBrowser && document.documentElement.classList.add('firefox');
        })()
    };

    window.develuga.common.utils = utils;
})();