import Vue from 'vue'
import Viewer from 'v-viewer'
// import '_viewerjs@1.4.0@viewerjs/dist/viewer.css' // 这个路径搞不明白
import './viewer.min.css' // 从_viewerjs@1.4.0@viewerjs拷贝而来

Vue.use(Viewer)
Viewer.setDefaults({
    /**
     * 启用 a modal backdrop, specify `static` for a backdrop
     * which doesn't close the modal on click.
     * @type {boolean}
     */
    backdrop: true,

    /**
     * 显示右上角关闭按钮
     * @type {boolean}
     */
    button: true,

    /**
     * 显示缩略图导航
     * @type {boolean | number}
     */
    navbar: true,

    /**
     * 当前图片标题
     * @type {boolean | number | Function | Array}
     */
    title: true,

    /**
     * 显示工具栏
     * @type {boolean | number | Object}
     */
    toolbar: true,

    /**
     * Custom class name(s) to add to the viewer's root element.
     * @type {string}
     */
    className: '',

    /**
     * Define where to put the viewer in modal mode.
     * @type {string | Element}
     */
    container: 'body',

    /**
     * Filter the images for viewing. Return true if the image is viewable.
     * @type {Function}
     */
    filter: null,

    /**
     * 启用 to request fullscreen when play.
     * @type {boolean}
     */
    fullscreen: true,

    /**
     * Define the initial index of image for viewing.
     * @type {number}
     */
    initialViewIndex: 0,

    /**
     * 启用 inline 模式.
     * @type {boolean}
     */
    inline: false,

    /**
     * The amount of time to delay between automatically cycling an image when playing.
     * @type {number}
     */
    interval: 5000,

    /**
     * 启用键盘控制.
     * @type {boolean}
     */
    keyboard: true,

    /**
     * Indicate if show a loading spinner when load image or not.
     * @type {boolean}
     */
    loading: true,

    /**
     * 启用循环.
     * @type {boolean}
     */
    loop: true,

    /**
     * Min width of the viewer in inline 模式.
     * @type {number}
     */
    minWidth: 200,

    /**
     * Min height of the viewer in inline 模式.
     * @type {number}
     */
    minHeight: 100,

    /**
     * 是否可以移动图片.
     * @type {boolean}
     */
    movable: true,

    /**
     * 可以旋转图片.
     * @type {boolean}
     */
    rotatable: false,

    /**
     * 启用翻转图片.
     * @type {boolean}
     */
    scalable: true,

    /**
     * 启用放缩图片.
     * @type {boolean}
     */
    zoomable: true,

    /**
     * 启用 to zoom the image by dragging touch.
     * @type {boolean}
     */
    zoomOnTouch: true,

    /**
     * 启用 to zoom the image by wheeling mouse.
     * @type {boolean}
     */
    zoomOnWheel: true,

    /**
     * Indicate if toggle the image size between its natural size
     * and initial size when double click on the image or not.
     * @type {boolean}
     */
    toggleOnDblclick: true,

    /**
     * 操作中启用展示缩放百分比
     * @type {boolean}
     */
    tooltip: true,

    /**
     * 启用 CSS3 Transition for some special elements.
     * @type {boolean}
     */
    transition: true,

    /**
     * Define the CSS `z-index` value of viewer in modal 模式.
     * @type {number}
     */
    zIndex: 2015,

    /**
     * Define the CSS `z-index` value of viewer in inline 模式.
     * @type {number}
     */
    zIndexInline: 0,

    /**
     * Define the ratio when zoom the image by wheeling mouse.
     * @type {number}
     */
    zoomRatio: 0.1,

    /**
     * Define the min ratio of the image when zoom out.
     * @type {number}
     */
    minZoomRatio: 0.01,

    /**
     * Define the max ratio of the image when zoom in.
     * @type {number}
     */
    maxZoomRatio: 100,

    /**
     * Define where to get the original image URL for viewing.
     * @type {string | Function}
     */
    url: 'src',

    /**
     * Event shortcuts.
     * @type {Function}
     */
    ready: null,
    show: null,
    shown: null,
    hide: null,
    hidden: null,
    view: null,
    viewed: null,
    zoom: null,
    zoomed: null
})
