/*!
 * Mochi v1.2.3 (https://github.com/codeworksdev/mochi)
 * Copyright (c) 2014-2016 CODEWORKS <support@codeworksnyc.com>
 * Licensed under the MIT license
 */

$(document).ready(
    function(event) {
        window.$m = new Mochi()
        }
    );

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

function Mochi()
{
    this
      ._conf()
      ._observer()
      ._html()
      ._init();
};

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

Mochi.prototype =
{
    _conf : function()
    {
        this.o = {
            CLICK_D         : 'click',
            CLICK_M         : 'touchstart',
            DEF_FILENAME    : 'home',
            DEF_PAGE_NUMBER : 0,
            DEF_VIEW_NUMBER : 0
            };

        this.href      = window.location.href;
        this.html      = $('html');
        this.body      = $('body');
        this.container = this.body.find('#container');
        this.content   = this.body.find('#content');
        this.filename  = /([^\\\/]+?)(?:\.\w+)?$/.test(this.href) ? RegExp.$1 : this.o.DEF_FILENAME;

        return this
    },

    _html : function()
    {
        var o = this.o,
            d = this.html,
            p = d.attr('data-page'),
            v = d.attr('data-view');

        if (!/^\d+(\.\d+)?$/.test(p)) d.attr('data-page',o.DEF_PAGE_NUMBER);
        if (!/^\d+(\.\d+)?$/.test(v)) d.attr('data-view',o.DEF_VIEW_NUMBER);

        this.body.addClass(
              'is-page-'
            + (/([^\\\/]+?)(?:\.\w+)?$/.test(this.href)?RegExp.$1.replace(/\W/g,'-'):this.o.DEF_FILENAME)
            );

        return this
    },

    _init : function()
    {
        this
          .do('Mochi_init')
          .do('Mochi_Page'+this.getPage()+'_load')
          .do('Mochi_View'+this.getView()+'_load')
          .do('Mochi_last');

        return this
    },

    _getState : function(s,p)
    {
        return window.s.pad(
            this.html.attr('data-'+s.toLowerCase()),
            p ? p : 0,
            '0'
            );
    },

    _setState : function(s,n,f)
    {
        if (
          /^\d+$/.test(n)
          && (f || (n != this['get'+s]())))
        {
            var attr  = 'data-'+s.toLowerCase(),
                old_n = this.html.attr(attr),
                new_n = n;

            this.html.attr(attr,new_n);
            return this['on'+s+'Change'](old_n)
        }

        return this
    },

    _onStateChange : function(s,old_n)
    {
        this['unload'+s](old_n);
        this['load'+s](this.html.attr('data-'+s.toLowerCase()));

        return this
    },

    _unload : function(k,n)
    {
        if (
          /^\d+$/.test(n)
          && /^\w+$/.test(k))
        {
            this.do('Mochi_'+k+n+'_unload')
        }

        return this
    },

    _load : function(k,n)
    {
        if (
          /^\d+$/.test(n)
          && /^\w+$/.test(k))
        {
            this.do('Mochi_'+k+n+'_load')
        }

        return this
    },

    _observer : function()
    {
        var target   = this.container.get(0),
            config   = {attributes: true, childList: true, characterData: true},
            observer = new MutationObserver(
                function(mutations)
                {
                    mutations.forEach(
                        $m.onMutation
                        );
                }
                );

        observer.observe(target,config);
        return this
    },

    cache          : function(src,w,h){var e=new Image(w,h);e.src=src;return e},
    do             : function(f){x=this.sanitize_title(f);if(/^\w+$/.test(x))eval('if(_.isFunction(window["'+x+'"]))window["'+x+'"].call(this);');return this},
    getPage        : function(p){return this._getState('Page',p)},
    getView        : function(p){return this._getState('View',p)},
    loadPage       : function(n){return this._load('Page',n)},
    loadView       : function(n){return this._load('View',n)},
    onMutation     : function(mutation){if(_.isFunction(window['Mochi_onMutation']))Mochi_onMutation.call(this,mutation)},
    onPageChange   : function(old_p){return this._onStateChange('Page',old_p)},
    onViewChange   : function(old_v){return this._onStateChange('View',old_v)},
    unloadPage     : function(n){return this._unload('Page',n)},
    unloadView     : function(n){return this._unload('View',n)},
    sanitize_title : function(s,r){return s.replace(/\W/g,r==null?'_':r)},
    setPage        : function(n,f){return this._setState('Page',n,f)},
    setView        : function(n,f){return this._setState('View',n,f)},
    vClickName     : function(){return this.html.hasClass('no-touchevents')?this.o.CLICK_D:this.o.CLICK_M},

    extend : function(k,c,f)
    {
        eval('this[k] = new c(c.mochi=this)');

        if (
          f
          && typeof f === 'function')
        {
            f.call(this[k])
        }
    },

    onClick : function(selector,data,handler)
    {
        var s,
            e = this.vClickName(),
            f = _.isFunction(data),
            d = f ? {} : data,
            h = f ? data : handler;

        switch (typeof selector)
        {
            case 'string': s = $(selector);                                    break;
            default      : s = _.isElement(selector) ? $(selector) : selector; break;
        }

        s.on(e,null,d,h);
        return this
    }
};
