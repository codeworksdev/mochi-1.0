/*!
 * Mochi v1.4 (https://github.com/codeworksdev/mochi)
 * Copyright (c) 2014-2018 CODEWORKS <support@codeworksnyc.com>
 * Licensed under the MIT license
 */
$(document).ready(
    function()
    {
        window.$m = new Mochi;

        $m.do(
            [
                'mochi_page'+window.$m.getPage()+'_load',
                'mochi_view'+window.$m.getView()+'_load',
                'mochi_last'
            ]
            );
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
    this._vars();
    this._observer();
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
        this.options = {
            CLICK_NAME              : 'auto',
            ENABLE_SERVICE_WORKER   : false,
            SW_VERBOSE_SYNCING      : true,
            SW_UPDATE_NOTIFICATIONS : true,
            };
    },

    _vars : function()
    {
        this.__href      = window.location.href;
        this.__html      = $('html');
        this.__head      = $('head');
        this.__body      = $('body');
        this.__container = this.__body.find('#container');
        this.__content   = this.__body.find('#content');
        this.__page_name = /[\\\/]([^\\\\/\?]+)(\?.*)?$/.test(this.__href) ? RegExp.$1.replace(/\.[^\.]+$/, '') : 'index';
        this.__observer  = new MutationObserver(function(mutations){mutations.forEach($m._onMutation)});

        this.__reserved = [
            'cache',
            'container',
            'content',
            'do',
            'extend',
            'getOnClickName',
            'getOption',
            'getPage',
            'getState',
            'getView',
            'load',
            'loadPage',
            'loadView',
            'onClick',
            'onPageChange',
            'onStateChange',
            'onViewChange',
            'options',
            'sanitizeTitle',
            'setOnClickName',
            'setOption',
            'setPage',
            'setState',
            'setView',
            'unload',
            'unloadPage',
            'unloadView'
            ];
    },

    _observer : function()
    {
        this.__observer.observe(
            this.__html[0],
            {
                attributes    : true,
                childList     : true,
                characterData : true
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
                                $m.onDownloading('SYNC FINISHED')
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

                                $m.onUpdateReady()
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
                                                    $m.onUpdateReady()
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
                                        $m.onDownloading()
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
            this.__head.append(
                '<link media="all" rel="icon" href="frontend/img/brand/launcher-icon-1x.png">'
                );
        }
    },

    _onMutation : function(mutation)
    {
        if (
          window['mochi_onmutation']
          && _.isFunction(window['mochi_onmutation']))
        {
            mochi_onmutation(mutation)
        }
    },

    cache          : function(src,w,h){var e=new Image(w,h);e.src=src;return e},
    container      : function(){return this.__body.find('#container')},
    content        : function(){return this.__body.find('#content')},
    getOnClickName : function(){var o=this.getOption('CLICK_NAME');return o=='auto'?(this.__html.hasClass('no-touchevents')?'click':'touchstart'):o},
    getOption      : function(k){return this.options[k]},
    getPage        : function(p){return this.getState('Page',p)},
    getState       : function(s,p){return window.s.pad(this.__html.attr('data-'+s.toLowerCase()),p?p:0,'0')},
    getView        : function(p){return this.getState('View',p)},
    load           : function(k,n){return (/^\w+$/.test(k)&&/^\d+$/.test(n))?this.do('mochi_'+k+n+'_load'):this},
    loadPage       : function(n){return this.load('Page',n)},
    loadView       : function(n){return this.load('View',n)},
    onPageChange   : function(old_p){return this.onStateChange('Page',old_p)},
    onStateChange  : function(s,old_p){this['unload'+s](old_p);return this['load'+s](this.__html.attr('data-'+s.toLowerCase()))},
    onViewChange   : function(old_v){return this.onStateChange('View',old_v)},
    unload         : function(k,n){return (/^\w+$/.test(k)&&/^\d+$/.test(n))?this.do('mochi_'+k+n+'_unload'):this},
    unloadPage     : function(n){return this.unload('Page',n)},
    unloadView     : function(n){return this.unload('View',n)},
    setOnClickName : function(v){return this.setOption('CLICK_NAME',v)},
    setPage        : function(n,f){return this.setState('Page',n,f)},
    setView        : function(n,f){return this.setState('View',n,f)},

    do : function(f, a)
    {
        if (_.isArray(f))
        {
            _.each(
                f,
                function(v)
                {
                    this.instance.do(v, this.args)
                },
                {
                    instance : this,
                    args : a
                }
                );
        }
        else
        {
            var k = this.sanitizeTitle(f, '_'),
                c;

            if (/^[a-z][a-z\d_]*$/.test(k))
            {
                c = 'if(_.isFunction(window["'+k+'"]))'
                  + 'window["'+k+'"].apply(this,a)';

                eval(c)
            }
        }

        return this
    },

    extend : function(k,c,f)
    {
        if (
          /^[a-z]\w*$/i.test(k)
          && $.inArray(k, this.__reserved) == -1)
        {
            eval('this[k] = new c(c.mochi=this)');
            if (f) f.call(this[k])
        }
        else
        {
            throw new MochiException(
                'Cannot extend as "'+k+'". Name reserved or unsupported.'
                );
        }

        return this
    },

    onClick : function(selector, data, handler)
    {
        var s,
            e = this.getOnClickName(),
            f = _.isFunction(data),
            d = f ? {} : data,
            h = f ? data : handler;

        switch (typeof selector)
        {
            case 'string': s = $(selector); break;
            default : s = _.isElement(selector) ? $(selector) : selector; break;
        }

        return s.on(e, d, h)
    },

    onDownloading : function(title)
    {
        var k = 'mochiAlertDownloading',
            c = this.__body.find('#'+k+'-container'),
            t;

        if (!c.length)
        {
            t = (title && /\S/.test(title))
              ? $.trim(title)
              : 'SYNCING';

            this.__body.append(
                  '<div id="mochiAlertDownloading-container">'
                +   '<div class="alert alert-info alert-dismissible fade show" role="alert">'
                +     '<span class="small"><strong>'+t+'</strong>&nbsp;&nbsp;<i class="fas fa-cog fa-spin fa-lg"></i></span>'
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

    onUpdateReady : function()
    {
        var k = 'mochiModalUpdateAvailable',
            c = this.__body.find('#'+k+'-container');

        if (!c.length)
        {
            this.__body.append(
                  '<div id="'+k+'-container">'
                +   '<button type="button" class="btn btn-success" data-toggle="modal" data-target="#'+k+'">'
                +     'Update Available'
                +   '</button>'
                + '</div>'
                + '<div class="modal fade" id="'+k+'" tabindex="-1" role="dialog" aria-labelledby="'+k+'Label" aria-hidden="true">'
                +   '<div class="modal-dialog modal-dialog-centered" role="document">'
                +     '<div class="modal-content">'
                +       '<div class="modal-header">'
                +         '<h5 class="modal-title" id="'+k+'Label">Software Update</h5>'
                +         '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
                +           '<span aria-hidden="true">&times;</span>'
                +         '</button>'
                +       '</div>'
                +       '<div class="modal-body">'
                +         '<p>Good news! A new software update is available for your app. '
                +         'We recommend updating now, but if you\'d like, you can hit cancel and manually refresh later.</p>'
                +       '</div>'
                +       '<div class="modal-footer">'
                +         '<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>'
                +         '<button type="button" class="btn btn-success" onclick="window.location.reload(true)">Update Now</button>'
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

    sanitizeTitle : function(s, r)
    {
        try
        {
            var repl = (r == null ? '-' : r).toString(),
                patt = '('+repl.replace(/([\.\(\)\$\^\*\+\-\?\|\{\}\[\]\\])/g, '\\$1')+')',
                regx = new RegExp(patt+'{2,}', 'g');

            return s
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
        }
        catch(e) {return ''}
    },

    setOption : function(k, v)
    {
        if (_.isObject(k))
        {
            var key;

            for (key in k)
            {
                this.setOption(
                    key,
                    k[key]
                    );
            }
        }
        else
        {
            if (
              k
              && /^[a-z]\w*$/i.test(k))
            {
                this.options[k] = v
            }
        }

        return this
    },

    setState : function(s, n, f)
    {
        if (
          /^\d+$/.test(n)
          && (f || (n != this['get'+s]())))
        {
            var attr  = 'data-'+s.toLowerCase(),
                old_n = this.__html.attr(attr),
                new_n = n;

            this.__html.attr(attr, new_n);
            return this['on'+s+'Change'](old_n)
        }

        return this
    }
};

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

function MochiException(msg)
{
    this.message = msg;
    this.type = 'MochiException';
};
