function mochi_before()
{
    this
      .log('hook: mochi_before.apply(Mochi, undefined)', true)
      .setOption('DEBUG_MODE', true);
};

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

function mochi_init           ()     { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_init',           undefined ]) } };
function mochi_load           (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_load',           data      ]) } };
function mochi_load_page      (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_load_page',      data      ]) } };
function mochi_load_page0     (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_load_page0',     data      ]) } };
function mochi_load_page1_5   (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_load_page1_5',   data      ]) } };
function mochi_load_page2     (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_load_page2',     data      ]) } };
function mochi_load_view      (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_load_view',      data      ]) } };
function mochi_load_view0     (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_load_view0',     data      ]) } };
function mochi_load_view1_5   (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_load_view1_5',   data      ]) } };
function mochi_load_view2     (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_load_view2',     data      ]) } };
function mochi_unload         (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_unload',         data      ]) } };
function mochi_unload_page    (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_unload_page',    data      ]) } };
function mochi_unload_page0   (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_unload_page0',   data      ]) } };
function mochi_unload_page1_5 (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_unload_page1_5', data      ]) } };
function mochi_unload_page2   (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_unload_page2',   data      ]) } };
function mochi_unload_view    (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_unload_view',    data      ]) } };
function mochi_unload_view0   (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_unload_view0',   data      ]) } };
function mochi_unload_view1_5 (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_unload_view1_5', data      ]) } };
function mochi_unload_view2   (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_unload_view2',   data      ]) } };
function mochi_last           ()     { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_last',           undefined ]) } };
function mochi_onchange       (data) { if (!this.getOption('DEBUG_MODE')) { console.log([ 'mochi_onchange',       data      ]) } };

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

function mochi_onmutation(mutation)
{
    switch (mutation.target.nodeName)
    {
        case 'HTML':
            try
            {
                $m.app.onChange()
            }
            catch(e) {}
        break;
    }
};

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

$(document).ready(
    function(event)
    {
        $m.extend(
            'app',
            MyMochiApplication,
            {},
            function() {
                if (this.onload) this.onload()
                }
            );
    }
    );

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

function MyMochiApplication(meta)
{
    this._vars();
    this._html();
    this._init();
};

MyMochiApplication.prototype =
{
    _vars : function()
    {
        this.code    = $m.__container.find('code');
        this.buttons = $m.__container.find('.btn');
    },

    _html: function()
    {
        var h = [
            '<strong>mochi_before</strong>.call(<i>instance</i> <strong>Mochi</strong>, <i>undefined</i>)',
            '<strong>mochi_init</strong>.call(<i>instance</i> <strong>Mochi</strong>, <i>undefined</i>)',
            '<strong>mochi_load</strong>.call(<i>instance</i> <strong>Mochi</strong>, <i>undefined</i>',
            '<strong>mochi_load_page</strong>.call(<i>instance</i> <strong>Mochi</strong>, <i>undefined</i>)',
            '<strong>mochi_load_page0</strong>.call(<i>instance</i> <strong>Mochi</strong>, <i>undefined</i>)',
            '<strong>mochi_load_view</strong>.call(<i>instance</i> <strong>Mochi</strong>, <i>undefined</i>)',
            '<strong>mochi_load_view0</strong>.call(<i>instance</i> <strong>Mochi</strong>, <i>undefined</i>)',
            '<strong>mochi_last</strong>.call(<i>instance</i> <strong>Mochi</strong>, <i>undefined</i>)',
            ];

        this.code.filter('.api').html(h.join('<br>'))
    },

    _init: function()
    {
        $m.onClick(
            this.buttons,
            function() {
                $m.app.toggle(this)
                }
            );
    },

    onChange : function()
    {
        var c = this.code.filter('.html'),
            p = $m.getPage(),
            v = $m.getView();

        c.find('.page').text(p);
        c.find('.view').text(v);

        return this
    },

    onload : function()
    {
        return this.onChange()
    },

    toggle : function(button)
    {
        var b = $(button),
            r = b.find('[type="radio"]'),
            s = /^toggle([a-z]+)$/i.exec(r.attr('name'))[1].toLowerCase(),
            n = r.val();

        this
          .code
          .filter('.api, .api-shorthand, .data')
          .text('n/a');

        $m.setState(
            s,
            n,
            function(data)
            {
                var a = [
                        data.stateName.toLowerCase(),
                        data.newStateNumber,
                        '<i>function</i> <strong>callback</strong>',
                        '<i>instance</i> <strong>Mochi</strong>',
                        '<i>object</i> <strong>response</strong>',
                        ],
                    h = {
                    standard : [
                        '$m.<strong>setState</strong>("'+a[0]+'", '+a[1]+'[, '+a[2]+'])',
                        '&#8627; $m.<strong>unload</strong>("'+a[0]+'", '+data.oldStateNumber+')',
                        '&nbsp;&nbsp;&#8627; <strong>mochi_unload</strong>.call('+a[3]+', '+a[4]+')',
                        '&nbsp;&nbsp;&#8627; <strong>mochi_unload_'+a[0]+'</strong>.call('+a[3]+', '+a[4]+')',
                        '&nbsp;&nbsp;&#8627; <strong>mochi_unload_'+a[0]+data.oldStateNumber.toString().replace(/\D/g,'_')+'</strong>.call('+a[3]+', '+a[4]+')',
                        '&nbsp;&nbsp;&#8627; <strong>mochi_onchange</strong>.call('+a[3]+', '+a[4]+')',
                        '&#8627; $m.<strong>load</strong>("'+a[0]+'", '+data.newStateNumber+')',
                        '&nbsp;&nbsp;&#8627; <strong>mochi_load</strong>.call('+a[3]+', '+a[4]+')',
                        '&nbsp;&nbsp;&#8627; <strong>mochi_load_'+a[0]+'</strong>.call('+a[3]+', '+a[4]+')',
                        '&nbsp;&nbsp;&#8627; <strong>mochi_load_'+a[0]+data.newStateNumber.toString().replace(/\D/g,'_')+'</strong>.call('+a[3]+', '+a[4]+')',
                        '&nbsp;&nbsp;&#8627; <strong>mochi_onchange</strong>.call('+a[3]+', '+a[4]+')',
                        ],
                    short : [
                        '$m.<strong>set'+window.s.capitalize(a[0])+'</strong>('+a[1]+'[, '+a[2]+'])',
                        '&#8627; $m.<strong>unload'+window.s.capitalize(a[0])+'</strong>('+data.oldStateNumber+')',
                        '&nbsp;&nbsp;&#8627; <strong>mochi_unload</strong>.call('+a[3]+', '+a[4]+')',
                        '&nbsp;&nbsp;&#8627; <strong>mochi_unload_'+a[0]+'</strong>.call('+a[3]+', '+a[4]+')',
                        '&nbsp;&nbsp;&#8627; <strong>mochi_unload_'+a[0]+data.oldStateNumber.toString().replace(/\D/g,'_')+'</strong>.call('+a[3]+', '+a[4]+')',
                        '&nbsp;&nbsp;&#8627; <strong>mochi_onchange</strong>.call('+a[3]+', '+a[4]+')',
                        '&#8627; $m.<strong>load'+window.s.capitalize(a[0])+'</strong>('+data.newStateNumber+')',
                        '&nbsp;&nbsp;&#8627; <strong>mochi_load</strong>.call('+a[3]+', '+a[4]+')',
                        '&nbsp;&nbsp;&#8627; <strong>mochi_load_'+a[0]+'</strong>.call('+a[3]+', '+a[4]+')',
                        '&nbsp;&nbsp;&#8627; <strong>mochi_load_'+a[0]+data.newStateNumber.toString().replace(/\D/g,'_')+'</strong>.call('+a[3]+', '+a[4]+')',
                        '&nbsp;&nbsp;&#8627; <strong>mochi_onchange</strong>.call('+a[3]+', '+a[4]+')',
                        ],
                    };

                $m.app.code.filter('.api').html(h.standard.join('<br>'));
                $m.app.code.filter('.api-shorthand').html(h.short.join('<br>'));
                $m.app.code.filter('.data').text(JSON.stringify(data));
            }
            );

        return this
    },
};
