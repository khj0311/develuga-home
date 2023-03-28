import gsap from 'gsap';

const scrollController = (option) => {
    let options = option ? option : {};
    let speed = options.speed ? options.speed : 120;
    let duration = options.duration >= 0 ? options.duration : 1

    let targetElement = document.scrollingElement || document.documentElement || document.body.parentNode || document.body;
    let scrollSize = targetElement.scrollTop;
    let maxScrollSize;
    let frameElement = targetElement === document.body && document.documentElement ? document.documentElement : targetElement;
    let moveState = false;
    let scrollTiming = null;

    const init = () => {
        bindEvents.wheel();
        bindEvents.scroll();
    };

    const bindEvents = {
        wheel: function () {
            document.addEventListener('wheel', function (e) {
                if (eventList.hasScrollBox(e.target)) return;
                eventList.scrollEvent(e);
            }, {
                passive: false
            });
        },
        scroll: function () {
            window.addEventListener('scroll', function (e) {
                if (document.documentElement.style.overflow === 'hidden') return;
                if (eventList.hasScrollBox(e.target)) return;

                if (!moveState) {
                    scrollSize = targetElement.scrollTop;
                }
            });
        }
    };

    const eventList = {
        scrollEvent: function (e) {
            e.preventDefault();

            let delta = this.normalizeWheelDelta(e);

            const fixedMoveSpeed = document.body.getAttribute('data-scroll-speed');
            const moveSpeed = options.currDelta && fixedMoveSpeed ? fixedMoveSpeed : (!!!fixedMoveSpeed && !!!speed ? 120 : speed);

            scrollSize = scrollSize + (-delta * moveSpeed);
            maxScrollSize = Math.max(0, Math.min(scrollSize, targetElement.scrollHeight - frameElement.clientHeight));

            this.update();
        },
        normalizeWheelDelta: function (e) {
            if (e.detail) {
                if (e.wheelDelta) {
                    // Opera Browser
                    return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1);
                } else {
                    // Firefox Browser
                    return -e.detail / 3;
                }
            } else {
                // Safari, Chrome
                return e.wheelDelta / 120;
            }
        },
        update: function () {
            let moveRange = (maxScrollSize - targetElement.scrollTop);
            let moveSize = 0 >= Math.ceil(targetElement.scrollTop + moveRange) ? 0 : (scrollSize > maxScrollSize ? maxScrollSize : Math.ceil(targetElement.scrollTop + moveRange));

            moveState = true;

            gsap.to(targetElement, {
                ease: 'power1.out',
                scrollTop: moveSize,
                duration: duration,
                onComplete: function () {
                    clearTimeout(scrollTiming);
                    scrollTiming = null;
                    scrollTiming = setTimeout(function () {
                        moveState = false;
                        scrollSize = targetElement.scrollTop;
                    }, 500);
                }
            });

            if (scrollSize <= 0) {
                scrollSize = 0;
            } else if (scrollSize >= maxScrollSize) {
                scrollSize = maxScrollSize;
            }
        },
        hasScrollBox: function (node) {
            while (node && node !== document.body && node !== document) {
                const overflowNode = window.getComputedStyle(node)['overflow'];
                if (overflowNode && (overflowNode.indexOf('auto') > -1 || overflowNode.indexOf('scroll') > -1)) {
                    return true;
                }
                node = node.parentNode;
            }
            return false;
        }
    };

    return init();
};

var docClass = document.documentElement.classList;
if (!docClass.contains('mac') && !docClass.contains('safari') && !docClass.contains('isTouchDevice')) {
    scrollController({
        speed: 120,
        duration: 0.5
    });
}