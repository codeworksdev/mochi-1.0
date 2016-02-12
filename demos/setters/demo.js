$(document).ready(
    function(event)
    {
        $m.extend(
            'app',
            MyWebApplication,
            function() {
                this.onload()
                }
            );
    }
    );

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

function MyWebApplication()
{
    this._init();
};

MyWebApplication.prototype =
{
    _init : function()
    {
    },

    onload : function()
    {
        $('button[data-action]').each(
            function()
            {
                var e = $(this),
                    a = e.attr('data-action'),
                    c = 'eval("'+a+'")',
                    f = new Function(c);

                $m
                .onClick(e,new Function("console.log('"+c+"')"))
                .onClick(e.text(a),f);
            }
            );
    }
};
