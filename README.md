# Mochi
_Front-end framework for developing responsive, mobile first projects on the web or offline._

> [**v1.5.4**](https://github.com/codeworksdev/mochi/releases/latest)

Mochi is a ready-to-deploy HTML5 boilerplate framework that runs on [Bootstrap](http://getbootstrap.com/), but adds tons of new features, with a strong focus on offline web applications without all the limitations. It achieves this goal by fully integrating and maintaining offline versions of popular libraries that have been out in the wild for years.

## What is Bootstrap?
[Bootstrap](http://getbootstrap.com/) is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with powerful [Sass](https://sass-lang.com/) variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on [jQuery](https://jquery.com/). Mochi takes this a few steps further by enabling functionality that would normally require many hours of code writing and head-scratching. More information on Bootstrap [here](http://getbootstrap.com/).

## Usage
To use Mochi, simply [download the latest distribution package](https://github.com/codeworksdev/mochi/releases/latest) and extract the contents of the included **`dist`** folder to the root of your website directory (e.g., **`/var/www/html`** in some systems). That's it! You now have a fully functioning, Bootstrap-powered boilerplate web application framework installed on your website. Mochi is designed to run either online or offline, depending on your desired configuration (more on that later).

The included HTML starter template ([**`dist/index.html`**](https://github.com/codeworksdev/mochi/blob/master/dist/index.html)) is a great way to get started with using Mochi. Because it's powered by Bootstrap you can do a bunch of things right out of the box, and with minimal effort. Check out the [official Bootstrap documentation](https://getbootstrap.com/docs/4.1/getting-started/introduction/) to learn more about how to structure your HTML/CSS markup according to the latest web standards.

## What's Included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations for all libraries. You'll see something like this:

```
dist/
├── bootstrap/
│   ├── css/
│   │   ├── bootstrap.css
│   │   ├── bootstrap.min.css
│   │   ├── bootstrap-grid.css
│   │   ├── bootstrap-grid.min.css
│   │   ├── bootstrap-reboot.css
│   │   └── bootstrap-reboot.min.css
│   │
│   └── js/
│       ├── bootstrap.bundle.js
│       ├── bootstrap.bundle.min.js
│       ├── bootstrap.js
│       └── bootstrap.min.js
│
├── frontend/
│   ├── css/
│   │   ├── print.css
│   │   └── style.css
│   │
│   ├── img/
│   │   └── brand/
│   │       ├── launcher-icon-1x.pmg
│   │       └── launcher-icon-4x.pmg
│   │
│   ├── js/
│   │   └── onload.js
│   │
│   └── less/
│       ├── _2dppx_375up.less
│       ├── _2dppx_425up.less
│       ├── _2dppx_480up.less
│       ├── _2dppx_576up.less
│       ├── _2dppx_640up.less
│       ├── _2dppx_750up.less
│       ├── _2dppx_768up.less
│       ├── _2dppx_970up.less
│       ├── _2dppx_992up.less
│       ├── _2dppx_1020up.less
│       ├── _2dppx_1024up.less
│       ├── _2dppx_1170up.less
│       ├── _2dppx_1200up.less
│       ├── _2dppx_1440up.less
│       ├── _2dppx_1560up.less
│       ├── _2dppx_2560up.less
│       ├── _2dppx_base.less
│       ├── _375up.less
│       ├── _425up.less
│       ├── _480up.less
│       ├── _576up.less
│       ├── _640up.less
│       ├── _750up.less
│       ├── _768up.less
│       ├── _970up.less
│       ├── _992up.less
│       ├── _1020up.less
│       ├── _1024up.less
│       ├── _1170up.less
│       ├── _1200up.less
│       ├── _1440up.less
│       ├── _1560up.less
│       ├── _2560up.less
│       ├── _base.less
│       ├── _mixins.less
│       ├── _notouch.less
│       ├── _print.less
│       ├── print.less
│       └── style.less
│
├── mochi/
│   ├── css/
│   │   └── helpers/
│   │       └── animate.less/
│   │           └── dist/
│   │               ├── css/
│   │               │   └── animate.css
│   │               │
│   │               └── less/
│   │                   ├── _mixins.less
│   │                   ├── _options.less
│   │                   └── animate.less
│   │
│   ├── js/
│   │   ├── helpers/
│   │   │   ├── font-awesome-free/
│   │   │   │   └── js/
│   │   │   │       └── all.min.js
│   │   │   │
│   │   │   ├── iScroll/
│   │   │   │   └── build/
│   │   │   │       ├── iscroll.js
│   │   │   │       ├── iscroll.min.js
│   │   │   │       ├── iscroll-infinite.js
│   │   │   │       ├── iscroll-infinite.min.js
│   │   │   │       ├── iscroll-lite.js
│   │   │   │       ├── iscroll-lite.min.js
│   │   │   │       ├── iscroll-probe.js
│   │   │   │       ├── iscroll-probe.min.js
│   │   │   │       ├── iscroll-zoom.js
│   │   │   │       └── iscroll-zoom.min.js
│   │   │   │
│   │   │   ├── ViewerJS/
│   │   │   │   ├── images/
│   │   │   │   │   ├── kogmbh.png
│   │   │   │   │   ├── nlnet.png
│   │   │   │   │   ├── texture.png
│   │   │   │   │   ├── toolbarButton-download.png
│   │   │   │   │   ├── toolbarButton-fullscreen.png
│   │   │   │   │   ├── toolbarButton-menuArrows.png
│   │   │   │   │   ├── toolbarButton-pageDown.png
│   │   │   │   │   ├── toolbarButton-pageUp.png
│   │   │   │   │   ├── toolbarButton-presentation.png
│   │   │   │   │   ├── toolbarButton-zoomIn.png
│   │   │   │   │   └── toolbarButton-zoomOut.png
│   │   │   │   │
│   │   │   │   ├── tools/
│   │   │   │   │   └── replaceByFileContents.js
│   │   │   │   │
│   │   │   │   ├── example.local.css
│   │   │   │   ├── HeaderCompiled.html
│   │   │   │   ├── HeaderCompiled.js
│   │   │   │   ├── index.html
│   │   │   │   ├── index-template.html
│   │   │   │   ├── ODFViewerPlugin.css
│   │   │   │   ├── ODFViewerPlugin.js
│   │   │   │   ├── PDFViewerPlugin.css
│   │   │   │   ├── PDFViewerPlugin.js
│   │   │   │   ├── PluginLoader.js
│   │   │   │   ├── viewer.css
│   │   │   │   ├── viewer.js
│   │   │   │   └── viewerTouch.css
│   │   │   │
│   │   │   ├── basil.min.js
│   │   │   ├── Chart.bundle.min.js
│   │   │   ├── clipboard.min.js
│   │   │   ├── holder.min.js
│   │   │   ├── modernizr-custom.js
│   │   │   ├── popper.min.js
│   │   │   ├── sprintf.min.js
│   │   │   ├── underscore.string.min.js
│   │   │   └── underscore-min.js
│   │   │
│   │   ├── jquery/
│   │   │   ├── ui/
│   │   │   │   ├── images/
│   │   │   │   │   ├── ui-icons_444444_256x240.png
│   │   │   │   │   ├── ui-icons_555555_256x240.png
│   │   │   │   │   ├── ui-icons_777620_256x240.png
│   │   │   │   │   ├── ui-icons_777777_256x240.png
│   │   │   │   │   ├── ui-icons_cc0000_256x240.png
│   │   │   │   │   └── ui-icons_ffffff_256x240.png
│   │   │   │   │
│   │   │   │   ├── jquery-ui.css
│   │   │   │   ├── jquery-ui.js
│   │   │   │   ├── jquery-ui.min.css
│   │   │   │   ├── jquery-ui.min.js
│   │   │   │   ├── jquery-ui.structure.css
│   │   │   │   ├── jquery-ui.structure.min.css
│   │   │   │   ├── jquery-ui.theme.css
│   │   │   │   └── jquery-ui.theme.min.css
│   │   │   │
│   │   │   └── jquery.min.js
│   │   │
│   │   ├── plugins/
│   │   │   ├── dialog/
│   │   │   │   └── dist/
│   │   │   │       ├── dialog.js
│   │   │   │       └── dialog.min.js
│   │   │   │
│   │   │   └── veeva/
│   │   │       └── dist/
│   │   │           ├── veeva.js
│   │   │           ├── veeva-library.js
│   │   │           ├── veeva-library.min.js
│   │   │           └── veeva.min.js
│   │   │
│   │   ├── libraries.js
│   │   ├── mochi.js
│   │   └── mochi.min.js
│   │
│   └── less/
│       ├── _2dppx_375up.less
│       ├── _2dppx_425up.less
│       ├── _2dppx_480up.less
│       ├── _2dppx_576up.less
│       ├── _2dppx_640up.less
│       ├── _2dppx_750up.less
│       ├── _2dppx_768up.less
│       ├── _2dppx_970up.less
│       ├── _2dppx_992up.less
│       ├── _2dppx_1020up.less
│       ├── _2dppx_1024up.less
│       ├── _2dppx_1170up.less
│       ├── _2dppx_1200up.less
│       ├── _2dppx_1440up.less
│       ├── _2dppx_1560up.less
│       ├── _2dppx_2560up.less
│       ├── _2dppx_base.less
│       ├── _375up.less
│       ├── _425up.less
│       ├── _480up.less
│       ├── _576up.less
│       ├── _640up.less
│       ├── _750up.less
│       ├── _768up.less
│       ├── _970up.less
│       ├── _992up.less
│       ├── _1020up.less
│       ├── _1024up.less
│       ├── _1170up.less
│       ├── _1200up.less
│       ├── _1440up.less
│       ├── _1560up.less
│       ├── _2560up.less
│       ├── _base.less
│       ├── _mixins.less
│       ├── _notouch.less
│       └── _print.less
│
├── .htaccess
├── index.html
├── manifest.json
├── offline.html
├── project.appcache
├── robots.txt
└── sw.js
```

___
# Included Libraries

One of the major advantages of using Mochi is that it comes packed with many useful 3rd-party libraries to help you develop your application rapidly, and with less effort than would be necessary with just the standard Bootstrap distribution. The following 3rd-party libraries are included with our [standard distribution package](https://github.com/codeworksdev/mochi/releases/latest):

| Library | Version | Developer Website |
|--|--|--|
| Animate.less | 2.0 | http://animateforless.com/ |
| Basil.js | 0.4.10 | https://wisembly.github.io/basil.js/ |
| Bootstrap | 4.1.3 | https://getbootstrap.com/ |
| Chart.js | 2.7.2 | https://www.chartjs.org/ |
| Clipboard.js | 2.0 | https://clipboardjs.com/ |
| Font Awesome | 5.2 | https://fontawesome.com/ |
| Holder.js | 2.9.4 | http://holderjs.com/ |
| iScroll | 5.2 | http://iscrolljs.com/ |
| jQuery | 3.3.1 | http://jquery.com/ |
| jQuery UI | 1.12.1 | https://jqueryui.com/ |
| Modernizr | 3.5 | https://modernizr.com/ |
| Popper.js | 1.14.3 | https://popper.js.org/ |
| sprintf-js | 1.1.1 | https://www.npmjs.com/package/sprintf-js |
| Underscore.js | 1.9.1 | http://underscorejs.org/ |
| Underscore.string | 3.3.4 | http://gabceb.github.io/underscore.string.site/ |
| ViewerJS | 0.5.9 | http://viewerjs.org/ |

___
# Less.js CSS Preprocessor Support

Mochi makes heavy use of [Less.js](http://lesscss.org/) to allow you to rapidly construct your CSS stylesheets within the many [predefined media queries](#predefined-media-queries) supported by our [standard distribution package](https://github.com/codeworksdev/mochi/releases/latest).

## What is Less.js?
[Less.js](http://lesscss.org/) is a CSS preprocessor that extends the CSS language, adding features that introduce variables, mixins, functions, and many other techniques commonly found in popular scripting languages. This allows you to make CSS that is more maintainable, themable and extendable.

Less.js runs inside [Node](https://nodejs.org/), in the browser and inside [Rhino](https://mozilla.github.io/rhino/). There are also many  [3rd-party tools](http://lesscss.org/usage/index.html#guis-for-less)  available that allow you to compile your files and watch for changes. The latter is the way to go if you want to get up and running quickly.

## Predefined Media Queries
Predefined [CSS media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) are defined in the folder **`dist/frontend/less`**. Each media query is assigned a dedicated Less import file for better organization, and of course, they're all completely optional. As a bonus, we've also included [retina display (192dpi) media queries](https://css-tricks.com/snippets/css/retina-display-media-query/) to compliment the standard (96dpi) media queries.

| 96dpi (1dppx), 192dpi (2dppx) | Typical Device | File (96dpi) | File (192dpi)
|--|--|--|--|
| < 375px (base) | Phone (legacy)           | `_base.less`   | `_2dppx_base.less`
| >= 375px  | Phone (legacy)                | `_375up.less`  | `_2dppx_375up.less`
| >= 425px  | Phone (large)                 | `_425up.less`  | `_2dppx_425up.less`
| >= 480px  | Phone (large), Tablet (small) | `_480up.less`  | `_2dppx_480up.less`
| >= 576px  | Phone (large), Tablet (small) | `_576up.less`  | `_2dppx_576up.less`
| >= 750px  | Tablet (small)                | `_750up.less`  | `_2dppx_750up.less`
| >= 768px  | Tablet (small)                | `_768up.less`  | `_2dppx_768up.less`
| >= 970px  | Tablet (medium)               | `_970up.less`  | `_2dppx_970up.less`
| >= 992px  | Tablet (medium)               | `_992up.less`  | `_2dppx_992up.less`
| >= 1020px | Tablet (large)                | `_1020up.less` | `_2dppx_1020up.less`
| >= 1024px | Tablet (large)                | `_1024up.less` | `_2dppx_1024up.less`
| >= 1170px | Desktop/Laptop/Tablet         | `_1170up.less` | `_2dppx_1170up.less`
| >= 1200px | Desktop/Laptop/Tablet         | `_1200up.less` | `_2dppx_1200up.less`
| >= 1440px | Desktop                       | `_1440up.less` | `_2dppx_1440up.less`
| >= 1560px | Desktop (HD)                  | `_1560up.less` | `_2dppx_1560up.less`
| >= 2560px | Desktop (2K)                  | `_2560up.less` | `_2dppx_2560up.less`

## Special Less Imports
In addition to the media breakpoints listed above, the following import files are also included:

| File | Description |
|--|--|
| `_base.less`     | Defines base styles for all media queries (i.e., all devices).
| `_print.less`    | Used for printed media. Imports Bootstrap CSS.
| `_notouch.less`  | Used for non-touch enabled devices (e.g., desktops).
| `_mixins.less`   | Define your own global Less mixins, variables, and styles.
| **`print.less`** | Generates CSS file for [printed media](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Targeting_media_types).
| **`style.less`** | Generates CSS file for all media types other than [print](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Targeting_media_types).

_**Note:** When importing the folder **`dist/frontend/less`** into your Less.js compiler please make sure only the **`print.less`** and **`style.less`** files are compiled to CSS, and not the files prefixed with an underscore._

## Predefined Mixins
Some useful Less mixins are included to help streamline development of CSS in your project. We recommend having a look at [**`dist/mochi/less/_mixins.less`**](https://github.com/codeworksdev/mochi/blob/master/dist/mochi/less/_mixins.less) to see what's included in our [standard distribution package](https://github.com/codeworksdev/mochi/releases/latest).

_**Note:** We've included an empty mixins file at **`dist/frontend/_mixins.less`**. If you'd like to define your own mixins in your project, we strongly recommend editing this empty file instead of the predefined mixins file inside the **`dist/mochi`** folder._

## Animate.less
[Animate.less](http://animateforless.com/) is a powerful [CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) framework for animating HTML elements in a [script-less](https://github.com/codeworksdev/animate.less#script-less-animations) format. Mochi automatically imports this library into your project, allowing you to take full advantage of the many predefined animations already included. You can even build your own animations with this framework! More information [here](http://animateforless.com/).

___
# Caching System
Mochi includes a fully functional [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) (in [**`dist/sw.js`**](https://github.com/codeworksdev/mochi/blob/master/dist/sw.js)) for developing high-performance websites and offline apps, complete with push notifications and automated updates. It's disabled by default, but you can easily enable it using the [Mochi API](#api). More information about the standard Service Worker API [here](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API).

_**Note:** The (now deprecated) [HTML5 application cache](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache) is still supported (in [**`dist/project.appcache`**](https://github.com/codeworksdev/mochi/blob/master/dist/project.appcache)), but we strongly discourage using it, since it has been removed from the Web standards. Though some browsers may still support it, it is in the process of being dropped. Be aware that this feature may cease to work at any time._

___
# Apache Server Configs
This [.htaccess](https://httpd.apache.org/docs/2.4/howto/htaccess.html) file (in [**`dist/.htaccess`**](https://github.com/codeworksdev/mochi/blob/master/dist/.htaccess)) is a collection of boilerplate configurations that can help your server improve your website's performance and security, while also ensuring that resources are served with the correct content-type and are accessible, if needed, even cross-domain.  More information [here](https://github.com/h5bp/server-configs-apache).

_**Note:** You can delete this file without issue if it doesn't apply to your server or project requirements._

___
# API

## Starter Template
Mochi includes a simple JavaScript starter template (in [**`dist/frontend/js/onload.js`**](https://github.com/codeworksdev/mochi/blob/master/dist/frontend/js/onload.js)) to help you tie everything together and get started on your project right away without worrying about how to activate/deactivate components. Continue reading below to get familiar with the how the Mochi API can accelerate your app.

## Persistent Mochi Instance
First things first! After your web page is loaded and rendered, the Mochi instance will register itself as a regular JavaScript global variable called **`$m`**. This variable is defined within the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) scope, making it accessible by your entire application. The persistent Mochi instance contains the following components:

| [Methods](#methods) | [Hooks](#hooks) | [Options](#options) | [Properties](#properties)
|--|--|--|--|
| [do](#mdo) | [mochi_before](#mochi_before) | [CLICK_NAME](#click_name) | __body
| [extend](#mextend) | [mochi_init](#mochi_init) | [DEBUG_MODE](#debug_mode) | __container
| [getDefaultOption](#mgetdefaultoption) | [mochi_load](#mochi_load) | [ENABLE_SERVICE_WORKER](#enable_service_worker) | __content
| [getOnClickName](#mgetonclickname) | [mochi_load_page](#mochi_load_page) | [LAZY_LOAD_PLUGINS](#lazy_load_plugins) | __head
| [getOption](#mgetoption) | [mochi_load_page{N}](#mochi_load_pagen) | [SW_UPDATE_NOTIFICATIONS](#sw_update_notifications) | __href
| [getPage](#mgetpage) | [mochi_load_view](#mochi_load_view) | [SW_UPDATE_NOTIFICATIONS_OPTIONS](#sw_update_notifications_options) | __html
| [getState](#mgetstate) | [mochi_load_view{N}](#mochi_load_viewn) | [SW_VERBOSE_SYNCING](#sw_verbose_syncing) | __observer
| [getView](#mgetview) | [mochi_unload](#mochi_unload) | [SW_VERBOSE_SYNCING_OPTIONS](#sw_verbose_syncing_options) | __page_name
| [isSimpleObj](#missimpleobj) | [mochi_unload_page](#mochi_unload_page) | |
| [load](#mload) | [mochi_unload_page{N}](#mochi_unload_pagen) | |
| [loadPage](#mloadpage) | [mochi_unload_page](#mochi_unload) | |
| [loadView](#mloadview) | [mochi_unload_page{N}](#mochi_unload_pagen) | |
| [log](#mlog) | [mochi_unload_view](#mochi_unload_view) | |
| [onClick](#monclick) | [mochi_unload_view{N}](#mochi_unload_viewn) | |
| [sanitizeTitle](#msanitizetitle) | [mochi_last](#mochi_last) | |
| [setOnClickName](#msetonclickname) | [mochi_onchange](#mochi_onchange) | |
| [setOption](#msetoption) | [mochi_onmutation](#mochi_onmutation) | |
| [setPage](#msetpage) | | |
| [setState](#msetstate) | | |
| [setView](#msetview) | | |
| [unload](#munload) | | |
| [unloadPage](#munloadpage) | | |
| [unloadView](#munloadview) | | |
| [widgetOnDownloading](#mwidgetondownloading) | | |
| [widgetOnUpdateReady](#mwidgetonupdateready) | | |


## Methods

> ## $m&period;do()
>
> _Mochi_ **$m&period;do(** _array|string_ **name** [, _array_ **arguments**] **)**
>
> Calls one or more predefined functions by `name`, in which `this` is assigned `$m` ([persistent Mochi instance](#persistent-mochi-instance)), and the optional list of `arguments` are passed as an array to each. If `name` is an array, assumes a list of function names to be called, in the order given. Each function must be a valid [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) type. Each function must be defined within the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object scope. Any undefined functions are skipped without error. This method works similar to [`Function.prototype.apply()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply), but with the added logic.

> ## $m.extend()
>
> _Mochi_ **$m.extend(** _string_ **namespace**, _[Function&period;name](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name)_ **instance** [, _object_ **meta**][, _function_ **callback**] **)**
>
> Extends `$m` ([persistent Mochi instance](https://github.com/codeworksdev/mochi#persistent-mochi-instance)) by creating a new [instance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) of a user-defined function (i.e., an object type that has a constructor function), and storing that instance as an [object key](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) referenced by `namespace` under `$m` (e.g., `$m.somethingcool`). The optional `callback` function is executed immediately after, with `this` assigned as a reference of `instance` in `namespace`. Additionally, you can pass a `meta` [object](https://github.com/codeworksdev/mochi#missimpleobj) as the first parameter to the `instance` and `callback` functions. If no `meta` is provided, assumes an empty object.
>
>  _**Note:** This method is especially useful for [plugin development](#plugins)._

> ## $m.getDefaultOption()
>
> _mixed_ **$m.getDefaultOption(** _string_ **name** **)**
>
> Shorthand for [`$m.getOption(name, true)`](#mgetoption).

> ## $m.getOption()
>
> _mixed_ **$m.getOption(** _string_ **name**[, _bool_ **default**] **)**
>
> Returns the value of the requested [option](#options) by `name` (case-sensitive). If `default` is `true`, returns the default value of the option instead, as defined by the framework. If the requested option is a [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) type, gets the return value of that function, `undefined` otherwise. If the return value is a [`simple object`](#missimpleobj) type, returns a [deep copy](https://scotch.io/bar-talk/copying-objects-in-javascript#toc-deep-copying-objects) of that object.

> ## $m.getOnClickName()
>
> _string_ **$m.getOnClickName()**
>
> Returns the current value of the [`CLICK_NAME`](#click_name) option. Additionally, if [`CLICK_NAME`](#click_name) is currently set to `"auto"`, returns the [`touchstart`](https://developer.mozilla.org/en-US/docs/Web/Events/touchstart) event name for [touch-enabled](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events) devices, and [`click`](https://developer.mozilla.org/en-US/docs/Web/Events/click) for all other device types.

> ## $m.getPage()
>
> _number_ **$m.getPage(** [_number_ **padding**] **)**
>
> Shorthand for [`$m.getState('page', padding)`](#mgetstate). Returns the value of the `data-page` attribute in `<html>` for the active HTML document. Assumes `0` (zero) if `data-page` is undefined or not numeric. If `padding` is given, zero-pads the returned number by that amount. By default, `0` (zero) is returned with the given `padding`.

> ## $m.getState()
>
> _number_ **$m.getState(** _string_ **page|view** [, _number_ **padding**] **)**
>
> Returns the value of either the `data-page` or `data-view` attribute in `<html>` for the active HTML document. Assumes `0` (zero) if the attribute is undefined or not numeric. If `padding` is given, zero-pads the returned number by that amount. By default, `0` (zero) is returned with the given `padding`.

> ## $m.getView()
>
> _number_ **$m.getView(** [_number_ **padding**] **)**
>
> Shorthand for [`$m.getState('view', padding)`](#mgetstate). Returns the value of the `data-view` attribute in `<html>` for the active HTML document. Assumes `0` (zero) if `data-view` is undefined or not numeric. If `padding` is given, zero-pads the returned number by that amount. By default, `0` (zero) is returned with the given `padding`.

> ## $m.isSimpleObj()
>
> _bool_ **$m.isSimpleObj(** _mixed_ **value** **)**
>
> Checks whether the given value (`value`) is a simple JavaScript **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** type (i.e., not an **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** or **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)** object type). Uses the **[`_.isObject()`](http://underscorejs.org/#isObject)** [Underscore.js](http://underscorejs.org/) function, but with the stricter type checking.

> ## $m.load()
>
> _Mochi_ **$m.load(** _string_ **page|view**, _number_ **number**[, _object_ **meta**] **)**
>
> Calls a series of [hooks](#hooks) based on either the `"page"` or `"view"` string, and `number` given. For example, `$m.load("page", 1.5)` implies the `data-page` attribute in `<html>` for the active HTML document must be changed to `1.5`, but only if `data-page` isn't already set to `1.5`. If a `meta` [object](#missimpleobj) is given, passes that object as the first parameter for each called hook, with `this` assigned as a reference to `$m` ([persistent Mochi instance](#persistent-mochi-instance)).
>
> **FOR EXAMPLE**
> _To call all **page 1.5** "loading" hooks in the active HTML document, you can do:_
> ```js
> $m.load("page", 1.5, {key1 : value1, key2 : value2});
> ```
> Which would execute the following hooks (in order):
> ```js
> mochi_load()          // Generic loading hook
> mochi_load_page()     // Generic page loading hook
> mochi_load_page1_5()  // Dedicated loading hook for page 1.5
> mochi_onchange()      // After everything else completes
> ```
> _**Note:** Each hook receives a default meta object of key/value pairs as the first parameter, with `this` assigned as a reference to `$m` ([persistent Mochi instance](#persistent-mochi-instance)). If the optional `meta` object is given as the 3rd parameter, merges it with this default object, ensuring each property listed below is not overridden. See below for a list of mandatory properties in the default meta object._
>
> **DEFAULT META OBJECT**
>
> | property | type | description |
> |--|--|--|
> | caller | string | Name of function or constructor that called this method (e.g., "[loadPage](#mloadpage)"). |
> | newStateNumber | number | New state number, if provided. Otherwise, uses current/unchanged state number. |
> | oldStateNumber | number | Previous state number, if provided. Otherwise, uses unchanged state number. |
> | stateName | string | The state name in this call (either `"page"` or `"view"`). |

> ## $m.loadPage()
>
> _Mochi_ **$m.loadPage(** _number_ **number** **)**
>
> Shorthand for [`$m.load("page", number)`](#mload).

> ## $m.loadView()
>
> _Mochi_ **$m.loadView(** _number_ **number** **)**
>
> Shorthand for [`$m.load("view", number)`](#mload).

> ## $m.log()
>
> _Mochi_ **$m.log(** _string_ **message**[, _bool_ **condition**] **)**
>
> Outputs an [informational message](https://developer.mozilla.org/en-US/docs/Web/API/Console/info) to the Web Console, but only if the given `condition` is `true`. If a `condition` is not provided, outputs the message if the [DEBUG_MODE](#debug_mode) option evaluates to `true`.

> ## $m.onClick()
>
> _jQuery_ **$m.onClick(** _mixed_ **target**[, _object **eventData**][, _function_ **handler**] **)**
>
> Like [jQuery.on()](http://api.jquery.com/on/), but automatically determines the event name to bind to the `target` (which could either be a CSS selector string, HTML element, or jQuery object type). The event name is chosen from the return value of [$m.getOnClickName()](#mgetonclickname). `handler` is a function to be executed when the event is triggered, receiving the [`Event`](http://api.jquery.com/Types/#Event) object as the first parameter. If no `handler` is given, assumes `false`, which is shorthand for a function that simply does `return false`. If `eventData` is provided, it is passed to the `handler` in [`event.data`](http://api.jquery.com/event.data/) when the event is triggered.

> ## $m.sanitizeTitle()
>
> _string_ **$m.sanitizeTitle(** _string_ **string**[, _string_ **delimiter**][, _string_ **fallback**] **)**
>
> Sanitizes the given `string`. Specifically, `string` is converted to lowercase, with all non-[alphanumeric](https://en.wikipedia.org/wiki/Alphanumeric) characters replaced with a `delimiter`. If no `delimiter` is given, uses the hyphen character (`-`). If `delimiter` is non-alphanumeric, all duplicate delimiters are removed (e.g., `my--sanitized---string` becomes `my-sanitized-string`). If `delimiter` is an empty string, no delimiter is used. Additionally, if the optional `fallback` string is given, uses that string, but only if the sanitized `string` is empty. If `fallback` is given, it's also sanitized before being returned.

> ## $m.setOnClickName()
>
> _Mochi_ **$m.setOnClickName(** _string_ **eventName** **)**
>
> Changes the value of the [`CLICK_NAME`](#click_name) option to the `eventName` given. `eventName` must be an [alphanumeric](https://en.wikipedia.org/wiki/Alphanumeric) string. Otherwise, no changes are applied.

> ## $m.setOption()
>
> _Mochi_ **$m.setOption(** _string|object_ **option**[, _mixed_ **value**] **)**
>
> If `option` is a string, assigns `value` to that option. If no `value` is given, assumes `undefined`. Otherwise, if `option` is a [simple object](#missimpleobj) type, assumes a list of options to set, with each key/value pair treated as an individual `option/value` assignment. Additionally, if `value` is a simple object type, recursively sets each key/value pair in the option, but only if `option` is also a simple object type. In this case, each key/value in `value` is checked to make sure it's supported by the `option` (i.e., if the key exists as a property in `option`). Any unsupported (non-existent) keys are simply ignored, with no errors produced.

> ## $m.setPage()
>
> _Mochi_ **$m.setPage(** _number_ **number**[, _function_ **callback**] **)**
>
> Shorthand for [`$m.setState("page", number)`](#msetstate).

> ## $m.setState()
>
> _Mochi_ **$m.setState(** _string_ **page|view**, _number_ **number**[, _function_ **callback**] **)**
>
> Sets the value of either the `data-page` or `data-view` attribute in `<html>` for the active HTML document with the given `number`, but only if the target attribute isn't already set with the same `number`. For example, `$m.setState("page", 1.5)` would imply that the value of the `data-page` attribute in `<html>` for the active HTML document must be set to `1.5`, but only if `data-page` isn't already set to `1.5`. Therefore, assuming `data-page` was previously set to `1`, assigns `1.5` to `data-page` in `<html>` for the active HTML document, subsequently calling the following [hooks](#hooks) (in order):
>
>```js
> mochi_unload()        // Generic unloading hook
> mochi_unload_page()   // Generic page unloading hook
> mochi_unload_page1()  // Unloading hook for page 1
> mochi_onchange()      // After unloading completes
> mochi_load()          // Generic loading hook
> mochi_load_page()     // Generic page loading hook
> mochi_load_page1_5()  // Loading hook for page 1.5
> mochi_onchange()      // After loading completes
> ```
>
>  **NOTES**
>  1. If `callback` is given, executes that function after all hooks are called.
>  2. Each hook receives a meta object as its first parameter. See [`$m.load()`](#mload) for details.
>  3. `callback` receives the same meta object as its first parameter.

> ## $m.setView()
>
> _Mochi_ **$m.setView(** _number_ **number**[, _function_ **callback**] **)**
>
> Shorthand for [`$m.setState("view", number)`](#msetstate).

> ## $m.unload()
>
> _Mochi_ **$m.unload(** _string_ **page|view**, _number_ **number**[, _object_ **meta**] **)**
>
> Similar to [`$m.load()`](#mload), but calls unloading hooks instead.
>
> **FOR EXAMPLE**
> _To call all **page 1.5** "unloading" hooks in the active HTML document, you can do:_
> ```js
> $m.unload("page", 1.5, {key1 : value1, key2 : value2});
> ```
> Which would execute the following hooks (in order):
> ```js
> mochi_unload()          // Generic unloading hook
> mochi_unload_page()     // Generic page unloading hook
> mochi_unload_page1_5()  // Unloading hook for page 1.5
> mochi_onchange()        // After unloading completes
> ```

> ## $m.unloadPage()
>
> _Mochi_ **$m.unloadPage(** _number_ **number** **)**
>
> Shorthand for [`$m.unload("page", number)`](#munload).

> ## $m.unloadView()
>
> _Mochi_ **$m.unloadView(** _number_ **number** **)**
>
> Shorthand for [`$m.unload("view", number)`](#munload).

> ## $m.widgetOnDownloading()
>
> _Mochi_ **$m.widgetOnDownloading(** [_string_ **text**][, _string_ **icon**][_bool_ **spin**] **)**
>
> Generates a [dismissible](https://getbootstrap.com/docs/4.1/components/alerts/#dismissing) [alert widget](https://getbootstrap.com/docs/4.1/components/alerts/) with the given `text` and [`icon`](https://fontawesome.com/icons?d=gallery&m=free) included. If `spin` is `true`, the `icon` is set in a [rotating animation](https://fontawesome.com/how-to-use/svg-with-js#animated-icons). Keep in mind that `icon` must be a valid [Font Awesome](https://fontawesome.com/icons?d=gallery&m=free) icon class. Each parameter is optional, with their default values pulled from the [`SW_VERBOSE_SYNCING_OPTIONS`](#sw_verbose_syncing_options) option.
>
>  _**Note:** No action is taken if an instance of this widget is already active on screen._

> ## $m.widgetOnUpdateReady()
>
> _Mochi_ **$m.widgetOnUpdateReady(** [_string_ **buttonTitle**][, _string_ **dialogButtonTitle**][_string_ **dialogContent**][, _string_ **dialogTitle**] **)**
>
> Generates a [button](https://getbootstrap.com/docs/4.1/components/buttons/) that triggers a [vertically centered](https://getbootstrap.com/docs/4.1/components/modal/#vertically-centered) [modal](https://getbootstrap.com/docs/4.1/components/modal/) widget. You can customize the button label and modal content with the supported parameters. Each parameter is optional, with their default values pulled from the [`SW_UPDATE_NOTIFICATIONS_OPTIONS`](#sw_update_notifications_options) option.
>
>  _**Note:** No action is taken if an instance of this widget is already active on screen._

## Hooks
Hooks are provided by Mochi to allow your application to easily 'hook into' the rest of the framework, with minimal coding required. There are several types of hooks that are supported. Each hook is called automatically by the Mochi framework under special circumstances, depending on type.

_**Note:** Hook are completely optional within your project and, if defined, are called with `this` assigned as a reference to `$m` ([persistent Mochi instance](#persistent-mochi-instance)). Additionally, some of these hooks receive a [meta object](#mload) as the first (and only) parameter. This object contains information regarding the call. More information [here](#mload)._

> ## mochi_before()
>
> _void_ **mochi_before()**
>
> If defined, executes during Mochi instance initialization (e.g., before all other initialization methods are called and [`$m`](#persistent-mochi-instance) is defined), but after all default [`options`](#options) are set. Useful if you'd like to define some options or run statements before anything else fires up.

> ## mochi_init()
>
> _void_ **mochi_init()**
>
> If defined, executes during Mochi instance initialization, but only after all other initialization methods are called. Useful if you'd like to run statements before all other hooks are called, and before some components are loaded (e.g., before the built-in [caching system](#caching-system) kicks in).

> ## mochi_load()
>
> _void_ **mochi_load(** [_object_ **meta**] **)**
>
> If defined, executes as soon as [`$m`](#persistent-mochi-instance) is set, as well as whenever the `data-page` or `data-view` attributes in `<html>` for the active HTML document are set. (e.g., whenever [`$m.setState()`](#msetstate) is called). This hook always precedes the [`mochi_load_page()`](#mochi_load_page) and [`mochi_load_view()`](#mochi_load_view) hooks. Additionally, [`meta`](#mload) is defined only when the `data-page` or `data-view` attributes in `<html>` for the active HTML document are changed from a previous (or initial) value.

> ## mochi_load_page()
>
> _void_ **mochi_load_page(** [_object_ **meta**] **)**
>
> If defined, executes as soon as [`$m`](#persistent-mochi-instance) is set, as well as whenever the `data-page` attribute in `<html>` for the active HTML document is set (e.g., when [`$m.setState()`](#msetstate) is called). This hook always precedes the [`mochi_load_page{N}()`](#mochi_load_pagen) hook, where **`{N}`** is the number that was assigned to `data-page`. Additionally, [`meta`](#mload) is defined only when the `data-page` attribute in `<html>` for the active HTML document is changed from a previous (or initial) value.

> ## mochi_load_page{N}()
>
> _void_ **mochi_load_page{N}(** [_object_ **meta**] **)**
>
> If defined, executes whenever the `data-page` attribute in `<html>` for the active HTML document is set to **`{N}`**, where **`{N}`** is to be replaced with the appropriate number that was assigned to `data-page`. For example, the `mochi_load_page1_5()` hook is called if the current value of the `data-page` attribute in `<html>` for the active HTML document is changed to `1.5`, but only if the current value isn't already set to `1.5`. This hook is always called immediately after the [`mochi_page_load()`](#mochi_page_load) hook is called. Additionally, [`meta`](#mload) is defined only when the `data-page` attribute in `<html>` for the active HTML document is changed from a previous (or initial) value.

> ## mochi_load_view()
>
> _void_ **mochi_load_view(** [_object_ **meta**] **)**
>
> If defined, executes as soon as [`$m`](#persistent-mochi-instance) is set, as well as whenever the `data-view` attribute in `<html>` for the active HTML document is set (e.g., when [`$m.setState()`](#msetstate) is called). This hook always precedes the [`mochi_load_view{N}()`](#mochi_load_viewn) hook, where **`{N}`** is the number that was assigned to `data-view`. Additionally, [`meta`](#mload) is defined only when the `data-view` attribute in `<html>` for the active HTML document is changed from a previous (or initial) value.

> ## mochi_load_view{N}()
>
> _void_ **mochi_load_view{N}(** [_object_ **meta**] **)**
>
> If defined, executes whenever the `data-view` attribute in `<html>` for the active HTML document is set to **`{N}`**, where **`{N}`** is to be replaced with the appropriate number that was assigned to `data-view`. For example, the `mochi_load_view1_5()` hook is called if the current value of the `data-view` attribute in `<html>` for the active HTML document is changed to `1.5`, but only if the current value isn't already set to `1.5`. This hook is always called immediately after the [`mochi_view_load()`](#mochi_page_load) hook is called. Additionally, [`meta`](#mload) is defined only when the `data-view` attribute in `<html>` for the active HTML document is changed from a previous (or initial) value.

> ## mochi_unload()
>
> _void_ **mochi_unload(** _object_ **meta** **)**
>
> If defined, executes whenever the `data-page` or `data-view` attributes in `<html>` for the active HTML document are changed (e.g., when `data-page` changes from `1.5` to `2`). This hook always precedes the [`mochi_unload_page()`](#mochi_unload_page) and [`mochi_unload_view()`](#mochi_unload_view) hooks. Additionally, [`meta`](#mload) is always defined, and includes [details](#mload) regarding the call.

> ## mochi_unload_page()
>
> _void_ **mochi_unload_page(** _object_ **meta** **)**
>
> If defined, executes whenever the `data-page` attribute in `<html>` for the active HTML document is changed (e.g., when `data-page` changes from `1.5` to `2`). This hook always precedes the [`mochi_unload_page{N}()`](#mochi_unload_pagen) hook, where **`{N}`** is the number that was changed in `data-page`. Additionally, [`meta`](#mload) is always defined, and includes [details](#mload) regarding the call.

> ## mochi_unload_page{N}()
>
> _void_ **mochi_unload_page{N}(** _object_ **meta** **)**
>
> If defined, executes whenever the `data-page` attribute in `<html>` for the active HTML document is changed from **`{N}`** to a different number, where **`{N}`** is the number that was changed in `data-page`. For example, the `mochi_unload_page2()` hook is called if the value of the `data-page` attribute in `<html>` for the active HTML document was changed from `2` to a different number. This hook is always called immediately after the [`mochi_page_unload()`](#mochi_page_unload) hook is called. No action is taken if the number did not change. Additionally, [`meta`](#mload) is always defined, and includes [details](#mload) regarding the call.

> ## mochi_unload_view()
>
> _void_ **mochi_unload_view(** _object_ **meta** **)**
>
> If defined, executes whenever the `data-view` attribute in `<html>` for the active HTML document is changed (e.g., when `data-view` changes from `1.5` to `2`). This hook always precedes the [`mochi_unload_view{N}()`](#mochi_unload_viewn) hook, where **`{N}`** is the number that was changed in `data-view`. Additionally, [`meta`](#mload) is always defined, and includes [details](#mload) regarding the call.

> ## mochi_unload_view{N}()
>
> _void_ **mochi_unload_view{N}(** _object_ **meta** **)**
>
> If defined, executes whenever the `data-view` attribute in `<html>` for the active HTML document is changed from **`{N}`** to a different number, where **`{N}`** is the number that was changed in `data-view`. For example, the `mochi_unload_view2()` hook is called if the value of the `data-view` attribute in `<html>` for the active HTML document was changed from `2` to a different number. This hook is always called immediately after the [`mochi_view_unload()`](#mochi_view_unload) hook is called. No action is taken if the number did not change. Additionally, [`meta`](#mload) is always defined, and includes [details](#mload) regarding the call.

> ## mochi_last()
>
> _void_ **mochi_last()**
>
> If defined, executes after Mochi instance initialization (e.g., after all other initialization methods are called and [`$m`](#persistent-mochi-instance) is defined), and all other hooks are called. This hook is essentially the opposite of [`mochi_before()`](#mochi_before), and only executes once for the life of the active HTML document.

> ## mochi_onchange()
>
> _void_ **mochi_onchange(** _object_ **meta** **)**
>
> If defined, executes whenever the values of the `data-page` or `data-view` attributes in `<html>` for the active HTML document are change. This is especially useful when you need to execute some statements whenever a valid `data-page` or `data-view` attribute value change is detected, but only after all relevant hooks are called. With that said, [`meta`](#mload) is always defined, and includes [details](#mload) regarding the call.

> ## mochi_onmutation()
>
> _void_ **mochi_onmutation(** [_MutationRecord_](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord) **mutation** **)**
>
> If defined, executes whenever a [DOM mutation](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord) is detected. The `mutation` represents an individual DOM mutation. It's important to be careful when adding DOM-changing statements to this hook, as poor code can result in performance issues and recursion errors. More information [here](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord).

## Options
Several options (or flags) are supported to allow you to take full advantage of all the features available in our [standard distribution package](https://github.com/codeworksdev/mochi/releases/latest). All supported options are listed in the table below.

| Option | Type | Default |
|--|--|--|
| [`CLICK_NAME`](#click_name) | `string` | `auto` |
| [`DEBUG_MODE`](#debug_mode) | `bool` | `false` |
| [`ENABLE_SERVICE_WORKER`](#enable_service_worker) | `bool` | `false` |
| [`LAZY_LOAD_PLUGINS`](#lazy_load_plugins) | `array` | `[]` |
| [`SW_UPDATE_NOTIFICATIONS`](#sw_update_notifications) | `bool` | `true` |
| [`SW_UPDATE_NOTIFICATIONS_OPTIONS`](#sw_update_notifications_options) | `object` | [`object`](https://github.com/codeworksdev/mochi/issues/195) |
| [`SW_VERBOSE_SYNCING`](#sw_verbose_syncing) | `bool` | `true` |
| [`SW_VERBOSE_SYNCING_OPTIONS`](#sw_verbose_syncing_options) | `object` | [`object`](https://github.com/codeworksdev/mochi/issues/196) |

> ## CLICK_NAME
>
> Determines the name of the JavaScript [event](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) to be used by the [`$m.onClick()`](#monclick) method. If set to `"auto"`, the event name will be determined automatically depending on the active host device type. For example, [`touchstart`](https://developer.mozilla.org/en-US/docs/Web/Events/touchstart) would be used for touch-enabled devices, while [`click`](https://developer.mozilla.org/en-US/docs/Web/Events/click) would be used for all other device types.

> ## DEBUG_MODE
>
> If set to `true`, Mochi will output informational messages to the [Web Console](https://developer.mozilla.org/en-US/docs/Web/API/Console/info) for some operations. Recommended for app development and debugging, but not for production-ready apps.

> ## ENABLE_SERVICE_WORKER
>
> If set to `true`, activates the built-in [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers). More information [here](#caching-system).

> ## LAZY_LOAD_PLUGINS
>
> Use this flag to allow Mochi to "lazy load" a series of [plugins](#plugins), but only after the active HTML document is fully rendered, and other scripts have finished executing. This is especially useful if/when your application meets one or more of the following criteria:
>
> 1. It's an online web application.
> 2. Your app runs over a slow network or needs to be optimized for fast rendering.
> 3. You'd like to load a set of plugins for several HTML documents globally.
> 4. Your app requires one or more plugins, but not immediately at run-time.
> 5. Other situations that require optimal rendering performance.
>
> _**WARNING:** This feature is only supported for protocol schemes: **data**, **http**, and **https**._

> ## SW_UPDATE_NOTIFICATIONS
>
> If set to `true`, allows Mochi to produce an HTML-formatted [notification widget](#mwidgetonupdateready) on screen, suggesting to the user that an app refresh/reload is necessary (e.g., when the built-in [Service Worker](#caching-system) downloads updated assets from the network). More information [here](#mwidgetonupdateready).

> ## SW_UPDATE_NOTIFICATIONS_OPTIONS
>
> Only applies when [`SW_UPDATE_NOTIFICATIONS`](#sw_update_notifications) is `true`. More information [here](https://github.com/codeworksdev/mochi/issues/195).

> ## SW_VERBOSE_SYNCING
>
> If set to `true` (default), allows Mochi to produce an HTML-formatted [alert widget](#mwidgetondownloading), indicating to the user that an operation is in progress and the app is busy (e.g., downloading network resources). More information [here](#mwidgetondownloading).

> ## SW_VERBOSE_SYNCING_OPTIONS
>
> Only applies when [`SW_VERBOSE_SYNCING`](#sw_verbose_syncing) is `true`. More information [here](https://github.com/codeworksdev/mochi/issues/196).

## Properties
The following properties are available in the persistent Mochi instance (`$m`):

| Property | Type | Description |
|--|--|--|
| `__body` | [`jQuery`](https://learn.jquery.com/using-jquery-core/jquery-object/) | HTML `<body>` element. |
| `__container` | [`jQuery`](https://learn.jquery.com/using-jquery-core/jquery-object/) | HTML `#container` element, if defined. |
| `__content` | [`jQuery`](https://learn.jquery.com/using-jquery-core/jquery-object/) | HTML `#content` element, if defined. |
| `__head` | [`jQuery`](https://learn.jquery.com/using-jquery-core/jquery-object/) | HTML `<head>` element. |
| `__href` | `string` | Current window URL/address. |
| `__html` | [`jQuery`](https://learn.jquery.com/using-jquery-core/jquery-object/) | HTML `<html>` element. |
| `__observer` | [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) | [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) interface. |
| `__page_name` | `string` | Current HTML document name (without extension). |

___
# Extending Mochi

## Plugins
Mochi comes preloaded with specialized, but optional, plugins (or scripts) that further enhance the capabilities of your app. Currently, there are two official plugins available for use right out of the box. More plugins will be added in future releases, but in the meantime, we recommend you review each plugin listed below to get familiar with how to write your own. Happy coding!

| Plugin | Description | Links
|--|--|--|
| Dialog | Enhanced dialog system powered by [jQuery UI](https://jqueryui.com/). | [Documentation](https://github.com/codeworksdev/mochi/blob/master/dist/mochi/js/plugins/dialog/README.md)
| Veeva CLM Application | Adds [Veeva CLM](https://www.veeva.com/products/multichannel-crm/clm/) compatibility to Mochi. | [Documentation](https://github.com/codeworksdev/mochi/blob/master/dist/mochi/js/plugins/veeva/README.md)
___
# Further Reading
Because Mochi is built with Bootstrap, learning to use it is as easy as digging into their official docs and mastering the awesome features provided by the framework. We encourage you to head on over to the [official Bootstrap documentation](https://getbootstrap.com/docs/4.1/getting-started/introduction/) to learn like a pro. Happy coding!

___
# License
Mochi is licensed under the MIT license. (http://opensource.org/licenses/MIT)
