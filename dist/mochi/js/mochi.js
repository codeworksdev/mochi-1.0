/*!
 * Mochi v1.2 (https://github.com/codeworksdev/mochi)
 * Copyright (c) 2014-2016 Carlos M. Bonilla <guru@codeworksnyc.com>
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
    throw new Error('Mochi\'s JavaScript requires jQuery')
    }

+function($)
{
    var version = $.fn.jquery.split(' ')[0].split('.');

    if (
      (version[0] < 2 && version[1] < 9)
      || (version[0] == 1 && version[1] == 9 && version[2] < 1))
    {
        throw new Error('Mochi\'s JavaScript requires jQuery version 1.9.1 or higher')
    }
}(jQuery);

if (
  !$
  || typeof $ !== 'function')
{
    $ = jQuery
}

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
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
      ._func()
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

    _func : function()
    {
        this.GET = {};
        this.SET = {};

        return this
    },

    _html : function()
    {
        var o = this.o,
            d = this.html,
            p = d.attr('data-page'),
            v = d.attr('data-view');

        if (!/^\d+$/.test(p)) d.attr('data-page',o.DEF_PAGE_NUMBER);
        if (!/^\d+$/.test(v)) d.attr('data-view',o.DEF_VIEW_NUMBER);

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

    vClickName   : function(){return this.html.hasClass('no-touchevents')?this.o.CLICK_D:this.o.CLICK_M},
    onClick      : function(e,f){if(_.isFunction(f))(_.isElement(e)?$(e):e).on(this.vClickName(),f);return this},
    getPage      : function(p){return this._getState('Page',p)},
    getView      : function(p){return this._getState('View',p)},
    setPage      : function(n,f){return this._setState('Page',n,f)},
    setView      : function(n,f){return this._setState('View',n,f)},
    onPageChange : function(old_p){return this._onStateChange('Page',old_p)},
    onViewChange : function(old_v){return this._onStateChange('View',old_v)},
    loadPage     : function(n){return this._load('Page',n)},
    loadView     : function(n){return this._load('View',n)},
    unloadPage   : function(n){return this._unload('Page',n)},
    unloadView   : function(n){return this._unload('View',n)},
    do           : function(f){if(/^\w+$/.test(f))eval('if(_.isFunction(window["'+f+'"]))window["'+f+'"].call(this);');return this},
    cache        : function(s){if(s&&typeof s==='string'){var e=new Image;e.src=s}return this},

    Option : function(k,v)
    {
        if (
          arguments.length
          && /^\w+$/.test(k))
        {
            if (arguments.length == 1)
            {
                return _.isFunction(this.GET[k])
                  ? this.GET[k]()
                  : this.o[k];
            }
            else
            {
                if (_.isFunction(this.SET[k])) this.SET[k](v);
                else this.o[k] = v;
            }
        }

        return this
    },

    extend : function(k,c,f)
    {
        eval('this[k] = new c(this)');

        if (
          f
          && typeof f === 'function')
        {
            f.call(this[k])
        }
    }
};
