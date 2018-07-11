/*!
 * Mochi v1.5.2 (https://github.com/codeworksdev/mochi)
 * Copyright (c) 2014-2018 CODEWORKS <support@codeworksnyc.com>
 * Licensed under the MIT license
 */
$(document).ready(
    function()
    {
        window.$m = new Mochi;

        $m.do([
            'mochi_load',
            'mochi_load_page',
            'mochi_load_page'+Number($m.getPage()),
            'mochi_load_view',
            'mochi_load_view'+Number($m.getView()),
            'mochi_last',
            ]);
    }
    );

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

function Mochi()
{
    this._options();
    this._before();
    this._vars();
    this._observe();
    this._html();
    this._fa();
    this._body();
    this._init();
};

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

Mochi.prototype =
{
    _options : function()
    {
        var o = {
            CLICK_NAME              : 'auto',
            DEBUG_MODE              : false,
            ENABLE_SERVICE_WORKER   : false,
            LAZY_LOAD_PLUGINS       : [],
            SW_UPDATE_NOTIFICATIONS : true,
            SW_UPDATE_NOTIFICATIONS_OPTIONS : {
                buttonTitle       : 'Update Available',
                dialogButtonTitle : 'Update Now',
                dialogContent     : '<p>Good news! A new software update is available for your app. We recommend updating now, but if you\'d like, you can hit cancel and manually refresh later.</p>',
                dialogTitle       : 'Software Update',
                },
            SW_VERBOSE_SYNCING : true,
            SW_VERBOSE_SYNCING_OPTIONS : {
                text : 'SYNCING',
                icon : 'fa-cog',
                spin : true,
                },
            };

        this.default = JSON.parse(JSON.stringify(o));
        this.options = JSON.parse(JSON.stringify(o));
    },

    _before : function()
    {
        this.do('mochi_before')
    },

    _vars : function()
    {
        this.__body      = $('body');
        this.__container = this.__body.find('#container');
        this.__content   = this.__body.find('#content');
        this.__head      = $('head');
        this.__href      = window.location.href;
        this.__html      = $('html');
        this.__observer  = new MutationObserver(function(mutations){mutations.forEach($m._onMutation, $m)});
        this.__page_name = /[\\\/]([^\\\\/\?]+)(\?.*)?$/.test(this.__href) ? RegExp.$1.replace(/\.[^\.]+$/, '') : 'index';
    },

    _observe : function()
    {
        this.__observer.observe(
            this.__html[0],
            {
                attributes    : true,
                childList     : true,
                characterData : true,
                subtree       : true,
            }
            );
    },

    _html : function()
    {
        var d = this.__html,
            p = d.attr('data-page'),
            v = d.attr('data-view'),
            r = new RegExp(/^\d+(\.\d+)?$/);

        if (!r.test(p)) d.attr('data-page', 0);
        if (!r.test(v)) d.attr('data-view', 0);
    },

    _fa : function()
    {
        var d = this.__html,
            c = 'fontawesome-i2svg-active';

        if (!d.hasClass(c))
        {
            d.addClass(
                c.replace(/-\w+$/, '-no-icons-found')
                );
        }
    },

    _body : function()
    {
        this.__html.addClass(
              'is-page-'
            + this.sanitizeTitle(this.__page_name)
            );
    },

    _init : function()
    {
        this.do('mochi_init');

        if (this.__html.attr('manifest'))
        {
            if (this.getOption('SW_VERBOSE_SYNCING') === true)
            {
                window.applicationCache.addEventListener(
                    'downloading',
                    function()
                    {
                        setTimeout(
                            function() {
                                $m.widgetOnDownloading()
                                },
                            500
                            );
                    }
                    );

                window.applicationCache.addEventListener(
                    'cached',
                    function()
                    {
                        setTimeout(
                            function() {
                                $('#mochiAlertDownloading-container .alert').alert('close')
                                },
                            3000
                            );
                    }
                    );
            }

            if (this.getOption('SW_UPDATE_NOTIFICATIONS') === true)
            {
                window.applicationCache.addEventListener(
                    'updateready',
                    function()
                    {
                        setTimeout(
                            function()
                            {
                                setTimeout(
                                    function() {
                                        $('#mochiAlertDownloading-container .alert').alert('close')
                                        },
                                    3000
                                    );

                                $m.widgetOnUpdateReady()
                            },
                            500
                            );
                    }
                    );
            }
        }

        if (
          this.options.ENABLE_SERVICE_WORKER
          && 'serviceWorker' in navigator)
        {
            navigator
                .serviceWorker
                .register('./sw.js')
                .then(
                    reg =>
                    {
                        console.log('ServiceWorker registration successful with scope: '+reg.scope);

                        reg.addEventListener(
                            'updatefound', () =>
                            {
                                if (reg.active)
                                {
                                    const newWorker = reg.installing;

                                    newWorker.addEventListener(
                                        'statechange', () =>
                                        {
                                            switch (newWorker.state)
                                            {
                                                case 'activated':
                                                if ($m.getOption('SW_UPDATE_NOTIFICATIONS') === true)
                                                {
                                                    $m.widgetOnUpdateReady()
                                                }
                                                break;
                                            }
                                        }
                                        );
                                }
                                else
                                {
                                    const newWorker = reg.installing;

                                    if ($m.getOption('SW_VERBOSE_SYNCING') === true)
                                    {
                                        $m.widgetOnDownloading()
                                    }

                                    newWorker.addEventListener(
                                        'statechange', () =>
                                        {
                                            switch (newWorker.state)
                                            {
                                                case 'activated':
                                                setTimeout(
                                                    function() {
                                                        $('#mochiAlertDownloading-container .alert').alert('close')
                                                        },
                                                    1000
                                                    );
                                                break;
                                            }
                                        }
                                        );
                                }
                            }
                            );
                    }
                    )
                .catch(
                    function(err) {
                        console.error('ServiceWorker registration failed: '+err)
                        }
                    );
        }
        else
        {
            if (!this.__head.find('link[rel="icon"]').length)
            {
                this.__head.append(
                    '<link media="all" rel="icon" href="frontend/img/brand/launcher-icon-1x.png">'
                    );
            }
        }

        if (
          this.options.LAZY_LOAD_PLUGINS
          && _.isArray(this.options.LAZY_LOAD_PLUGINS)
          && this.options.LAZY_LOAD_PLUGINS.length)
        {
            _.each(
                this.options.LAZY_LOAD_PLUGINS,
                function(name) {
                    $.getScript('mochi/js/plugins/'+name+'/dist/'+name+'.min.js')
                    },
                this
                );
        }
    },

    _onMutation : function(mutation)
    {
        if (
          window['mochi_onmutation']
          && _.isFunction(window['mochi_onmutation']))
        {
            this.log('hook: mochi_onmutation('+mutation.constructor.name+')');
            mochi_onmutation(mutation)
        }
    },

    do : function(f, a)
    {
        if (_.isArray(f))
        {
            _.each(
                f,
                function(v) {
                    this.instance.do(v, this.args)
                    },
                {
                    instance : this,
                    args : a,
                }
                );
        }
        else if (
          f
          && typeof f === 'string'
          && /^[a-zA-Z_\$][\w\$]*$/.test(f)
          && window[f]
          && _.isFunction(window[f]))
        {
            this.log('hook: '+f+'.apply(Mochi, '+JSON.stringify(a)+')');
            eval('window["'+f+'"].apply(this, a)')
        }

        return this
    },

    extend : function(k, c, m, f)
    {
        if (
          k
          && typeof k === 'string'
          && /^[a-z]\w*$/i.test(k))
        {
            var r = [
                '__body',
                '__container',
                '__content',
                '__head',
                '__href',
                '__html',
                '__observer',
                '__page_name',
                '_before',
                '_body',
                '_fa',
                '_html',
                '_init',
                '_observe',
                '_onMutation',
                '_options',
                '_vars',
                'default',
                'do',
                'extend',
                'getDefaultOption',
                'getOnClickName',
                'getOption',
                'getPage',
                'getState',
                'getView',
                'isSimpleObj',
                'load',
                'loadPage',
                'loadView',
                'log',
                'onClick',
                'options',
                'sanitizeTitle',
                'setOnClickName',
                'setOption',
                'setPage',
                'setState',
                'setView',
                'unload',
                'unloadPage',
                'unloadView',
                'widgetOnDownloading',
                'widgetOnUpdateReady',
                ];

            if (
              $.inArray(k, r) == -1
              && !_.has(this, k)
              && _.isFunction(c))
            {
                var meta = (m && this.isSimpleObj(m)) ? JSON.parse(JSON.stringify(m)) : {},
                    func = (m && _.isFunction(m)) ? m : f,
                    json = JSON.stringify(meta);

                this.log('extend: $m.'+k+' = new '+c.name+'('+json+')');
                eval('this[k]=new c(meta)');

                if (
                  func
                  && _.isFunction(func))
                {
                    func.apply(this[k], meta)
                }

                return this
            }
        }

        throw new MochiError(
              'Cannot extend as "'+k+'". '
            + 'Name reserved, unsupported, or already defined.'
            );

        return this
    },

    getDefaultOption : function(k)
    {
        return this.getOption(k, true)
    },

    getOnClickName : function()
    {
        var o = this.getOption('CLICK_NAME');

        return o == 'auto'
          ? (this.__html.hasClass('no-touchevents') ? 'click' : 'touchstart')
          : o;
    },

    getOption : function(k, d)
    {
        if (
          k
          && typeof k === 'string')
        {
            var o = this[d ? 'default' : 'options'];

            if (_.has(o, k))
            {
                var v = _.isFunction(o[k])
                  ? o[k].call(this)
                  : o[k];

                return this.isSimpleObj(v)
                  ? JSON.parse(JSON.stringify(v))
                  : v;
            }
        }

        return
    },

    getPage : function(p)
    {
        return this.getState('page', p)
    },

    getState : function(s, p)
    {
        if (
          s
          && typeof s === 'string'
          && /^page|view$/i.test(s))
        {
            var n = this.__html.attr('data-'+s.toLowerCase());

            return window.s.pad(
                (n && /^\d+(\.\d+)?$/.test(n)) ? Number(n) : 0,
                (p && /^\d+$/.test(p)) ? Number(p) : 0,
                '0'
                );
        }

        return
    },

    getView : function(p)
    {
        return this.getState('view', p)
    },

    isSimpleObj : function(v)
    {
        if (
          v
          && _.isObject(v)
          && !_.isArray(v)
          && !_.isFunction(v))
        {
            return true
        }

        return
    },

    load : function(k, n, o)
    {
        if (
          k
          && typeof k === 'string'
          && /^page|view$/i.test(k)
          && /^\d+(\.\d+)?$/.test(n))
        {
            var k = k.toLowerCase(),
                n = Number(n),
                h = 'mochi_load_'+k+n.toString().replace(/\D/g,'_'),
                a = [
                    _.defaults(
                        this.isSimpleObj(o) ? o : {},
                        {
                            caller         : null,
                            newStateNumber : n,
                            oldStateNumber : n,
                            stateName      : k,
                        }
                        )
                    ];

            this.do(
                [
                    'mochi_load',
                    'mochi_load_'+k,
                    h,
                    'mochi_onchange',
                ],
                a
                );
        }

        return this
    },

    loadPage : function(n, f)
    {
        return this.load('page', n, f)
    },

    loadView : function(n, f)
    {
        return this.load('view', n, f)
    },

    log : function(msg, cond)
    {
        if (
          cond
          || this.getOption('DEBUG_MODE') === true)
        {
            console.info(msg)
        }

        return this
    },

    onClick : function(target, data, handler)
    {
        var e = this.getOnClickName(),
            f = _.isFunction(data),
            d = f ? {} : data,
            h = f ? data : handler,
            s;

        switch (typeof target)
        {
            case 'string':
            s = $(target);
            break;

            default:
            s = _.isElement(target)
              ? $(target)
              : target;
            break;
        }

        return s.on(
            e,
            d,
            _.isFunction(h)
              ? h
              : false
            );
    },

    sanitizeTitle : function(str, del, def)
    {
        try
        {
            var repl = (arguments.length > 1 && /^string|number$/.test(typeof del) ? del.toString() : '-'),
                patt = '('+repl.replace(/([\.\(\)\$\^\*\+\-\?\|\{\}\[\]\\])/g, '\\$1')+')',
                regx = new RegExp(patt+'{2,}', 'g');

            str = str
              .toString()
              .toLowerCase()
              .replace(/[^a-z\d]/ig, repl)
              .replace(regx, repl)
              .replace(
                new RegExp(
                    '^'+patt+'*|'+patt+'*$',
                    'g'
                    ),
                ''
                );

            if (str.length) return str;
            else
            {
                return /^string|number$/.test(typeof def)
                  ? this.sanitizeTitle(def)
                  : '';
            }
        }
        catch(e) {return ''}
    },

    setOnClickName : function(eventName)
    {
        if (
          eventName
          && typeof eventName === 'string'
          && /^\w+$/i.test(eventName))
        {
            return this.setOption(
                'CLICK_NAME',
                eventName
                );
        }

        return this
    },

    setOption : function(k, v)
    {
        if (this.isSimpleObj(k))
        {
            _.each(
                k,
                function(v, k) {
                    this.setOption(k, v)
                    },
                this
                );
        }
        else
        {
            if (
              k
              && typeof k === 'string'
              && _.has(this.options, k))
            {
                var msg = 'option: '+k+' = '+JSON.stringify(v),
                    old = _.clone(this.options[k]);

                switch (k)
                {
                    default          :        this.log( msg             ); break;
                    case 'DEBUG_MODE': if (v) this.log( msg, null, true ); break;
                }

                if (this.isSimpleObj(old))
                {
                    if (this.isSimpleObj(v))
                    {
                        _.each(
                            v,
                            function(new_v, new_k) {
                                if (_.has(this, new_k)) this[new_k] = new_v
                                },
                            this.options[k]
                            );
                    }
                }
                else
                {
                    this.options[k] = v
                }
            }
        }

        return this
    },

    setPage : function(n, f)
    {
        return this.setState('page', n, f)
    },

    setState : function(s, n, f)
    {
        if (
          s
          && typeof s === 'string'
          && /^page|view$/i.test(s)
          && /^\d+(\.\d+)?$/.test(n))
        {
            var state = window.s.capitalize(s, true),
                old_n = Number(this['get'+state]()),
                new_n = Number(n);

            if (new_n != old_n)
            {
                var data = {
                    caller         : null,
                    newStateNumber : new_n,
                    oldStateNumber : old_n,
                    stateName      : state.toLowerCase(),
                    };

                this.__html.attr('data-'+state.toLowerCase(), new_n);
                this['unload'+state](old_n, _.extend(_.clone(data), {caller : 'unload'+state}));
                this['load'+state](new_n, _.extend(_.clone(data), {caller : 'load'+state}));

                if (
                  f
                  && _.isFunction(f))
                {
                    f.call(
                        this,
                        _.extend(
                            _.clone(data),
                            {caller : f.constructor.name}
                            )
                        );
                }
            }
        }

        return this
    },

    setView : function(n, f)
    {
        return this.setState('view', n, f)
    },

    unload : function(k, n, o)
    {
        if (
          k
          && typeof k === 'string'
          && /^page|view$/i.test(k)
          && /^\d+(\.\d+)?$/.test(n))
        {
            var k = k.toLowerCase(),
                n = Number(n),
                h = 'mochi_unload_'+k+n.toString().replace(/\D/g,'_'),
                a = [
                    _.defaults(
                        this.isSimpleObj(o) ? o : {},
                        {
                            caller         : null,
                            newStateNumber : n,
                            oldStateNumber : n,
                            stateName      : k,
                        }
                        )
                    ];

            this.do(
                [
                    'mochi_unload',
                    'mochi_unload_'+k,
                    h,
                    'mochi_onchange',
                ],
                a
                );
        }

        return this
    },

    unloadPage : function(n, f)
    {
        return this.unload('page', n, f)
    },

    unloadView : function(n, f)
    {
        return this.unload('view', n, f)
    },

    widgetOnDownloading : function(text, icon, spin)
    {
        var k = 'mochiAlertDownloading',
            c = this.__body.find('#'+k+'-container'),
            o,
            d,
            y,
            t,
            i,
            s;

        if (!c.length)
        {
            o = this.getOption('SW_VERBOSE_SYNCING_OPTIONS');
            d = this.getDefaultOption('SW_VERBOSE_SYNCING_OPTIONS');
            y = function(v){return (/^string|number$/.test(typeof v) && /\S/.test(v))};
            t = $.trim( y(text) ? text : (y(o.text) ? o.text : d.text) );
            i = $.trim( y(icon) ? icon : (y(o.icon) ? o.icon : d.icon) );
            s = Boolean(arguments.length < 3 ? o.spin : spin);

            this.__body.append(
                  '<div id="mochiAlertDownloading-container">'
                +   '<div class="alert alert-info alert-dismissible fade show" role="alert">'
                +     '<span class="small"><strong>'+t+'</strong>&nbsp;&nbsp;<i class="fas '+i+(s?'fa-spin':'')+'fa-lg"></i></span>'
                +     '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
                +       '<span aria-hidden="true">&times;</span>'
                +     '</button>'
                +   '</div>'
                + '</div>'
                );

            $('#'+k+'-container .alert').on(
                'closed.bs.alert',
                new Function(
                    "$('#"+k+"-container').remove()"
                    )
                );
        }

        return this
    },

    widgetOnUpdateReady : function(buttonTitle, dialogButtonTitle, dialogContent, dialogTitle)
    {
        var k = 'mochiModalUpdateAvailable',
            c = this.__body.find('#'+k+'-container'),
            o,
            d,
            y,
            v;

        if (!c.length)
        {
            o = this.getOption('SW_UPDATE_NOTIFICATIONS_OPTIONS');
            d = this.getDefaultOption('SW_UPDATE_NOTIFICATIONS_OPTIONS');
            y = function(v){return (/^string|number$/.test(typeof v) && /\S/.test(v))};
            v = {};

            v.buttonTitle       = $.trim( y( buttonTitle       ) ? buttonTitle       : ( y(o.buttonTitle)       ? o.buttonTitle       : d.buttonTitle       ));
            v.dialogButtonTitle = $.trim( y( dialogButtonTitle ) ? dialogButtonTitle : ( y(o.dialogButtonTitle) ? o.dialogButtonTitle : d.dialogButtonTitle ));
            v.dialogContent     = $.trim( y( dialogContent     ) ? dialogContent     : ( y(o.dialogContent)     ? o.dialogContent     : d.dialogContent     ));
            v.dialogTitle       = $.trim( y( dialogTitle       ) ? dialogTitle       : ( y(o.dialogTitle)       ? o.dialogTitle       : d.dialogTitle       ));

            this.__body.append(
                  '<div id="'+k+'-container">'
                +   '<button type="button" class="btn btn-success" data-toggle="modal" data-target="#'+k+'">'
                +     v.buttonTitle
                +   '</button>'
                + '</div>'
                + '<div class="modal fade" id="'+k+'" tabindex="-1" role="dialog" aria-labelledby="'+k+'Label" aria-hidden="true">'
                +   '<div class="modal-dialog modal-dialog-centered" role="document">'
                +     '<div class="modal-content">'
                +       '<div class="modal-header">'
                +         '<h5 class="modal-title" id="'+k+'Label">'+v.dialogTitle+'</h5>'
                +         '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
                +           '<span aria-hidden="true">&times;</span>'
                +         '</button>'
                +       '</div>'
                +       '<div class="modal-body">'
                +         v.dialogContent
                +       '</div>'
                +       '<div class="modal-footer">'
                +         '<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>'
                +         '<button type="button" class="btn btn-success" onclick="window.location.reload(true)">'+v.dialogButtonTitle+'</button>'
                +       '</div>'
                +     '</div>'
                +   '</div>'
                + '</div>'
                );

            $('#'+k).on(
                'hidden.bs.modal',
                new Function(
                      "$('#"+k+"-container').remove();"
                    + "$(this).modal('dispose').remove()"
                    )
                );
        }

        return this
    },
};

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

class MochiError extends Error {
    constructor(message) {
        super(message);
        this.name = 'MochiError'
        }
    };
