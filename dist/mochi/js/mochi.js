/*!
 * Mochi v1.3.3 (https://github.com/codeworksdev/mochi)
 * Copyright (c) 2014-2017 CODEWORKS <support@codeworksnyc.com>
 * Licensed under the MIT license
 */

$(document).ready(
    function() {
        window.$m = new Mochi
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
            CLICK_NAME : 'auto',
            ENABLE_SERVICE_WORKER : false,
            };
    },

    _vars : function()
    {
        this.__href      = window.location.href;
        this.__html      = $('html');
        this.__body      = $('body');
        this.__container = this.__body.find('#container');
        this.__content   = this.__body.find('#content');
        this.__page_name = /[\\\/]([^\\\\/\?]+)(\?.*)?$/.test(this.__href) ? RegExp.$1.replace(/\.[^\.]+$/, '') : 'index';

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

        this.__observer = new MutationObserver(
            function(mutations) {
                mutations.forEach($m._onMutation)
                }
            );
    },

    _observer : function()
    {
        this.__observer.observe(
            this.__container.get(0),
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

    _body : function()
    {
        this.__body.addClass(
              'is-page-'
            + this.sanitizeTitle(this.__page_name)
            );
    },

    _init : function()
    {
        this
          .do('Mochi_init')
          .do('Mochi_Page'+this.getPage()+'_load')
          .do('Mochi_View'+this.getView()+'_load')
          .do('Mochi_last');

        if (
          this.options.ENABLE_SERVICE_WORKER
          && 'serviceWorker' in navigator)
        {
            navigator
              .serviceWorker
              .register('/sw.js')
              .then(function(registration){console.log('ServiceWorker registration successful with scope: '+registration.scope)})
              .catch(function(err) {console.log('ServiceWorker registration failed: '+err)});
        }
    },

    _onMutation : function(mutation)
    {
        if (typeof window['Mochi_onMutation'] === 'function')
        {
            Mochi_onMutation.call(
                this,
                mutation
                );
        }
    },

    cache          : function(src,w,h){var e=new Image(w,h);e.src=src;return e},
    container      : function(){return this.__body.find('#container')},
    content        : function(){return this.__body.find('#content')},
    do             : function(f){var x=this.sanitizeTitle(f,'_');if(/^\w+$/.test(x))eval('if(_.isFunction(window["'+x+'"]))window["'+x+'"].call(this);');return this},
    getOnClickName : function(){var o=this.getOption('CLICK_NAME');return o=='auto'?(this.__html.hasClass('no-touchevents')?'click':'touchstart'):o},
    getOption      : function(k){return this.options[k]},
    getPage        : function(p){return this.getState('Page',p)},
    getState       : function(s,p){return window.s.pad(this.__html.attr('data-'+s.toLowerCase()),p?p:0,'0')},
    getView        : function(p){return this.getState('View',p)},
    load           : function(k,n){return (/^\w+$/.test(k)&&/^\d+$/.test(n))?this.do('Mochi_'+k+n+'_load'):this},
    loadPage       : function(n){return this.load('Page',n)},
    loadView       : function(n){return this.load('View',n)},
    onPageChange   : function(old_p){return this.onStateChange('Page',old_p)},
    onStateChange  : function(s,old_p){this['unload'+s](old_p);return this['load'+s](this.__html.attr('data-'+s.toLowerCase()))},
    onViewChange   : function(old_v){return this.onStateChange('View',old_v)},
    unload         : function(k,n){return (/^\w+$/.test(k)&&/^\d+$/.test(n))?this.do('Mochi_'+k+n+'_unload'):this},
    unloadPage     : function(n){return this.unload('Page',n)},
    unloadView     : function(n){return this.unload('View',n)},
    sanitizeTitle  : function(s,r){return s.replace(/[^a-z\d]/ig,r==null?'-':r)},
    setOnClickName : function(v){return this.setOption('CLICK_NAME',v)},
    setOption      : function(k,v){if(k&&/^[a-z]\w*$/i.test(k)){this.options[k]=v;return true}return},
    setPage        : function(n,f){return this.setState('Page',n,f)},
    setView        : function(n,f){return this.setState('View',n,f)},

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
