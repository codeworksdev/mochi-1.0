/*!
 * Mochi Plugin - Dialog v1.0 (https://github.com/codeworksdev/mochi/tree/master/dist/frontend/js/plugins/dialog)
 * Copyright (c) 2014-2018 CODEWORKS <support@codeworksnyc.com>
 * Licensed under the MIT license
 */
$(document).ready(
    function(event)
    {
        $m.extend(
            'dialog',
            MochiPlugin__Dialog
            );
    }
    );

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

function MochiPlugin__Dialog()
{
    this._options();
    this._html();
    this._vars();
};

MochiPlugin__Dialog.prototype =
{
    _options : function()
    {
        this.options = {
            appendTo      : 'body',
            autoOpen      : true,
            buttons       : {OK : function(){$(this).dialog('close')}},
            classes       : {'ui-dialog': 'ui-corner-all mochi-plugin-dialog', 'ui-dialog-titlebar': 'ui-corner-all'},
            closeOnEscape : false,
            closeText     : 'close',
            draggable     : false,
            height        : 'auto',
            hide          : null,
            maxHeight     : false,
            maxWidth      : false,
            minHeight     : 150,
            minWidth      : 150,
            modal         : true,
            position      : {my : 'top', at : 'center top', of : window},
            resizable     : false,
            show          : null,
            title         : null,
            width         : (function(w){return w>670?640:(w-30)})($('body').width()),
            };
    },

    _html : function()
    {
        $m.__body.append(
              '<div data-mochi="plugin" id="mochi-plugin-dialog" title="Confirm">'
            + '</div>'
            );
    },

    _vars : function()
    {
        this.container = $('#mochi-plugin-dialog')
    },

    html : function(html, sel)
    {
        if (typeof html === 'string')
        {
            if (sel)
            {
                switch (typeof sel)
                {
                    case 'string':
                    this.container.find(sel).html(html);
                    break;
                }
            }
            else
            {
                this.container.html(html)
            }
        }

        return this
    },

    open : function(html, options, callback)
    {
        var config = _.extend(
            this.options,
            options || {}
            );

        this
          .container
          .html(html)
          .dialog(config);

        if (
          callback
          && _.isFunction(callback))
        {
            callback.call(this.container)
        }

        this
          .container
          .parent()
          .find('.ui-dialog-titlebar .ui-dialog-titlebar-close')
          .focus();

        (function(o)
        {
            var overlay = $('body > .ui-widget-overlay'),
                b = o.buttons;

            if (_.size(b) == 0)
            {
                overlay
                  .css({cursor : 'default'})
                  .on(
                    'click',
                    function() {
                        $m.dialog.container.dialog('close')
                        }
                    );
            }
        }
        )(config);

        return this
    }
};
