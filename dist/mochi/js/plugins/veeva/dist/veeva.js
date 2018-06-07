/*!
 * Mochi Plugin - Veeva CLM Application v1.0 (https://github.com/codeworksdev/mochi/tree/master/dist/frontend/js/plugins/veeva)
 * Copyright (c) 2014-2018 CODEWORKS <support@codeworksnyc.com>
 * Licensed under the MIT license
 */
$(document).ready(
    function(event)
    {
        $m.extend(
            'veeva',
            MochiPlugin__Veeva
            );
    }
    );

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

function MochiPlugin__Veeva()
{
    this._options();
    this._init();
};

MochiPlugin__Veeva.prototype =
{
    _options : function()
    {
        var o                        = {};
            o.CLM_VERSION            = '1.0';
            o.CLM_NAME               = $('html title').text();
            o.CLM_ID                 = o.CLM_NAME.replace(/\W/g,'_').toUpperCase()+'_'+o.CLM_VERSION.replace(/\W/g,'_');
            o.CLM_SLIDE_PREFIX       = o.CLM_ID.toLowerCase()+'_slide';
            o.CLM_NUMBER_PAD         = 2
            o.CLM_FIRST_SLIDE_NUMBER = 0;
            o.CLM_LAST_SLIDE_NUMBER  = 0;
            o.CLM_NAVIGATION         = false;
            o.CLM_NAVIGATION_THEME   = false;

        this.default = _.clone(o);
        this.options = _.clone(o);
    },

    _init : function()
    {
        _.each(
            this.options,
            function(v, k)
            {
                switch (k)
                {
                    case 'CLM_NAVIGATION':
                    if (v)
                    {
                        this._onOptionChange(
                            k,
                            {from: false, to : true}
                            );
                    }
                    break;
                }
            },
            this
            );
    },

    _onOptionChange : function(k, data)
    {
        if (data.from !== data.to)
        {
            switch (k)
            {
                case 'CLM_NAVIGATION':
                    (function(instance, v)
                    {
                        var e = $('#mochi-plugin-veeva-nav');

                        if (!v) e.remove();
                        else
                        {
                            var h = $(
                                  '<div data-mochi="plugin" id="mochi-plugin-veeva-nav">'
                                +   '<span></span>'
                                +   '<span></span>'
                                +   '<span></span>'
                                + '</div>'
                                ),
                                b = h.find('> span');

                            $m.onClick(b.eq(0), function(){$m.veeva.goHome()});
                            $m.onClick(b.eq(1), function(){$m.veeva.prevSlide()});
                            $m.onClick(b.eq(2), function(){$m.veeva.nextSlide()});

                            $m.__body.append(h);

                            if (instance.options.CLM_NAVIGATION_THEME)
                            {
                                instance._onOptionChange(
                                    'CLM_NAVIGATION_THEME',
                                    {
                                        from : false,
                                        to : true,
                                    }
                                    );
                            }
                        }
                    }
                    )(this, data.to);
                break;

                case 'CLM_NAVIGATION_THEME':
                    (function(instance, v)
                    {
                        var e = $('#mochi-plugin-veeva-nav');

                        if (e.length)
                        {
                            var b = e.find('> span');

                            if (!v) b.empty();
                            else
                            {
                                b.eq(0).append('<i class="fas fa-home"></i>');
                                b.eq(1).append('<i class="fas fa-angle-left"></i>');
                                b.eq(2).append('<i class="fas fa-angle-right"></i>');
                            }
                        }
                    }
                    )(this, data.to);
                break;
            }
        }

    },

    goHome : function()
    {
        return this.gotoSlide()
    },

    gotoSlide : function(x, p)
    {
        if (!arguments.length)
        {
            x = this.options.CLM_FIRST_SLIDE_NUMBER;
            p = this.options.CLM_ID;
        }

        if (
          /^https?:\/\//.test(x)
          || /\.(pdf|pptx?)$/i.test(x))
        {
            if (this.is_veeva()) document.location.href = x;
            else                 window.open(x);
        }
        else
        {
            var d = /^\d+(\.\d+)?$/.test(x),
                n = d ? sprintf('%0'+this.options.CLM_NUMBER_PAD+'d'+RegExp.$1,x) : x,
                c = p || this.options.CLM_ID,
                f = d ? (this.options.CLM_SLIDE_PREFIX+n) : n,
                v = this.is_veeva(),
                u = v
                  ? ("com.veeva.clm.gotoSlide('"+f+(/\.zip$/.test(f)?'':'.zip')+"','"+c+"')")
                  : ("document.location.href='"+f.replace(/\.zip$/,'')+".html'");

            if (
              !v
              && /([^\/]+)\/([^\/]+)\.html$/.test(document.location.href)
              && RegExp.$1 == RegExp.$2)
            {
                u = u.replace(/'(.+?)\.html'/, "'../$1/$1.html'")
            }

            eval(u)
        }

        return this
    },

    getDefaultOptions : function(k, iteratee)
    {
        return this.getOptions(
            k,
            true,
            iteratee
            );
    },

    getOptions : function(k, bDefaults, iteratee)
    {
        var prop = bDefaults
          ? 'default'
          : 'options';

        if (
          k
          && _.isFunction(k))
        {
            iteratee = k;
            k = null;
        }

        if (k)
        {
            if (
              typeof k === 'string'
              && _.has(this[prop], k))
            {
                var v = _.isFunction(this[prop][k])
                    ? this[prop][k]()
                    : this[prop][k];

                return _.isFunction(iteratee)
                  ? iteratee.call(this, v, k, this[prop])
                  : v;
            }
        }
        else
        {
            return _.isFunction(iteratee)
              ? _.mapObject(_.clone(this[prop]), iteratee, this)
              : _.clone(this[prop]);
        }

        return
    },

    is_veeva : function()
    {
        try {return /mobile\/containers\/data\/application/i.test(window.location.href)}
        catch (e) {return}
    },

    nextSlide : function(presentation)
    {
        var p_cur = $m.getPage(),
            p_max = this.options.CLM_LAST_SLIDE_NUMBER,
            p_nex = $m.__body.attr('data-next-page'),
            p_new,
            p_dec;

        if      ( /^\d+(\.\d+)?$/.test(p_nex)   ) p_new = p_nex;
        else if ( !/^(\d+)\.(\d+)$/.test(p_cur) ) p_new = Number(p_cur) + 1;
        else
        {
            p_dec = Number(RegExp.$2)+1;
            p_new = RegExp.$1+'.'+p_dec;
        }

        return this.gotoSlide(
            p_new < p_max
              ? p_new
              : p_max,
            presentation
            );
    },

    prevSlide : function(presentation)
    {
        var p_cur = $m.getPage(),
            p_min = this.options.CLM_FIRST_SLIDE_NUMBER,
            p_pre = $m.__body.attr('data-prev-page'),
            p_new,
            p_dec;

        if      ( /^\d+(\.\d+)?$/.test(p_pre)   ) p_new = p_pre;
        else if ( !/^(\d+)\.(\d+)$/.test(p_cur) ) p_new = Number(p_cur) - 1;
        else
        {
            p_dec = Number(RegExp.$2)-1;
            p_new = p_dec > p_min ? (RegExp.$1+'.'+p_dec) : RegExp.$1;
        }

        return this.gotoSlide(
            p_new < p_min
              ? p_min
              : p_new,
            presentation
            );
    },

    setOptions : function(obj, cb)
    {
        var options;

        if (!arguments.length) options = _.clone(this.default);
        else
        {
            if (_.isFunction(obj))
            {
                options = _.clone(this.default);
                cb = obj;
            }
            else
            {
                options = _.clone(
                    $m.isSimpleObj(obj)
                      ? obj
                      : this.default
                    );
            }
        }

        _.each(
            options,
            function(v, k)
            {
                if (_.has(this.options, k))
                {
                    this._onOptionChange(
                        k,
                        {
                            from : this.options[k],
                            to : v,
                        }
                        );

                    this.options[k] = v
                }
            },
            this
            );

        if (
          cb
          && _.isFunction(cb))
        {
            cb.call(this, options)
        }

        return this
    },
};
